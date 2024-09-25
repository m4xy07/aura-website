import React from "react";
import { GradientCard } from "../ui/cuicui/other/cursors/dynamic-cards/gradient-card";
import { benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4 } from "../../assets";

export default function DynamicCardsVariant2() {
  return (
    <div className="relative w-5/6 p-6">
      <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
        <GradientCard
          title="Ask Anything"
          description="Lets users quickly find answers to their questions without having to search through multiple sources."
          className="p-4"
        >
          <img src={benefitIcon1}/>
        </GradientCard>
        <GradientCard
          title="Improve Everyday"
          description="The app uses natural language processing to understand user queries and provide accurate and relevant responses."
          className="p-4"
        >
          <img src={benefitIcon2}/>
        </GradientCard>
        <GradientCard
          title="Connect Everywhere"
          description="Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient."
          className="p-4"
        >
            <img src={benefitIcon3}/>
            </GradientCard>
        <GradientCard
          title="Fast Responding"
          description="Lets users quickly find answers to their questions without having to search through multiple sources."
          className="p-4"
        >
            <img src={benefitIcon4}/>
            </GradientCard>
            <GradientCard
          title="Fast Responding"
          description="Lets users quickly find answers to their questions without having to search through multiple sources."
          className="p-4"
        >
            <img src={benefitIcon4}/>
            </GradientCard>
            <GradientCard
          title="Fast Responding"
          description="Lets users quickly find answers to their questions without having to search through multiple sources."
          className="p-4"
        >
            <img src={benefitIcon4}/>
            </GradientCard>
      </div>
    </div>
  );
}
