import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TypingCursor } from "@/components/ui/TypingCursor";
import { ArrowRight, Download } from "lucide-react";

const featuredProjects = [
  {
    name: "YOLOv8 Object Detection Web Portal",
    slug: "yolov8-object-detection",
    description: "Real-time object detection web platform using YOLOv8 with JWT authentication, admin dashboard, and scalable FastAPI backend.",
    stack: ["Python", "React", "YOLOv8", "PyTorch"],
    impact: "Real-time image, video & webcam detection",
  },
  {
    name: "House Price Navigator",
    slug: "house-price-navigator",
    description: "ML-based house price prediction web app with Google Maps visualization and analytics dashboards for real estate insights.",
    stack: ["React", "TypeScript", "Tailwind CSS", "ML"],
    impact: "Data-driven real estate market insights",
  },
  {
    name: "Amazon Global Sales Dashboard",
    slug: "amazon-global-sales-dashboard",
    description: "Interactive Power BI dashboard analyzing Amazon global sales trends, KPIs, and business insights through data visualization.",
    stack: ["Power BI", "Excel", "DAX"],
    impact: "Actionable business intelligence & trend analysis",
  },
  {
    name: "Railway Database Management System",
    slug: "railway-database-management",
    description: "Relational database system with CRUD operations to manage train schedules, routes, and passenger data.",
    stack: ["MySQL", "HTML", "CSS"],
    impact: "Efficient railway data management",
  },
  {
    name: "RailConnect - Track Route Connect",
    slug: "railconnect-track-route-connect",
    description: "Modern train booking and management platform with train search, ticket booking, PNR status, and a powerful admin dashboard.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    impact: "Streamlined railway booking and operations management",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-grid">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl opacity-0 animate-fade-in-up">
              {/* Code-style label */}
              <CodeLabel className="mb-6">Data Analyst & Developer</CodeLabel>

              {/* Headline with typing cursor */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Hi, I'm Jishab Patel.
                <br />
                <span className="text-muted-foreground">I build data-driven solutions</span>
                <TypingCursor />
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
                Aspiring Data Analyst and Software Developer with skills in Python, 
                data visualization, and problem solving. Eager to apply analytical and 
                programming skills to support data-driven decisions and build efficient solutions.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up stagger-2">
                <Button asChild size="lg" className="font-mono transition-transform hover:scale-105">
                  <Link to="/work">
                    View Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-mono transition-transform hover:scale-105">
                  <a href="/Jishab_Patel_Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Right-side animation */}
            <div className="relative hidden lg:flex items-center justify-center min-h-[420px] opacity-0 animate-fade-in-up stagger-3">
              <div className="relative h-[340px] w-[340px]">
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-ring" />
                <div className="absolute inset-8 rounded-full border border-primary/15 animate-pulse-ring [animation-delay:1.2s]" />

                <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary animate-orbit" />
                <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/80 animate-orbit-wide" />

                <article className="absolute inset-[52px] overflow-hidden rounded-2xl border border-primary/30 bg-card/80 p-5 shadow-[0_0_38px_hsl(130_100%_50%_/_0.12)] backdrop-blur-sm animate-float-slow">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />

                  <p className="mb-3 font-mono text-xs text-muted-foreground">SYSTEM METRICS</p>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Model Accuracy</span>
                      <span className="text-primary">98.2%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary">
                      <div className="h-1.5 w-[88%] rounded-full bg-primary" />
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-muted-foreground">Data Pipeline</span>
                      <span className="text-primary">Online</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary">
                      <div className="h-1.5 w-[92%] rounded-full bg-primary/90" />
                    </div>

                    <p className="pt-2 text-primary">&gt; Building production-ready analytics apps...</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="opacity-0 animate-fade-in-up">
            <CodeDivider label="Featured Work" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.name} 
                className={`opacity-0 animate-fade-in-up stagger-${index + 1}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center opacity-0 animate-fade-in-up stagger-4">
            <Link 
              to="/work" 
              className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              <span className="text-primary mr-2">{"//"}</span>
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
