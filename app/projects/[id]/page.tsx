import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    notFound();
  }

  const currentProject = project;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center">
          <Link href="/#projects" className="group flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-12 animate-fade-in-up">
        <div className="grid lg:grid-cols-[1fr,400px] gap-8 lg:gap-16">
          {/* Main Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-sm font-medium text-blue-600 dark:text-blue-400">
                <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
                  {currentProject.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">{currentProject.title}</h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed text-balance">
                {currentProject.description}
              </p>
            </div>

            <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden relative border border-zinc-200 dark:border-zinc-800 shadow-sm">
               <Image 
                 src={currentProject.image} 
                 alt={currentProject.title}
                 fill
                 className="object-cover"
                 priority
               />
            </div>

            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                {currentProject.details}
              </p>
            </div>

            {currentProject.screenshots && currentProject.screenshots.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Project Gallery</h2>
                <div className="grid gap-8">
                  {currentProject.screenshots.map((shot, index) => (
                    <div key={index} className="group aspect-video relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                      <Image
                        src={shot}
                        alt={`${currentProject.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:border-l lg:border-zinc-200 lg:dark:border-zinc-800 lg:pl-12">
            <div className="sticky top-24 space-y-10">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-900 rounded-md text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Links</h3>
                {currentProject.link || currentProject.github ? (
                  <div className="flex flex-col gap-3">
                    {currentProject.link && (
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full p-4 rounded-xl bg-yellow-400 text-zinc-900 hover:bg-yellow-500 transition-colors font-medium group"
                      >
                        <span className="flex items-center gap-2">
                          <ExternalLink size={18} />
                          Visit Live Site
                        </span>
                        <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    )}
                    {currentProject.github && (
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors font-medium text-zinc-600 dark:text-zinc-400 hover:text-foreground"
                      >
                        <span className="flex items-center gap-2">
                          <GitHubIcon className="h-[18px] w-[18px]" />
                          Source Code
                        </span>
                      </a>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Demo links and source access are available on request.
                  </p>
                )}
              </div>
              
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                <h3 className="font-semibold mb-2">Need a project like this?</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  I can help you build similar high-quality applications.
                </p>
                <Link href="/#contact" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  Contact me &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper component for the arrow icon since we can't import it from lucide-react in the same file if we didn't add it to the import list
function ArrowRight({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.699-2.782.605-3.369-1.344-3.369-1.344-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}
