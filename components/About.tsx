import Reveal from "@/components/Reveal";

export default function About() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "3", label: "Publications" },
    { value: "2M+", label: "Records Processed" },
    { value: "R²=0.81", label: "Best Model Score" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-3">About</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Who I am</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-[#475569] leading-relaxed">
            <p>
              I&apos;m a Data Scientist with over 5 years of experience building production ML systems across healthcare, energy research, and cloud infrastructure. Currently based in <strong className="text-[#0f172a]">Freiburg, Germany</strong>, I recently completed my Master&apos;s in Embedded Systems Engineering (AI specialization) at the University of Freiburg.
            </p>
            <p>
              At <strong className="text-[#0f172a]">Fraunhofer ISE</strong>, I developed probabilistic surrogate models, uncertainty-aware prediction frameworks, and a RAG knowledge system used across three research teams. Before that, I built large-scale healthcare ETL pipelines and serverless AWS architectures at Legato Health Technology.
            </p>
            <p>
              I care about the full stack from clean data pipelines and rigorous model validation to deployment and stakeholder communication. I&apos;m a published researcher, an active part-time chef, and an event coordinator. I believe good data work requires both technical depth and clear storytelling.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-sm text-[#64748b]">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
