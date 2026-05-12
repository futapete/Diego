"use client";

import { useEffect, useState } from "react";
import { Command, Gamepad2, Menu, X } from "lucide-react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
            Navigation
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
        <button
          type="button"
          className="retro-button retro-button-duo px-3 py-2 text-foreground md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
          Menu
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-nav-menu" className="terminal-shell pixel-card mx-auto mt-3 max-w-6xl rounded-[1.4rem] p-3 md:hidden">
          <div className="grid gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`retro-button justify-between text-left font-semibold ${
                  activeSection === link.id
                    ? "retro-button-primary text-foreground"
                    : "text-foreground"
                }`}
              >
                <span>{link.label}</span>
                <span className="command-line text-2xl text-neon">/{link.id}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
