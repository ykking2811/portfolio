"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface AICatalogItem {
  id: string;
  title: string;
  filename: string;
  category: "Anime & Ghibli" | "Digital Art & Historical" | "Conceptual & Texture" | "Festive & Concepts";
  tool: string;
  aspect: "landscape" | "portrait" | "wide" | "square";
  spanClass: string;
  promptSnippet: string;
  year: string;
}

const AI_CATALOG_DATA: AICatalogItem[] = [
  {
    id: "1",
    title: "Independence Era Indian Diary & Quill",
    filename: "DALL·E 2023-10-14 20.30.55 - Create a digital art composition that transports the viewer to Indipendence era of Indian. In the foreground, position a diary at the bottom left corn.png",
    category: "Digital Art & Historical",
    tool: "DALL-E 3",
    aspect: "landscape",
    spanClass: "md:col-span-8 aspect-[16/9]",
    promptSnippet: "Digital art composition transporting viewer to Independence era India with classic diary and quill",
    year: "2023"
  },
  {
    id: "2",
    title: "Steaming Chai Tea Latte Study",
    filename: "Chai Tea Latte.png",
    category: "Conceptual & Texture",
    tool: "Generative AI",
    aspect: "square",
    spanClass: "md:col-span-4 aspect-square",
    promptSnippet: "Warm ambient studio render of steaming spiced tea in ceramic glassware",
    year: "2024"
  },
  {
    id: "3",
    title: "Ghibli Pastoral Meadow Study",
    filename: "a-great-thing-by-ghibli-v0-1sfyp.jpg",
    category: "Anime & Ghibli",
    tool: "AI Anime Diffusion",
    aspect: "landscape",
    spanClass: "md:col-span-5 aspect-[4/3]",
    promptSnippet: "Studio Ghibli style lush green valley with hand-painted cloud formations and soft sunlight",
    year: "2024"
  },
  {
    id: "4",
    title: "Heritage Indian Manuscripts & Quill",
    filename: "DALL·E 2023-10-14 20.31.34.png",
    category: "Digital Art & Historical",
    tool: "DALL-E 3",
    aspect: "landscape",
    spanClass: "md:col-span-7 aspect-[16/10]",
    promptSnippet: "Detailed historical desktop with vintage parchment paper, inkwell, and warm wooden table",
    year: "2023"
  },
  {
    id: "5",
    title: "Vasubaras Traditional Illumination",
    filename: "vasubaras .jpg",
    category: "Festive & Concepts",
    tool: "Photoshop & AI Synthesis",
    aspect: "wide",
    spanClass: "md:col-span-12 aspect-[21/9]",
    promptSnippet: "Festive Indian celebration concept with brass oil lamps, glowing marigolds, and atmospheric lighting",
    year: "2023"
  },
  {
    id: "6",
    title: "Futuristic Cyber Study Concept",
    filename: "Gemini_Generated_Image_a0scb5a0scb5a0sc.png",
    category: "Conceptual & Texture",
    tool: "Gemini Vision",
    aspect: "portrait",
    spanClass: "md:col-span-4 aspect-[3/4]",
    promptSnippet: "High-contrast neon workstation with glowing holographic interface wireframes",
    year: "2024"
  },
  {
    id: "7",
    title: "Dhanteras Festive Light & Gold Study",
    filename: "analyser dhanteres.jpg",
    category: "Festive & Concepts",
    tool: "Photoshop & Generative Fill",
    aspect: "landscape",
    spanClass: "md:col-span-8 aspect-[16/9]",
    promptSnippet: "Luminous gold textures and ornate traditional lamps with bokeh reflections",
    year: "2023"
  },
  {
    id: "8",
    title: "Isometric Block World Concept",
    filename: "Oneblock.png",
    category: "Conceptual & Texture",
    tool: "AI Landscape Synth",
    aspect: "wide",
    spanClass: "md:col-span-6 aspect-[16/9]",
    promptSnippet: "Floating voxel biome block floating in cloud space with detailed terrain layers",
    year: "2024"
  },
  {
    id: "9",
    title: "Ghibli Celestial Horizon",
    filename: "a-great-thing-by-ghibli-v0-1si7w.png",
    category: "Anime & Ghibli",
    tool: "AI Anime Diffusion",
    aspect: "landscape",
    spanClass: "md:col-span-6 aspect-[16/9]",
    promptSnippet: "Watercolor style twilight sky over distant rolling hills in anime aesthetic",
    year: "2024"
  },
  {
    id: "10",
    title: "Digital Matte Manipulation",
    filename: "photo shop .jpg",
    category: "Festive & Concepts",
    tool: "Adobe Photoshop & Generative AI",
    aspect: "landscape",
    spanClass: "md:col-span-7 aspect-[16/10]",
    promptSnippet: "Cinematic compositing of dramatic lighting and textured environmental backdrop",
    year: "2023"
  },
  {
    id: "11",
    title: "Surreal Ambient Reflection",
    filename: "downloadedImage (1).png",
    category: "Digital Art & Historical",
    tool: "Generative Diffusion",
    aspect: "square",
    spanClass: "md:col-span-5 aspect-square",
    promptSnippet: "Ethereal liquid mirror surface reflecting twilight gradient hues",
    year: "2024"
  },
  {
    id: "12",
    title: "Neon Cyber Grid Backdrop",
    filename: "bg.png",
    category: "Conceptual & Texture",
    tool: "Generative Canvas",
    aspect: "wide",
    spanClass: "md:col-span-8 aspect-[16/9]",
    promptSnippet: "Dark futuristic grid background with glowing turquoise perspective lines",
    year: "2024"
  },
  {
    id: "13",
    title: "Warm Acoustic Study Moodboard",
    filename: "WhatsApp Image 2023-10-14 at 16.44.48_4c7b19ef.jpg",
    category: "Festive & Concepts",
    tool: "AI Image Processing",
    aspect: "square",
    spanClass: "md:col-span-4 aspect-square",
    promptSnippet: "Cozy warm indoor study scene with natural wood grain and ambient shadow play",
    year: "2023"
  },
  {
    id: "14",
    title: "Acoustic & Nature Synthesis",
    filename: "downloadedImage.png",
    category: "Digital Art & Historical",
    tool: "Generative Diffusion",
    aspect: "landscape",
    spanClass: "md:col-span-6 aspect-[16/9]",
    promptSnippet: "Organic musical instrument contours merging into natural forest foliage",
    year: "2024"
  },
  {
    id: "15",
    title: "Cosmic Nebula Vista",
    filename: "iTlSy.png",
    category: "Conceptual & Texture",
    tool: "AI Space Synth",
    aspect: "landscape",
    spanClass: "md:col-span-6 aspect-[16/9]",
    promptSnippet: "Deep space dust clouds rendered with vibrant cyan and violet gradients",
    year: "2024"
  },
  {
    id: "16",
    title: "Abstract Dynamic Energy Wave",
    filename: "dsegfdseafgdgs.jpg",
    category: "Conceptual & Texture",
    tool: "Photoshop & AI Filters",
    aspect: "landscape",
    spanClass: "md:col-span-4 aspect-square",
    promptSnippet: "High speed motion trails with ribbon light dynamics",
    year: "2024"
  },
  {
    id: "17",
    title: "Mechanical Component Conceptual Draft",
    filename: "image.jpg",
    category: "Conceptual & Texture",
    tool: "AI Concept Art",
    aspect: "landscape",
    spanClass: "md:col-span-4 aspect-square",
    promptSnippet: "Technical blueprint concept of robotic linkage mechanism",
    year: "2024"
  },
  {
    id: "18",
    title: "Minimalist Geometry Texture",
    filename: "asdasd.png",
    category: "Conceptual & Texture",
    tool: "AI Vector Synthesis",
    aspect: "square",
    spanClass: "md:col-span-4 aspect-square",
    promptSnippet: "Clean vector line work showcasing geometric symmetry",
    year: "2024"
  },
  {
    id: "19",
    title: "Atmospheric Horizon Rendering",
    filename: "asd.jpg",
    category: "Conceptual & Texture",
    tool: "AI Synthesizer",
    aspect: "portrait",
    spanClass: "md:col-span-6 aspect-[16/9]",
    promptSnippet: "Soft dawn sky lighting over mist-covered hills",
    year: "2024"
  },
  {
    id: "20",
    title: "Architectural Wall Texture Study",
    filename: "wall.jpg",
    category: "Conceptual & Texture",
    tool: "Material Diffusion AI",
    aspect: "landscape",
    spanClass: "md:col-span-6 aspect-[16/9]",
    promptSnippet: "Textured concrete wall surface with diagonal sunlight shadow pattern",
    year: "2024"
  }
];

const CATEGORIES = [
  "All Concepts",
  "Anime & Ghibli",
  "Digital Art & Historical",
  "Conceptual & Texture",
  "Festive & Concepts"
] as const;

export default function AICatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("All Concepts");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems = AI_CATALOG_DATA.filter(
    (item) => activeCategory === "All Concepts" || item.category === activeCategory
  );

  // Keyboard navigation for Lightbox Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") setSelectedItemIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedItemIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === "ArrowLeft") {
        setSelectedItemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, filteredItems.length]);

  return (
    <main className="pt-12 pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-outline-variant">
        <div className="flex items-center gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant text-xs text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Back to Projects</span>
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-xs font-mono text-primary tracking-wider uppercase">AI Visual Archives</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-on-surface-variant font-mono">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>{filteredItems.length} Renders Logged</span>
        </div>
      </div>

      {/* Main Title & Editorial Philosophy Card */}
      <header className="mb-14">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface tracking-tight mb-6">
          AI GENERATIVE CATALOG<span className="text-primary">.</span>
        </h1>

        {/* Mandatory Internship Quote / Philosophy Frame */}
        <div className="relative overflow-hidden rounded-2xl bg-surface-container border border-primary/30 p-6 md:p-8 shadow-2xl backdrop-blur-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                <span>INTERNSHIP APPLICATION ARCHIVE</span>
              </div>
              
              <blockquote className="text-xl md:text-2xl font-headline font-semibold text-on-surface tracking-tight italic border-l-4 border-primary pl-4 py-1">
                &ldquo;Not the best work of mine, but the basics. You get the best when you get me.&rdquo;
              </blockquote>

              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                This catalog presents my early visual generative AI experiments, digital art compositions, and prompt engineering studies. While these concepts showcase rapid visual ideation and aesthetic direction, my true technical core lies in <strong className="text-on-surface">mechanical CAD design, embedded control systems, and hardware-software robotics integration</strong>.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 text-xs font-mono text-on-surface-variant border-t md:border-t-0 md:border-l border-outline-variant pt-4 md:pt-0 md:pl-6 min-w-[200px]">
              <span className="text-primary font-bold">WORKFLOW FOCUS</span>
              <span>• Prompt Engineering</span>
              <span>• Visual Prototyping</span>
              <span>• Creative Iteration</span>
              <span>• CAD & Systems Core</span>
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
              activeCategory === cat
                ? "bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 scale-105"
                : "bg-surface-container border border-outline-variant text-on-surface-variant hover:text-on-surface hover:border-primary/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Asymmetric Editorial Bento Filmstrip (Non-Grid Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedItemIndex(idx)}
            className={`group relative rounded-2xl overflow-hidden bg-surface-container border border-outline-variant hover:border-primary/60 transition-all duration-500 cursor-pointer min-h-[260px] ${item.spanClass}`}
          >
            <Image
              src={`/ai-imgs/${encodeURIComponent(item.filename)}`}
              alt={item.title}
              fill
              className="object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-surface-container-highest/90 backdrop-blur-md border border-outline-variant text-[10px] font-mono text-primary font-bold uppercase tracking-wider">
                {item.category}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-on-surface-variant">
                {item.tool}
              </span>
            </div>

            {/* Hover Expand Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
              <div className="flex justify-between items-end gap-4">
                <div className="space-y-1 max-w-[85%]">
                  <h3 className="text-lg md:text-xl font-headline font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-mono line-clamp-2">
                    &ldquo;{item.promptSnippet}&rdquo;
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                  <span className="material-symbols-outlined text-lg">zoom_in</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItemIndex !== null && filteredItems[selectedItemIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedItemIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-surface-container border border-outline-variant rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {/* Prev / Next Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItemIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-4 md:right-auto md:left-[calc(66.666%-3rem)] top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>

            {/* Image Preview Container */}
            <div className="md:w-2/3 h-64 md:h-[75vh] relative bg-black flex items-center justify-center">
              <Image
                src={`/ai-imgs/${encodeURIComponent(filteredItems[selectedItemIndex].filename)}`}
                alt={filteredItems[selectedItemIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Sidebar Information */}
            <div className="md:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-surface-container border-t md:border-t-0 md:border-l border-outline-variant overflow-y-auto">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold">
                    {filteredItems[selectedItemIndex].category}
                  </span>
                  <span className="text-xs font-mono text-on-surface-variant">
                    {selectedItemIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-headline font-bold text-on-surface mb-2">
                    {filteredItems[selectedItemIndex].title}
                  </h2>
                  <p className="text-xs font-mono text-primary">
                    GENERATED VIA {filteredItems[selectedItemIndex].tool.toUpperCase()}
                  </p>
                </div>

                <div className="space-y-2 border-t border-outline-variant pt-4">
                  <span className="text-xs font-mono text-on-surface-variant uppercase tracking-wider block">
                    Concept Prompt Snippet
                  </span>
                  <p className="text-sm text-on-surface-variant bg-surface-container-highest p-3 rounded-lg border border-outline-variant font-mono">
                    &ldquo;{filteredItems[selectedItemIndex].promptSnippet}&rdquo;
                  </p>
                </div>

                {/* Remind Internship Note in Lightbox */}
                <div className="bg-primary/5 border border-primary/20 p-3 rounded-xl text-xs text-on-surface-variant space-y-1">
                  <span className="font-bold text-primary block">Internship Candidate Note</span>
                  <p>
                    &ldquo;Not the best work of mine, but the basics. You get the best when you get me.&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-outline-variant flex justify-between items-center text-xs font-mono text-on-surface-variant">
                <span>YEAR: {filteredItems[selectedItemIndex].year}</span>
                <a
                  href={`/ai-imgs/${encodeURIComponent(filteredItems[selectedItemIndex].filename)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  FULL RES <span className="material-symbols-outlined text-xs">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
