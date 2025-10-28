"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CheckCircleIcon, StarIcon } from "lucide-react";
import { motion, Transition } from "framer-motion";

type FREQUENCY = "monthly" | "yearly";
const frequencies: FREQUENCY[] = ["monthly", "yearly"];

interface Plan {
  name: string;
  info: string;
  price: {
    monthly: number;
    yearly: number;
  };
  free?: boolean;
  features: {
    text: string;
    tooltip?: string;
  }[];
  btn: {
    text: string;
    href: string;
  };
  highlighted?: boolean;
}

interface PricingSectionProps extends React.ComponentProps<'div'> {
  plans: Plan[];
  heading: string;
  description?: string;
}

export function PricingSection({
  plans,
  heading,
  description,
  ...props
}: PricingSectionProps) {
  const [frequency, setFrequency] = React.useState<'monthly' | 'yearly'>(
    'monthly',
  );

  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-center space-y-5 p-4',
        props.className,
      )}
      {...props}
    >
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-accent/20 to-light-accent/20 border border-primary-accent/30 mb-2">
          <span className="text-primary-accent font-medium text-sm">Choose Your Plan</span>
        </div>
        <h2 className="text-center text-4xl md:text-4xl lg:text-6xl font-heading font-bold tracking-tight">
          <span className="text-gradient">{heading}</span>
        </h2>
        {description && (
          <p className="text-muted-foreground text-center text-md md:text-md max-w-xl mx-auto">
            {description}
          </p>
        )}
      </div>
      <PricingFrequencyToggle
        frequency={frequency}
        setFrequency={setFrequency}
      />
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:max-w-7xl lg:gap-8">
        {plans.map((plan) => (
          <PricingCard plan={plan} key={plan.name} frequency={frequency} />
        ))}
      </div>
    </div>
  );
}

type PricingFrequencyToggleProps = React.ComponentProps<'div'> & {
  frequency: FREQUENCY;
  setFrequency: React.Dispatch<React.SetStateAction<FREQUENCY>>;
};

export function PricingFrequencyToggle({
  frequency,
  setFrequency,
  ...props
}: PricingFrequencyToggleProps) {
  return (
    <div
      className={cn(
        'bg-muted/30 mx-auto flex w-fit rounded-full border p-1',
        props.className,
      )}
      {...props}
    >
      {frequencies.map((freq) => (
        <button
          onClick={() => setFrequency(freq)}
          key={freq}
          className="relative px-4 py-1 text-sm capitalize"
        >
          <span className="relative z-10">{freq}</span>
          {frequency === freq && (
            <motion.span
              layoutId="frequency"
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-foreground absolute inset-0 z-10 rounded-full mix-blend-difference"
            />
          )}
        </button>
      ))}
    </div>
  );
}

type PricingCardProps = React.ComponentProps<'div'> & {
  plan: Plan;
  frequency?: FREQUENCY;
};

export function PricingCard({
  plan,
  className,
  frequency = frequencies[0],
  ...props
}: PricingCardProps) {
  return (
    <div
      key={plan.name}
      className={cn(
        'relative flex w-full flex-col rounded-lg border',
        className,
      )}
      {...props}
    >
      {plan.highlighted && (
        <BorderTrail
          style={{
            boxShadow:
              '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
          }}
          size={100}
        />
      )}
      <div
        className={cn(
          'bg-muted/20 rounded-t-lg border-b p-4',
          'lg:p-6 lg:rounded-xl',
          plan.highlighted && 'bg-muted/40',
        )}
      >
        <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
          {plan.highlighted && (
            <p className="bg-background flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs">
              <StarIcon className="h-3 w-3 fill-current" />
              Popular
            </p>
          )}
        </div>

  <div className="text-lg font-medium lg:text-xl">{plan.name}</div>
        <p className="text-muted-foreground text-sm font-normal">{plan.info}</p>
        <h3 className="mt-2 flex items-end gap-1">
          {plan.free ? (
            <span className="text-3xl font-bold lg:text-4xl">Free</span>
          ) : (
            <>
              <span className="text-3xl font-bold lg:text-4xl">${plan.price[frequency]}</span>
              <span className="text-muted-foreground">/{frequency === 'monthly' ? 'month' : 'year'}</span>
            </>
          )}
        </h3>
      </div>
      <div
        className={cn(
          'text-muted-foreground space-y-4 px-4 py-6 text-sm',
          'lg:px-6 lg:py-8 lg:text-base',
          plan.highlighted && 'bg-muted/10',
        )}
      >
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircleIcon className="text-foreground h-4 w-4" />
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <p
                    className={cn(
                      feature.tooltip &&
                        'cursor-pointer border-b border-dashed',
                    )}
                  >
                    {feature.text}
                  </p>
                </TooltipTrigger>
                {feature.tooltip && (
                  <TooltipContent>
                    <p>{feature.tooltip}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
      <div
        className={cn(
          'mt-auto w-full border-t p-3',
          plan.highlighted && 'bg-muted/40',
        )}
      >
        <Link to={plan.btn.href} className={`group relative w-full py-3 rounded-2xl font-heading font-bold transition-all duration-500 overflow-hidden inline-block text-center ${
          plan.highlighted
            ? "bg-gradient-to-r from-primary-accent to-light-accent text-base-dark shadow-xl hover:shadow-2xl"
            : "border-2 border-primary-accent/30 hover:border-primary-accent text-primary-accent hover:text-white hover:scale-105"
        }`}>
          {plan.highlighted ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative text-base-dark">{plan.btn.text}</span>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/10 to-light-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center justify-center gap-2">
                {plan.btn.text}
                <div className="w-2 h-2 rounded-full bg-primary-accent group-hover:animate-ping" />
              </span>
            </>
          )}
        </Link>
      </div>
    </div>
  );
}


type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

export function BorderTrail({
  className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: 5,
    ease: 'linear',
  } as Transition;

  return (
    <div className='pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]'>
      <motion.div
        className={cn('absolute aspect-square bg-zinc-500', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay: delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}

export default PricingSection;
