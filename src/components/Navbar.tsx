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
            <Image src={logo} alt="YK Logo" width={32} height={32} className="rounded" />
          </Link>
          <div className="hidden md:flex gap-8 items-center font-body text-label-md tracking-tight">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-on-surface transition-colors"
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`${
                pathname === "/projects" ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-on-surface transition-colors"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-on-surface transition-colors"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-on-surface transition-colors"
              }`}
            >
              Contact
            </Link>
            <button className="bg-primary text-on-primary px-5 py-2 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all text-sm">
              Resume
            </button>
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
