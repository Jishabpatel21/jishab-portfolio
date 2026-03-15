import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData: Record<string, {
  name: string;
  description: string;
  fullDescription: string;
  stack: string[];
  impact: string;
  challenges: string[];
  features: string[];
  github?: string;
}> = {
  "yolov8-object-detection": {
    name: "YOLOv8 Object Detection Web Portal",
    description: "Real-time object detection web platform using YOLOv8.",
    fullDescription: "Built a comprehensive real-time object detection web platform using YOLOv8, supporting image, video, and webcam detection modes. The system features JWT authentication for secure access, an admin dashboard for management, and a scalable FastAPI backend paired with a responsive React + Tailwind CSS frontend.",
    stack: ["Python", "React", "YOLOv8", "OpenCV", "PyTorch", "FastAPI", "Tailwind CSS"],
    impact: "Real-time multi-mode object detection platform",
    challenges: [
      "Handling real-time video stream processing with low latency",
      "Implementing secure JWT authentication across frontend and backend",
      "Optimizing YOLOv8 model inference for web deployment",
      "Building a responsive UI that works seamlessly with webcam feeds",
    ],
    features: [
      "Image, video, and webcam object detection modes",
      "JWT-based authentication system",
      "Admin dashboard for user and detection management",
      "Scalable FastAPI backend with React frontend",
    ],
    github: "https://github.com/Jishabpatel21/RealTime-Object-Detection-YOLOv8",
  },
  "house-price-navigator": {
    name: "House Price Navigator",
    description: "ML-based house price prediction web application.",
    fullDescription: "Developed a machine learning-based house price prediction web application with a responsive React and TypeScript UI. The platform integrates Google Maps visualization for location-based insights and features analytics dashboards that help users understand real estate market trends and make informed decisions.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Machine Learning", "Google Maps API"],
    impact: "Data-driven real estate market insights",
    challenges: [
      "Integrating ML prediction models with a web frontend",
      "Implementing interactive Google Maps visualization",
      "Building responsive analytics dashboards for market data",
      "Ensuring accurate predictions across diverse market conditions",
    ],
    features: [
      "ML-powered house price predictions",
      "Interactive Google Maps integration",
      "Analytics dashboards for market insights",
      "Responsive TypeScript + React interface",
    ],
    github: "https://github.com/Jishabpatel21/house-price-navigator",
  },
  "amazon-global-sales-dashboard": {
    name: "Amazon Global Sales Dashboard",
    description: "Interactive Power BI dashboard for Amazon global sales analysis.",
    fullDescription: "Created an interactive Power BI dashboard that analyzes Amazon global sales trends and key performance indicators. The dashboard generates actionable business insights through advanced data visualization techniques, DAX formulas, and trend analysis, enabling stakeholders to make data-informed decisions quickly.",
    stack: ["Power BI", "Excel", "DAX", "Data Visualization"],
    impact: "Actionable business intelligence & trend analysis",
    challenges: [
      "Processing and cleaning large-scale sales datasets",
      "Creating intuitive visualizations for complex KPIs",
      "Writing efficient DAX formulas for real-time calculations",
      "Designing interactive filters for drill-down analysis",
    ],
    features: [
      "Interactive sales trend visualizations",
      "KPI tracking and monitoring dashboards",
      "Advanced DAX-powered calculations",
      "Drill-down filtering and analysis capabilities",
    ],
    github: "https://github.com/Jishabpatel21/amazon-global-sales-dashboard",
  },
  "railway-database-management": {
    name: "Railway Database Management System",
    description: "Relational database system for railway management.",
    fullDescription: "Designed and implemented a relational database system with full CRUD operations to manage train schedules, routes, and passenger data. The system features a clean web interface built with HTML and CSS, backed by a well-structured MySQL database with proper normalization and indexing for optimal query performance.",
    stack: ["MySQL", "HTML", "CSS", "Database Design"],
    impact: "Efficient railway data management system",
    challenges: [
      "Designing normalized database schema for complex railway data",
      "Implementing efficient CRUD operations with proper validation",
      "Managing relationships between schedules, routes, and passengers",
      "Optimizing query performance with proper indexing",
    ],
    features: [
      "Complete CRUD operations for all entities",
      "Train schedule and route management",
      "Passenger data tracking and management",
      "Clean web interface for data interaction",
    ],
    github: "https://github.com/Jishabpatel21/Railway-Database-Management-System",
  },
  "railconnect-track-route-connect": {
    name: "RailConnect - Track Route Connect",
    description: "Modern train booking and management system.",
    fullDescription: "RailConnect is a modern railway reservation web application built with React, TypeScript, and Vite. The platform allows users to search trains, book tickets, check PNR status, and manage bookings through a clean, responsive interface. It also includes an admin dashboard to manage users, trains, bookings, seat availability, and refund processes efficiently.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI", "Radix UI", "React Context API", "React Hook Form", "Zod", "Lucide Icons"],
    impact: "Scalable and user-friendly railway booking and management platform",
    challenges: [
      "Designing an intuitive booking flow for multiple train classes and quotas",
      "Maintaining real-time seat availability consistency during concurrent bookings",
      "Structuring admin workflows for train, booking, and refund management",
      "Building reusable and responsive UI components for complex form interactions",
    ],
    features: [
      "Train search with filters for date, class, and quota",
      "Fast ticket booking with instant confirmation",
      "PNR status tracking for booking updates",
      "Booking management for upcoming and cancelled journeys",
      "Passenger profile management for quicker repeat bookings",
      "Admin dashboard for users, trains, bookings, and refunds",
      "Seat management and allocation visibility",
    ],
    github: "https://github.com/Jishabpatel21/track-route-connect",
  },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
              <Button asChild>
                <Link to="/work">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Work
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Back Link */}
          <Link 
            to="/work" 
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-8 opacity-0 animate-fade-in-up"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>

          {/* Project Header */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {project.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            {/* Impact */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <span className="font-mono text-sm text-primary">
                <span className="text-muted-foreground">{"//"}</span> Impact: {project.impact}
              </span>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-2">
            <CodeDivider label="Challenges" />
          </div>

          {/* Challenges */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-3">
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">→</span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-3">
            <CodeDivider label="Features" />
          </div>

          {/* Features */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-4">
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-border opacity-0 animate-fade-in-up stagger-4">
            {project.github && (
              <Button asChild variant="outline" className="font-mono">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
