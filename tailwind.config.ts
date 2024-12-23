import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			// Unique Color Palette
  			background: {
  				DEFAULT: 'hsl(220, 13%, 16%)',  // Deep Charcoal
  				light: 'hsl(220, 15%, 20%)',    // Slightly Lighter Charcoal
  				dark: 'hsl(220, 10%, 10%)'      // Deeper Charcoal
  			},
  			foreground: {
  				DEFAULT: 'hsl(0, 0%, 95%)',     // Soft White
  				muted: 'hsl(0, 0%, 70%)'        // Muted Gray
  			},
  			primary: {
  				DEFAULT: 'hsl(210, 78%, 45%)',  // Deep Ocean Blue
  				light: 'hsl(210, 70%, 50%)',    // Brighter Blue
  				dark: 'hsl(210, 80%, 40%)'      // Deeper Blue
  			},
  			secondary: {
  				DEFAULT: 'hsl(290, 74%, 50%)',  // Deep Purple
  				light: 'hsl(290, 70%, 55%)',    // Brighter Purple
  				dark: 'hsl(290, 80%, 45%)'      // Deeper Purple
  			},
  			accent: {
  				DEFAULT: 'hsl(340, 74%, 55%)',  // Vibrant Magenta
  				light: 'hsl(340, 70%, 60%)',    // Brighter Magenta
  				dark: 'hsl(340, 80%, 50%)'      // Deeper Magenta
  			},
  			muted: {
  				DEFAULT: 'hsl(215, 20%, 25%)',  // Soft Muted Gray
  				foreground: 'hsl(215, 20%, 40%)' // Muted Foreground
  			},
  			border: 'hsl(220, 15%, 25%)',       // Border Color
  			input: 'hsl(220, 15%, 30%)',        // Input Background
  			ring: 'hsl(210, 70%, 50%)',         // Focus Ring
  			destructive: {
  				DEFAULT: 'hsl(0, 84%, 60%)',    // Bright Red
  				foreground: 'hsl(0, 0%, 100%)' // White Text on Red
  			},
  			chart: {
  				'1': 'hsl(10, 80%, 60%)',   // Warm Orange
  				'2': 'hsl(190, 95%, 50%)',  // Bright Cyan
  				'3': 'hsl(280, 70%, 55%)',  // Deep Violet
  				'4': 'hsl(50, 95%, 55%)',   // Vibrant Yellow
  				'5': 'hsl(130, 60%, 50%)'   // Fresh Green
  			}
  		},
  		keyframes: {
  			spinSlow: {
  				'0%': { transform: 'rotate(0deg)' },
  				'100%': { transform: 'rotate(360deg)' }
  			},
  			pulseSlight: {
  				'0%, 100%': { opacity: '0.3' },
  				'50%': { opacity: '0.5' }
  			}
  		},
  		animation: {
  			'spin-slow': 'spinSlow 10s linear infinite',
  			'pulse-subtle': 'pulseSlight 3s ease-in-out infinite'
  		},
  		borderRadius: {
  			lg: '0.5rem',
  			md: 'calc(0.5rem - 2px)',
  			sm: 'calc(0.5rem - 4px)'
  		},
  		// Custom Gradient Backgrounds
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'tech-gradient': 'linear-gradient(135deg, hsl(210, 78%, 45%), hsl(290, 74%, 50%), hsl(340, 74%, 55%))',
  			'subtle-gradient': 'linear-gradient(to right, hsl(220, 13%, 16%), hsl(220, 15%, 20%))'
  		}
  	},
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
