import { ArrowRight, Sparkles, Waves } from 'lucide-react';
import AmbientBubbleField from './AmbientBubbleField';

const stats = [
  { value: '4', label: 'Data domains unified' },
  { value: '12 yr', label: 'Temporal coverage' },
  { value: '95% CI', label: 'Calibrated confidence' },
  { value: 'SHAP', label: 'Per-feature attribution' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ocean-soft">
      {/* gradient blobs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-ocean-200/50 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-aqua-200/40 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />

      {/* ambient bubble field */}
      <AmbientBubbleField />

      {/* bottom wave divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 w-[200%] h-24 animate-wave-move text-white">
          <path d="M0,64 C240,112 480,16 720,48 C960,80 1200,128 1440,64 L1440,120 L0,120 Z" fill="currentColor" />
          <path d="M0,64 C240,112 480,16 720,48 C960,80 1200,128 1440,64 L1440,120 L0,120 Z" fill="currentColor" transform="translate(1440 0)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-36 sm:px-8 sm:pt-44 lg:pt-48">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal is-visible mx-auto inline-flex items-center gap-2 rounded-full border border-ocean-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-ocean-700 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Smart India Hackathon 2026 · Team AI-Vengers
          </div>

          <h1 className="mt-7 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink-950 sm:text-6xl lg:text-7xl">
            <span className="text-gradient-ocean">OceanSync</span>
            <span className="block mt-2 text-ink-900">AI-driven marine species risk prediction</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl">
            An ocean intelligence platform that unifies oceanographic, fisheries, and molecular
            eDNA data — then predicts species decline risk with explainable AI. Every forecast
            shows its evidence, SHAP contributions, and a calibrated confidence interval. No black box.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-full bg-ocean-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-card-hover"
            >
              Explore the risk explorer
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-ink-700 backdrop-blur transition-all duration-300 hover:border-ocean-300 hover:text-ocean-700"
            >
              <Waves className="h-4 w-4" />
              How it works
            </a>
          </div>

        </div>

        {/* credibility stats band */}
        <div className="reveal mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 shadow-card sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/90 px-5 py-5 text-center backdrop-blur">
              <p className="font-display text-2xl font-bold text-ocean-700">{s.value}</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-ink-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
