"use client";

import { useEffect, useState } from "react";

type Slide = {
  src: string;
  caption?: string;
};

export default function ProjectSlideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [paused, slides.length]);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const togglePause = () => setPaused((prev) => !prev);

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

      {/* Pause/Play Button */}
      <button
        onClick={togglePause}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-2 rounded-lg"
      >
        {paused ? "▷" : "❚❚"}
      </button>
    </div>
  );
}
