import { Database, GitMerge, TrendingDown, ShieldCheck, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
  detail: string;
}

const steps: Step[] = [
  {
    icon: Database,
    title: 'Data Ingestion',
    desc: 'Oceanographic (NetCDF), fisheries (CSV/Darwin Core), and eDNA (FASTA/ASV) streams flow into one normalized, provenance-tracked schema with automated QC.',
    detail: 'ETL · schema mapping · outlier flagging',
  },
  {
    icon: GitMerge,
    title: 'Correlation Engine',
    desc: 'Cross-domain signals — SST anomalies, catch effort, Shannon diversity — are linked to surface hidden decline drivers.',
    detail: 'Spearman · Granger · partial correlation',
  },
  {
    icon: TrendingDown,
    title: 'Risk Model',
    desc: 'A calibrated gradient-boosted model forecasts decline-risk scores (0–100) with 95% confidence intervals, not opaque verdicts.',
    detail: 'GBM · isotonic calibration',
  },
  {
    icon: ShieldCheck,
    title: 'Explainable Output',
    desc: 'Each prediction returns SHAP feature contributions, evidence chips, and a confidence score — fully auditable and reproducible.',
    detail: 'SHAP · LIME · evidence log',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ocean-600">Methodology</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            From raw ocean data to a defensible forecast
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Four reproducible stages turn scattered datasets into a risk prediction
            a researcher can cite.
          </p>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-0.5 bg-gradient-to-r from-ocean-200 via-teal-300 to-aqua-300 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="reveal relative" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="relative z-10 mx-auto grid h-20 w-20 place-items-center">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl border border-ocean-200 bg-white text-ocean-700 shadow-card transition-all duration-300 hover:scale-105 hover:bg-ocean-50">
                      <Icon className="h-7 w-7" strokeWidth={1.9} />
                    </div>
                    <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-ocean-gradient text-xs font-bold text-white shadow-glow">
                      {i + 1}
                    </span>
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-base font-semibold text-ink-900">{s.title}</h3>
                    <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-600">{s.desc}</p>
                    <p className="mx-auto mt-3 inline-block rounded-md bg-ink-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-500 ring-1 ring-ink-200">
                      {s.detail}
                    </p>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="mx-auto mt-4 hidden h-5 w-5 text-ocean-300 lg:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
