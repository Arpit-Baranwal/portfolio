import { Mail, BookOpen, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-3">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s talk</h2>
        <p className="text-[#94a3b8] mb-12 max-w-xl">
          I&apos;m open to Data Scientist, ML Engineer, and Research roles in Germany and Europe. Feel free to reach out — I respond within 24 hours.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact card */}
          <div className="card p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                <MapPin size={18} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-[#64748b]">Location</p>
                <p className="text-white text-sm">Freiburg, Germany · Open to remote & hybrid</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                <Mail size={18} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-[#64748b]">Email</p>
                <a
                  href="mailto:arpitbaranwalaec@gmail.com"
                  className="text-white text-sm hover:text-indigo-400 transition-colors"
                >
                  arpitbaranwalaec@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1e1e2e] flex gap-4">
              <a
                href="https://github.com/Arpit-Baranwal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#94a3b8] hover:text-white transition-colors"
              >
                <GithubIcon size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/arpit-baranwal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#94a3b8] hover:text-white transition-colors"
              >
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a
                href="https://medium.com/@arpitbaranwal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#94a3b8] hover:text-white transition-colors"
              >
                <BookOpen size={18} /> Medium
              </a>
            </div>
          </div>

          {/* What I'm looking for */}
          <div className="card p-8 space-y-4">
            <h3 className="text-sm font-semibold text-white">What I&apos;m looking for</h3>
            {[
              "Data Scientist / ML Engineer roles",
              "Research-oriented positions in AI/ML",
              "Projects involving uncertainty quantification or probabilistic models",
              "Teams that value rigorous validation and clean pipelines",
              "Based in Germany — open to Europe-wide remote",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 text-sm text-[#94a3b8]">
                <span className="text-indigo-500 mt-0.5">▸</span>
                {item}
              </div>
            ))}
            <div className="pt-4">
              <a
                href="mailto:arpitbaranwalaec@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all"
              >
                <Mail size={16} />
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
