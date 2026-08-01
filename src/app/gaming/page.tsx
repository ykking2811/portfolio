import Link from "next/link";
import TextScrambler from "@/components/TextScrambler";

export default function Gaming() {
  const games = [
    {
      title: "Cyberpunk 2077",
      status: "Playing",
      genre: "Action RPG / Sci-Fi",
      platform: "PC",
      rating: "5/5",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiIrLGf3ld4D9wcbZ7TikV6svUm2jnpEtI-kIXlOlGyD13U_zgr2_s2ifTsWfUvNuTNllSNTcn882rswZh_-JLqfdw_5RdskU4sC3Ij04s0YpfTRgOHEHQToOJd6Tw3NlrCXc32J9oafHsW9sJ1JW_OOegL4wIdm_qcqeAqZPCe2Co8Jcvv0TOJeyqscqrCOxhWd52aAM7wrDTYo3vUUCHOKDLmPjR9NYcZ7rQbVhpnNwFNJghIbbLTikx41XYG8kghpkxZ73nOdw",
      badgeColor: "bg-tertiary text-on-tertiary"
    },
    {
      title: "Elden Ring",
      status: "Completed",
      genre: "Action RPG",
      platform: "PC",
      rating: "5/5",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3UkSbxUi2P24cPfLp8CGkeUnL2yd6nwxZnzeTY6x7M0vLfSGIW-TzrS4CdB6rXoTN5NPm2r1tRhsVlapG3H5Jmic1MzQCzQI-74S1T850apuYeYOmV5KSThpPtyr_fteKyQX_69-4KmuZiEx0UMRrTgltdtZbU8qnbTplFveDxKcPaVwSDmjTX4H1hNlGyWzA-9rNaaCsPVhQFF6ihsIdPYJOIrd4K8vb8ywZoPL3TL5JnevSbjhv59i15SSISMQ6cvcMSEF9M0g",
      badgeColor: "bg-primary text-on-primary"
    },
    {
      title: "Red Dead Redemption 2",
      status: "Mastered",
      genre: "Open World / Action",
      platform: "PC",
      rating: "5/5",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXrnRFEGB4xPKG_UyJ33oH6fj-3vZXsGB1WAw9pNJ6NHgVj0w00kbht3dPqtNojHCagLNJdzvAx07LXrg88vkT-pSi8p7Iia6HC3W7zq8goKe1K5FkTRGXKBJ7EmuweUk5-be3_EPtIJ1gtsjWeL6cavdhItQLcZYs3hW-1kwq_2elMQlhtpKJiWLR9Cso_P1_1em5KncgCwW5xwFFOVc4JqdMJVrDqqYybXEppKRx1HaXjZXKKM8rry6uZjyUDjmg0oc_rhoBSHs",
      badgeColor: "bg-surface-container-highest text-secondary-fixed"
    }
  ];

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

      {/* Featured Games Grid */}
      <section>
        <h3 className="text-2xl font-headline font-bold mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-tertiary">videogame_asset</span>
          Recent & Current Log
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game, idx) => (
            <div
              key={game.title}
              className="glass-card rounded-xl overflow-hidden group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="h-48 relative overflow-hidden bg-surface-container-highest">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${game.badgeColor}`}>
                    {game.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {game.title}
                </h4>
                <div className="flex justify-between items-center text-sm text-on-surface-variant">
                  <span>{game.genre}</span>
                  <span className="font-mono text-tertiary">{game.platform}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
