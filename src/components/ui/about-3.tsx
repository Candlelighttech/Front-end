import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
    isExternal?: boolean;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultCompanies = [
  { src: '/Partner1.png', alt: 'Partner 1' },
  { src: '/Partner2.png', alt: 'Partner 2' },
  { src: '/Partner3.png', alt: 'Partner 3' },
  { src: '/Partner4.png', alt: 'Partner 4' },
];

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

export const About3 = ({
  title = "About Us",
  description = "We revolutionize website building with AI, turning ideas into stunning, responsive, and intelligent digital experiences.",
  mainImage = {
    src: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    alt: "placeholder",
  },
  secondaryImage = {
    src: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    alt: "placeholder",
  },
  breakout = {
    src: "/Favicon.svg",
    alt: "logo",
    title: "Build Brilliance with CandlelightTechnology",
    description:
      "Explore further to uncover how our AI transforms imagination into effortless website creation excellence.",
    buttonText: "See More",
    buttonUrl: "/about",
    isExternal: false,
  },
  companiesTitle = "Valued by clients worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="mb-10 sm:mb-14 grid gap-4 sm:gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold">{title}</h1>
          <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12"
              />
              <div>
                <p className="mb-2 text-base sm:text-lg font-semibold">{breakout.title}</p>
                <p className="text-sm sm:text-base text-muted-foreground">{breakout.description}</p>
              </div>
              {breakout.isExternal ? (
                <a href={breakout.buttonUrl} target="_blank" rel="noopener noreferrer" className="group relative px-6 py-3 rounded-2xl border-2 border-primary-accent/30 hover:border-primary-accent text-primary-accent hover:text-white font-heading font-bold transition-all duration-500 hover:scale-105 overflow-hidden mr-auto inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/10 to-light-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center gap-2">
                    {breakout.buttonText}
                    <div className="w-2 h-2 rounded-full bg-primary-accent group-hover:animate-ping" />
                  </span>
                </a>
              ) : (
                <Link to={breakout.buttonUrl} className="group relative px-6 py-3 rounded-2xl border-2 border-primary-accent/30 hover:border-primary-accent text-primary-accent hover:text-white font-heading font-bold transition-all duration-500 hover:scale-105 overflow-hidden mr-auto inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/10 to-light-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center gap-2">
                    {breakout.buttonText}
                    <div className="w-2 h-2 rounded-full bg-primary-accent group-hover:animate-ping" />
                  </span>
                </Link>
              )}
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
        <div className="pt-10">
          <p className="text-center">{companiesTitle} </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-10"
                />
              </div>
            ))}
          </div>
        </div>
        {achievements && achievements.length > 0 && (
          <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold">{achievementsTitle}</h2>
              <p className="text-sm sm:text-base text-muted-foreground">{achievementsDescription}</p>
            </div>
            <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
              {achievements.map((item, idx) => (
                <div className="flex flex-col gap-4" key={item.label + idx}>
                  <p>{item.label}</p>
                  <span className="text-4xl font-semibold md:text-5xl">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
          </div>
        )}
      </div>
    </section>
  );
};