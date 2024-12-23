"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Activate background after 50px scroll
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 
      transition-all duration-300 ease-in-out
      ${isScrolled 
        ? 'bg-background-light/80 backdrop-blur-md border-b border-border/40' 
        : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className={`
              text-2xl font-bold 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-purple-400 to-pink-600 via-orange-500
              transition-all duration-300
              ${isScrolled ? 'opacity-100' : 'opacity-70 hover:opacity-100'}
            `}
          >
            Zaid
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-sm font-medium 
                    transition-all duration-300
                    ${isScrolled 
                      ? 'text-foreground-muted hover:text-primary hover:bg-primary/10 px-2 py-1 rounded-md' 
                      : 'text-foreground/70 hover:text-foreground hover:bg-foreground/10 px-2 py-1 rounded-md'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <ModeToggle />
              <Button 
                asChild 
                size="sm" 
                variant="outline"
                className={`
                  transition-all duration-300
                  ${isScrolled 
                    ? 'border-primary/30 hover:border-primary bg-background-light hover:bg-background-dark text-foreground hover:text-primary' 
                    : 'border-foreground/30 hover:border-foreground bg-foreground/10 text-foreground hover:bg-foreground/20'
                  }
                `}
              >
                <Link href="/resume.pdf" target="_blank">
                  Resume
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <button 
              onClick={toggleMenu}
              className={`
                transition-all duration-300
                ${isScrolled 
                  ? 'text-foreground-muted hover:text-primary hover:bg-primary/10 p-2 rounded-md' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-foreground/10 p-2 rounded-md'
                }
              `}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`
            md:hidden absolute left-0 right-0 
            transition-all duration-300
            ${isScrolled 
              ? 'bg-background-light border-b border-border/40 shadow-lg' 
              : 'bg-background/80 border-b border-foreground/10 shadow-md'
            }
          `}>
            <div className="px-4 pt-2 pb-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className={`
                    block py-2 text-sm font-medium 
                    transition-all duration-300
                    ${isScrolled 
                      ? 'text-foreground-muted hover:text-primary hover:bg-primary/10 px-2 rounded-md' 
                      : 'text-foreground/70 hover:text-foreground hover:bg-foreground/10 px-2 rounded-md'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                asChild 
                className={`
                  w-full mt-2 
                  transition-all duration-300
                  ${isScrolled 
                    ? 'border-primary/30 hover:border-primary bg-background-light hover:bg-background-dark text-foreground hover:text-primary' 
                    : 'border-foreground/30 hover:border-foreground bg-foreground/10 text-foreground hover:bg-foreground/20'
                  }
                `}
                variant="outline"
              >
                <Link href="/resume.pdf" target="_blank">
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
