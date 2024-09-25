import React from "react";

export const SpinnerLoader = () => {
    return (
      <div className="flex justify-center items-center pr-3" aria-hidden="true">
        <div className="size-5 border-4 dark:invert border-t-transparent border-neutral-700 rounded-full animate-spin" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  };
  