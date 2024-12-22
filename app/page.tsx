import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-background via-background to-accent-foreground/10 dark:from-background dark:via-background dark:to-accent-foreground/10 p-4 sm:p-8">
      <div className="max-w-4xl w-full mx-auto text-center space-y-8">
        <div className="relative group">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
            Zaid Hafeez
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            MENN Stack Developer | Next.js & Tailwind Enthusiast
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects" className="flex items-center gap-2">
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
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m a passionate developer specializing in building modern web applications 
            with a focus on creating intuitive and performant user experiences. 
            Currently expanding my skills in Next.js and Tailwind CSS while studying 
            at the Virtual University of Pakistan.
          </p>
        </div>
      </div>
    </div>
  );
}
