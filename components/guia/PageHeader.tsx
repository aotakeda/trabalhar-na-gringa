import React from "react";
import { Separator } from "../ui/separator";
import GitHubStarButton from "./GithubStarButton";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-muted-foreground md:text-lg">{description}</p>

      <GitHubStarButton />
      <Separator className="my-8" />
    </div>
  );
}
