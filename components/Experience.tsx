import Reveal from "@/components/Reveal";

const jobs = [
  {
    title: "Independent Data Engineer & ML Developer",
    company: "Self-employed",
    period: "Apr 2026 – Present",
    tags: ["Databricks", "PySpark", "PowerBI", "NLP", "Forecasting"],
    bullets: [
      "Built end-to-end Databricks pipeline (Bronze → Silver → Gold) ingesting 3 data sources (POS, weather, operational) processing 6K+ monthly transactions.",
      "Engineered a KPI dashboard tracking 15+ metrics and a sentiment analysis pipeline across 200+ customer reviews.",
      "Developing a dish demand forecasting model across 30+ menu items using 12 months of historical order data and weather signals.",
    ],
  },
  {
    title: "Student Research Assistant",
    company: "Fraunhofer ISE, Freiburg",
    period: "Jun 2024 – Apr 2026",
    tags: ["TabPFN", "Kriging", "Monte Carlo", "RAG", "Python", "MATLAB"],
    bullets: [
      "Developed ML models for risk prediction and anomaly detection across 3+ physical system configurations integrating 30+ real-world sensor signals.",
      "Built a probabilistic surrogate model (TabPFN) trained on ~500 simulation samples delivering uncertainty-aware predictions ~100× faster than full physical simulations.",
      "Designed a Kriging-Monte Carlo prediction framework across 10,000+ iterations, achieving R²=0.81 through rigorous cross-validation.",
      "Deployed a RAG knowledge system indexing 1000+ internal technical documents across 3 research teams, reducing manual retrieval time by ~30%.",
    ],
  },
  {
    title: "Associate Cloud Intern",
    company: "RealWorldOne",
    period: "Sep 2023 – Feb 2024",
    tags: ["AWS", "IAM", "CI/CD", "ML Deployment"],
    bullets: [
      "Implemented secure, scalable ML infrastructure on AWS, contributing to model deployment workflows across dev and production environments.",
      "Designed IAM-based access control policies ensuring compliant, role-based data handling across the engineering team.",
      "Contributed to CI/CD pipelines improving deployment reliability and release consistency for ML services.",
    ],
  },
  {
    title: "AWS Python Developer",
    company: "Legato Health Technology",
    period: "Jun 2020 – May 2022",
    tags: ["C# .Net", "AWS Glue", "Lambda", "AppSync", "Terraform", "OCR"],
    bullets: [
      "Developed 5+ backend services and data processing APIs in C# .Net, building the foundational healthcare data layer feeding into ML pipelines.",
      "Engineered 3+ ML-driven ETL pipelines processing 2M+ healthcare records monthly with built-in anomaly detection.",
      "Built an automated OCR identity-verification system processing thousands of documents monthly, eliminating manual review across 2+ business units.",
      "Designed 4+ serverless ingestion architectures (AWS Glue, Lambda, AppSync) provisioned via Terraform across 3 environments.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-3">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Where I&apos;ve worked</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#e4e8f3] hidden md:block ml-[11px]" />

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <Reveal key={i} delay={i * 0.1} className="md:pl-10 relative">
                {/* Dot */}
                <div className="hidden md:block absolute left-0 top-6 w-[22px] h-[22px] rounded-full border-2 border-indigo-500 bg-[#eef1fb]" />

                <div className="card p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[#0f172a]">{job.title}</h3>
                      <p className="text-indigo-600 text-sm">{job.company}</p>
                    </div>
                    <span className="text-[#64748b] text-sm whitespace-nowrap">{job.period}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#475569]">
                        <span className="text-indigo-500 mt-1 flex-shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
