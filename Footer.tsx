import { Waves, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-200">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ocean-500 to-transparent" />
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-ocean-700/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-ocean-gradient shadow-glow">
                <Waves className="h-5 w-5 text-white" strokeWidth={2.4} />
              </span>
              <span className="text-lg font-semibold text-white">
                Ocean<span className="text-teal-300">Sync</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              An AI ocean intelligence platform unifying oceanographic, fisheries, and molecular
              eDNA data to predict marine species decline risk — explainably.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  className="grid h-9 w-9 place-items-center rounded-xl border border-ink-700 bg-ink-900 text-ink-300 transition-all duration-300 hover:border-ocean-500 hover:text-teal-300"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-500">Platform</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ['Features', '#features'],
                ['How it works', '#how'],
                ['Live demo', '#demo'],
                ['Why OceanSync', '#value'],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="text-ink-400 transition-colors hover:text-teal-300">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-500">Team</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-400">
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-300 ring-1 ring-teal-500/30">
                  Smart India Hackathon 2026
                </span>
              </li>
              <li>Built by team <span className="font-semibold text-white">AI-Vengers</span></li>
              <li>Submission track: AI for Ocean Intelligence</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} OceanSync · Team AI-Vengers. Built for Smart India Hackathon 2026.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-700 px-4 py-2 text-xs font-semibold text-ink-300 transition-all duration-300 hover:border-ocean-500 hover:text-teal-300"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
