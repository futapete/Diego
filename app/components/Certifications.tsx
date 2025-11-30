"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  image: string;
  link: string;
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
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
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
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 bg-background/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 bg-background/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {certs.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-center shrink-0 w-[280px] md:w-[320px] group/card p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-yellow-400/50 transition-colors flex flex-col items-center text-center"
          >
            <div className="relative h-40 w-40 mb-6 group-hover/card:scale-110 transition-transform duration-300">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold mb-2 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors line-clamp-2">
              {cert.title}
            </h3>
            <p className="text-sm text-zinc-500">{cert.issuer}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
