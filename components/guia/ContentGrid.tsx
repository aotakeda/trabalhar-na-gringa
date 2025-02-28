import React from "react";

interface ContentGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

export function ContentGrid({
  children,
  columns = 2,
  gap = "md",
  className = "",
}: ContentGridProps) {
  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  };

  const columnClasses = {
    1: "",
    2: "sm:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      className={`grid ${gapClasses[gap]} ${columnClasses[columns]} ${className}`}
    >
      {children}
    </div>
  );
}
