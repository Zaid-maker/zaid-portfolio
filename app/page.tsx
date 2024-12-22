import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server, Laptop, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-background via-background to-accent-foreground/10 dark:from-background dark:via-background dark:to-accent-foreground/10 p-4 sm:p-8">
      <div className="max-w-4xl w-full mx-auto text-center space-y-8">
        <div className="relative group">
          <h1 className="relative text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 font-extrabold">
              Zaid Hafeez
            </span>
            <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 opacity-30">
              <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary animate-spin-slow animate-pulse-subtle" />
            </span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground animate-pulse-slow tracking-wide font-medium text-balance">
            MENN Stack Developer | Next.js & Tailwind Enthusiast
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects" className="flex items-center gap-2 font-semibold">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          
          <div className="flex items-center space-x-2">
            <Link href="https://github.com/Zaid-maker" target="_blank" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/github-icon.svg" 
                alt="GitHub" 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
            </Link>
            <Link href="https://linkedin.com/in/zaid-hafeez-7084b0149" target="_blank" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/linkedin-icon.svg" 
                alt="LinkedIn" 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
            </Link>
          </div>
        </div>

        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/10 p-6 md:p-10 shadow-2xl">
          <h2 className="relative text-2xl font-bold mb-6 text-foreground tracking-tight">
            <span className="relative">
              About Me
              <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></span>
            </span>
          </h2>
          
          <p className="mt-6 text-muted-foreground leading-relaxed text-center text-balance max-w-2xl mx-auto mb-6">
            <span className="font-semibold text-foreground">As a driven developer,</span> I thrive on 
            <span className="italic text-primary/80">crafting exceptional web experiences</span> that push 
            the boundaries of innovation. <span className="font-medium text-foreground/80">My journey</span> is 
            defined by a relentless pursuit of growth, where each project is an opportunity to 
            <span className="font-semibold text-primary">transform ideas into impactful digital solutions</span>.
          </p>
        </div>

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
                Crafting responsive and interactive web interfaces using Next.js, React, and Tailwind CSS
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
                Building scalable server-side applications with Node.js, Express, and MongoDB
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
                Continuously expanding skills at Virtual University of Pakistan, embracing new technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
