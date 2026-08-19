import {
  Layers,
  GitBranch,
  TrendingDown,
  FlaskConical,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  spec: string;
  accent: string;
}

const features: Feature[] = [
  {
    icon: Layers,
    title: 'Unified Data Layer',
    desc: 'Ingests oceanographic (SST, salinity, Chl-a), fisheries (CPUE, effort), and molecular eDNA (ASV tables, Shannon diversity) into one normalized, provenance-tracked schema.',
    spec: 'NetCDF · CSV · FASTA · Darwin Core',
    accent: 'from-ocean-500 to-ocean-700',
  },
  {
    icon: GitBranch,
    title: 'Cross-Domain Correlation',
    desc: 'Links thermal anomalies, catch pressure, and genetic diversity loss to surface decline drivers that single-domain analyses miss.',
    spec: 'Spearman · Granger causality · partial correlation',
    accent: 'from-teal-400 to-teal-600',
  },
  {
    icon: TrendingDown,
    title: 'Species Risk Prediction',
    desc: 'Forecasts decline-risk scores (0–100) with calibrated probabilities and 95% confidence intervals — not binary guesses.',
    spec: 'Gradient-boosted · isotonic calibration',
    accent: 'from-aqua-400 to-aqua-600',
  },
  {
    icon: FlaskConical,
    title: 'What-If Marine Simulator',
    desc: 'Perturb warming scenarios, fishing pressure, or pollution events and observe projected risk shift across the food web in real time.',
    spec: 'Counterfactual · SHAP-based response',
    accent: 'from-ocean-400 to-teal-500',
  },
  {
    icon: Lightbulb,
    title: 'AI Hypothesis Generator',
    desc: 'Proposes testable, falsifiable hypotheses from latent patterns — accelerating research direction, not replacing the scientist.',
    spec: 'LLM-grounded · citation-linked',
    accent: 'from-teal-500 to-aqua-500',
  },
  {
    icon: ShieldCheck,
    title: 'Explainable AI',
    desc: 'Every prediction ships with per-feature SHAP contributions, supporting evidence chips, and a calibrated confidence score. Fully auditable.',
    spec: 'SHAP · LIME · evidence logging',
    accent: 'from-aqua-500 to-ocean-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-ink-50/40 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-ocean-200 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ocean-600">Core capabilities</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            One platform, the full marine picture
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Six research-grade capabilities that turn fragmented ocean data into
            actionable, explainable intelligence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-ocean-200 hover:shadow-card-hover"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${f.accent} opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-25`} />
                <div className={`relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${f.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{f.title}</h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-600">{f.desc}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-ink-100 pt-4">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-400" />
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink-500">{f.spec}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
