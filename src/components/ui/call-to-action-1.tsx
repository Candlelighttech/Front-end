import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StarBorder } from "@/components/ui/star-border";

export default function Example() {
  return (
    <>
      <div className="max-w-5xl py-8 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center rounded-2xl p-10 text-white" style={{background: 'linear-gradient(180deg,var(--tw-gradient-stops))'}}>
        <div className="flex flex-wrap items-center justify-center p-1 rounded-full bg-primary-accent/10 backdrop-blur border border-primary-accent/30 text-sm">
          <div className="flex items-center">
            <img className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
            <img className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white -translate-x-2"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
            <img className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white -translate-x-4"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
              alt="userImage3" />
          </div>
          <p className="-translate-x-2 font-medium ml-3">Join community of 1m+ founders </p>
        </div>

        <h1 className="text-4xl md:text-5xl md:leading-[60px] font-heading font-semibold max-w-xl mt-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-light-accent">
          Ready to build your AI-generated website?
        </h1>

        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
          Join thousands of creators using Candlelight Technology to design smarter, launch faster, and stand out online.
        </p>

        <StarBorder
          as={Link}
          to="/contact"
          className={cn("mt-8 font-heading text-base")}
          color={"hsl(var(--primary-accent))"}
          speed="6s"
        >
          <span className="relative font-bold">Start for Free</span>
        </StarBorder>
      </div>
    </>
  );
};
