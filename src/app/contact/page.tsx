import Link from "next/link";
import TextScrambler from "@/components/TextScrambler";

export default function Contact() {
  return (
    <main className="pt-16 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh] animate-fade-in">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface mb-6 animate-fade-in stagger-1">
          <TextScrambler text="Let's build" delay={150} /> <span className="text-primary"><TextScrambler text="together." delay={450} /></span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl font-body leading-relaxed animate-fade-in stagger-2">
          Whether it&apos;s a technical query about Node.js or a collaborative project in embedded systems, I&apos;m always open to meaningful connections.
        </p>
      </section>

      {/* Bento Grid Contact Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 animate-fade-in stagger-3">
        {/* Email Card */}
        <div className="md:col-span-8 group relative overflow-hidden bg-surface-container border border-outline-variant rounded-xl p-8 flex flex-col justify-between hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
          <div className="z-10">
            <span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform duration-300" style={{ fontSize: "40px" }}>mail</span>
            <h3 className="text-2xl font-headline font-bold mb-2">Direct Inquiry</h3>
            <p className="text-on-surface-variant mb-8 max-w-sm">
              For collaborations, speaking engagements, or just a quick technical chat.
            </p>
          </div>
          <div className="flex items-center justify-between z-10">
            <a className="text-xl md:text-3xl font-mono text-on-surface tracking-tight break-all hover:text-primary transition-colors" href="mailto:kulkarnis.yashodhan@gmail.com">
              kulkarnis.yashodhan@gmail.com
            </a>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </div>
          {/* Background visual */}
          <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined" style={{ fontSize: "240px" }}>alternate_email</span>
          </div>
        </div>

        {/* LinkedIn Card */}
        <a 
          className="md:col-span-4 group bg-surface-container border border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:-translate-y-1 active:scale-95 transition-all duration-300" 
          href="https://www.linkedin.com/in/yashodhan-k-55ab15229/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-primary mb-6 group-hover:scale-110 transition-transform duration-300" style={{ fontSize: "48px", fontVariationSettings: "'FILL' 1" }}>share</span>
          <h3 className="text-xl font-headline font-bold mb-2">LinkedIn</h3>
          <p className="text-sm text-on-surface-variant mb-6 uppercase tracking-widest">Connect & Follow</p>
          <div className="px-6 py-2 border border-outline rounded-full text-sm group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
            View Profile
          </div>
        </a>

        {/* GitHub Card */}
        <a 
          className="md:col-span-4 group bg-surface-container border border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:-translate-y-1 active:scale-95 transition-all duration-300" 
          href="https://github.com/ykking2811" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className="bg-surface-container-high p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-tertiary" style={{ fontSize: "48px" }}>code_blocks</span>
          </div>
          <h3 className="text-xl font-headline font-bold mb-2">GitHub</h3>
          <p className="text-sm text-on-surface-variant mb-6 uppercase tracking-widest">Open Source Work</p>
          <div className="text-primary font-mono font-bold">@ykking2811</div>
        </a>

        {/* Location/Map Placeholder */}
        <div className="md:col-span-8 h-80 bg-surface-container border border-outline-variant rounded-xl overflow-hidden relative group">
          <img 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCovXVEmKV-oTH9OxJtEL1VVO8TBPN20dGSRLxOjT-UZUBdDzNik2HQX_RHBIES4HNe6ON4civ_1Zkkn92pIY0Cfxn7rSQx_QnbbCKXUwj00lcCc6Bi6HC4MqOP-Wbpa9Brdw0aPTHwE2zl5ROeDoCLwSMwmq45GW5SZGzGosCiC1kZSq8bwGNMzFHwh99D6o23PcdnpUhXtb_jZ40gplJvSNbFGkmEC1FKcKsAA9H0o_4zhEqV0vMFDxQ5dNQIdIsFtxR8KFoE-G4" 
            alt="Map Visualization" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute bottom-8 left-8 flex items-center gap-3">
            <div className="w-3 h-3 bg-tertiary rounded-full animate-pulse shadow-[0_0_12px_#34d399]"></div>
            <span className="text-sm font-body uppercase tracking-widest text-on-surface">Currently Operating Remotely</span>
          </div>
        </div>
      </div>

      {/* Minimal Say Hello Section */}
      <section className="mt-24 pt-24 border-t border-outline-variant text-center animate-fade-in stagger-4">
        <h2 className="text-3xl font-headline font-bold mb-4">Ready to start?</h2>
        <p className="text-on-surface-variant mb-10 font-body">
          I&apos;m usually available for new projects or technical consulting.
        </p>
        <a 
          className="inline-flex items-center gap-4 bg-on-surface text-background px-10 py-5 rounded-lg text-xl font-bold hover:bg-primary hover:text-on-primary hover:-translate-y-0.5 active:scale-95 transition-all duration-200 group shadow-lg hover:shadow-primary/25" 
          href="mailto:kulkarnis.yashodhan@gmail.com"
        >
          Say Hello
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
        </a>
      </section>
    </main>
  );
}
