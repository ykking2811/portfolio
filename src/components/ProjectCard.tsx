import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ title, description, icon, tags, link }: ProjectCardProps) {
  return (
    <div className="glass-card p-8 rounded-xl group hover:-translate-y-1.5 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-lg bg-surface-container-highest border border-outline-variant group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300">
          <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform duration-300">{icon}</span>
        </div>
        <a className="text-secondary hover:text-primary active:scale-90 transition-all" href={link} target="_blank" rel="noopener noreferrer" aria-label={`View code for ${title}`}>
          <span className="material-symbols-outlined hover:rotate-12 transition-transform">terminal</span>
        </a>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 text-xs bg-surface-container rounded border border-outline-variant text-tertiary font-mono group-hover:border-tertiary/40 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

