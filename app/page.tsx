import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Award } from "lucide-react";
import { projects } from "./data/projects";
import { Navigation } from "./components/Navigation";
import { Certifications } from "./components/Certifications";

export default function Home() {
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
        <section className="py-10 md:py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8 animate-fade-in-up">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-balance">
                Developing clean and accessible <br/>
                <span className="text-zinc-400 dark:text-zinc-600">web experiences.</span>
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed text-balance">
                I'm Diego, a developer dedicated to building accessible, performant web applications with clean, structured, and reliable code. While design isn’t my strongest suit, I focus on translating ideas into smooth, functional, and user-friendly experiences.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#projects" className="group px-6 py-3 bg-yellow-400 text-zinc-900 rounded-full font-medium hover:bg-yellow-500 transition-all flex items-center gap-2">
                Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </a>
              <a href="#contact" className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <Image
              src="/me.jpg"
              alt="Diego"
              fill
              className="object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 border-t border-zinc-100 dark:border-zinc-900">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">About Me</h2>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                <p>
                 I'm a fresh Computer Science graduate with a strong passion for coding and problem-solving. I’ve spent my time developing web applications and exploring modern web technologies.
                </p>
                <p>
                 I also have a solid background in networking, backed by Cisco certifications. When I'm not coding, you'll usually find me learning new tools, tackling technical challenges, or improving my front-end implementation skills.
                </p>
              </div>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl p-8 border border-zinc-100 dark:border-zinc-800/50">
              <h3 className="font-semibold mb-6 text-foreground">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["PHP", "Laravel", "JavaScript", "Tailwind CSS", "SQL", "Networking", "React", "Next.js", "Git"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white dark:bg-zinc-800 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-700/50 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 border-t border-zinc-100 dark:border-zinc-900">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">Certifications</h2>view
          <Certifications certs={certifications} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 border-t border-zinc-100 dark:border-zinc-900">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id} className="group block space-y-4">
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
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-zinc-100 dark:border-zinc-900 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's work together.</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:diegleo09@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-yellow-400 text-zinc-900 rounded-full font-medium hover:bg-yellow-500 transition-opacity flex items-center justify-center gap-2">
              <Mail size={20} />
              Say Hello
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/futapete" target="_blank" rel="noopener noreferrer" className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/diego-leo-yodico-80b763323/" target="_blank" rel="noopener noreferrer" className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </section>
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
