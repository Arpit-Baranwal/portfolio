"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Talk", href: "#talk" }, // TEMP — remove after Jun 25, 2026
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#eef1fb]/90 backdrop-blur-md border-b border-[#e4e8f3]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-lg font-bold gradient-text">A.Baranwal</a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#475569] hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            className="text-sm px-4 py-2 rounded-lg border border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-white transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#475569] hover:text-slate-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#eef1fb] border-t border-[#e4e8f3] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#475569] hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            className="text-sm px-4 py-2 rounded-lg border border-[#6366f1] text-[#6366f1] text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
