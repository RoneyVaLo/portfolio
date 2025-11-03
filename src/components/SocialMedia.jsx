import React from "react";
import { cn } from "../utils/cn";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/RoneyVaLo/" target="_blank">
        <button
          className={cn(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "bg-foreground text-popover shadow-2xl",
            "size-9",
            "rounded-full cursor-pointer hover:animate-jelly"
          )}
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/roney-valdelomar-l%C3%B3pez-b8269b211/"
        target="_blank"
      >
        <button
          className={cn(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "bg-foreground text-popover shadow-2xl",
            "size-9",
            "rounded-full cursor-pointer hover:animate-jelly"
          )}
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </button>
      </a>
    </div>
  );
};

export default SocialMedia;
