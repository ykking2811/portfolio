import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import TextScrambler from "@/components/TextScrambler";

export default function Projects() {
  return (
    <main className="pt-16 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface tracking-tighter mb-4">
          <TextScrambler text="Crafting Systems" delay={150} /><br />
          <span className="text-primary"><TextScrambler text="with Precision." delay={450} /></span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl">
          Explore a collection of engineered solutions, from node synchronization protocols to intelligent control systems and community-focused platforms.
        </p>
      </header>

      {/* Featured Projects - Bento Grid */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <h2 className="text-2xl font-headline font-bold text-on-surface uppercase tracking-widest">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Node-Sync (Major Card) */}
          <div className="md:col-span-8 bg-surface-container border border-outline-variant rounded-xl overflow-hidden flex flex-col md:flex-row group hover:border-primary/50 transition-colors duration-300">
            <div className="md:w-1/2 overflow-hidden bg-surface-container-highest">
              <img 
                alt="Node-Sync Visualization" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiIrLGf3ld4D9wcbZ7TikV6svUm2jnpEtI-kIXlOlGyD13U_zgr2_s2ifTsWfUvNuTNllSNTcn882rswZh_-JLqfdw_5RdskU4sC3Ij04s0YpfTRgOHEHQToOJd6Tw3NlrCXc32J9oafHsW9sJ1JW_OOegL4wIdm_qcqeAqZPCe2Co8Jcvv0TOJeyqscqrCOxhWd52aAM7wrDTYo3vUUCHOKDLmPjR9NYcZ7rQbVhpnNwFNJghIbbLTikx41XYG8kghpkxZ73nOdw" 
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-headline font-bold text-on-surface">Node-Sync</h3>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/ykking2811/Node-Sync" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
              <p className="text-on-surface-variant mb-6 flex-grow">
                A high-performance node synchronization protocol designed for distributed systems, ensuring data integrity across low-latency networks.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded text-xs text-primary font-mono">Node.js</span>
                <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded text-xs text-primary font-mono">Systems</span>
              </div>
              <details className="group/read">
                <summary className="list-none cursor-pointer text-primary font-bold flex items-center gap-1 group-hover/read:underline">
                  READ MORE <span className="material-symbols-outlined text-sm transition-transform group-open/read:rotate-180">expand_more</span>
                </summary>
                <div className="mt-4 text-sm text-on-surface-variant space-y-4 border-t border-outline-variant pt-4">
                  <p><strong className="text-on-surface">Problem:</strong> Data drift in highly decentralized IoT clusters during intermittent connectivity.</p>
                  <p><strong className="text-on-surface">Approach:</strong> Implementing a custom diff-based reconciliation algorithm using merkle trees.</p>
                  <p><strong className="text-on-surface">Features:</strong> Real-time conflict resolution, 99.9% uptime replication, and hardware-agnostic architecture.</p>
                </div>
              </details>
            </div>
          </div>

          {/* PID-Learning-Process */}
          <div className="md:col-span-4 bg-surface-container border border-outline-variant rounded-xl p-8 flex flex-col hover:border-primary/50 transition-colors duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">settings_input_component</span>
              </div>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/ykking2811/PID-Learning-Process" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
            <h3 className="text-xl font-headline font-bold text-on-surface mb-2">PID-Learning-Process</h3>
            <p className="text-on-surface-variant mb-6 text-sm">
              Interactive control system simulation for Proportional-Integral-Derivative controllers in automated environments.
            </p>
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded text-xs text-tertiary font-mono">Python</span>
              <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded text-xs text-tertiary font-mono">Embedded</span>
            </div>
            <details className="group/read">
              <summary className="list-none cursor-pointer text-primary font-bold flex items-center gap-1 group-hover/read:underline">
                READ MORE <span className="material-symbols-outlined text-sm transition-transform group-open/read:rotate-180">expand_more</span>
              </summary>
              <div className="mt-4 text-sm text-on-surface-variant space-y-4 border-t border-outline-variant pt-4">
                <p><strong className="text-on-surface">Problem:</strong> Complexity in tuning PID loops for non-linear industrial motor controllers.</p>
                <p><strong className="text-on-surface">Approach:</strong> Visualizing mathematical error correction through dynamic graph plotting.</p>
              </div>
            </details>
          </div>

          {/* Sahaayata-Link */}
          <div className="md:col-span-4 bg-surface-container border border-outline-variant rounded-xl p-8 flex flex-col hover:border-primary/50 transition-colors duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary">diversity_1</span>
              </div>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/ykking2811/Sahaayata-Link" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
            <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Sahaayata-Link</h3>
            <p className="text-on-surface-variant mb-6 text-sm">
              A community-driven support platform connecting volunteers with local aid requests during crises.
            </p>
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded text-xs text-primary font-mono">Java</span>
              <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded text-xs text-primary font-mono">Android</span>
            </div>
            <details className="group/read">
              <summary className="list-none cursor-pointer text-primary font-bold flex items-center gap-1 group-hover/read:underline">
                READ MORE <span className="material-symbols-outlined text-sm transition-transform group-open/read:rotate-180">expand_more</span>
              </summary>
              <div className="mt-4 text-sm text-on-surface-variant space-y-4 border-t border-outline-variant pt-4">
                <p><strong className="text-on-surface">Approach:</strong> Geolocation-based matching using real-time spatial databases.</p>
              </div>
            </details>
          </div>

          {/* Ticketer (Horizontal Feature) */}
          <div className="md:col-span-8 bg-surface-container border border-outline-variant rounded-xl overflow-hidden flex flex-col md:flex-row-reverse group hover:border-primary/50 transition-colors duration-300">
            <div className="md:w-1/2 overflow-hidden bg-surface-container-highest">
              <img 
                alt="Ticketer Visual" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWK-IfPmKhJGfnGIoIHZG-B7VNuxm55brIGwPSy2-PbNHX72Nw5whiYDTK9oXPM6iHiy3ExciR1EvvaiXuHlFit_FrMw8mqBV5TOEd1fOnBECDZcDrbBS_1QAEmQbBtJNY8jMFFaejFe2nEkxTEhhi_ox5_19M7aBxaIUWl90F-enK9pKuGGju_XXQtBFLVjrolGmGuwucp4MsSAkxZl0pBUzJxxyEXAhI177c5VPM8TClK-GFBTaVD_TaJdLetIVabQ8HOw0N5GE" 
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-headline font-bold text-on-surface">Ticketer</h3>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/ykking2811/Ticketer" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
              <p className="text-on-surface-variant mb-6 flex-grow">
                Advanced event ticketing system prioritizing security and anti-scalping measures through unique identifier hashing.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded text-xs text-tertiary font-mono">C++</span>
                <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded text-xs text-tertiary font-mono">Security</span>
              </div>
              <details className="group/read">
                <summary className="list-none cursor-pointer text-primary font-bold flex items-center gap-1 group-hover/read:underline">
                  READ MORE <span className="material-symbols-outlined text-sm transition-transform group-open/read:rotate-180">expand_more</span>
                </summary>
                <div className="mt-4 text-sm text-on-surface-variant space-y-4 border-t border-outline-variant pt-4">
                  <p><strong className="text-on-surface">Features:</strong> Fast-pass processing, encrypted QR generation, and real-time validation.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects List */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-secondary">folder_open</span>
          <h2 className="text-xl font-headline font-bold text-on-surface-variant uppercase tracking-widest">Other Experiments</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-low border border-outline-variant rounded p-6 hover:bg-surface-container transition-colors group">
            <div className="flex justify-between mb-4">
              <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">deployed_code</span>
              <Link href="/projects/3d-printing" className="material-symbols-outlined text-secondary hover:text-primary transition-colors cursor-pointer">link</Link>
            </div>
            <h4 className="font-headline font-bold text-on-surface mb-2">3D Printing</h4>
            <p className="text-sm text-on-surface-variant mb-4">
              Exploring advanced 3D printing techniques, material properties, and rapid prototyping workflows.
            </p>
            <div className="flex gap-2">
              <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Hardware</span>
              <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Design</span>
            </div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant rounded p-6 hover:bg-surface-container transition-colors group">
            <div className="flex justify-between mb-4">
              <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">memory</span>
              <a className="material-symbols-outlined text-secondary hover:text-primary transition-colors cursor-pointer">link</a>
            </div>
            <h4 className="font-headline font-bold text-on-surface mb-2">Embedded Designing</h4>
            <p className="text-sm text-on-surface-variant mb-4">
              Custom hardware solutions and low-level firmware development for microcontrollers.
            </p>
            <div className="flex gap-2">
              <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">C++</span>
              <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Embedded</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
