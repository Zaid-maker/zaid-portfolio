"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className={`
            group 
            transition-all 
            duration-300 
            ${isScrolled 
              ? 'border-primary/30 hover:border-primary bg-background-light hover:bg-background-dark' 
              : 'border-foreground/30 hover:border-foreground bg-foreground/10 hover:bg-foreground/20'
            }
          `}
        >
          <Sun 
            className={`
              h-[1.2rem] w-[1.2rem] 
              rotate-0 scale-100 
              transition-all 
              dark:-rotate-90 dark:scale-0 
              group-hover:text-primary 
              ${isScrolled 
                ? 'text-foreground-muted group-hover:text-primary' 
                : 'text-foreground/70 group-hover:text-foreground'
              }
            `} 
          />
          <Moon 
            className={`
              absolute 
              h-[1.2rem] w-[1.2rem] 
              rotate-90 scale-0 
              transition-all 
              dark:rotate-0 dark:scale-100 
              group-hover:text-primary 
              ${isScrolled 
                ? 'text-foreground-muted group-hover:text-primary' 
                : 'text-foreground/70 group-hover:text-foreground'
              }
            `} 
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="border-border/40 bg-background-light shadow-lg"
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className={`
            cursor-pointer 
            transition-all 
            duration-300 
            hover:bg-primary/10 
            ${theme === 'light' ? 'bg-primary/20 text-primary' : ''}
          `}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className={`
            cursor-pointer 
            transition-all 
            duration-300 
            hover:bg-primary/10 
            ${theme === 'dark' ? 'bg-primary/20 text-primary' : ''}
          `}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className={`
            cursor-pointer 
            transition-all 
            duration-300 
            hover:bg-primary/10 
            ${theme === 'system' ? 'bg-primary/20 text-primary' : ''}
          `}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
