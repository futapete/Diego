"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ExternalLink, ArrowRight, Gauge, Workflow } from "lucide-react";
import { projects } from "./data/projects";
import { Navigation } from "./components/Navigation";
import { Certifications } from "./components/Certifications";

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
    },
  },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  const techStack = [
    {
      name: "React",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-8 w-8" />,
    },
    {
      name: "Vue.js",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="h-8 w-8" />,
    },
    {
      name: "Tailwind CSS",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="h-8 w-8" />,
    },
    {
      name: "JavaScript",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-8 w-8" />,
    },
    {
      name: "Laravel",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" className="h-8 w-8" />,
    },
    {
      name: "Node.js",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-8 w-8" />,
    },
    {
      name: "Express.js",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="h-8 w-8" />,
    },
    {
      name: "Electron",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" alt="Electron" className="h-8 w-8" />,
    },
    {
      name: "MySQL",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="h-8 w-8" />,
    },
    {
      name: "SQLite",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" className="h-8 w-8" />,
    },
    {
      name: "REST API Integration",
      icon: <Workflow className="h-8 w-8 text-zinc-700 dark:text-zinc-300" aria-hidden="true" />,
    },
    {
      name: "Git",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="h-8 w-8" />,
    },
    {
      name: "Performance Optimization",
      icon: <Gauge className="h-8 w-8 text-zinc-700 dark:text-zinc-300" aria-hidden="true" />,
    },
  ];

  const certifications = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      image: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/linkedin_thumb_I2CS__1_.png",
      link: "https://www.credly.com/badges/5baf6c0d-4027-4c21-bd82-ca363a9fdb45"
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      image: "https://images.credly.com/images/f4ccdba9-dd65-4349-baad-8f05df116443/linkedin_thumb_CCNASRWE__1_.png",
      link: "https://www.credly.com/badges/2e8ee088-eb68-4368-ba57-042bb029f78c"
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      image: "https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/linkedin_thumb_CCNAITN__1_.png",
      link: "https://www.credly.com/badges/9a73ba46-1cc3-4e73-b270-e3406104dc5a/public_url"
    },
    {
      title: "CPA: Programming Essentials in C++",
      issuer: "Cisco",
      image: "/cpa-cpp.jpg",
      link: "#"
    },
    {
      title: "CPP: Advanced Programming in C++",
      issuer: "Cisco",
      image: "/cpp-advanced.jpg",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      {/* Navigation */}
      <Navigation />

      <main className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        {/* Hero Section */}
        <motion.section
          className="py-10 md:py-16"
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <motion.div className="max-w-3xl space-y-8" variants={staggerGroup} initial="hidden" animate="visible">
              <motion.div className="space-y-4" variants={itemReveal}>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-balance">
                  Building reliable <br/>
                  <span className="text-zinc-400 dark:text-zinc-600">business systems.</span>
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed text-balance">
                  I&apos;m Diego, a full-stack developer focused on building practical business software, admin tools, and web platforms with clean architecture, reliable workflows, and maintainable code.
                </p>
              </motion.div>
              <motion.div className="flex gap-4" variants={itemReveal}>
                <a href="#projects" className="group px-6 py-3 bg-yellow-400 text-zinc-900 rounded-full font-medium hover:bg-yellow-500 transition-all flex items-center gap-2">
                  Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </a>
                <a href="#contact" className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
            <motion.div className="mx-auto w-full max-w-xs shrink-0 md:mx-0 md:max-w-sm" variants={itemReveal} initial="hidden" animate="visible">
              <Image
                src="/thinker.svg"
                alt="The Thinker illustration"
                width={420}
                height={520}
                className="h-auto w-full drop-shadow-[0_24px_48px_rgba(15,23,42,0.12)]"
                priority
              />
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-16 border-t border-zinc-100 dark:border-zinc-900"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemReveal}>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">About Me</h2>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                <p>
                  I&apos;m a Computer Science graduate with hands-on experience building ecommerce platforms, admin portals, and desktop systems for day-to-day business operations.
                </p>
                <p>
                  My work covers frontend interfaces, backend logic, database design, and system integration. I also have a solid networking background backed by Cisco certifications and practical experience with TP-Link Omada and VSOL fiber solutions.
                </p>
              </div>
            </motion.div>
            <motion.div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl p-8 border border-zinc-100 dark:border-zinc-800/50" variants={itemReveal}>
              <h3 className="font-semibold mb-6 text-foreground">Tech Stack</h3>
              <motion.div className="grid grid-cols-3 sm:grid-cols-4 gap-4" variants={staggerGroup} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    title={tech.name}
                    variants={itemReveal}
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-700/50 dark:bg-zinc-800"
                  >
                    <span className="sr-only">{tech.name}</span>
                    {tech.icon}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          className="py-16 border-t border-zinc-100 dark:border-zinc-900"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 className="text-3xl font-bold mb-12 tracking-tight" variants={itemReveal}>Certifications</motion.h2>
          <Certifications certs={certifications} />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-16 border-t border-zinc-100 dark:border-zinc-900"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="flex items-end justify-between mb-12" variants={itemReveal}>
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          </motion.div>
          
          <motion.div className="grid md:grid-cols-2 gap-10" variants={staggerGroup} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemReveal}>
              <Link href={`/projects/${project.id}`} className="group block space-y-4">
                <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <ExternalLink size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-zinc-400" />
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-20 border-t border-zinc-100 dark:border-zinc-900 text-center"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" variants={itemReveal}>Let&apos;s work together.</motion.h2>
          <motion.p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-xl mx-auto" variants={itemReveal}>
            I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" variants={itemReveal}>
            <a href="mailto:diegleo09@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-yellow-400 text-zinc-900 rounded-full font-medium hover:bg-yellow-500 transition-opacity flex items-center justify-center gap-2">
              <Mail size={20} />
              Say Hello
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/futapete" target="_blank" rel="noopener noreferrer" className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/diego-leo-yodico-80b763323/" target="_blank" rel="noopener noreferrer" className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg font-bold tracking-tight">Diego.</span>
          <p className="text-zinc-500 text-sm">&copy; {new Date().getFullYear()} Diego. All rights reserved.</p>
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
