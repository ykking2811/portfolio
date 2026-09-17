import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

async function getRepositories() {
  try {
    const res = await fetch("https://api.github.com/users/ykking2811/repos?sort=pushed&direction=desc&per_page=15", {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!res.ok) {
      return [];
    }
    
    const data = await res.json();
    
    // Filter out forks and return top 6
    return data
      .filter((repo: any) => !repo.fork)
      .slice(0, 6)
      .map((repo: any) => {
        const lang = repo.language?.toLowerCase() || '';
        const name = repo.name.toLowerCase();
        let icon = 'code';
        
        if (name.includes('sync') || name.includes('network')) icon = 'hub';
        else if (name.includes('pid') || name.includes('control')) icon = 'settings_input_component';
        else if (name.includes('sahaayata') || name.includes('link')) icon = 'diversity_1';
        else if (lang === 'python') icon = 'terminal';
        else if (lang === 'java' || lang === 'c++') icon = 'memory';
        else if (lang === 'typescript' || lang === 'javascript') icon = 'javascript';
        
        return {
          id: repo.id,
          title: repo.name,
          description: repo.description || "No description provided.",
          icon: icon,
          tags: [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 3),
          link: repo.html_url,
        };
      });
  } catch (error) {
    console.error("Failed to fetch repositories:", error);
    return [];
  }
}

export default async function Projects() {
  const projects = await getRepositories();

  return (
    <main className="pt-16 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface tracking-tighter mb-4">
            Crafting Systems<br />
            <span className="text-primary">with Precision.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Explore a collection of engineered solutions, from node synchronization protocols to intelligent control systems and community-focused platforms.
          </p>
        </div>

        {/* Discrete AI Catalog Access Button */}
        <Link
          href="/ai-catalog"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container border border-outline-variant text-xs text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all font-mono group self-start md:self-end"
        >
          <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse" />
          <span>AI Visual Archive</span>
          <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
        </Link>
      </header>

      {/* Featured Project: JARVIS-OS */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
          <h2 className="text-2xl font-headline font-bold text-on-surface uppercase tracking-widest">Major Feature</h2>
        </div>
        
        <div className="bg-surface-container border border-outline-variant rounded-xl overflow-hidden flex flex-col lg:flex-row group hover:border-tertiary/50 transition-colors duration-300 relative">
          <div className="lg:w-2/5 p-10 flex flex-col justify-center bg-surface-container-low border-r border-outline-variant relative z-10">
            <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">JARVIS-OS</h3>
            <p className="text-on-surface-variant mb-6 text-lg leading-relaxed">
              Offline-first, JARVIS-style local AI assistant running completely on-device. A privacy-preserving powerhouse featuring chat, code, vision/PDF reading, image generation, embedded dev, and voice in/out.
            </p>
            <p className="text-tertiary font-medium text-sm tracking-wide uppercase mb-8">Nothing leaves the machine.</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1.5 bg-surface-container-highest border border-outline-variant rounded-md text-xs text-on-surface font-mono font-bold tracking-tight">Local LLM</span>
              <span className="px-3 py-1.5 bg-surface-container-highest border border-outline-variant rounded-md text-xs text-on-surface font-mono font-bold tracking-tight">Privacy-First</span>
              <span className="px-3 py-1.5 bg-surface-container-highest border border-outline-variant rounded-md text-xs text-on-surface font-mono font-bold tracking-tight">Voice / Vision</span>
            </div>
          </div>
          <div className="lg:w-3/5 relative overflow-hidden bg-surface-container-highest flex items-center justify-center min-h-[300px]">
             {/* Decorative tech background */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tertiary/40 via-surface-container-highest to-surface-container-highest"></div>
             <div className="text-center relative z-10 p-8">
                <span className="material-symbols-outlined text-[120px] text-tertiary/40 group-hover:text-tertiary/80 transition-colors duration-500 drop-shadow-lg">memory</span>
                <p className="mt-4 font-mono text-xs text-tertiary/60 tracking-widest uppercase">System Online // All Ports Secured</p>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <h2 className="text-2xl font-headline font-bold text-on-surface uppercase tracking-widest">Recent Activity</h2>
        </div>
        
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: any) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                icon={project.icon}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-surface-container-low border border-outline-variant rounded-xl">
            <p className="text-on-surface-variant">Could not load recent projects. Please check back later.</p>
          </div>
        )}
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
              <a className="material-symbols-outlined text-secondary hover:text-primary transition-colors cursor-pointer">link</a>
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
