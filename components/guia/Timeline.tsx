import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export interface TimelineStep {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function Timeline({ steps, className = "" }: TimelineProps) {
  return (
    <Card className={`border border-slate-200 overflow-hidden ${className}`}>
      <CardContent className="pt-10 pb-8 px-4 md:px-8">
        <div className="relative">
          <div
            className="absolute left-6 top-1 w-1 bg-gradient-to-b from-primary to-blue-600"
            style={{
              height:
                steps.length > 0
                  ? `calc(100% - ${steps.length > 1 ? 48 : 0}px)`
                  : "0",
            }}
          ></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-16 sm:pl-20">
                <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center bg-gradient-to-br from-primary to-blue-600 text-white z-10">
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="group">
                  <Link
                    href={step.link}
                    className="font-semibold text-base md:text-lg group-hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    {step.title}
                    <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                  <p className="text-sm md:text-base text-muted-foreground mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
