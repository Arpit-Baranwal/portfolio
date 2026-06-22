import { BookOpen, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const posts = [
  {
    title: "From Confusion to Clarity: Choosing the Right Metrics for Binary Classification Models",
    excerpt:
      "Why that 90% accuracy can be dangerously deceptive, a practical guide to evaluation metrics beyond accuracy for imbalanced, real-world datasets.",
    date: "Dec 17, 2025",
    readTime: "8 min read",
    url: "https://medium.com/@arpitbaranwal/from-confusion-to-clarity-choosing-the-right-metrics-for-binary-classification-model-a3eb62f20252",
    tags: ["Machine Learning", "Metrics", "Classification"],
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-3">Writing</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">From my blog</h2>
        <p className="text-[#475569] mb-12 max-w-xl">
          I write about machine learning, data science, and the practical lessons I pick up building real systems. Read the full collection on Medium.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Featured posts */}
          {posts.map((post, i) => (
            <Reveal key={i} delay={i * 0.1} className="md:col-span-2 h-full">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 flex flex-col gap-4 group h-full"
              >
                <div className="flex items-center gap-2 text-xs text-[#64748b]">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] leading-snug group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <span className="text-sm text-indigo-600 flex items-center gap-1 font-medium">
                  Read on Medium <ArrowUpRight size={15} />
                </span>
              </a>
            </Reveal>
          ))}

          {/* Medium CTA card */}
          <Reveal delay={0.15} className="h-full">
            <a
              href="https://medium.com/@arpitbaranwal"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex flex-col justify-center items-center text-center gap-4 group bg-gradient-to-br from-indigo-50 via-white to-pink-50 h-full"
            >
              <div className="w-14 h-14 rounded-full bg-indigo-600/20 flex items-center justify-center group-hover:bg-indigo-600/30 transition-colors">
                <BookOpen size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-base font-semibold text-[#0f172a]">Read all my articles</h3>
              <p className="text-sm text-[#64748b]">
                Tutorials, deep-dives & lessons on ML and data science.
              </p>
              <span className="text-sm text-indigo-600 flex items-center gap-1 font-medium group-hover:gap-2 transition-all">
                Visit my Medium <ArrowUpRight size={15} />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
