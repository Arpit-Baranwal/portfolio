/* eslint-disable @next/next/no-img-element */
import Reveal from "@/components/Reveal";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

type Skill = { name: string; icon: string };

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages & Databases",
    skills: [
      { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
      { name: "C++", icon: `${DEVICON}/cplusplus/cplusplus-original.svg` },
      { name: "C#", icon: `${DEVICON}/csharp/csharp-original.svg` },
      { name: ".NET", icon: `${DEVICON}/dot-net/dot-net-original.svg` },
      { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "Bash", icon: `${DEVICON}/bash/bash-original.svg` },
    ],
  },
  {
    title: "ML & Data Libraries",
    skills: [
      { name: "PyTorch", icon: `${DEVICON}/pytorch/pytorch-original.svg` },
      { name: "TensorFlow", icon: `${DEVICON}/tensorflow/tensorflow-original.svg` },
      { name: "scikit-learn", icon: `${DEVICON}/scikitlearn/scikitlearn-original.svg` },
      { name: "Pandas", icon: `${DEVICON}/pandas/pandas-original.svg` },
      { name: "NumPy", icon: `${DEVICON}/numpy/numpy-original.svg` },
      { name: "OpenCV", icon: `${DEVICON}/opencv/opencv-original.svg` },
      { name: "MATLAB", icon: `${DEVICON}/matlab/matlab-original.svg` },
    ],
  },
  {
    title: "Cloud, MLOps & Tools",
    skills: [
      { name: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", icon: `${DEVICON}/azure/azure-original.svg` },
      { name: "GCP", icon: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
      { name: "Terraform", icon: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
      { name: "Jupyter", icon: `${DEVICON}/jupyter/jupyter-original.svg` },
      { name: "GraphQL", icon: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "Linux", icon: `${DEVICON}/linux/linux-original.svg` },
    ],
  },
];

// Specialized skills without standard logos shown as a tag cloud
const concepts = [
  "RAG", "TabPFN", "Transformers", "Monte Carlo Methods", "Kriging Regression",
  "Uncertainty Quantification", "Probabilistic Modeling", "Anomaly Detection",
  "Time Series", "Predictive Modeling", "A/B Testing", "ETL Pipelines",
  "Databricks", "PySpark", "PowerBI", "n8n", "AWS Glue", "Lambda", "AppSync", "CI/CD",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-3">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What I work with</h2>

        <div className="space-y-6">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.1} className="card p-6">
              <h3 className="text-base font-semibold text-[#0f172a] mb-5 pb-3 border-b border-[#e4e8f3]">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-[#eef1fb] border border-[#e4e8f3] rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-indigo-500/50 hover:-translate-y-0.5"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-7 h-7 object-contain"
                      loading="lazy"
                    />
                    <span className="text-[15px] font-medium text-[#334155]">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}

          {/* Methods & concepts */}
          <Reveal delay={0.1} className="card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-[#0f172a] mb-6 pb-3 border-b border-[#e4e8f3]">
              Methods & Specializations
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {concepts.map((c) => (
                <span key={c} className="tag !text-sm !py-1.5 !px-3.5">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
