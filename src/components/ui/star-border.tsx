import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = color || "hsl(var(--foreground))"

  return (
    <Component
      className={cn(
        "relative inline-block overflow-hidden rounded-[26px]",
        className
      )}
      {...props}
    >
      {/* animated layers: placed above the background but behind the content */}
      <div
        aria-hidden
        className={cn(
          "absolute w-[280%] h-[70%] bottom-[-5%] right-[-160%] rounded-full animate-star-movement-bottom",
          "opacity-60 dark:opacity-70 blur-[8px] z-20"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      <div
        aria-hidden
        className={cn(
          "absolute w-[280%] h-[70%] top-[-5%] left-[-160%] rounded-full animate-star-movement-top",
          "opacity-60 dark:opacity-70 blur-[8px] z-20"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 20%)`,
          animationDuration: speed,
        }}
      />

      <div className={cn(
        "relative z-30 border text-foreground text-center text-xl md:text-2xl font-heading font-extrabold py-5 px-12 rounded-[26px] min-w-[220px]",
        "bg-gradient-to-b from-background/95 to-muted/95 border-[1.5px] border-border/60 shadow-2xl",
        "dark:from-background dark:to-muted dark:border-border"
      )}>
        {children}
      </div>
    </Component>
  )
}
