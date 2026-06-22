// ⚠️ TEMPORARY SECTION — remove after Jun 25, 2026.
// Delete this file and its import/usage in app/page.tsx + the nav link in components/Navbar.tsx.
import Reveal from "@/components/Reveal";

const TALK_URL =
  "https://heatpumpingtechnologies.org/project64/events/iea-hpt-project-64-webinar-flammable-refrigerant-safety/";

export default function UpcomingTalk() {
  return (
    <section id="talk" className="px-6 pt-28 pb-4 md:pt-32">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden card p-6 md:p-8 border-indigo-200 bg-gradient-to-br from-indigo-50 via-[#eef1fb] to-purple-50">
            {/* glow accent */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-indigo-300/30 blur-3xl" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold border border-indigo-300 bg-indigo-100 text-indigo-700 rounded-full px-3 py-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600" />
                    </span>
                    Upcoming Talk · Jun 25, 2026
                  </span>
                  <span className="text-xs text-[#64748b]">Global webinar</span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] leading-snug">
                  Presenting my Master&apos;s thesis to a global audience
                </h2>
                <p className="text-sm text-[#475569] max-w-2xl">
                  I&apos;ll be presenting my research on data-driven spatial risk assessment of
                  indoor gas dispersion at the{" "}
                  <span className="font-medium text-[#0f172a]">
                    IEA HPT Project 64 Webinar Flammable Refrigerant Safety
                  </span>
                  .
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href={TALK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg bg-[#6366f1] text-white hover:bg-[#4f46e5] transition-all"
                >
                  View event
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
