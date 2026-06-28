import Reveal from "@/components/Reveal";

const EVENT_URL =
  "https://heatpumpingtechnologies.org/project64/iea-hpt-project-64-webinar-on-the-safe-use-of-flammable-refrigerants/";
const RECORDING_URL = "https://youtu.be/eF2N9wTDNAI";

export default function FeaturedTalk() {
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
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600" />
                    Featured Talk · Jun 2026
                  </span>
                  <span className="text-xs text-[#64748b]">Global webinar · ~40 countries</span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] leading-snug">
                  Presented my Master&apos;s thesis to a global audience
                </h2>
                <p className="text-sm text-[#475569] max-w-2xl">
                  I presented{" "}
                  <span className="font-medium text-[#0f172a]">
                    &ldquo;Spatial risk assessment of indoor gas dispersion&rdquo;
                  </span>{" "}
                  using data-driven methods at the{" "}
                  <span className="font-medium text-[#0f172a]">
                    IEA HPT Project 64 Webinar on the Safe Use of Flammable Refrigerants
                  </span>
                  , alongside speakers from KTH, EDF, AIT and the Heat Pump Centre.
                </p>
              </div>

              <div className="flex flex-shrink-0 flex-wrap gap-3">
                <a
                  href={RECORDING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg bg-[#6366f1] text-white hover:bg-[#4f46e5] transition-all"
                >
                  Watch recording
                  <span aria-hidden>↗</span>
                </a>
                <a
                  href={EVENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg border border-indigo-300 text-indigo-700 hover:bg-indigo-100 transition-all"
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
