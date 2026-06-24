import Reveal from "@/components/Reveal";

const companies = [
  { name: "Fraunhofer ISE", label: "Fraunhofer", accent: "#179c7d" },
  { name: "RealWorldOne", label: "RealWorldOne", accent: "#2563eb" },
  { name: "Legato Health Technologies", label: "Legato", accent: "#6366f1" },
];

export default function Companies() {
  return (
    <section className="py-12 px-6 border-y border-[#e4e8f3]/60">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-[#94a3b8] mb-8">
            Experience across
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {companies.map((c) => (
              <span
                key={c.name}
                title={c.name}
                className="group text-xl md:text-2xl font-semibold text-[#94a3b8] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                style={{ "--accent": c.accent } as React.CSSProperties}
              >
                <span className="group-hover:text-[var(--accent)] transition-colors">
                  {c.label}
                </span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
