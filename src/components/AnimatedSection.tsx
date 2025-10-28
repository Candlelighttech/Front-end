import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  className?: string;
}

const AnimatedSection = ({
  children,
  animation = "fade",
  delay = 0,
  className = "",
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const animations = {
      fade: { opacity: 0 },
      "slide-up": { opacity: 0, y: 60 },
      "slide-left": { opacity: 0, x: 60 },
      "slide-right": { opacity: 0, x: -60 },
      scale: { opacity: 0, scale: 0.8 },
    };

    const fromVars = animations[animation];

    gsap.fromTo(
      element,
      fromVars,
      {
        ...Object.keys(fromVars).reduce((acc, key) => {
          if (key === "opacity") return { ...acc, opacity: 1 };
          if (key === "scale") return { ...acc, scale: 1 };
          return { ...acc, [key]: 0 };
        }, {}),
        duration: 1,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animation, delay]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
