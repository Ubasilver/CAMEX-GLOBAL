import { Printer, FileText, Wifi, ArrowUpRight } from 'lucide-react';

export function ExpressServices() {
  return <section className="bg-cream text-olive p-6 md:p-10 lg:p-14">
    <div className="flex items-center justify-between border-b border-light-line pb-4"><p className="text-xs tracking-ultra uppercase opacity-50">02 / Express infrastructure</p><ArrowUpRight size={19} /></div>
    <div className="pt-10 md:pt-16"><p className="text-sm tracking-wide-sm uppercase opacity-60">Digital services, without the wait</p><h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.06em] leading-[0.9] mt-3">EXPRESS<br /><span className="opacity-40">DESK</span></h2><p className="mt-6 text-sm leading-6 max-w-sm opacity-70">A secure, high-speed workspace for the documents and digital tasks that keep life moving.</p></div>
    <div className="mt-12 border-t border-light-line">
      <article className="grid grid-cols-[40px_1fr] gap-4 py-6 border-b border-light-line"><span className="text-xs opacity-50">01</span><div><Printer size={20} strokeWidth={1.5} /><h3 className="font-bold text-lg mt-4">Premium printing</h3><p className="text-sm opacity-60 mt-2 max-w-xs">Sharp colour, official documents, ID slip reprints, and high-resolution output.</p><p className="text-[10px] tracking-wide-sm uppercase mt-4 opacity-45">A4 / A3 · Colour / Mono · Same-day</p></div></article>
      <article className="grid grid-cols-[40px_1fr] gap-4 py-6 border-b border-light-line"><span className="text-xs opacity-50">02</span><div><FileText size={20} strokeWidth={1.5} /><h3 className="font-bold text-lg mt-4">Document processing</h3><p className="text-sm opacity-60 mt-2 max-w-xs">Scanning, conversion, form completion, and secure digital delivery.</p><p className="text-[10px] tracking-wide-sm uppercase mt-4 opacity-45">PDF / JPEG · Scan to email · Fast turnaround</p></div></article>
      <article className="grid grid-cols-[40px_1fr] gap-4 py-6 border-b border-light-line"><span className="text-xs opacity-50">03</span><div><Wifi size={20} strokeWidth={1.5} /><h3 className="font-bold text-lg mt-4">Secure network terminals</h3><p className="text-sm opacity-60 mt-2 max-w-xs">Private workstations and reliable connections for sensitive online tasks.</p><p className="text-[10px] tracking-wide-sm uppercase mt-4 opacity-45">Private booths · Secure browsing · Assisted access</p></div></article>
    </div>
    <div className="flex items-center justify-between mt-8"><p className="text-[10px] tracking-wide-sm uppercase opacity-45">Walk-ins welcome</p><p className="text-[10px] tracking-wide-sm uppercase opacity-45">Ikeja · Lagos</p></div>
  </section>;
}
