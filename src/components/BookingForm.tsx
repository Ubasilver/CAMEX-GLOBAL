import { FormEvent, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const form = new FormData(event.currentTarget);
    const { error: insertError } = await supabase.from('nin_bookings').insert({
      full_name: form.get('full_name'), phone: form.get('phone'),
      nin_number: form.get('nin_number') || null, preferred_date: form.get('preferred_date'),
      service_type: form.get('service_type'), notes: form.get('notes') || null,
    });
    if (insertError) { setError('We could not send that request. Please call us directly.'); return; }
    setSubmitted(true);
    event.currentTarget.reset();
  }

  if (submitted) return <div className="border border-dark-line p-5 mt-8"><p className="text-cream font-bold">REQUEST RECEIVED</p><p className="text-cream text-sm mt-2 opacity-70">A Camex representative will contact you to confirm your preferred time.</p><button onClick={() => setSubmitted(false)} className="text-cream text-xs tracking-wide-sm uppercase mt-5 underline underline-offset-4">Submit another request</button></div>;

  return <form onSubmit={handleSubmit} className="mt-8 space-y-5">
    <div><label htmlFor="full_name" className="text-cream text-[10px] tracking-ultra uppercase opacity-60">Full name</label><input id="full_name" name="full_name" required className="monoline-input" placeholder="Your name" /></div>
    <div><label htmlFor="phone" className="text-cream text-[10px] tracking-ultra uppercase opacity-60">Phone / WhatsApp</label><input id="phone" name="phone" required className="monoline-input" placeholder="+234 ..." /></div>
    <div className="grid grid-cols-2 gap-5"><div><label htmlFor="nin_number" className="text-cream text-[10px] tracking-ultra uppercase opacity-60">NIN number</label><input id="nin_number" name="nin_number" className="monoline-input" placeholder="If available" /></div><div><label htmlFor="preferred_date" className="text-cream text-[10px] tracking-ultra uppercase opacity-60">Preferred date</label><input id="preferred_date" name="preferred_date" required type="date" className="monoline-input" /></div></div>
    <div><label htmlFor="service_type" className="text-cream text-[10px] tracking-ultra uppercase opacity-60">Request type</label><select id="service_type" name="service_type" className="monoline-select"><option>Enrollment tracking</option><option>Data correction</option><option>Fast-track scheduling</option></select></div>
    {error && <p className="text-red-300 text-xs">{error}</p>}
    <button type="submit" className="bg-cream text-olive w-full py-3 text-xs font-bold tracking-wide-sm uppercase flex items-center justify-center gap-2 hover:bg-white transition-colors">Request a slot <ArrowUpRight size={15} /></button>
  </form>;
}
