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
    <div className="min-h-screen flex flex-col justify-center items-center 
      bg-tech-gradient 
      dark:bg-tech-gradient 
      p-4 sm:p-8 
      relative 
      overflow-hidden">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full mx-auto text-center space-y-8 pt-20 relative z-10">
          {/* Hero Section */}
          <div className="relative group">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 via-orange-500 font-extrabold">
                Zaid Hafeez
              </span>
              <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 opacity-30">
                <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-accent animate-spin-slow animate-pulse-subtle" />
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-foreground-muted tracking-wide font-medium text-balance">
              <TypewriterEffect
                text="MENN Stack Developer | Next.js & Tailwind CSS Enthusiast"
                className="inline-block"
                speed={100}
              />
            </p>
          </div>

          {/* Buttons and Social Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="group w-full sm:w-auto 
                border-primary/30 
                hover:border-primary 
                bg-background-light 
                hover:bg-background-dark 
                transition-all duration-300"
            >
              <Link
                href="/projects"
                className="flex items-center justify-center gap-2 font-semibold text-foreground hover:text-primary"
              >
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-accent" />
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
                  className="w-8 h-8 relative z-10 
                    grayscale group-hover:grayscale-0 
                    scale-100 group-hover:scale-110 
                    transition-all duration-300 
                    dark:invert dark:opacity-80 
                    dark:hover:opacity-100"
                />
              </Link>

              <Link
                href="https://linkedin.com/in/zaid-hafeez-7084b0149"
                target="_blank"
                className="group relative"
                aria-label="LinkedIn Profile"
              >
                <div className="absolute -inset-1 bg-secondary/20 rounded-full opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-sm"></div>
                <Image
                  src="/linkedin-icon.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="w-8 h-8 relative z-10 
                    grayscale group-hover:grayscale-0 
                    scale-100 group-hover:scale-110 
                    transition-all duration-300 
                    dark:invert dark:opacity-80 
                    dark:hover:opacity-100"
                />
              </Link>
            </div>
          </div>

          {/* About Me Section */}
          <div className="bg-background-light dark:bg-background-dark 
            backdrop-blur-md 
            rounded-xl 
            border border-border/30 
            p-6 md:p-10 
            shadow-2xl 
            hover:shadow-primary/20 
            transition-all 
            duration-300 
            group">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-foreground tracking-tight">
              About Me
            </h2>
            
            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed text-center max-w-2xl mx-auto">
              As a driven developer, I thrive on crafting exceptional web experiences 
              that push the boundaries of innovation. My journey is defined by a relentless 
              pursuit of growth, where each project is an opportunity to transform ideas 
              into impactful digital solutions.
            </p>
          </div>

          {/* Skills Section */}
          <div className="bg-background-light dark:bg-background-dark 
            backdrop-blur-md 
            rounded-xl 
            border border-border/30 
            p-6 md:p-10 
            shadow-2xl 
            hover:shadow-secondary/20 
            transition-all 
            duration-300 
            group">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-foreground tracking-tight">
              Skills
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { 
                  icon: Code, 
                  title: "Frontend Development", 
                  description: "Crafting responsive interfaces with Next.js, React, Tailwind CSS",
                  color: "text-primary"
                },
                { 
                  icon: Server, 
                  title: "Backend Development", 
                  description: "Building scalable apps with Node.js, Express, MongoDB",
                  color: "text-secondary"
                },
                { 
                  icon: Laptop, 
                  title: "Learning & Growth", 
                  description: "Continuously expanding skills at Virtual University of Pakistan",
                  color: "text-accent"
                }
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center space-y-3 p-4 
                    bg-background/5 
                    rounded-xl 
                    border border-border/20 
                    hover:border-primary/30 
                    transform hover:-translate-y-2 
                    hover:scale-105 
                    transition-all 
                    duration-300 
                    group"
                >
                  <skill.icon className={`w-6 sm:w-8 h-6 sm:h-8 ${skill.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground-muted text-center group-hover:text-foreground transition-colors">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-background-light dark:bg-background-dark 
            backdrop-blur-md 
            rounded-xl 
            border border-border/30 
            p-6 md:p-10 
            shadow-2xl 
            hover:shadow-accent/20 
            transition-all 
            duration-300 
            group">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-foreground tracking-tight">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-background/5 
                    rounded-xl 
                    p-4 sm:p-6 
                    border border-border/20 
                    hover:border-primary/30 
                    transform 
                    transition-all 
                    duration-300 
                    hover:-translate-y-2 
                    hover:scale-105 
                    hover:shadow-lg 
                    group"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <GitBranch className="w-4 sm:w-6 h-4 sm:h-6 text-secondary mr-2 group-hover:rotate-45 transition-transform" />
                    <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground-muted mb-3 sm:mb-4 group-hover:text-foreground transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-primary/10 text-primary text-[10px] sm:text-xs px-2 py-1 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={project.link} 
                    className="text-primary hover:underline flex items-center text-xs sm:text-sm group-hover:translate-x-1 transition-transform"
                  >
                    View Project <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-background-light dark:bg-background-dark 
            backdrop-blur-md 
            rounded-xl 
            border border-border/30 
            p-6 md:p-10 
            shadow-2xl 
            hover:shadow-accent/20 
            transition-all 
            duration-300 
            group">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-foreground tracking-tight">
              Get In Touch
            </h2>

            <div className="max-w-xl mx-auto">
              <p className="text-xs sm:text-base text-foreground-muted text-center mb-6 group-hover:text-foreground transition-colors">
                Interested in collaborating or have a project in mind? 
                I&apos;m always open to exciting opportunities and challenges.
              </p>
              <div className="flex justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full sm:w-auto 
                    group 
                    bg-accent 
                    hover:bg-accent-light 
                    text-white 
                    transition-colors 
                    transform 
                    hover:-translate-y-1 
                    hover:scale-105 
                    duration-300 
                    ease-in-out"
                >
                  <Link 
                    href="mailto:zaidhafeez.dev@gmail.com" 
                    className="flex items-center justify-center"
                  >
                    <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" /> Contact Me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
