import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ParticleBackground } from "@/components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zaid Hafeez | MENN Stack Developer",
  description: "Portfolio of Zaid Hafeez, a passionate MENN Stack Developer specializing in Next.js and Tailwind CSS",
  keywords: ["Next.js", "React", "Tailwind CSS", "Web Development", "Portfolio"],
  authors: [{ name: "Zaid Hafeez" }],
  openGraph: {
    title: "Zaid Hafeez | MENN Stack Developer",
    description: "Portfolio of Zaid Hafeez, a passionate MENN Stack Developer specializing in Next.js and Tailwind CSS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased relative`}>
        <ParticleBackground />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
