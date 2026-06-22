import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Printing | Yashodhan Kulkarni",
  description:
    "How I became the 3D printing lead at my college robotics club using the Creality Ender-3 V2 — from CAD collaboration to functional parts.",
};

const specs = [
  { label: "Build Volume", value: "220 × 220 × 250 mm" },
  { label: "Layer Resolution", value: "0.1 – 0.4 mm" },
  { label: "Nozzle Diameter", value: "0.4 mm (stock)" },
  { label: "Max Nozzle Temp", value: "255 °C" },
  { label: "Max Bed Temp", value: "110 °C" },
  { label: "Filament Diameter", value: "1.75 mm" },
  { label: "Print Speed", value: "Up to 180 mm/s" },
  { label: "Extruder Type", value: "Bowden (PTFE-lined)" },
  { label: "Bed Surface", value: "Carborundum glass platform" },
  { label: "Control Board", value: "Silent 32-bit Creality V4.2.7" },
];

const materials = [
  {
    name: "PLA",
    temp: "200 °C / 60 °C",
    use: "Structural prototypes, enclosures",
    color: "bg-sky-500/10 border-sky-500/30 text-sky-400",
  },
  {
    name: "PETG",
    temp: "235 °C / 80 °C",
    use: "High-strength brackets, outdoor parts",
    color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  },
  {
    name: "TPU",
    temp: "230 °C / 50 °C",
    use: "Flexible mounts, vibration dampers",
    color: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  },
];

export default function ThreeDPrintingPage() {
  return (
    <main className="pb-32 px-6 md:px-12 max-w-6xl mx-auto">
      {/* ── Breadcrumb ── */}
      <nav className="pt-8 mb-12 flex items-center gap-2 text-sm text-on-surface-variant">
        <Link href="/projects" className="hover:text-primary transition-colors">
          Projects
        </Link>
        <span className="material-symbols-outlined text-base">
          chevron_right
        </span>
        <span className="text-on-surface">3D Printing</span>
      </nav>

      {/* ── Hero ── */}
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20">
          <span
            className="material-symbols-outlined text-primary text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            deployed_code
          </span>
          <span className="text-primary text-xs uppercase tracking-widest font-bold">
            Hardware · Design
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface tracking-tighter mb-6 leading-tight">
          3D Printing &amp;{" "}
          <span className="text-primary">Rapid Prototyping</span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-3xl leading-relaxed">
          From filament to functional — how I went from curious bystander to the
          go-to fabrication lead in my college robotics club, one layer at a
          time.
        </p>
      </header>

      {/* ── Printer Showcase ── */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden bg-surface-container border border-outline-variant group">
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent z-10 pointer-events-none" />
            <Image
              src="/ender3-v2.png"
              alt="Creality Ender-3 V2 3D Printer"
              width={800}
              height={800}
              className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              priority
            />
            {/* Badge */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-surface-container-high/90 backdrop-blur-sm border border-outline-variant rounded-lg px-4 py-2">
              <span
                className="material-symbols-outlined text-primary text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="text-xs font-bold text-on-surface uppercase tracking-wider">
                Active Machine
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-primary text-xs uppercase tracking-widest font-bold mb-2">
                Primary Machine
              </p>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tight mb-3">
                Creality Ender-3 V2
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                The Ender-3 V2 is the workhorse of the desktop FDM world — an
                open-frame printer with a silent 32-bit mainboard, a
                carborundum glass bed, and enough headroom for serious
                engineering-grade filaments. It&apos;s the machine I learned
                everything on, and the one that printed every robotics component
                described below.
              </p>
            </div>

            {/* Spec Grid */}
            <div className="grid grid-cols-2 gap-2">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="bg-surface-container-low border border-outline-variant rounded-lg p-3"
                >
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
                    {s.label}
                  </p>
                  <p className="text-sm font-bold text-on-surface font-mono">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── My Story ── */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <span className="material-symbols-outlined text-primary">
            auto_stories
          </span>
          <h2 className="text-2xl font-headline font-bold text-on-surface uppercase tracking-widest">
            Origin Story
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timeline Card 1 */}
          <div className="relative bg-surface-container border border-outline-variant rounded-xl p-6 hover:border-primary/40 transition-colors duration-300 group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                groups
              </span>
            </div>
            <h3 className="font-headline font-bold text-on-surface mb-3 text-lg">
              First Contact
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              When my college robotics club first introduced itself to additive
              manufacturing, the Ender-3 V2 sat on a bench like a black-and-
              silver enigma. Most members walked past it. I pulled up a chair.
              While others were deciding what to build, I was already dissecting
              the firmware, understanding G-code, and manually tramming the bed
              until every corner was within 0.02 mm of flat.
            </p>
          </div>

          {/* Timeline Card 2 */}
          <div className="relative bg-surface-container border border-outline-variant rounded-xl p-6 hover:border-primary/40 transition-colors duration-300 group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                precision_manufacturing
              </span>
            </div>
            <h3 className="font-headline font-bold text-on-surface mb-3 text-lg">
              Becoming the Print Lead
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              My obsession didn&apos;t go unnoticed. Within weeks I became the
              club&apos;s unofficial &ldquo;3D Printing Guy&rdquo; — the
              person every CAD designer came to when they needed a part to
              actually exist in physical space. I worked directly alongside the
              design team, reviewing SolidWorks and Fusion 360 models for
              print-ability: correcting wall thicknesses, adding fillets to
              stress points, orienting parts along optimal layer adhesion axes,
              and specifying infill patterns that maximised strength-to-weight
              ratio for each application.
            </p>
          </div>

          {/* Timeline Card 3 */}
          <div className="relative bg-surface-container border border-outline-variant rounded-xl p-6 hover:border-primary/40 transition-colors duration-300 group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                rocket_launch
              </span>
            </div>
            <h3 className="font-headline font-bold text-on-surface mb-3 text-lg">
              Production & Iteration
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Robotics parts live or die by tolerance. A bracket that&apos;s
              0.3 mm off can misalign a servo and throw an entire assembly out
              of spec. I established a rapid iteration pipeline: receive STEP
              file → slice in Cura → run a tolerance test print at 25% scale
              → adjust → full print. This cut our average part validation time
              from three days to under six hours, and gave the team the
              confidence to design more ambitiously knowing fabrication could
              keep pace.
            </p>
          </div>
        </div>
      </section>

      {/* ── What I Print ── */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <span className="material-symbols-outlined text-primary">
            category
          </span>
          <h2 className="text-2xl font-headline font-bold text-on-surface uppercase tracking-widest">
            What I Print
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: "settings",
              title: "Structural Mounts & Brackets",
              desc: "Custom motor mounts, sensor housings, and structural brackets designed to exact club requirements — hole patterns, standoff heights, and clearances specified to the tenth of a millimetre.",
            },
            {
              icon: "cable",
              title: "Cable Management Systems",
              desc: "Wire looms, strain-relief clips, and modular cable channels that keep electronics tidy inside tight chassis — because a loose wire mid-run is a DNF waiting to happen.",
            },
            {
              icon: "smart_toy",
              title: "Mechanism Prototypes",
              desc: "Early-stage iterations of grippers, linkages, and actuator assemblies. Printing in PLA first lets us validate kinematics before committing to metal fabrication.",
            },
            {
              icon: "build",
              title: "Jigs & Assembly Tools",
              desc: "Drill guides, alignment fixtures, and press-fit jigs that make assembly faster, repeatable, and less dependent on individual skill level.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-surface-container-low border border-outline-variant rounded-xl p-6 flex gap-5 hover:bg-surface-container hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-xl">
                  {item.icon}
                </span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-on-surface mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Materials ── */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <span className="material-symbols-outlined text-primary">
            science
          </span>
          <h2 className="text-2xl font-headline font-bold text-on-surface uppercase tracking-widest">
            Materials Used
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {materials.map((m) => (
            <div
              key={m.name}
              className={`border rounded-xl p-6 ${m.color} bg-opacity-10 transition-all duration-300 hover:scale-[1.02]`}
            >
              <p className="text-2xl font-headline font-black mb-1">{m.name}</p>
              <p className="text-xs font-mono mb-4 opacity-70">
                Nozzle / Bed: {m.temp}
              </p>
              <p className="text-sm opacity-80">{m.use}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Back link ── */}
      <div className="flex justify-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-8 py-4 bg-surface-container border border-outline-variant rounded-lg font-bold text-on-surface hover:border-primary/50 hover:bg-surface-container-high transition-all duration-300 group"
        >
          <span className="material-symbols-outlined text-primary group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Back to Projects
        </Link>
      </div>
    </main>
  );
}
