import { Navbar } from "@/components/Navbar";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, GitBranch, Laptop, Send, Server, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      name: "AI Chatbot Platform",
      description: "Full-stack AI-powered chatbot solution with advanced natural language processing",
      technologies: ["Next.js", "OpenAI", "Tailwind CSS", "Prisma"],
      link: "#"
    },
    {
      name: "E-Commerce Dashboard",
      description: "Comprehensive sales analytics and management platform for online businesses",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      link: "#"
    },
    {
      name: "Portfolio Website",
      description: "Responsive personal portfolio showcasing skills and projects",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-background via-background to-accent-foreground/10 dark:from-background dark:via-background dark:to-accent-foreground/10 p-4 sm:p-8 relative overflow-hidden">
      <Navbar />
      <div className="max-w-4xl w-full mx-auto text-center space-y-8 pt-20 relative z-10">
        {/* Hero Section */}
        <div className="relative group">
          <h1 className="relative text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 font-extrabold">
              Zaid Hafeez
            </span>
            <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 opacity-30">
              <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary animate-spin-slow animate-pulse-subtle" />
            </span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground tracking-wide font-medium text-balance">
            <TypewriterEffect
              text="MENN Stack Developer | Next.js & Tailwind CSS Enthusiast"
              className="inline-block"
              speed={100}
            />
          </p>
        </div>

        {/* Buttons and Social Links */}
        <div className="flex justify-center items-center space-x-4">
          <Button asChild variant="outline" size="lg" className="group">
            <Link
              href="/projects"
              className="flex items-center gap-2 font-semibold"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/Zaid-maker"
              target="_blank"
              className="group relative"
              aria-label="GitHub Profile"
            >
              <div className="absolute -inset-1 bg-primary/20 rounded-full opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-sm"></div>
              <Image
                src="/github-icon.svg"
                alt="GitHub"
                width={32}
                height={32}
                className="w-8 h-8 relative z-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 dark:invert dark:opacity-80 dark:hover:opacity-100"
              />
            </Link>

            <Link
              href="https://linkedin.com/in/zaid-hafeez-7084b0149"
              target="_blank"
              className="group relative"
              aria-label="LinkedIn Profile"
            >
              <div className="absolute -inset-1 bg-primary/20 rounded-full opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-sm"></div>
              <Image
                src="/linkedin-icon.svg"
                alt="LinkedIn"
                width={32}
                height={32}
                className="w-8 h-8 relative z-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 dark:invert dark:opacity-80 dark:hover:opacity-100"
              />
            </Link>
          </div>
        </div>

        {/* About Me Section */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/10 p-6 md:p-10 shadow-2xl">
          <h2 className="relative text-2xl font-bold mb-6 text-foreground tracking-tight">
            <span className="relative">
              About Me
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></span>
            </span>
          </h2>

          <p className="mt-6 text-muted-foreground leading-relaxed text-center text-balance max-w-2xl mx-auto mb-6">
            <span className="font-semibold text-foreground">
              As a driven developer,
            </span>{" "}
            I thrive on
            <span className="italic text-primary/80">
              crafting exceptional web experiences
            </span>{" "}
            that push the boundaries of innovation.{" "}
            <span className="font-medium text-foreground/80">My journey</span>{" "}
            is defined by a relentless pursuit of growth, where each project is
            an opportunity to
            <span className="font-semibold text-primary">
              transform ideas into impactful digital solutions
            </span>
            .
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/10 p-6 md:p-10 shadow-2xl">
          <h2 className="relative text-2xl font-bold mb-6 text-foreground tracking-tight">
            <span className="relative">
              Skills
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></span>
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                <Code className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors tracking-tight">
                Frontend Development
              </h3>
              <p className="text-muted-foreground text-center text-sm group-hover:text-foreground transition-colors leading-relaxed text-balance">
                Crafting responsive and interactive web interfaces using
                Next.js, React, and Tailwind CSS
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                <Server className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors tracking-tight">
                Backend Development
              </h3>
              <p className="text-muted-foreground text-center text-sm group-hover:text-foreground transition-colors leading-relaxed text-balance">
                Building scalable server-side applications with Node.js,
                Express, and MongoDB
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                <Laptop className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors tracking-tight">
                Learning & Growth
              </h3>
              <p className="text-muted-foreground text-center text-sm group-hover:text-foreground transition-colors leading-relaxed text-balance">
                Continuously expanding skills at Virtual University of Pakistan,
                embracing new technologies
              </p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/10 p-6 md:p-10 shadow-2xl">
          <h2 className="relative text-2xl font-bold mb-6 text-foreground tracking-tight">
            <span className="relative">
              Projects
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></span>
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white/5 dark:bg-white/10 rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <GitBranch className="w-6 h-6 text-primary mr-2" />
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  href={project.link} 
                  className="text-primary hover:underline flex items-center text-sm"
                >
                  View Project <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/10 p-6 md:p-10 shadow-2xl">
          <h2 className="relative text-2xl font-bold mb-6 text-foreground tracking-tight">
            <span className="relative">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></span>
            </span>
          </h2>

          <div className="max-w-xl mx-auto">
            <p className="text-muted-foreground text-center mb-6">
              Interested in collaborating or have a project in mind? 
              I&apos;m always open to exciting opportunities and challenges.
            </p>
            <div className="flex justify-center">
              <Button 
                asChild 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 transition-colors"
              >
                <Link href="mailto:zaidhafeez.dev@gmail.com" className="flex items-center">
                  <Send className="mr-2 w-5 h-5" /> Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
