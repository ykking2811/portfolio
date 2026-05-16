import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.jpg";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-outline-variant bg-background pb-24 md:pb-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-7xl mx-auto gap-6">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="YK Logo" width={32} height={32} className="rounded" />
        </div>
        <p className="font-body text-sm text-on-surface-variant text-center md:text-left">
          © 2024 Yashodhan Kulkarni. Built with precision.
        </p>
        <div className="flex gap-6">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4"
            href="https://github.com/ykking2811"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4"
            href="https://www.linkedin.com/in/yashodhan-k-55ab15229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4"
            href="mailto:kulkarnis.yashodhan@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
