"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  image: string;
  link: string | null;
}

interface CertificationsProps {
  certs: Certification[];
}

export function Certifications({ certs }: CertificationsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { clientWidth, scrollLeft, scrollWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth / 2;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group">
      {showLeftArrow && (
        <button
          type="button"
          onClick={() => scroll("left")}
          className="carousel-arrow terminal-shell absolute left-0 top-1/2 z-10 hidden -translate-x-4 -translate-y-1/2 rounded-full p-2 text-neon opacity-0 transition-all group-hover:opacity-100 md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {showRightArrow && (
        <button
          type="button"
          onClick={() => scroll("right")}
          className="carousel-arrow terminal-shell absolute right-0 top-1/2 z-10 hidden translate-x-4 -translate-y-1/2 rounded-full p-2 text-neon opacity-0 transition-all group-hover:opacity-100 md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 scrollbar-hide"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        {certs.map((cert, index) => {
          const isLiveLink = Boolean(cert.link && cert.link !== "#");
          const cardClassName = "group/card certification-card terminal-shell pixel-card snap-center shrink-0 w-[280px] rounded-[1.8rem] p-6 text-left transition-transform hover:-translate-y-1 md:w-[320px]";

          const cardBody = (
            <>
              <div className="terminal-header mb-5">
                <span className="terminal-dot bg-[#ff6b6b]" />
                <span className="terminal-dot bg-[color:var(--amber)]" />
                <span className="terminal-dot bg-[color:var(--neon)]" />
                <p className="command-line text-xl terminal-muted">credential://badge-{String(index + 1).padStart(2, "0")}</p>
              </div>
              <div className="crt-screen mb-6 flex aspect-square items-center justify-center overflow-hidden rounded-[1.4rem] border terminal-border terminal-panel-strong p-5">
                <div className="relative h-full w-full transition-transform duration-300 group-hover/card:scale-105">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(min-width: 768px) 320px, 280px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mb-3 flex items-center gap-2 text-sm text-neon">
                <ShieldCheck size={16} />
                <span className="section-kicker">{isLiveLink ? "Verified Credential" : "Credential Archive"}</span>
              </div>
              <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-foreground">
                {cert.title}
              </h3>
              <p className="command-line text-2xl terminal-muted">issuer: {cert.issuer}</p>
              <p className="mt-4 text-sm terminal-muted">
                {isLiveLink ? "Open credential verification" : "Verification details available on request"}
              </p>
            </>
          );

          if (isLiveLink && cert.link) {
            return (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClassName}
              >
                {cardBody}
              </a>
            );
          }

          return (
            <div key={index} className={`${cardClassName} certification-card-disabled cursor-default opacity-90`} aria-disabled="true">
              {cardBody}
            </div>
          );
        })}
      </div>
    </div>
  );
}
