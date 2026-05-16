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
    <div className="glass-card p-8 rounded-xl group hover:border-primary transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-lg bg-surface-container-highest border border-outline-variant">
          <span className="material-symbols-outlined text-primary">{icon}</span>
        </div>
        <a className="text-secondary hover:text-primary transition-colors" href={link} target="_blank" rel="noopener noreferrer">
          <span className="material-symbols-outlined">terminal</span>
        </a>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-on-surface-variant mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs bg-surface-container rounded border border-outline-variant text-tertiary">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
