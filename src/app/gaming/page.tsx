import Link from "next/link";
import TextScrambler from "@/components/TextScrambler";

export default function Gaming() {

  return (
    <main className="pt-16 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh] animate-fade-in">
      {/* Header */}
      <section className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high border border-outline-variant rounded-full text-primary text-xs font-medium tracking-wide mb-6 animate-fade-in stagger-1">
          <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></span>
          GAMING LOG
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface mb-6 animate-fade-in stagger-2">
          <TextScrambler text="Gaming HQ" delay={150} />
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl font-body leading-relaxed animate-fade-in stagger-3">
          Explore my gaming journey, current titles, wishlist, and stats powered by GG app.
        </p>
      </section>

      {/* GG App Integration Hero Card */}
      <section className="mb-16 bg-surface-container border border-outline-variant rounded-xl p-8 md:p-12 relative overflow-hidden group hover:border-primary/50 transition-all duration-300 animate-fade-in stagger-4">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">sports_esports</span>
            <span className="text-sm uppercase tracking-widest text-secondary-fixed font-bold">GG App Profile</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Follow <span className="text-primary">@yk_King</span> on GG
          </h2>
          <p className="text-on-surface-variant mb-8 text-base md:text-lg">
            Track my gameplay logs, reviews, completed titles, and upcoming gaming backlogs directly on my official GG App profile.
          </p>
          <a
            href="https://ggapp.io/yk_King"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-primary/25"
          >
            Visit GG Profile
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </div>
        <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="material-symbols-outlined" style={{ fontSize: "280px" }}>sports_esports</span>
        </div>
      </section>

      {/* GG App Live Profile Embed */}
      <section>
        <h3 className="text-2xl font-headline font-bold mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-tertiary">videogame_asset</span>
          Live Sync
        </h3>
        <div className="w-full bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden h-[800px] relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 bg-surface-container-lowest">
            <div className="flex flex-col items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined animate-spin">refresh</span>
              <span>Syncing with GG App...</span>
            </div>
          </div>
          <iframe 
            src="https://ggapp.io/yk_King" 
            title="GG App Profile - yk_King"
            className="w-full h-full border-0 bg-transparent relative z-10"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
      </section>
    </main>
  );
}
