import { CircleHelp } from "lucide-react";
import React from "react";

interface QuestionCardProps {
  question: string;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mt-0.5">
        <CircleHelp className="text-primary h-5 w-5" />
      </div>
      <span className="text-sm md:text-base ml-2">{question}</span>
    </div>
  );
}
