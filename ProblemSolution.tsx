import { Database, ArrowRight, Layers, Brain, FileWarning, Lightbulb } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Item {
  icon: LucideIcon;
  text: string;
}

const before: Item[] = [
  { icon: Database, text: 'Oceanographic (NetCDF), fisheries (CSV/Darwin Core), and eDNA (FASTA/ASV) data live in incompatible silos' },
  { icon: FileWarning, text: 'Manual correlation across spreadsheets, PDFs, and mismatched taxonomies — slow and irreproducible' },
  { icon: FileWarning, text: 'Risk conclusions are opaque — no per-feature attribution, no reproducible evidence trail' },
  { icon: FileWarning, text: 'No way to ask "which sampling would most improve my confidence?"' },
];

const after: Item[] = [
  { icon: Layers, text: 'One normalized, provenance-tracked layer ingests ocean, fisheries, and molecular eDNA together' },
  { icon: Brain, text: 'Cross-domain correlation engine surfaces decline drivers (SST × CPUE × Shannon diversity) humans would miss' },
  { icon: Brain, text: 'Every prediction ships with SHAP contributions, evidence chips, and a calibrated 95% confidence interval' },
  { icon: Lightbulb, text: 'Recommends the next highest-value data to collect — guiding fieldwork budgets with expected confidence gain' },
];

export default function ProblemSolution() {
  return (
    <section id="problem" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-ocean-100/60 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ocean-600">The research gap</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Fragmented ocean data, no unified intelligence
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Marine datasets span three incompatible domains. Researchers stitch them by hand and
            miss the cross-domain signals that actually predict decline.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-2">
          {/* Before */}
          <div className="reveal relative rounded-3xl border border-ink-200 bg-ink-50/60 p-8 sm:p-10">
            <div className="absolute -top-3 left-8 rounded-full bg-ink-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink-600">
              Before · status quo
            </div>
            <ul className="mt-4 space-y-5">
              {before.map((b) => {
                const Icon = b.icon;
                return (
                  <li key={b.text} className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ink-200/70 text-ink-500">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="pt-1 text-[15px] leading-relaxed text-ink-600">{b.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* After */}
          <div className="reveal relative overflow-hidden rounded-3xl border border-ocean-200 bg-gradient-to-br from-ocean-50 via-white to-teal-50 p-8 shadow-card sm:p-10">
            <div className="absolute -top-3 left-8 rounded-full bg-ocean-gradient px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-glow">
              After · OceanSync
            </div>
            <ul className="mt-4 space-y-5">
              {after.map((a) => {
                const Icon = a.icon;
                return (
                  <li key={a.text} className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ocean-100 text-ocean-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="pt-1 text-[15px] leading-relaxed text-ink-800">{a.text}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 flex items-center gap-2 rounded-xl bg-white/70 px-4 py-3 text-sm font-semibold text-ocean-700 ring-1 ring-ocean-200">
              <Layers className="h-4 w-4" />
              From scattered spreadsheets to a single, defensible forecast
              <ArrowRight className="ml-auto h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
