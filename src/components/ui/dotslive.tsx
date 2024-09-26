"use client";

import React from "react";
import { cn } from "../../utils/cn";
import DotPattern from "../ui/dots";

export function DotPatternDemo() {
  return (
    <div className="absolute h-full w-full rounded-lg ">
        
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_top_left,white,transparent)]",
        )}
      />
    </div>
  );
}
