import { useEffect, useState } from 'react';
import { Waves, Menu, X } from 'lucide-react';

const links = [
  { label: 'Problem', href: '#problem' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Demo', href: '#demo' },
  { label: 'Why us', href: '#value' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-ink-200/60 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ocean-gradient shadow-glow transition-transform duration-300 group-hover:scale-105">
            <Waves className="h-5 w-5 text-white" strokeWidth={2.4} />
          </span>
          <span className="text-lg font-semibold tracking-tight text-ink-900">
            Ocean<span className="text-gradient-ocean">Sync</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-ink-600 transition-colors hover:text-ocean-700 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-ocean-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#demo"
            className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:bg-ocean-700 hover:shadow-glow"
          >
            See live demo
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl text-ink-700 transition-colors hover:bg-ink-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-ink-200/60 md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-ocean-50 hover:text-ocean-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-ink-900 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                See live demo
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
