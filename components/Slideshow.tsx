"use client";

import { useEffect, useState } from "react";

type Slide = {
  src: string;
  caption?: string;
};

export default function Slideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // change slide every 4s

    return () => clearInterval(interval);
  }, [slides.length]);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full">

      <div className="relative border rounded-2xl overflow-hidden">

        <img
          src={slides[index].src}
          alt="slide"
          className="w-full h-[420px] object-contain bg-black"
        />

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded"
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded"
        >
          →
        </button>
      </div>

      {/* Caption */}
      {slides[index].caption && (
        <p className="mt-3 text-sm text-gray-600 text-center">
          {slides[index].caption}
        </p>
      )}
    </div>
  );
}
