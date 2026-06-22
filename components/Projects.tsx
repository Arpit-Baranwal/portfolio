import { GithubIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "Spatial Risk Assessment for Gas Dispersion",
    description:
      "Data-driven spatial risk assessment of indoor R-290 gas dispersion using Kriging Regression and Monte Carlo Uncertainty Analysis. Achieved R²=0.81 across 10,000+ Monte Carlo iterations with full uncertainty quantification.",
    tags: ["Kriging", "Monte Carlo", "Python", "MATLAB", "Uncertainty Quantification"],
    highlight: "Published · IEA Heat Pumping TCP 2026",
  },
  {
    title: "RAG Knowledge System (Fraunhofer ISE)",
    description:
      "Deployed a Retrieval-Augmented Generation system indexing 1000+ internal technical documents across 3 research teams. Reduced manual information retrieval time by ~30% using vector search and LLM-based Q&A.",
    tags: ["RAG", "LLM", "Vector DB", "Python", "NLP"],
    highlight: "30% reduction in retrieval time",
  },
  {
    title: "EEG Signal Analysis (Vision Transformers)",
    description:
      "Applied Vision Transformer models to analyze EEG signals, enhancing feature extraction through attention mechanisms. Developed techniques to capture complex temporal and spatial patterns in neural data for improved classification.",
    tags: ["Vision Transformers", "PyTorch", "EEG", "Deep Learning", "Signal Processing"],
    github: "https://github.com/Arpit-Baranwal",
  },
  {
    title: "Probabilistic Surrogate Model (TabPFN)",
    description:
      "Trained a probabilistic surrogate model on ~500 simulation samples delivering uncertainty-aware predictions ~100× faster than full physical simulations. Integrated 30+ real-world sensor signals per physical setup.",
    tags: ["TabPFN", "Probabilistic ML", "Uncertainty", "Python", "Sensor Data"],
    highlight: "100× faster than physical simulation",
  },
  {
    title: "Healthcare ETL Pipeline",
    description:
      "Engineered 3+ ML-driven ETL pipelines processing 2M+ healthcare records monthly with built-in anomaly detection. Built automated OCR identity-verification eliminating manual review across 2+ business units.",
    tags: ["AWS Glue", "Lambda", "Terraform", "C# .Net", "OCR", "ETL"],
    highlight: "2M+ records/month",
  },
  {
    title: "Rocket Landing Control (MPC)",
    description:
      "Implemented a nonlinear MPC pipeline using CasADi to stabilize and land a rocket in simulation. Modeled system dynamics from first principles and validated performance through PyMunk physics simulation.",
    tags: ["MPC", "CasADi", "Python", "Control Systems", "PyMunk"],
    github: "https://github.com/Arpit-Baranwal",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Things I&apos;ve built</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 0.1} className="card p-6 flex flex-col gap-4 h-full">
              {p.highlight && (
                <span className="text-xs text-emerald-700 font-medium bg-emerald-100 border border-emerald-200 rounded-full px-3 py-1 w-fit">
                  {p.highlight}
                </span>
              )}
              <h3 className="text-base font-semibold text-[#0f172a] leading-snug">{p.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {p.github && (
                <div className="flex gap-3 pt-1">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64748b] hover:text-slate-900 transition-colors flex items-center gap-1 text-sm"
                  >
                    <GithubIcon size={15} /> GitHub
                  </a>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
