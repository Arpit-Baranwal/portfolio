"use client";
import Image from "next/image";
import { FileText, BookOpen, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="flex-1 space-y-6">
            <p className="section-label">Data Scientist · ML Engineer · Researcher</p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Arpit Baranwal</span>
            </h1>

            <p className="text-lg text-[#94a3b8] leading-relaxed max-w-xl">
              Building ML pipelines, probabilistic models, and applied AI systems that solve real problems — from energy research at Fraunhofer ISE to healthcare data at scale.
            </p>

            <p className="text-[#64748b] text-sm">
              📍 Freiburg, Germany &nbsp;·&nbsp; Open to opportunities &nbsp;·&nbsp; No sponsorship needed
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all text-sm"
              >
                View Projects
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                className="px-6 py-3 rounded-lg border border-[#1e1e2e] text-[#94a3b8] hover:border-indigo-500 hover:text-white font-medium transition-all text-sm flex items-center gap-2"
              >
                <FileText size={16} />
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/Arpit-Baranwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748b] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/arpit-baranwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748b] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://medium.com/@arpitbaranwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748b] hover:text-white transition-colors"
                aria-label="Medium"
              >
                <BookOpen size={20} />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-[#1e1e2e] glow">
              <Image
                src="/formal.jpg"
                alt="Arpit Baranwal"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20 animate-bounce">
          <a href="#about" className="text-[#1e1e2e] hover:text-indigo-500 transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
