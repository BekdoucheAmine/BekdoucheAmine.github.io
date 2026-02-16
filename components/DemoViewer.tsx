"use client";

import { useState } from "react";

export default function DemoViewer({
  video
}: {
  video: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">

      <div className="mb-8">
        <video
          src={video}
          controls
          className="w-full h-[520px] rounded-2xl bg-black object-contain"
        />
      </div>

    </div>
  );
}
