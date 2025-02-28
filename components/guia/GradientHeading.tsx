import React from "react";

interface GradientHeadingProps {
  title: string;
  level?: 2 | 3;
  id?: string;
  className?: string;
}

export function GradientHeading({
  title,
  level = 2,
  id,
  className = "",
}: GradientHeadingProps) {
  const baseClasses =
    "font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent";

  const sizeClasses = level === 2 ? "text-2xl mt-8 mb-4" : "text-xl mt-6 mb-3";

  const scrollClasses = id ? "scroll-mt-20" : "";

  const classes = `${baseClasses} ${sizeClasses} ${scrollClasses} ${className}`;

  return level === 2 ? (
    <h2 id={id} className={classes}>
      {title}
    </h2>
  ) : (
    <h3 id={id} className={classes}>
      {title}
    </h3>
  );
}
