import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
  target?: string;
  disabled?: boolean;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  target = "",
  href,
  className = "",
  disabled = false,
}: FeatureCardProps) {
  const cardClasses = `group relative overflow-hidden border bg-gradient-to-br from-slate-50 to-slate-100 p-6 transition-all ${
    disabled
      ? "opacity-50 cursor-not-allowed pointer-events-none"
      : "hover:shadow-md hover:scale-[1.02] duration-300"
  } ${className}`;

  const content = (
    <div className="flex items-center gap-4">
      <div className="flex h-12 p-3 w-12 items-center justify-center bg-gradient-to-br from-primary to-blue-600 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-semibold group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
          {title}
          {disabled && (
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
              Em breve
            </span>
          )}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );

  return href && !disabled ? (
    <a href={href} target={target} className={cardClasses}>
      {content}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </a>
  ) : (
    <div className={cardClasses}>{content}</div>
  );
}
