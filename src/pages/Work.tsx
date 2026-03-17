import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    name: "YOLOv8 Object Detection Web Portal",
    slug: "yolov8-object-detection",
    description: "Built a real-time object detection web platform using YOLOv8 supporting image, video, and webcam detection. Implemented JWT authentication, admin dashboard, and scalable FastAPI backend with a responsive React + Tailwind CSS frontend.",
    stack: ["Python", "React", "YOLOv8", "OpenCV", "PyTorch"],
    impact: "Real-time multi-mode object detection platform",
  },
  {
    name: "House Price Navigator",
    slug: "house-price-navigator",
    description: "Developed a machine learning-based house price prediction web application with a responsive React and TypeScript UI. Integrated Google Maps visualization and analytics dashboards for real estate market insights.",
    stack: ["React", "TypeScript", "Tailwind CSS", "ML"],
    impact: "Data-driven real estate market insights",
  },
  {
    name: "Amazon Global Sales Dashboard",
    slug: "amazon-global-sales-dashboard",
    description: "Created an interactive Power BI dashboard analyzing Amazon global sales trends and KPIs. Generated business insights through data visualization and trend analysis.",
    stack: ["Power BI", "Excel", "DAX"],
    impact: "Actionable business intelligence & trend analysis",
  },
  {
    name: "Railway Database Management System",
    slug: "railway-database-management",
    description: "Designed a relational database system with CRUD operations to manage train schedules, routes, and passenger data efficiently.",
    stack: ["MySQL", "HTML", "CSS"],
    impact: "Efficient railway data management system",
  },
  {
    name: "RailConnect - Track Route Connect",
    slug: "railconnect-track-route-connect",
    description: "Built a modern railway reservation web app that lets users search trains, book tickets, check PNR status, and manage bookings through a responsive interface.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI"],
    impact: "End-to-end train booking and admin operations workflow",
  },
  {
    name: "SmartQuiz AI Generator",
    slug: "smartquiz-ai-generator",
    description: "Built an intelligent web application that automatically creates customized quizzes from study material using NLP and machine learning. Supports PDF, PPTX, DOCX, and text input with interactive quiz flow and instant performance feedback.",
    stack: ["Python", "Streamlit", "NLTK", "scikit-learn", "NumPy"],
    impact: "AI-powered automated quiz generation for adaptive self-assessment",
  },
];

export default function Work() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              A selection of projects showcasing data analysis, machine learning, 
              and full-stack development. Each project represents real challenges solved 
              with practical, data-driven approaches.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label="Projects" />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 2, 4)}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
