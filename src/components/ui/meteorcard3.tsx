import React from "react";
import { Meteors } from "./meteors";
import { DotPatternDemo } from "./dotslive";
import { benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4 } from "../../assets";

export function MeteorsDemo3() {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full  rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-n-15 border border-gray-800  px-4 pt-4 pb-24 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            
          <div className="h-10 w-10 rounded-full flex mb-6 z-50">
          <img src={benefitIcon3}/>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Remembers.
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Its memory is a dynamic network, learning from every interaction and generating real-time responses that adapt and grow more sophisticated.
          </p>

          

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
