import { MapPin, Clock } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full border-b border-olive">
      <div className="flex flex-col md:flex-row">
        <div className="bg-cream flex-1 px-6 py-5 md:px-10 flex items-center justify-between border-b md:border-b-0 md:border-r border-olive">
          <h1 className="text-olive text-2xl md:text-3xl font-bold tracking-wide-sm">
            CAMEX GLOBAL
          </h1>
          <span className="text-olive text-xs tracking-ultra uppercase opacity-60 hidden md:block">
            Est. 2018
          </span>
        </div>
        <div className="bg-olive flex-1 px-6 py-5 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-cream text-xs tracking-wide-sm uppercase">
            <MapPin size={14} />
            <span>14 Allen Avenue, Ikeja, Lagos</span>
          </div>
          <div className="flex items-center gap-2 text-cream text-xs tracking-wide-sm uppercase">
            <Clock size={14} />
            <span>Mon–Sat · 08:00–18:00 WAT</span>
          </div>
        </div>
      </div>
    </header>
  );
}
