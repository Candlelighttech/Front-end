import { Code2, LayoutGrid, Grid, MessageSquare, Smartphone, UploadCloud, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/ui/modem-animated-footer";
import { Link } from "react-router-dom";

const Features = () => {
  const categories = [
    {
      icon: Code2,
      title: "AI Website Generation",
      description: "Turn simple ideas into full-fledged websites with Candlelight’s AI engine. Just describe what you need ",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: LayoutGrid,
      title: "Drag-and-Drop Customization",
      description: "Fine-tune every section using our intuitive visual editor. Modify colors, fonts, and structures without touching a single line of code.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: Grid,
      title: "Auto SEO & Metadata",
      description: "Your site is automatically optimized for search engines, complete with meta tags, titles, and performance enhancements.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: MessageSquare,
      title: "Smart Dashboard",
      description: "Manage projects, templates, and content workflows from a clean, auto-generated dashboard that keeps everything organized and efficient.",
    },
    {
      icon: Smartphone,
      title: "Built with Vue.js",
      description: "Experience a lightning-fast, dynamic, and reliable interface powered by Vue.js for seamless editing and instant previews",
    },
    {
      icon: UploadCloud,
      title: "AI Content Assistant",
      description: "Create engaging copy in seconds with our AI-powered content assistant. From blog posts and product descriptions to call-to-action text",
    },
  ];

  const detailedFeatures = [
    {
      title: "Prompt-to-Website Generator",
      description:
        "Simply type what you need — for example, 'I want a marketing site for a tech startup' — and Candlelight's AI engine interprets your prompt to create a complete page layout.",
      direction: "right",
      features: [
        "Headers, text blocks, and CTAs are automatically generated.",
        "Suggested titles, sections, and layouts are ready to launch or customize.",
        "Start building without any design or coding experience."
      ]
    },
    {
      title: "Visual Page Builder",
      description:
        "Move sections, change colors, adjust fonts, and tweak layouts using Candlelight's intuitive drag-and-drop editor. Every change is reflected instantly in the live preview, letting you fine-tune your design without touching a single line of code.",
      direction: "left",
      features: [
        "Full control over every page element.",
        "Instantly preview changes as you edit.",
        "Perfect for beginners and professionals alike."
      ]
    },
  ];

  const advantages = [
    "99.9% uptime guarantee",
    "24/7 customer support",
    "Automatic backups",
    "SOC 2 compliant",
    "GDPR ready",
    "Free SSL certificates",
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32">
        {/* Section 1: Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-base-dark to-secondary-dark/80" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-accent/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-light-accent/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <AnimatedSection animation="fade">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary-accent/20 to-light-accent/20 border border-primary-accent/30 mb-6">
                <span className="text-xs font-medium text-primary-accent">Advanced Tools</span>
              </div>
              <h1 className="text-3xl md:text-6xl font-heading font-bold mb-4">
                Powerful <span className="text-light-accent">Features</span>
              </h1>
              <p className="text-base md:text-lg text-light-accent max-w-2xl mx-auto">
                Everything you need to build, deploy, and scale modern web applications.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 2: Tool Categories */}
        <section className="py-24 bg-gradient-to-b from-transparent to-secondary-dark/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                  <AnimatedSection key={index} animation="slide-up" delay={index * 0.1}>
                    <div className="group relative">
                      <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary-accent/20 hover:border-primary-accent/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-accent/10 h-full">
                        <div className="text-center">
                          <div className="relative mx-auto mb-6">
                            <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-primary-accent to-light-accent p-0.5 group-hover:scale-110 transition-transform duration-300">
                              <div className="h-full w-full rounded-full bg-card flex items-center justify-center">
                                <category.icon className="h-8 w-8 text-primary-accent" />
                              </div>
                            </div>
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-accent/20 to-light-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                          </div>
                          <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-primary-accent transition-colors">
                            {category.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </Card>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Detailed Features */}
        <section className="py-24 bg-gradient-to-b from-base-dark to-secondary-dark/30 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="fade">
              <div className="relative">
                <h2 className="text-4xl font-heading font-bold text-center mb-4">
                  Feature <span className="text-gradient">Showcase</span>
                </h2>
                <p className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
                  Experience our powerful tools in action with interactive demonstrations
                </p>
              </div>
            </AnimatedSection>
            <div className="max-w-7xl mx-auto space-y-32">
              {detailedFeatures.map((feature, index) => (
                <div key={index} className="relative">
                  <AnimatedSection animation="slide-up">
                    <Card className="p-8 lg:p-12 bg-gradient-to-br from-card/95 via-base-dark/90 to-secondary-dark/95 backdrop-blur-md border-primary-accent/40 hover:border-primary-accent/80 transition-all duration-500 shadow-2xl hover:shadow-primary-accent/20 relative overflow-hidden group">
                      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                        {/* Content Section */}
                        <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-accent/25 via-light-accent/20 to-primary-accent/25 border border-primary-accent/40 backdrop-blur-sm shadow-lg relative overflow-hidden group/badge">
                            {/* Animated background shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-accent/10 to-transparent transform -skew-x-12 -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1000" />

                            {/* Pulsing indicator */}
                            <div className="h-2 w-2 rounded-full bg-primary-accent mr-2 animate-pulse relative z-10" />
                            <div className="absolute h-2 w-2 rounded-full bg-light-accent mr-2 animate-pulse opacity-60" style={{animationDelay: '0.5s'}} />

                            <span className="text-sm font-semibold text-primary-accent relative z-10">Feature {index + 1}</span>

                            {/* Subtle glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-accent/5 to-light-accent/5 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300" />
                          </div>
                          <h3 className="text-3xl lg:text-4xl font-heading font-bold">{feature.title}</h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                          
                          {feature.features && (
                            <ul className="mt-6 space-y-4">
                              {feature.features.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="flex-shrink-0 mr-3 mt-0.5">
                                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-br from-primary-accent/15 to-light-accent/15 text-primary-accent ring-1 ring-primary-accent/30 hover:ring-primary-accent/50 hover:shadow-lg hover:shadow-primary-accent/20 transition-all duration-300 hover:scale-110">
                                      <Check className="h-3 w-3" />
                                    </span>
                                  </div>
                                  <span className="text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        
                        {/* Demo Section with Actual Images */}
                        <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                          <div className="relative group cursor-pointer">
                            <Card className="relative p-6 bg-gradient-to-br from-base-dark via-secondary-dark to-base-dark border-primary-accent/30 hover:border-primary-accent/70 transition-all duration-500 overflow-hidden">

                              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-secondary-dark/50 to-base-dark border border-primary-accent/20 group-hover:border-primary-accent/40 transition-all duration-300">
                                {/* Enhanced Feature Image */}
                                <img
                                  src={`/${feature.title === 'Prompt-to-Website Generator' ? 'Prompt-to-Website Generator.png' : 'Visual Page Builder.png'}`}
                                  alt={`${feature.title} demonstration`}
                                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                  loading="lazy"
                                />

                                {/* Enhanced Overlay gradient for better text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-base-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Enhanced Hover info overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                  <div className="bg-base-dark/90 backdrop-blur-sm rounded-lg p-3 border border-primary-accent/30 relative overflow-hidden">
                                    {/* Shimmer effect on overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Animated border */}
                                    <div className="absolute inset-0 rounded-lg border border-light-accent/20 group-hover:border-light-accent/40 transition-colors duration-300" />

                                    <p className="text-xs text-primary-accent font-medium">
                                      {feature.title === 'Prompt-to-Website Generator' 
                                        ? 'AI-Powered Generation' 
                                        : 'Visual Editor'}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {feature.title === 'Prompt-to-Website Generator' 
                                        ? 'See how AI transforms your ideas into websites' 
                                        : 'Experience the intuitive drag-and-drop interface'}
                                    </p>
                                  </div>
                                </div>

                              </div>

                            </Card>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Interactive Demo Placeholder */}
        {/* <section className="py-24 bg-secondary-dark/50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="scale">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-heading font-bold text-center mb-8">
                  See It In <span className="text-gradient">Action</span>
                </h2>
                <Card className="p-12 bg-card border-primary-accent/30 text-center">
                  <div className="h-96 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary-accent/10 to-light-accent/10 border border-primary-accent/30">
                    <div>
                      <p className="text-2xl font-heading font-semibold mb-4">Interactive Demo</p>
                      <p className="text-muted-foreground">Experience our platform firsthand</p>
                    </div>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section> */}

        {/* Section 7: CTA */}
        <section className="py-8 bg-secondary-dark/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-card/80 to-secondary-dark/60 backdrop-blur-sm rounded-2xl border border-primary-accent/30 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Left Content */}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <AnimatedSection animation="fade">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary-accent/20 to-light-accent/20 border border-primary-accent/30 mb-4">
                        <span className="text-sm font-medium text-primary-accent">Ready to Start?</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                        Experience These <span className="text-gradient">Features</span>
                      </h2>
                      <p className="text-base md:text-lg text-light-accent mb-6">
                        Start your free trial today and discover the power of our advanced tools.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to="/contact"
                          className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-primary-accent to-light-accent font-heading font-bold text-base text-base-dark overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          <span className="relative text-base-dark">Start Free Trial</span>
                        </Link>
                      </div>
                    </AnimatedSection>
                  </div>
                  
                  {/* Right Image */}
                  <div className="md:w-1/2">
                    <AnimatedSection animation="slide-up" delay={0.2}>
                      <div className="relative h-56 md:h-[420px] lg:h-[340px] xl:h-[340px]">
                        <img 
                          src="/Experience These Features.png"
                          alt="Features showcase"
                          className="w-full h-full object-cover md:rounded-r-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-accent/20 to-light-accent/20 md:rounded-r-2xl" />
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Features;
