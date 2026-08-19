import { useState } from 'react';
import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Database,
  Droplets,
  Fish,
  Gauge,
  Microscope,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Waves,
  Cpu,
  GitMerge,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Evidence {
  label: string;
  weight: number;
  direction: 'risk' | 'protective';
  domain: 'ocean' | 'fish' | 'edna';
}

interface Species {
  name: string;
  latin: string;
  region: string;
  risk: number;
  ci: [number, number];
  confidence: number;
  trend: string;
  evidence: Evidence[];
}

const species: Species[] = [
  {
    name: 'Bombay Duck',
    latin: 'Harpadon nehereus',
    region: 'Arabian Sea · NW shelf',
    risk: 78,
    ci: [71, 84],
    confidence: 86,
    trend: '−14% biomass / 3 yr',
    evidence: [
      { label: 'SST anomaly +1.8 °C in spawning grounds', weight: 0.92, direction: 'risk', domain: 'ocean' },
      { label: 'eDNA Shannon diversity −31% vs baseline', weight: 0.84, direction: 'risk', domain: 'edna' },
      { label: 'Fishing effort +22% over 2 seasons', weight: 0.71, direction: 'risk', domain: 'fish' },
      { label: 'Dissolved O₂ within historical range', weight: 0.28, direction: 'protective', domain: 'ocean' },
    ],
  },
  {
    name: 'Indian Mackerel',
    latin: 'Rastrelliger kanagurta',
    region: 'SE Arabian Sea · upwelling zone',
    risk: 54,
    ci: [46, 61],
    confidence: 79,
    trend: '−7% biomass / 3 yr',
    evidence: [
      { label: 'Monsoon upwelling shifted 180 km north', weight: 0.76, direction: 'risk', domain: 'ocean' },
      { label: 'Juvenile bycatch ratio rising', weight: 0.64, direction: 'risk', domain: 'fish' },
      { label: 'Chl-a concentration above seasonal mean', weight: 0.42, direction: 'protective', domain: 'ocean' },
      { label: 'eDNA signal stable', weight: 0.38, direction: 'protective', domain: 'edna' },
    ],
  },
  {
    name: 'Hilsa Shad',
    latin: 'Tenualosa ilisha',
    region: 'Bay of Bengal · estuarine',
    risk: 41,
    ci: [33, 49],
    confidence: 72,
    trend: 'stable',
    evidence: [
      { label: 'Riverine salinity within tolerance band', weight: 0.44, direction: 'protective', domain: 'ocean' },
      { label: 'Catch logs show seasonal recovery', weight: 0.52, direction: 'protective', domain: 'fish' },
      { label: 'eDNA diversity steady', weight: 0.40, direction: 'protective', domain: 'edna' },
      { label: 'SST +0.6 °C (marginal)', weight: 0.31, direction: 'risk', domain: 'ocean' },
    ],
  },
];

const dataLayers = [
  { icon: Waves, label: 'Oceanographic', count: '1.2M pts', color: 'text-ocean-600' },
  { icon: Fish, label: 'Fisheries', count: '340K logs', color: 'text-teal-600' },
  { icon: Microscope, label: 'Molecular eDNA', count: '58K seqs', color: 'text-aqua-600' },
];

const modelMeta = [
  { icon: Cpu, label: 'Model', value: 'XGBoost · 480 trees' },
  { icon: GitMerge, label: 'Calibration', value: 'Isotonic · 5-fold CV' },
  { icon: Database, label: 'Training window', value: '2012 – 2024' },
];

function riskColor(risk: number) {
  if (risk >= 70) return { text: 'text-red-600', bg: 'bg-red-500', ring: 'ring-red-200', label: 'High risk', chip: 'bg-red-50 text-red-700 ring-red-200' };
  if (risk >= 50) return { text: 'text-amber-600', bg: 'bg-amber-500', ring: 'ring-amber-200', label: 'Moderate', chip: 'bg-amber-50 text-amber-700 ring-amber-200' };
  return { text: 'text-emerald-600', bg: 'bg-emerald-500', ring: 'ring-emerald-200', label: 'Stable', chip: 'bg-emerald-50 text-emerald-700 ring-emerald-200' };
}

const domainIcon: Record<Evidence['domain'], LucideIcon> = {
  ocean: Waves,
  fish: Fish,
  edna: Microscope,
};
const domainColor: Record<Evidence['domain'], string> = {
  ocean: 'text-ocean-500',
  fish: 'text-teal-500',
  edna: 'text-aqua-500',
};

export default function DemoMockup() {
  const [active, setActive] = useState(0);
  const s = species[active];
  const rc = riskColor(s.risk);

  return (
    <section id="demo" className="relative overflow-hidden bg-ink-50/50 py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-32 h-80 w-80 rounded-full bg-ocean-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ocean-600">Risk Explorer · preview</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            A prediction, with its full evidence
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            An interactive mockup of the OceanSync dashboard. Switch species to watch the
            risk score, confidence interval, and SHAP-style contributions update together.
          </p>
        </div>

        <div className="reveal mt-14 overflow-hidden rounded-[28px] border border-ink-200 bg-white shadow-card-hover">
          {/* window chrome */}
          <div className="flex items-center gap-2 border-b border-ink-200 bg-ink-50/80 px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <div className="ml-3 flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs text-ink-500 ring-1 ring-ink-200">
              <ShieldCheck className="h-3.5 w-3.5 text-ocean-500" />
              oceansync.ai / risk-explorer
            </div>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-aqua-50 px-2.5 py-1 text-[11px] font-semibold text-aqua-700 ring-1 ring-aqua-200">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-aqua-500" />
              Simulated preview
            </span>
          </div>

          <div className="grid gap-px bg-ink-200 lg:grid-cols-[280px_1fr]">
            {/* sidebar */}
            <aside className="bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-ink-400">Data layers</p>
              <ul className="mt-3 space-y-2">
                {dataLayers.map((d) => {
                  const Icon = d.icon;
                  return (
                    <li key={d.label} className="flex items-center gap-3 rounded-xl border border-ink-200 bg-ink-50/50 px-3 py-2.5">
                      <Icon className={`h-5 w-5 ${d.color}`} />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-ink-800">{d.label}</p>
                        <p className="font-mono text-[11px] text-ink-400">{d.count}</p>
                      </div>
                      <CheckCircle2 className="ml-auto h-4 w-4 text-emerald-500" />
                    </li>
                  );
                })}
              </ul>

              <p className="mt-6 text-xs font-bold uppercase tracking-wider text-ink-400">Species under study</p>
              <ul className="mt-3 space-y-2">
                {species.map((sp, i) => {
                  const r = riskColor(sp.risk);
                  return (
                    <li key={sp.name}>
                      <button
                        onClick={() => setActive(i)}
                        className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-200 ${
                          i === active
                            ? 'border-ocean-300 bg-ocean-50 shadow-sm'
                            : 'border-ink-200 bg-white hover:border-ocean-200 hover:bg-ocean-50/50'
                        }`}
                      >
                        <Fish className={`h-5 w-5 ${i === active ? 'text-ocean-600' : 'text-ink-400'}`} />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-ink-800">{sp.name}</p>
                          <p className="truncate text-[11px] italic text-ink-400">{sp.latin}</p>
                        </div>
                        <span className={`ml-auto rounded-md px-1.5 py-0.5 text-xs font-bold ${r.chip}`}>{sp.risk}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 rounded-xl bg-gradient-to-br from-ocean-50 to-teal-50 p-3.5 ring-1 ring-ocean-200">
                <p className="flex items-center gap-1.5 text-xs font-bold text-ocean-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Next data to collect
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-600">
                  Sample eDNA at 3 spawning sites during peak SST. Expected confidence gain:
                  <span className="font-semibold text-ocean-700"> +9%</span> (to 95%).
                </p>
              </div>
            </aside>

            {/* main panel */}
            <div className="bg-white p-6 sm:p-8">
              {/* header row */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-ocean-50 text-ocean-600 ring-1 ring-ocean-200">
                    <Fish className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900">{s.name}</h3>
                    <p className="text-sm italic text-ink-400">{s.latin}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-500 ring-1 ring-ink-200">
                    <TrendingDown className="h-3.5 w-3.5" />
                    {s.trend}
                  </span>
                  <span className="font-mono text-[11px] text-ink-400">{s.region}</span>
                </div>
              </div>

              {/* risk + confidence gauges */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className={`rounded-2xl p-5 ring-1 ${rc.ring} bg-white`}>
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-1.5 text-sm font-semibold text-ink-600">
                      <AlertTriangle className="h-4 w-4" />
                      Decline-risk score
                    </p>
                    <span className={`rounded-md px-2 py-0.5 text-xs font-bold ${rc.chip}`}>{rc.label}</span>
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    <span className={`font-display text-5xl font-bold leading-none ${rc.text}`}>{s.risk}</span>
                    <span className="mb-1 text-sm font-medium text-ink-400">/ 100</span>
                  </div>
                  <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-ink-100">
                    <div
                      className={`h-full rounded-full ${rc.bg} transition-all duration-700`}
                      style={{ width: `${s.risk}%` }}
                    />
                  </div>
                  <p className="mt-2.5 font-mono text-[11px] text-ink-400">
                    95% CI: [{s.ci[0]}, {s.ci[1]}]
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 ring-1 ring-ocean-200">
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-1.5 text-sm font-semibold text-ink-600">
                      <Gauge className="h-4 w-4" />
                      Model confidence
                    </p>
                    <span className="text-xs font-bold text-ocean-600">{s.confidence}%</span>
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="font-display text-5xl font-bold leading-none text-ocean-700">{s.confidence}</span>
                    <span className="mb-1 text-sm font-medium text-ink-400">% calibrated</span>
                  </div>
                  <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-ink-100">
                    <div
                      className="h-full rounded-full bg-ocean-gradient transition-all duration-700"
                      style={{ width: `${s.confidence}%` }}
                    />
                  </div>
                  <p className="mt-2.5 font-mono text-[11px] text-ink-400">isotonic · 5-fold CV</p>
                </div>
              </div>

              {/* SHAP-style feature contributions */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-ink-700">
                    <ShieldCheck className="h-4 w-4 text-ocean-600" />
                    Feature contributions
                    <span className="ml-1 text-xs font-normal text-ink-400">— SHAP-style, why the model says this</span>
                  </p>
                  <div className="hidden items-center gap-3 text-[10px] font-medium uppercase tracking-wider text-ink-400 sm:flex">
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-400" /> risk</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-400" /> protective</span>
                  </div>
                </div>
                <div className="mt-3 space-y-2.5">
                  {s.evidence.map((e) => {
                    const DIcon = domainIcon[e.domain];
                    const isRisk = e.direction === 'risk';
                    return (
                      <div
                        key={e.label}
                        className="flex items-center gap-3 rounded-xl border border-ink-200 bg-ink-50/40 px-4 py-3 transition-colors hover:bg-ocean-50/50"
                      >
                        <DIcon className={`h-4 w-4 shrink-0 ${domainColor[e.domain]}`} />
                        <span className="flex-1 text-sm text-ink-700">{e.label}</span>
                        <div className="hidden h-2 w-28 overflow-hidden rounded-full bg-ink-100 sm:block">
                          <div
                            className={`h-full rounded-full ${isRisk ? 'bg-red-400' : 'bg-emerald-400'}`}
                            style={{ width: `${e.weight * 100}%` }}
                          />
                        </div>
                        <span className={`w-10 text-right font-mono text-xs font-bold ${isRisk ? 'text-red-600' : 'text-emerald-600'}`}>
                          {isRisk ? '+' : '−'}
                          {(e.weight * 100).toFixed(0)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* model metadata */}
              <div className="mt-6 rounded-2xl border border-ink-200 bg-ink-50/50 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400">Model metadata</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {modelMeta.map((m) => {
                    const Icon = m.icon;
                    return (
                      <div key={m.label} className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4 shrink-0 text-ocean-500" />
                        <div className="min-w-0">
                          <p className="text-[10px] uppercase tracking-wider text-ink-400">{m.label}</p>
                          <p className="truncate font-mono text-xs font-medium text-ink-700">{m.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* mini stat row */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { icon: Database, label: 'Sources', value: '14' },
                  { icon: Activity, label: 'Correlations', value: '37' },
                  { icon: BarChart3, label: 'Years modeled', value: '12' },
                ].map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.label} className="rounded-xl border border-ink-200 bg-white p-3.5 text-center">
                      <Icon className="mx-auto h-5 w-5 text-ocean-500" />
                      <p className="mt-1.5 text-lg font-bold text-ink-900">{m.value}</p>
                      <p className="text-[11px] uppercase tracking-wider text-ink-400">{m.label}</p>
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 flex items-center gap-1.5 text-xs text-ink-400">
                <Droplets className="h-3.5 w-3.5 text-teal-500" />
                Predictions are explainable by design — every score traces back to weighted, domain-tagged evidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
