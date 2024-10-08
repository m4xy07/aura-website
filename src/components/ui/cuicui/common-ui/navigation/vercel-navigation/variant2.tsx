"use client";
import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion";
import type React from "react";
import { type HTMLAttributes, useState } from "react";

const dataButtons = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Terms & conditions", href: "#" },
  { label: "Cuicui.day", href: "#" },
];
export function VercelNavigationVariant2() {
  const [elementFocused, setElementFocused] = useState<number>(0);

  const handleOnClickButton = (index: number) => {
    setElementFocused(index);
  };
  return (
    <nav className="flex flex-col sm:flex-row">
      {dataButtons.map((button, index) => (
        <button
          type="button"
          key={button.label}
          onClick={() => handleOnClickButton(index)}
          className="text-neutral-500 text-sm font-medium py-1 px-2 rounded relative whitespace-nowrap inline-flex w-fit dark:hover:text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          {button.label}
          <AnimatePresence>
            {elementFocused === index && (
              <motion.div
                className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-200 dark:bg-neutral-800 rounded-md -z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                layout
                layoutId="focused-element"
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </nav>
  );
}
