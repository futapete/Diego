import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import { projects } from "./data/projects";
import { Certifications } from "./components/Certifications";
import { Navigation } from "./components/Navigation";

export default function Home() {
  const missionStats = [
    { label: "Systems shipped", value: "04", icon: BriefcaseBusiness },
    { label: "Core stacks", value: "08", icon: Code2 },
    { label: "DB-driven builds", value: "SQL+", icon: Database },
  ];

  const terminalFeed = [
    "npm run deploy:portfolio // theme pack loaded",
    "laravel artisan optimize // admin workflows tuned",
    "electron build --prod // desktop systems compiled",
    "mysql schema sync // operational data stabilized",
  ];

  const specializations = [
    {
      title: "Full-Stack Operations",
      copy: "Laravel, Node.js, and Electron builds focused on reliability, maintainability, and workflow speed.",
      icon: Terminal,
    },
    {
      title: "Database Logic",
      copy: "MySQL and SQLite structures designed for reporting, automation, and admin-grade control surfaces.",
      icon: Database,
    },
    {
      title: "Performance Tuning",
      copy: "Practical optimization, debugging, and integration work that keeps business systems responsive under load.",
      icon: Rocket,
    },
  ];

  const techStack = [
    "React",
    "Vue.js",
    "Tailwind CSS",
    "JavaScript",
    "Laravel",
    "Node.js",
    "Express.js",
    "Electron",
    "MySQL",
    "SQLite",
    "REST API Integration",
    "Git",
    "Performance Optimization",
  ];

  const certifications = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      image: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/linkedin_thumb_I2CS__1_.png",
      link: "https://www.credly.com/badges/5baf6c0d-4027-4c21-bd82-ca363a9fdb45",
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      image: "https://images.credly.com/images/f4ccdba9-dd65-4349-baad-8f05df116443/linkedin_thumb_CCNASRWE__1_.png",
      link: "https://www.credly.com/badges/2e8ee088-eb68-4368-ba57-042bb029f78c",
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      image: "https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/linkedin_thumb_CCNAITN__1_.png",
      link: "https://www.credly.com/badges/9a73ba46-1cc3-4e73-b270-e3406104dc5a/public_url",
    },
    {
      title: "CPA: Programming Essentials in C++",
      issuer: "Cisco",
      image: "/cpa-cpp.jpg",
      link: "#",
    },
    {
      title: "CPP: Advanced Programming in C++",
      issuer: "Cisco",
      image: "/cpp-advanced.jpg",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      <Navigation />

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-28 md:px-6">
        <section className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] animate-fade-in-up">
          <div className="terminal-shell pixel-card rounded-[2rem] p-6 md:p-8">
            <div className="terminal-header">
              <span className="terminal-dot bg-[#ff6b6b]" />
              <span className="terminal-dot bg-[color:var(--amber)]" />
              <span className="terminal-dot bg-[color:var(--neon)]" />
              <p className="command-line text-2xl terminal-muted">portfolio://diego/operator-mode</p>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr,auto]">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border terminal-border bg-neon-soft px-4 py-2 section-kicker">Retro-Futuristic Build</span>
                  <span className="rounded-full border terminal-border px-4 py-2 command-line text-2xl text-sky-terminal">theme: terminal x platformer</span>
                </div>
                <div className="space-y-4">
                  <p className="section-kicker">&gt; Mission Select</p>
                  <h1 className="glow-text max-w-3xl text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-balance md:text-7xl">
                    Premium systems engineering with arcade energy.
                  </h1>
                  <p className="max-w-2xl text-lg leading-relaxed terminal-muted md:text-xl text-balance">
                    I build ecommerce platforms, admin dashboards, and desktop operations software with clean architecture, fast workflows, and a polished user experience that feels intentional from first load to final action.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="#projects" className="retro-button retro-button-primary font-semibold text-foreground">
                    Launch Projects <ArrowRight size={16} />
                  </a>
                  <a href="#contact" className="retro-button font-semibold text-foreground">
                    Open Comms <Mail size={16} />
                  </a>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {missionStats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                      <div key={stat.label} className="terminal-shell rounded-[1.4rem] p-4 terminal-panel">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border terminal-border bg-neon-soft text-neon">
                          <Icon size={20} />
                        </div>
                        <p className="command-line text-4xl text-foreground">{stat.value}</p>
                        <p className="mt-1 text-sm uppercase tracking-[0.22em] terminal-muted">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="terminal-shell crt-screen animate-float pixel-card rounded-[2rem] p-4 md:p-5 lg:w-[320px]">
                <div className="absolute left-6 right-6 top-8 h-24 rounded-full bg-[radial-gradient(circle,_rgba(94,255,138,0.22),_transparent_70%)] blur-3xl" />
                <div className="terminal-header">
                  <span className="terminal-dot bg-[#ff6b6b]" />
                  <span className="terminal-dot bg-[color:var(--amber)]" />
                  <span className="terminal-dot bg-[color:var(--neon)]" />
                  <p className="command-line text-2xl terminal-muted">avatar.render</p>
                </div>
                <div className="mt-5 rounded-[1.6rem] border terminal-border p-3 terminal-panel-strong">
                  <div className="relative mx-auto aspect-[4/5] overflow-hidden rounded-[1.4rem] border terminal-border bg-[radial-gradient(circle_at_top,_rgba(94,255,138,0.14),_transparent_46%),linear-gradient(180deg,_rgba(85,196,255,0.1),transparent)]">
                    <Image
                      src="/me.jpg"
                      alt="Diego"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(6,17,10,0.72)] to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-sm">
                      <div>
                        <p className="section-kicker">Status</p>
                        <p className="text-sm font-semibold text-white">Open for builds</p>
                      </div>
                      <span className="h-3 w-3 rounded-full bg-[color:var(--neon)] animate-glow" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2 command-line text-2xl terminal-muted">
                  <p><span className="text-neon">role:</span> full-stack developer</p>
                  <p><span className="text-neon">focus:</span> operations-grade software</p>
                  <p><span className="text-neon">style:</span> clean, premium, performant</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="terminal-shell pixel-card rounded-[2rem] p-6">
              <div className="terminal-header">
                <span className="terminal-dot bg-[#ff6b6b]" />
                <span className="terminal-dot bg-[color:var(--amber)]" />
                <span className="terminal-dot bg-[color:var(--neon)]" />
                <p className="command-line text-2xl terminal-muted">activity.feed</p>
              </div>
              <div className="mt-5 space-y-3">
                {terminalFeed.map((entry) => (
                  <div key={entry} className="flex items-start gap-3 rounded-2xl border terminal-border px-4 py-3 terminal-panel-strong">
                    <span className="command-line text-2xl text-neon">$</span>
                    <p className="text-sm terminal-muted md:text-base">{entry}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="terminal-shell pixel-card rounded-[2rem] p-6">
              <div className="terminal-header">
                <span className="terminal-dot bg-[#ff6b6b]" />
                <span className="terminal-dot bg-[color:var(--amber)]" />
                <span className="terminal-dot bg-[color:var(--neon)]" />
                <p className="command-line text-2xl terminal-muted">perks.sys</p>
              </div>
              <div className="mt-5 grid gap-3">
                <div className="flex items-start gap-3 rounded-2xl border terminal-border p-4 terminal-panel-strong">
                  <Sparkles size={18} className="mt-1 text-[color:var(--amber)]" />
                  <div>
                    <p className="font-semibold">Retro terminal aesthetic</p>
                    <p className="mt-1 text-sm terminal-muted">Immersive visual language without sacrificing clarity or professionalism.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border terminal-border p-4 terminal-panel-strong">
                  <ShieldCheck size={18} className="mt-1 text-neon" />
                  <div>
                    <p className="font-semibold">Operations-first thinking</p>
                    <p className="mt-1 text-sm terminal-muted">From admin controls to data flows, the work is structured to support real teams and real processes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border terminal-border p-4 terminal-panel-strong">
                  <Wrench size={18} className="mt-1 text-sky-terminal" />
                  <div>
                    <p className="font-semibold">Implementation depth</p>
                    <p className="mt-1 text-sm terminal-muted">Frontend UI, backend logic, desktop workflows, database design, and debugging all in one stack.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="terminal-shell pixel-card rounded-[2rem] p-6 md:p-8">
            <p className="section-kicker">About.exe</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] md:text-5xl">A developer profile built like a polished control room.</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed terminal-muted">
              <p>
                I&apos;m a Computer Science graduate with hands-on experience building ecommerce platforms, admin portals, and desktop systems for day-to-day business operations.
              </p>
              <p>
                My work spans frontend interfaces, backend logic, database design, system integration, and workflow optimization. I also bring networking experience backed by Cisco certifications and practical deployment work.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {specializations.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="terminal-shell rounded-[1.4rem] p-4 terminal-panel-strong">
                    <Icon size={18} className="text-neon" />
                    <h3 className="mt-4 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm terminal-muted">{item.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="terminal-shell pixel-card rounded-[2rem] p-6 md:p-8">
            <div className="terminal-header">
              <span className="terminal-dot bg-[#ff6b6b]" />
              <span className="terminal-dot bg-[color:var(--amber)]" />
              <span className="terminal-dot bg-[color:var(--neon)]" />
              <p className="command-line text-2xl terminal-muted">stack.inventory</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-full border terminal-border px-4 py-2 command-line text-2xl terminal-panel-strong text-foreground">
                  [{tech}]
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] border terminal-border p-5 terminal-panel-strong">
              <p className="section-kicker">Loadout</p>
              <p className="mt-3 text-lg terminal-muted">
                Frontend: React, Vue, Tailwind. Backend: Laravel, Node.js, Express, Electron. Databases: MySQL, SQLite. Workflow: Git, API integration, performance tuning, debugging.
              </p>
            </div>
          </div>
        </section>

        <section id="certifications" className="terminal-shell pixel-card rounded-[2rem] px-6 py-8 md:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Certifications.log</p>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] md:text-5xl">Verified network and systems foundations.</h2>
            </div>
            <p className="max-w-md text-sm terminal-muted md:text-right">
              A rotating badge reel presented as a terminal carousel, highlighting the credentials behind the engineering work.
            </p>
          </div>
          <Certifications certs={certifications} />
        </section>

        <section id="projects" className="terminal-shell pixel-card rounded-[2rem] px-6 py-8 md:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Projects.index</p>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] md:text-5xl">Campaign-ready builds for real operations.</h2>
            </div>
            <p className="command-line text-2xl text-sky-terminal">open project://[id]</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Link href={`/projects/${project.id}`} key={project.id} className="group terminal-shell pixel-card rounded-[1.8rem] p-4 transition-transform hover:-translate-y-1">
                <div className="terminal-header mb-4">
                  <span className="terminal-dot bg-[#ff6b6b]" />
                  <span className="terminal-dot bg-[color:var(--amber)]" />
                  <span className="terminal-dot bg-[color:var(--neon)]" />
                  <p className="command-line text-2xl terminal-muted">project_{String(index + 1).padStart(2, "0")}</p>
                </div>
                <div className="crt-screen relative mb-5 aspect-[4/3] overflow-hidden rounded-[1.4rem] border terminal-border bg-black/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="animate-scan absolute inset-x-6 top-0 h-10 bg-gradient-to-b from-[rgba(94,255,138,0.22)] to-transparent blur-xl" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="section-kicker">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold leading-tight text-foreground">{project.title}</h3>
                  </div>
                  <ExternalLink size={18} className="mt-1 text-neon transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-3 text-sm leading-relaxed terminal-muted md:text-base">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="rounded-full border terminal-border px-3 py-1.5 command-line text-2xl terminal-panel-strong text-sky-terminal">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="terminal-shell pixel-card rounded-[2rem] p-6 md:p-8">
            <p className="section-kicker">Contact.protocol</p>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] md:text-6xl">Let&apos;s build something with signal, style, and staying power.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed terminal-muted">
              I&apos;m currently open to new opportunities in full-stack development, internal tools, ecommerce systems, and desktop business software. If the goal is practical software with a premium finish, we should talk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:diegleo09@gmail.com" className="retro-button retro-button-primary font-semibold text-foreground">
                <Mail size={18} />
                Say Hello
              </a>
              <a href="https://github.com/futapete" target="_blank" rel="noopener noreferrer" className="retro-button font-semibold text-foreground">
                <GitHubIcon className="h-5 w-5" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/diego-leo-yodico-80b763323/" target="_blank" rel="noopener noreferrer" className="retro-button font-semibold text-foreground">
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="terminal-shell crt-screen pixel-card rounded-[2rem] p-6 md:p-8">
            <div className="terminal-header">
              <span className="terminal-dot bg-[#ff6b6b]" />
              <span className="terminal-dot bg-[color:var(--amber)]" />
              <span className="terminal-dot bg-[color:var(--neon)]" />
              <p className="command-line text-2xl terminal-muted">message.queue</p>
            </div>
            <div className="mt-6 space-y-4 rounded-[1.5rem] border terminal-border p-5 terminal-panel-strong">
              <div className="flex items-center justify-between">
                <span className="section-kicker">Priority</span>
                <span className="rounded-full border terminal-border bg-neon-soft px-3 py-1 command-line text-2xl text-neon">online</span>
              </div>
              <div className="space-y-3 command-line text-2xl terminal-muted">
                <p><span className="text-neon">recipient:</span> diegleo09@gmail.com</p>
                <p><span className="text-neon">response_time:</span> usually within 24 hours</p>
                <p><span className="text-neon">project_types:</span> web apps, dashboards, desktop systems</p>
                <p><span className="text-neon">availability:</span> open to freelance and full-time opportunities</p>
              </div>
              <div className="mt-6 h-px bg-[linear-gradient(90deg,_transparent,_rgba(94,255,138,0.5),_transparent)]" />
              <p className="mt-6 text-sm leading-relaxed terminal-muted">
                Clean implementation, practical architecture, and a distinctive interface language are the common thread through everything shown here.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 pb-10 md:px-6">
        <div className="terminal-shell pixel-card mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 rounded-[1.8rem] px-6 py-4 md:flex-row md:items-center">
          <div>
            <p className="section-kicker">Footer.out</p>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Diego Leo Yodico</p>
          </div>
          <p className="command-line text-2xl terminal-muted">© {new Date().getFullYear()} | portfolio rendered successfully</p>
        </div>
      </footer>
    </div>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.699-2.782.605-3.369-1.344-3.369-1.344-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1h.02C3.87 1 4.98 2.12 4.98 3.5ZM.5 8h4V24h-4V8Zm7 0h3.83v2.18h.05c.53-1.01 1.84-2.18 3.79-2.18 4.05 0 4.8 2.67 4.8 6.14V24h-4v-8.39c0-2-.04-4.58-2.79-4.58-2.79 0-3.22 2.18-3.22 4.43V24h-4V8Z" />
    </svg>
  );
}
