import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Layers3, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((entry) => entry.id === Number(id));

  if (!project) {
    notFound();
  }

  const currentProject = project;

  return (
    <div className="min-h-screen px-4 pb-16 pt-6 md:px-6 md:pt-8">
      <nav className="mx-auto max-w-[92rem]">
        <div className="terminal-shell pixel-card flex items-center justify-between rounded-[1.7rem] px-5 py-4">
          <Link href="/#projects" className="command-line flex items-center gap-2 text-2xl text-neon transition-transform hover:-translate-x-1">
            <ArrowLeft size={16} />
            Back to projects
          </Link>
          <span className="section-kicker hidden md:block">Project Runtime</span>
        </div>
      </nav>

      <main className="mx-auto mt-6 max-w-[92rem] animate-fade-in-up">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.28fr)_360px] xl:gap-8">
          <div className="space-y-12">
            <div className="terminal-shell pixel-card rounded-[2rem] p-6 md:p-8">
              <div className="terminal-header">
                <span className="terminal-dot bg-[#ff6b6b]" />
                <span className="terminal-dot bg-[color:var(--amber)]" />
                <span className="terminal-dot bg-[color:var(--neon)]" />
                <p className="command-line text-2xl terminal-muted">project://{currentProject.id}</p>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm font-medium text-neon">
                <span className="rounded-full border terminal-border bg-neon-soft px-3 py-1.5 section-kicker">
                  {currentProject.category}
                </span>
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-balance md:text-6xl">{currentProject.title}</h1>
              <p className="mt-4 text-lg leading-relaxed terminal-muted md:text-xl text-balance">
                {currentProject.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border terminal-border bg-neon-soft px-4 py-2 command-line text-2xl text-neon">
                  showcase://widescreen
                </span>
                <span className="rounded-full border terminal-border terminal-panel-strong px-4 py-2 command-line text-2xl text-sky-terminal">
                  gallery:{currentProject.screenshots?.length ?? 0}
                </span>
                <span className="rounded-full border terminal-border terminal-panel-strong px-4 py-2 command-line text-2xl terminal-muted">
                  stack:{currentProject.tags.length}
                </span>
              </div>
            </div>

            <div className="terminal-shell crt-screen pixel-card project-image-shell relative w-full overflow-hidden rounded-[2rem] p-3 md:aspect-[21/9] xl:aspect-[23/9] animate-tilt">
              <div className="project-spotlight" />
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                sizes="(min-width: 1536px) 72vw, (min-width: 1280px) 66vw, 100vw"
                className="rounded-[1.5rem] object-cover"
                priority
              />
              <div className="animate-shimmer absolute inset-y-0 left-[-25%] w-1/4 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[rgba(6,17,10,0.84)] via-[rgba(6,17,10,0.34)] to-transparent" />
              <div className="absolute bottom-5 left-5 flex flex-wrap gap-3">
                <span className="rounded-full border terminal-border bg-[rgba(8,24,15,0.78)] px-4 py-2 command-line text-2xl text-neon">
                  runtime:active
                </span>
                <span className="rounded-full border terminal-border bg-[rgba(8,24,15,0.78)] px-4 py-2 command-line text-2xl text-sky-terminal">
                  ui:immersive
                </span>
              </div>
            </div>

            <div className="terminal-shell pixel-card rounded-[2rem] p-6 md:p-8">
              <p className="section-kicker">Overview.txt</p>
              <h2 className="mt-3 text-2xl font-bold md:text-4xl">Build overview</h2>
              <p className="mt-4 whitespace-pre-line text-lg leading-relaxed terminal-muted">
                {currentProject.details}
              </p>
            </div>

            {currentProject.screenshots && currentProject.screenshots.length > 0 && (
              <div className="terminal-shell pixel-card rounded-[2rem] p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="section-kicker">Gallery.feed</p>
                    <h2 className="mt-2 text-2xl font-bold md:text-4xl">Project gallery</h2>
                  </div>
                  <Sparkles size={18} className="text-[color:var(--amber)]" />
                </div>
                <div className="mt-6 grid gap-6 xl:grid-cols-2">
                  {currentProject.screenshots.map((shot, index) => (
                    <div
                      key={index}
                      className={`terminal-shell crt-screen pixel-card project-image-shell relative overflow-hidden rounded-[1.6rem] p-2 animate-fade-in-up ${index === 0 ? "xl:col-span-2 aspect-[21/10]" : "aspect-[16/10]"}`}
                    >
                      <Image
                        src={shot}
                        alt={`${currentProject.title} screenshot ${index + 1}`}
                        fill
                        sizes={index === 0 ? "(min-width: 1280px) 66vw, 100vw" : "(min-width: 1280px) 33vw, 100vw"}
                        className="rounded-[1.2rem] object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[rgba(6,17,10,0.78)] to-transparent" />
                      <div className="absolute bottom-4 left-4 rounded-full border terminal-border bg-[rgba(8,24,15,0.78)] px-3 py-1 command-line text-2xl text-neon">
                        frame_{String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="sticky top-6 space-y-6 xl:top-8">
              <div className="terminal-shell pixel-card rounded-[2rem] p-6">
                <div className="terminal-header">
                  <span className="terminal-dot bg-[#ff6b6b]" />
                  <span className="terminal-dot bg-[color:var(--amber)]" />
                  <span className="terminal-dot bg-[color:var(--neon)]" />
                  <p className="command-line text-2xl terminal-muted">stack.map</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {currentProject.tags.map((tag) => (
                    <span key={tag} className="rounded-full border terminal-border px-3 py-1.5 command-line text-2xl terminal-panel-strong text-sky-terminal">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="terminal-shell pixel-card rounded-[2rem] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Layers3 size={18} className="text-neon" />
                  <h3 className="section-kicker">Launch Links</h3>
                </div>
                {currentProject.link || currentProject.github ? (
                  <div className="flex flex-col gap-3">
                    {currentProject.link && (
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-button retro-button-primary retro-button-duo w-full justify-between font-semibold text-foreground"
                      >
                        <span className="flex items-center gap-2">
                          <ExternalLink size={18} />
                          View live preview
                        </span>
                        <ArrowIcon className="h-4 w-4" />
                      </a>
                    )}
                    {currentProject.github && (
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-button retro-button-duo w-full justify-between font-semibold text-foreground"
                      >
                        <span className="flex items-center gap-2">
                          <GitHubIcon className="h-[18px] w-[18px]" />
                          Review source
                        </span>
                      </a>
                    )}
                  </div>
                ) : (
                  <p className="text-sm terminal-muted">
                    Live demonstrations and source walkthroughs are available on request.
                  </p>
                )}
              </div>

              <div className="terminal-shell pixel-card rounded-[2rem] p-6">
                <h3 className="mb-2 font-semibold">Interested in a similar build?</h3>
                <p className="mb-4 text-sm terminal-muted">
                  I design and ship systems with the same focus on clarity, speed, and operational reliability.
                </p>
                <Link href="/#contact" className="retro-button retro-button-primary retro-button-duo w-full font-semibold text-foreground">
                  Discuss your project <ArrowIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.699-2.782.605-3.369-1.344-3.369-1.344-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}
