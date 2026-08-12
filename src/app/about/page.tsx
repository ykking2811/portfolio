import Image from "next/image";
import TextScrambler from "@/components/TextScrambler";

export default function About() {
  return (
    <main className="pt-16 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* Hero / Professional Summary */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start animate-fade-in">
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high border border-outline-variant rounded-full text-primary text-xs font-medium tracking-wide animate-fade-in stagger-1">
            <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></span>
            BUILDING SYSTEMS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-on-surface animate-fade-in stagger-2">
            <TextScrambler text="Architecting logic" delay={150} /> <br />
            <span className="text-secondary"><TextScrambler text="layer by layer." delay={450} /></span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl animate-fade-in stagger-3">
            I am Yashodhan Kulkarni, a developer focused on the intersection of hardware and software. My approach is project-driven, transforming complex requirements into efficient code using <span className="text-on-surface">Java, Python, C++, and Node.js</span>. From high-level backend scalability to low-level <span className="text-on-surface">Embedded Systems</span> optimization, I build with precision.
          </p>
          <div className="flex flex-wrap gap-3 pt-4 animate-fade-in stagger-4">
            <span className="px-4 py-1.5 bg-surface-container border border-outline-variant rounded text-sm text-secondary-fixed hover:border-primary/50 hover:text-primary transition-colors cursor-default">Java</span>
            <span className="px-4 py-1.5 bg-surface-container border border-outline-variant rounded text-sm text-secondary-fixed hover:border-primary/50 hover:text-primary transition-colors cursor-default">Python</span>
            <span className="px-4 py-1.5 bg-surface-container border border-outline-variant rounded text-sm text-secondary-fixed hover:border-primary/50 hover:text-primary transition-colors cursor-default">C++</span>
            <span className="px-4 py-1.5 bg-surface-container border border-outline-variant rounded text-sm text-secondary-fixed hover:border-primary/50 hover:text-primary transition-colors cursor-default">Node.js</span>
            <span className="px-4 py-1.5 bg-surface-container border border-outline-variant rounded text-sm text-secondary-fixed hover:border-primary/50 hover:text-primary transition-colors cursor-default">Embedded Systems</span>
          </div>
        </div>
        <div className="md:col-span-5 relative group animate-fade-in stagger-3">
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-tertiary/20 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
          <div className="relative bg-surface-container rounded-xl border border-outline-variant overflow-hidden aspect-square">
            <img 
              alt="Cybersecurity and code" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3UkSbxUi2P24cPfLp8CGkeUnL2yd6nwxZnzeTY6x7M0vLfSGIW-TzrS4CdB6rXoTN5NPm2r1tRhsVlapG3H5Jmic1MzQCzQI-74S1T850apuYeYOmV5KSThpPtyr_fteKyQX_69-4KmuZiEx0UMRrTgltdtZbU8qnbTplFveDxKcPaVwSDmjTX4H1hNlGyWzA-9rNaaCsPVhQFF6ihsIdPYJOIrd4K8vb8ywZoPL3TL5JnevSbjhv59i15SSISMQ6cvcMSEF9M0g" 
            />
          </div>
        </div>
      </section>

      {/* Bento Now & Hobbies */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* "Now" Section */}
        <div className="md:col-span-2 bg-surface-container border border-outline-variant rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">sensors</span>
              Now
            </h2>
            <p className="text-on-surface-variant text-lg">
              Currently, I am deep-diving into <span className="text-tertiary">Embedded System Optimizations</span>, focusing on reducing latency in real-time data processing. Simultaneously, I&apos;m exploring <span className="text-primary">Backend Scalability</span> patterns to handle high-throughput distributed systems.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4 p-4 bg-surface-container-lowest rounded-lg border border-outline-variant">
            <div className="w-10 h-10 rounded bg-primary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">terminal</span>
            </div>
            <div>
              <p className="text-xs text-secondary-fixed font-bold tracking-widest uppercase">Latest Sprint</p>
              <p className="text-sm text-on-surface">Refining PID controllers for learning algorithms.</p>
            </div>
          </div>
        </div>

        {/* Outside the Building */}
        <div className="md:col-span-1 bg-surface-container border border-outline-variant rounded-xl p-8 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">explore</span>
            Outside the Building
          </h2>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high border border-outline-variant rounded-full text-sm hover:border-primary transition-colors cursor-default">
              <span className="material-symbols-outlined text-sm">sports_esports</span>
              Gaming
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high border border-outline-variant rounded-full text-sm hover:border-primary transition-colors cursor-default">
              <span className="material-symbols-outlined text-sm">deployed_code</span>
              3D Designing
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high border border-outline-variant rounded-full text-sm hover:border-primary transition-colors cursor-default">
              <span className="material-symbols-outlined text-sm">motorcycle</span>
              Riding
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high border border-outline-variant rounded-full text-sm hover:border-primary transition-colors cursor-default">
              <span className="material-symbols-outlined text-sm">menu_book</span>
              Reading
            </div>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            When not at the terminal, I&apos;m often exploring 3D printing possibilities or navigating open roads. These hobbies fuel my curiosity for how things work, whether digital or mechanical.
          </p>
        </div>
      </section>

      {/* Achievements Mini-section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
        <div className="order-2 md:order-1 relative h-64 bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden">
          <img 
            alt="3D Printing Lab" 
            className="w-full h-full object-cover opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXrnRFEGB4xPKG_UyJ33oH6fj-3vZXsGB1WAw9pNJ6NHgVj0w00kbht3dPqtNojHCagLNJdzvAx07LXrg88vkT-pSi8p7Iia6HC3W7zq8goKe1K5FkTRGXKBJ7EmuweUk5-be3_EPtIJ1gtsjWeL6cavdhItQLcZYs3hW-1kwq_2elMQlhtpKJiWLR9Cso_P1_1em5KncgCwW5xwFFOVc4JqdMJVrDqqYybXEppKRx1HaXjZXKKM8rry6uZjyUDjmg0oc_rhoBSHs" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6 bg-background/60 backdrop-blur-md rounded border border-outline-variant">
              <span className="text-4xl font-bold text-primary">ENTC</span>
              <p className="text-xs uppercase tracking-[0.2em] text-secondary-fixed">Workshop Host</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <h3 className="text-3xl font-bold tracking-tight">Sharing Knowledge</h3>
          <p className="text-on-surface-variant text-lg">
            I recently hosted a specialized workshop for ENTC students focused on <span className="text-on-surface">3D Printing and Design</span>. Teaching others the intricacies of prototyping reinforced my belief that the best way to master a skill is to build and then explain.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-secondary-fixed">
              <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Design Principles for Manufacturing
            </li>
            <li className="flex items-center gap-3 text-secondary-fixed">
              <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Rapid Prototyping Workflows
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
