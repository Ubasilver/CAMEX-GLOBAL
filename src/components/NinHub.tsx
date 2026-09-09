import { ShieldCheck, ArrowDown } from 'lucide-react';
import { BookingForm } from './BookingForm';

export function NinHub() {
  return <section className="bg-olive text-cream p-6 md:p-10 lg:p-14">
    <div className="flex items-center justify-between border-b border-dark-line pb-4"><p className="text-xs tracking-ultra uppercase opacity-60">01 / Priority hub</p><ShieldCheck size={19} /></div>
    <div className="pt-10 md:pt-16"><p className="text-sm tracking-wide-sm uppercase opacity-70">National Identification Number</p><h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.06em] leading-[0.9] mt-3">NIN<br /><span className="opacity-50">SUPPORT</span></h2><p className="mt-6 text-sm leading-6 max-w-sm opacity-75">Move through registration, correction, and verification with a team that understands the process.</p></div>
    <div className="mt-12 border-t border-dark-line pt-5"><div className="grid grid-cols-3 gap-3 text-[10px] tracking-wide-sm uppercase opacity-75"><span>01<br /><b className="text-cream">Track</b></span><span>02<br /><b className="text-cream">Correct</b></span><span>03<br /><b className="text-cream">Schedule</b></span></div></div>
    <div className="mt-12"><div className="flex items-center gap-3"><h3 className="text-xs tracking-ultra uppercase">Schedule assistance</h3><ArrowDown size={14} /></div><BookingForm /></div>
    <p className="text-[10px] tracking-wide-sm uppercase opacity-40 mt-8">Bring a valid phone number and supporting documents.</p>
  </section>;
}
