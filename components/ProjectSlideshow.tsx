"use client";

import { useEffect, useState } from "react";

type Slide = {
  src: string;
  caption?: string;
};

export default function ProjectSlideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [slides.length]);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full">
      <img
        src={slides[index].src}
        className="rounded-2xl shadow-xl w-full"
        alt="Project slide"
      />

      {/* controls */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-lg"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-lg"
      >
        →
      </button>
    </div>
  );
}
