/* eslint-disable @next/next/no-img-element */

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
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
      { name: "Terraform", icon: `${DEVICON}/terraform/terraform-original.svg` },
      { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
      { name: "Jupyter", icon: `${DEVICON}/jupyter/jupyter-original.svg` },
      { name: "GraphQL", icon: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: "Linux", icon: `${DEVICON}/linux/linux-original.svg` },
    ],
  },
];

// Specialized skills without standard logos — shown as a tag cloud
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
          {groups.map((group) => (
            <div key={group.title} className="card p-6 md:p-8">
              <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-[#1e1e2e]">
                {group.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-16 h-16 rounded-xl bg-[#0a0a0f] border border-[#1e1e2e] flex items-center justify-center transition-all duration-200 group-hover:border-indigo-500/50 group-hover:-translate-y-1">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-9 h-9 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs text-[#94a3b8] text-center group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Methods & concepts */}
          <div className="card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-[#1e1e2e]">
              Methods & Specializations
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {concepts.map((c) => (
                <span key={c} className="tag !text-sm !py-1.5 !px-3.5">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
