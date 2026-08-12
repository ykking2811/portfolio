import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import TextScrambler from "@/components/TextScrambler";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden w-full max-w-4xl mx-auto text-center -mt-16">
        <div className="z-10 animate-fade-in">
          <div className="inline-flex gap-2 mb-6 flex-wrap justify-center animate-fade-in stagger-1">
            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-surface-container-high border border-outline-variant text-secondary-fixed hover:border-primary/40 hover:scale-105 transition-all duration-200 cursor-default">Gaming</span>
            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-surface-container-high border border-outline-variant text-secondary-fixed hover:border-primary/40 hover:scale-105 transition-all duration-200 cursor-default">3D Design</span>
            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-surface-container-high border border-outline-variant text-secondary-fixed hover:border-primary/40 hover:scale-105 transition-all duration-200 cursor-default">Riding</span>
            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-surface-container-high border border-outline-variant text-secondary-fixed hover:border-primary/40 hover:scale-105 transition-all duration-200 cursor-default">Reading</span>
            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-surface-container-high border border-outline-variant text-secondary-fixed hover:border-primary/40 hover:scale-105 transition-all duration-200 cursor-default">Embedded + Electronics</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-on-surface tracking-tighter mb-4 animate-fade-in stagger-2 max-w-full">
            <span className="inline-block sm:inline whitespace-nowrap"><TextScrambler text="Yashodhan Kulkarni" delay={150} /></span>{" "}
            <span className="text-primary inline-block">(YK)</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-body mb-2 animate-fade-in stagger-3">Backend + Embedded Systems Developer</p>
          <p className="text-secondary-fixed mb-10 text-lg animate-fade-in stagger-4">Building and shipping robust systems from silicon to the cloud.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in stagger-5">
            <Link className="w-full md:w-auto px-8 py-4 bg-primary text-on-primary font-bold rounded-lg hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-center shadow-lg hover:shadow-primary/25" href="/projects">
              View Projects
            </Link>
            <Link className="w-full md:w-auto px-8 py-4 border border-outline text-on-surface font-bold rounded-lg hover:bg-surface-container hover:border-primary/50 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-center" href="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <span className="material-symbols-outlined text-secondary hover:text-primary transition-colors">expand_more</span>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-32 animate-fade-in">
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl font-headline font-bold text-on-surface mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="Node-Sync"
            description="Real-time synchronization engine for distributed backend clusters."
            icon="sync"
            tags={["Node.js", "WebSockets", "Redis"]}
            link="https://github.com/ykking2811"
          />
          <ProjectCard 
            title="PID-Learning-Process"
            description="Embedded control system simulator for Proportional-Integral-Derivative loops."
            icon="settings_input_component"
            tags={["C++", "Arduino", "Control Theory"]}
            link="https://github.com/ykking2811"
          />
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="inline-flex items-center gap-1 text-primary hover:underline decoration-primary underline-offset-4 font-bold hover:translate-x-1 transition-transform duration-200">
            View All Projects &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
