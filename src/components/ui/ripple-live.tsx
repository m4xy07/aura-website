import Ripple from "../ui/ripple";
import React from "react";

export function RippleDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        Ripple
      </p>
      <Ripple />
    </div>
  );
}
