"use client";

import { useEffect, useState } from "react";
import { Command, Gamepad2 } from "lucide-react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const links = [
    { href: "#about", label: "About", id: "about" },
    { href: "#certifications", label: "Certs", id: "certifications" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-6">
      <div className="terminal-shell pixel-card mx-auto flex max-w-6xl items-center justify-between rounded-[1.6rem] px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border terminal-border bg-neon-soft text-neon animate-glow">
            <Gamepad2 size={18} />
          </div>
          <div>
            <p className="command-line text-sm text-neon">$ boot developer-portfolio</p>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Diego Leo Yodico</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <div className="mr-3 flex items-center gap-2 rounded-full border terminal-border px-3 py-1.5 terminal-panel text-xs terminal-muted">
            <Command size={14} className="text-sky-terminal" />
            CLI NAV
          </div>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`command-line rounded-full border px-3 py-1.5 text-xl leading-none ${
                activeSection === link.id
                  ? "border-[color:var(--neon)] bg-neon-soft text-neon"
                  : "border-transparent text-[color:var(--muted)] hover:border-[color:var(--panel-border)] hover:text-neon"
              }`}
            >
              &gt; {link.label}
            </a>
          ))}
        </div>
        <div className="command-line text-2xl text-neon md:hidden">&gt; menu.exe</div>
      </div>
    </nav>
  );
}
