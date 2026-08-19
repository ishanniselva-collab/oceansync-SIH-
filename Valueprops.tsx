import { Boxes, Scale, Compass, Layers3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Prop {
  icon: LucideIcon;
  title: string;
  desc: string;
  spec: string;
}

const props: Prop[] = [
  {
    icon: Boxes,
    title: 'Four domains at once',
    desc: 'Oceanography, fisheries, molecular eDNA, and climate — modeled together in a single multi-modal pipeline, not reconciled across four separate reports.',
    spec: 'Multi-modal · cross-domain features',
  },
  {
    icon: Scale,
    title: 'Built-in conflict resolution',
    desc: 'When datasets disagree, OceanSync reconciles conflicting signals and logs which source it weighted higher and why — so researchers can audit the decision.',
    spec: 'Provenance-weighted · auditable',
  },
  {
    icon: Compass,
    title: 'Recommends next data to collect',
    desc: 'The model quantifies the expected confidence gain from each candidate sample — guiding fieldwork budgets toward the highest-value data.',
    spec: 'Expected information gain',
  },
  {
    icon: Layers3,
    title: 'Explainable by design',
    desc: 'No black-box verdicts. Every risk score ships with SHAP feature contributions, domain-tagged evidence, and a calibrated 95% confidence interval.',
    spec: 'SHAP · 95% CI · evidence log',
  },
];

export default function ValueProps() {
  return (
    <section id="value" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-aqua-100/50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ocean-600">Why OceanSync</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Built for scientific trust
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Not another dashboard. A research-grade intelligence layer where every
            prediction is defensible and reproducible.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {props.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="reveal group relative flex gap-5 rounded-3xl border border-ink-200 bg-gradient-to-br from-white to-ink-50/40 p-7 transition-all duration-300 hover:border-ocean-200 hover:shadow-card-hover sm:p-8"
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ocean-gradient text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-7 w-7" strokeWidth={1.9} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{p.desc}</p>
                  <p className="mt-3 inline-block rounded-md bg-ink-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-500 ring-1 ring-ink-200">
                    {p.spec}
                  </p>
                </div>
                <span className="absolute right-7 top-7 font-display text-5xl font-bold text-ink-100 transition-colors duration-300 group-hover:text-ocean-100">
                  0{i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
