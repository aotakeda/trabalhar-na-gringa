import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface NavigationCardProps {
  prevLink?: {
    href: string;
    title: string;
  };
  nextLink?: {
    href: string;
    title: string;
  };
}

export function NavigationCard({ prevLink, nextLink }: NavigationCardProps) {
  return (
    <div className="grid grid-cols-2 gap-6 mt-16 mb-8">
      {prevLink ? (
        <div className="col-span-1">
          <Link href={prevLink.href} className="block h-full">
            <Card className="border border-slate-200 hover:shadow-md transition-shadow h-full w-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <span className="text-xs md:text-sm font-medium text-slate-500">
                  Anterior
                </span>
                <div className="flex items-center gap-2 mt-2">
                  <ArrowLeft className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-primary font-semibold text-sm md:text-lg line-clamp-2">
                    {prevLink.title}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      ) : (
        <div className="hidden md:block col-span-1"></div>
      )}

      {nextLink ? (
        <div className={`col-span-1 ${!prevLink ? "col-start-2" : ""}`}>
          <Link href={nextLink.href} className="block h-full">
            <Card className="border border-slate-200 hover:shadow-md transition-shadow h-full w-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <span className="text-xs md:text-sm font-medium text-slate-500 text-right">
                  Próximo
                </span>
                <div className="flex items-center justify-end gap-2 mt-2">
                  <span className="text-primary font-semibold text-sm md:text-lg line-clamp-2 text-right">
                    {nextLink.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      ) : (
        <div className="hidden md:block col-span-1"></div>
      )}
    </div>
  );
}
