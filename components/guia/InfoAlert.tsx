import React from "react";
import { AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertType = "info" | "warning";

interface InfoAlertProps {
  children: React.ReactNode;
  type?: AlertType;
  className?: string;
}

export function InfoAlert({
  children,
  type = "info",
  className = "",
}: InfoAlertProps) {
  const styles = {
    info: {
      container: "bg-blue-50 border-l-4 border-blue-600",
      icon: "text-blue-600",
      text: "text-blue-800",
    },
    warning: {
      container: "bg-red-50 border-l-4 border-red-600",
      icon: "text-red-600",
      text: "text-red-800",
    },
  };

  const IconComponent = type === "info" ? Info : AlertCircle;

  return (
    <div className={`${styles[type].container} p-5 rounded-r-md ${className}`}>
      <div className="flex gap-3 md:items-center">
        <div className="flex-shrink-0 mt-1">
          <IconComponent
            className={`h-4 w-4 md:h-6 md:w-6 ${styles[type].icon}`}
          />
        </div>
        <div
          className={cn("flex-grow text-sm md:text-base", styles[type].text)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
