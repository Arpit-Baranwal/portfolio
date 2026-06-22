
const pubs = [
  {
    title: "Data-Driven Spatial Risk Assessment of Indoor Gas Dispersion using Kriging Regression and Monte Carlo Uncertainty Analysis",
    venue: "IEA Heat Pumping Technologies TCP – Project 64 Annual Report 2026",
    year: "2026",
    type: "Journal / Report",
    status: "In Press (Master Thesis)",
    color: "indigo",
  },
  {
    title: "A Diagnostic Framework for CFD Validation of R-290 Dispersion in an Indoor Heat Pump Installation Room",
    venue: "IIR Gustav Lorentzen Conference on Natural Refrigerants (GL2026), Hamilton, New Zealand",
    year: "Aug 2026",
    type: "Conference Paper",
    status: "Submitted",
    color: "purple",
  },
  {
    title: "Ensemble Method of Feature Selection using Filter and Wrapper Techniques with Evolutionary Learning",
    venue: "Springer Nature",
    year: "Apr 2022",
    type: "Journal Paper",
    status: "Published",
    color: "emerald",
  },
  {
    title: "Chewing Sound Interpretation by Deep Learning",
    venue: "Cosima Conference, Dresden",
    year: "2023",
    type: "Conference Proceeding",
    status: "Published",
    note: "End-to-end AI-based signal processing pipeline for healthcare diagnostics using sensor-equipped eyewear.",
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-400/10 border-indigo-400/20 text-indigo-400",
  purple: "bg-purple-400/10 border-purple-400/20 text-purple-400",
  emerald: "bg-emerald-400/10 border-emerald-400/20 text-emerald-400",
  amber: "bg-amber-400/10 border-amber-400/20 text-amber-400",
};

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-3">Publications</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Research work</h2>

        <div className="space-y-5">
          {pubs.map((p, i) => (
            <div key={i} className="card p-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-shrink-0 sm:w-16 text-center">
                <span className="text-[#64748b] text-sm">{p.year}</span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className={`text-xs font-medium border rounded-full px-3 py-0.5 ${colorMap[p.color]}`}>
                    {p.type}
                  </span>
                  <span className="text-xs text-[#64748b]">{p.status}</span>
                </div>
                <h3 className="text-sm font-semibold text-white leading-snug">{p.title}</h3>
                <p className="text-xs text-indigo-400">{p.venue}</p>
                {p.note && <p className="text-xs text-[#64748b]">{p.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
