import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const skills = [
  "Data Analysis",
  "Web Development",
  "Machine Learning",
  "Data Visualization",
  "Problem Solving",
  "API Development",
];

const stack = [
  "Python",
  "Java",
  "JavaScript",
  "SQL",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PyTorch",
  "Pandas",
  "Power BI",
  "HTML",
  "CSS",
  "GitHub",
];

const certifications = [
  "Oracle Cloud Infrastructure Data Science",
  "Oracle Analytics Cloud 2025 Certified Professional",
];

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About
            </h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="opacity-0 animate-fade-in-up stagger-1">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm <span className="text-primary font-medium">Jishab Patel</span>, an aspiring Data Analyst and Software Developer with skills in Python, data visualization, and problem solving. Eager to apply analytical and programming skills to support data-driven decisions and build efficient software solutions.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-2">
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing B.Tech in Computer Science and Engineering, I'm passionate about building real-world applications that combine data science with modern web technologies. From object detection systems to analytics dashboards, I enjoy turning complex problems into elegant, practical solutions.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-3">
                <p className="text-muted-foreground leading-relaxed">
                  I believe in continuous learning and professional growth. Every project I take on is an opportunity to expand my skill set and deliver meaningful impact through technology.
                </p>
              </div>

              {/* Download Resume */}
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <Button asChild className="font-mono transition-transform hover:scale-105">
                  <a href="/Jishab_Patel_Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Philosophy" />
              </div>

              <div className="space-y-4 font-mono text-sm opacity-0 animate-fade-in-up stagger-4">
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Build data-driven solutions, not just code
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Measure impact through actionable insights
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Simplify complexity with clear visualizations
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Never stop learning, never stop growing
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Skills */}
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Skills <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <span className="text-primary mr-2">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Stack <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Experience <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-foreground font-medium">Data Visualization Intern</p>
                    <p className="text-muted-foreground">TCS · Jun 2025 – Jul 2025</p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Python Developer Intern</p>
                    <p className="text-muted-foreground">YBI Foundation · Jul 2024 – Aug 2024</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Certifications <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <span className="text-primary mr-2">✓</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
