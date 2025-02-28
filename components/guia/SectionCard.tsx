import React from "react";
import { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface SectionCardProps {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  badge?: string;
  icon?: LucideIcon;
  className?: string;
}

export function SectionCard({
  id,
  title,
  description,
  children,
  badge,
  icon: Icon,
  className = "",
}: SectionCardProps) {
  return (
    <Card
      id={id}
      className={`border border-slate-200 overflow-hidden ${className}`}
    >
      <CardHeader className="pb-2 space-y-4 pt-8 px-8">
        {badge && (
          <Badge
            variant="default"
            className="w-fit mb-2 px-3 py-1 border-slate-300"
          >
            {badge}
          </Badge>
        )}
        <CardTitle className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-sm md:text-base">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <Separator className="my-8" />

      <CardContent className="space-y-10 px-8 pb-8">{children}</CardContent>
    </Card>
  );
}
