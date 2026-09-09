/*
# Create nin_bookings table (single-tenant, no auth)

1. New Tables
- `nin_bookings`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — client's full name
  - `phone` (text, not null) — contact phone number
  - `nin_number` (text, nullable) — existing NIN if applicable
  - `preferred_date` (date, not null) — requested appointment date
  - `service_type` (text, not null) — enrollment tracking, data correction, or fast-track scheduling
  - `notes` (text, nullable) — optional additional details
  - `status` (text, default 'pending') — booking status
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `nin_bookings`.
- Allow anon + authenticated INSERT only (public can submit bookings, cannot read/update/delete).
- No SELECT/UPDATE/DELETE policies for anon — bookings are private to operators.
*/

CREATE TABLE IF NOT EXISTS nin_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  nin_number text,
  preferred_date date NOT NULL,
  service_type text NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE nin_bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_bookings" ON nin_bookings;
CREATE POLICY "anon_insert_bookings" ON nin_bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);
