import { useState, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';

export function OrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const form = new FormData(e.currentTarget);
    const { error: insertError } = await supabase.from('nin_bookings').insert({
      full_name: form.get('full_name'),
      phone: form.get('phone'),
      nin_number: form.get('nin_number') || null,
      preferred_date: form.get('preferred_date'),
      service_type: form.get('service_type'),
      notes: form.get('notes') || null,
    });
    if (insertError) {
      setError('We could not send that request. Please call us directly.');
      return;
    }
    setSubmitted(true);
    e.currentTarget.reset();
  }

  if (submitted) {
    return (
      <div className="order-success">
        <h3>Request Received</h3>
        <p>A Camex representative will contact you shortly to confirm your appointment.</p>
        <button onClick={() => setSubmitted(false)} className="link-btn">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <div className="form-row">
        <label htmlFor="full_name">Full Name</label>
        <input id="full_name" name="full_name" required placeholder="Enter your full name" />
      </div>
      <div className="form-row">
        <label htmlFor="phone">Phone / WhatsApp</label>
        <input id="phone" name="phone" required placeholder="+234 ..." />
      </div>
      <div className="form-row-pair">
        <div className="form-row">
          <label htmlFor="nin_number">NIN Number</label>
          <input id="nin_number" name="nin_number" placeholder="If available" />
        </div>
        <div className="form-row">
          <label htmlFor="preferred_date">Preferred Date</label>
          <input id="preferred_date" name="preferred_date" required type="date" />
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="service_type">Service Requested</label>
        <select id="service_type" name="service_type" defaultValue="Enrollment tracking">
          <option>Enrollment tracking</option>
          <option>Data correction</option>
          <option>Fast-track scheduling</option>
          <option>Premium printing</option>
          <option>Document processing</option>
          <option>Secure network terminal</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="notes">Additional Notes</label>
        <textarea id="notes" name="notes" rows={3} placeholder="Tell us what you need" />
      </div>
      {error && <p className="form-error">{error}</p>}
      <button type="submit" className="submit-btn">Submit Request</button>
    </form>
  );
}
