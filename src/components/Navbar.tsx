"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.jpg";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
        <div className="flex justify-between items-center h-16 px-6 md:px-12 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="YK Logo" width={32} height={32} className="rounded" suppressHydrationWarning />
          </Link>
          <div className="flex md:hidden items-center gap-3">
            <Link 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-3 py-1.5 rounded-md font-bold text-xs inline-flex items-center justify-center shadow"
            >
              Resume
            </Link>
          </div>
          <div className="hidden md:flex gap-8 items-center font-body text-label-md tracking-tight">
            <Link
              href="/"
              className={`relative py-1 transition-all duration-200 ${
                pathname === "/" ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-on-surface-variant hover:text-on-surface active:scale-95"
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`relative py-1 transition-all duration-200 ${
                pathname === "/projects" ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-on-surface-variant hover:text-on-surface active:scale-95"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`relative py-1 transition-all duration-200 ${
                pathname === "/about" ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-on-surface-variant hover:text-on-surface active:scale-95"
              }`}
            >
              About
            </Link>
            <Link
              href="/gaming"
              className={`relative py-1 transition-all duration-200 ${
                pathname === "/gaming" ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-on-surface-variant hover:text-on-surface active:scale-95"
              }`}
            >
              Gaming
            </Link>
            <Link
              href="/contact"
              className={`relative py-1 transition-all duration-200 ${
                pathname === "/contact" ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-on-surface-variant hover:text-on-surface active:scale-95"
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-5 py-2 rounded-lg font-bold hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-sm inline-flex items-center justify-center shadow-md hover:shadow-primary/20"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation Bar (Mobile) */}
      <nav className="fixed bottom-0 w-full z-50 md:hidden bg-surface-container-high border-t border-outline-variant shadow-2xl">
        <div className="flex justify-around items-center h-16 pb-safe">
          <Link
            href="/"
            className={`flex flex-col items-center justify-center transition-all ${pathname === "/" ? "text-primary" : "text-on-surface-variant active:bg-surface-container-highest"}`}
          >
            <span className="material-symbols-outlined" style={pathname === "/" ? { fontVariationSettings: "'FILL' 1" } : {}}>home</span>
            <span className="font-body text-[10px] uppercase tracking-widest mt-1">Home</span>
          </Link>
          <Link
            href="/projects"
            className={`flex flex-col items-center justify-center transition-all ${pathname === "/projects" ? "text-primary" : "text-on-surface-variant active:bg-surface-container-highest"}`}
          >
            <span className="material-symbols-outlined" style={pathname === "/projects" ? { fontVariationSettings: "'FILL' 1" } : {}}>work_outline</span>
            <span className="font-body text-[10px] uppercase tracking-widest mt-1">Projects</span>
          </Link>
          <Link
            href="/gaming"
            className={`flex flex-col items-center justify-center transition-all ${pathname === "/gaming" ? "text-primary" : "text-on-surface-variant active:bg-surface-container-highest"}`}
          >
            <span className="material-symbols-outlined" style={pathname === "/gaming" ? { fontVariationSettings: "'FILL' 1" } : {}}>sports_esports</span>
            <span className="font-body text-[10px] uppercase tracking-widest mt-1">Gaming</span>
          </Link>
          <Link
            href="/about"
            className={`flex flex-col items-center justify-center transition-all ${pathname === "/about" ? "text-primary" : "text-on-surface-variant active:bg-surface-container-highest"}`}
          >
            <span className="material-symbols-outlined" style={pathname === "/about" ? { fontVariationSettings: "'FILL' 1" } : {}}>person_outline</span>
            <span className="font-body text-[10px] uppercase tracking-widest mt-1">About</span>
          </Link>
          <Link
            href="/contact"
            className={`flex flex-col items-center justify-center transition-all ${pathname === "/contact" ? "text-primary" : "text-on-surface-variant active:bg-surface-container-highest"}`}
          >
            <span className="material-symbols-outlined" style={pathname === "/contact" ? { fontVariationSettings: "'FILL' 1" } : {}}>mail_outline</span>
            <span className="font-body text-[10px] uppercase tracking-widest mt-1">Contact</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
