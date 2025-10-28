import { TestimonialsColumn } from "./testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "I’ve used many site builders before, but Candlelight Technology is on another level. I just described my design style and goals, and the AI handled everything layout, content, and even responsive settings. What used to take me days now takes under an hour.The drag-and-drop editor makes final tweaks effortless, and the results look completely professional.",
  image: "/Emma Johnson.png",
  name: "Emma Johnson",
    role: "Freelance Designer (UK)",
  },
   {
    text: "The AI suggestions for layout and CTAs improved our engagement metrics. It's like having a design partner available 24/7.",
  image: "/Omar Farouk.png",
  name: "Omar Farouk",
    role: "Founder, TechStart (UAE)",
  },
  {
    text: "I run a small handmade jewelry business and needed a professional website fast. With Candlelight, I simply typed a short description of my brand, and the AI built a ready-to-launch e-commerce site with product pages and a blog layout.It’s like having a designer, developer, and copywriter all in one platform.",
  image: "/Sofia Lopez.png",
  name: "Sofia Lopez",
    role: "Entrepreneur & Founder of Luna Gems (Spain)",
  },
  {
    text: "What amazed me most was how accurately Candlelight captured my startup’s tone and purpose. I gave a few key prompts, and it produced a tech-style landing page with AI-suggested sections that looked investor-ready.The real-time preview and layout generator are a dream for product founders who value design but don’t have time for it.",
  image: "/Dev Ranasinghe.png",
  name: "Willims Smith",
    role: "Co-Founder, OrbitIQ (UK)",
  },
  {
    text: "Candlelight made it possible for our non-technical team to own the website process from prompts to publish with professional results.",
  image: "/Sofia Martinez.png",
  name: "Sofia Martinez",
    role: "Operations Lead, TechNova (Brazil)",
  },
  {
    text: "I’m not a tech person, but Candlelight made web design effortless. I created my personal blog and portfolio site just by describing the vibe I wanted. The AI filled in everything structure, visuals, and writing prompts. I launched my site before my morning coffee got cold that’s how fast it is!",
  image: "/Noah Thompson.png",
  name: "Noah Thompson",
    role: "Content Creator (USA)",
  },
  {
    text: "Candlelight’s interface feels smoother, smarter, and more intuitive. The AI not only builds layouts but suggests content structures based on industry type. I’ve used it to build campaign sites, blogs, and landing pages for clients all within hours.It’s the only tool that truly combines design freedom with AI automation.",
  image: "/Alisha Mehta.png",
  name: "Sara Johnshon",
    role: "Marketing Consultant (Germany)",
  },
  {
    text: "Deployment tools are a breeze export HTML/CSS or push to a managed subdomain with one click. Our clients love the speed and reliability.",
  image: "/Hannah Lee.png",
  name: "Hannah Lee",
    role: "Technical PM, BrightWave Solutions (Canada)",
  },
  {
    text: "As a small digital agency, speed and consistency matter most. Candlelight’s AI builder helps us generate full websites for clients in just a few hours. The AI instantly interprets brand tone, creates matching color palettes, and generates SEO-friendly copy that we can refine later.Our project turnaround time has improved by 70%, and clients love the results.",
  image: "/Ryan Patel.png",
  name: "Wang Jun",
    role: "Founder, Elevate Creative Agency (Singapore)",
  },
 
  
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsDemo: React.FC = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-accent/20 to-light-accent/20 border border-primary-accent/30 mb-2">
              <span className="text-sm font-medium text-primary-accent">Customer Stories</span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">See what our customers have to say about us.</p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsDemo;
