import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arpit Baranwal — Data Scientist",
  description: "Data Scientist with 5+ years building ML pipelines, statistical models, and applied AI across healthcare and energy research.",
  keywords: ["Data Scientist", "Machine Learning", "Python", "AWS", "RAG", "Fraunhofer", "Freiburg"],
  openGraph: {
    title: "Arpit Baranwal — Data Scientist",
    description: "ML pipelines, statistical models, and applied AI across healthcare and energy research.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
