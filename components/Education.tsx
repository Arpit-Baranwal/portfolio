import Image from "next/image";
import Reveal from "@/components/Reveal";

const education = [
  {
    degree: "Master's in Embedded Systems Engineering",
    specialization: "Specialization in AI",
    school: "Albert Ludwigs University of Freiburg",
    logo: "/uni-freiburg.jpeg",
    location: "Freiburg, Germany",
    period: "Apr 2022 – Mar 2026",
    detail:
      "Coursework in deep learning, reinforcement learning, computer vision, robotics, microsystems engineering, and optimization building strong skills in applied ML and system modeling.",
  },
  {
    degree: "Bachelor's in Electronics & Communication Engineering",
    specialization: "",
    school: "Asansol Engineering College",
    logo: "/aec.png",
    location: "Asansol, India",
    period: "2016 – 2020",
    detail:
      "Foundation in signal processing, electronics, and communication systems with a focus on applied engineering and mathematics.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-3">Education</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Where I studied</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <Reveal key={i} delay={i * 0.12} className="card p-6 md:p-8 flex flex-col gap-4 h-full">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg border border-[#e4e8f3] bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#0f172a] leading-snug">{edu.degree}</h3>
                  {edu.specialization && (
                    <p className="text-indigo-600 text-sm mt-0.5">{edu.specialization}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-sm">
                <span className="text-[#0f172a]">{edu.school}</span>
                <span className="text-[#64748b]">{edu.period}</span>
              </div>

              <p className="text-xs text-[#64748b]">{edu.location}</p>
              <p className="text-sm text-[#475569] leading-relaxed">{edu.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
