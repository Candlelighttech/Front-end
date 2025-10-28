import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/ui/modem-animated-footer";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Plan",
      price: "Free",
      description: "Perfect for individuals exploring AI website building",
      features: [
        { text: "1 AI-generated website", included: true },
        { text: "Access to core design tools", included: true },
        { text: "Basic drag-and-drop builder", included: true },
        { text: "SEO auto-setup", included: true },
        { text: "Free hosting for 14 days", included: true },
        // { text: "Priority support", included: false },
      ],
      highlighted: false,
    },
    {
      name: "Pro Plan",
      price: "$19",
      period: "/month",
      description: "Best for freelancers and small business owners.",
      features: [
        { text: "Up to 5 AI-generated websites", included: true },
        { text: "Advanced visual editor", included: true },
        { text: "Custom domain connection", included: true },
        { text: "Full SEO optimization", included: true },
        { text: "Access to AI blog writer", included: true },
        { text: "24/7 email support", included: true },
      ],
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Agency Plan",
      price: "$49",
      period: "/month",
      description: "Ideal for agencies and growing teams.",
      features: [
        { text: "Unlimited AI-generated websites", included: true },
        { text: "Team collaboration dashboard", included: true },
        { text: "Export production-ready code", included: true },
        { text: "AI layout & content suggestions", included: true },
        { text: "Analytics & client management tools", included: true },
        { text: "Priority support and updates", included: true },
      ],
      highlighted: false,
    },
  ];

  const comparisonFeatures = [
    { category: "Tools", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
    { category: "Storage", starter: "10GB", pro: "100GB", enterprise: "Unlimited" },
    { category: "Users", starter: "1", pro: "10", enterprise: "Unlimited" },
    { category: "Support", starter: "Email", pro: "Priority", enterprise: "24/7 Dedicated" },
    { category: "API Access", starter: "Basic", pro: "Full", enterprise: "Full + Custom" },
  ];

  const benefits = [
    "No hidden fees or surprise charges",
    "Cancel anytime with no penalties",
    "30-day money-back guarantee",
    "Free migration assistance",
    "Automatic updates included",
    "99.9% uptime SLA",
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
                <span className="text-xs font-medium text-primary-accent">Transparent Plans</span>
              </div>
              <h1 className="text-3xl md:text-6xl font-heading font-bold mb-4">
                Simple, Transparent <span className="text-light-accent">Pricing</span>
              </h1>
              <p className="text-base md:text-lg text-light-accent max-w-2xl mx-auto">
                Choose the plan that fits your needs. All plans include our core features.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 2: Pricing Plans */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <AnimatedSection key={index} animation="scale" delay={index * 0.15}>
                  <Card
                    className={`p-8 h-full flex flex-col relative ${
                      plan.highlighted
                        ? "border-primary-accent border-2 glow-primary scale-105 bg-secondary-dark"
                        : "border-primary-accent/30 bg-card"
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary-accent to-light-accent text-sm font-semibold text-black">
                          {plan.badge}
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                      <div className="flex items-end justify-center gap-1">
                        <span className="text-5xl font-heading font-bold text-gradient">{plan.price}</span>
                        <span className="text-muted-foreground mb-2">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-primary-accent flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "" : "text-muted-foreground/50"}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`group relative w-full py-3 rounded-2xl font-heading font-bold transition-all duration-500 overflow-hidden ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-primary-accent to-light-accent text-base-dark shadow-xl hover:shadow-2xl"
                          : "border-2 border-primary-accent/30 hover:border-primary-accent text-primary-accent hover:text-white hover:scale-105"
                      }`}
                    >
                      {(() => {
                        const getLabel = (name: string) => {
                          if (name.toLowerCase().includes("starter")) return "Start Free";
                          if (name.toLowerCase().includes("pro")) return "Upgrade to Pro";
                          if (name.toLowerCase().includes("agency")) return "Get Agency Access";
                          if (name === "Enterprise") return "Contact Sales";
                          return "Start Free";
                        };

                        const label = getLabel(plan.name);

                        return plan.highlighted ? (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="relative flex items-center justify-center text-base-dark">{label}</span>
                          </>
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/10 to-light-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative flex items-center justify-center gap-2">
                              {label}
                              <div className="w-2 h-2 rounded-full bg-primary-accent group-hover:animate-ping" />
                            </span>
                          </>
                        );
                      })()}
                    </Link>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Feature Comparison */}
        <section className="py-24 bg-gradient-to-b from-secondary-dark/50 to-base-dark/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-accent/20 to-light-accent/20 border border-primary-accent/30 mb-6">
                  <span className="text-sm font-medium text-primary-accent">Compare Plans</span>
                </div>
                <h2 className="text-4xl font-heading font-bold mb-4">
                  Detailed <span className="text-gradient">Comparison</span>
                </h2>
                <p className="text-lg text-light-accent max-w-2xl mx-auto">
                  See exactly what's included in each plan to make the best choice for your needs
                </p>
              </div>
            </AnimatedSection>
            
            {/* Mobile/Tablet: Card Layout */}
            <div className="lg:hidden max-w-4xl mx-auto space-y-6">
              {comparisonFeatures.map((feature, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 0.05}>
                  <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary-accent/30">
                    <h3 className="text-lg font-heading font-bold mb-4 text-primary-accent">{feature.category}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-secondary-dark/30">
                        <p className="text-sm font-semibold text-muted-foreground mb-2">Starter</p>
                        <p className="font-bold">{feature.starter}</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary-accent/10 to-light-accent/10 border border-primary-accent/30">
                        <p className="text-sm font-semibold text-primary-accent mb-2">Pro</p>
                        <p className="font-bold text-primary-accent">{feature.pro}</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-secondary-dark/30">
                        <p className="text-sm font-semibold text-muted-foreground mb-2">Enterprise</p>
                        <p className="font-bold">{feature.enterprise}</p>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            
            {/* Desktop: Enhanced Table Layout */}
            <AnimatedSection animation="fade">
              <div className="hidden lg:block max-w-6xl mx-auto">
                <Card className="overflow-hidden bg-card/90 backdrop-blur-sm border-primary-accent/30">
                  <div className="grid grid-cols-4 gap-0">
                    {/* Header */}
                    <div className="p-6 bg-gradient-to-r from-secondary-dark to-secondary-dark/80 border-b border-primary-accent/30">
                      <h3 className="font-heading font-bold text-lg">Feature</h3>
                    </div>
                    <div className="p-6 bg-secondary-dark/50 border-b border-primary-accent/30 text-center">
                      <h3 className="font-heading font-bold text-lg">Starter</h3>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-primary-accent/10 to-light-accent/10 border-b border-primary-accent/30 text-center">
                      <h3 className="font-heading font-bold text-lg text-primary-accent">Pro</h3>
                    </div>
                    <div className="p-6 bg-secondary-dark/50 border-b border-primary-accent/30 text-center">
                      <h3 className="font-heading font-bold text-lg">Enterprise</h3>
                    </div>
                    
                    {/* Rows */}
                    {comparisonFeatures.map((feature, index) => (
                      <>
                        <div key={`${index}-feature`} className="p-6 border-b border-primary-accent/10 bg-gradient-to-r from-card/50 to-card/30">
                          <p className="font-semibold text-muted-foreground">{feature.category}</p>
                        </div>
                        <div key={`${index}-starter`} className="p-6 border-b border-primary-accent/10 text-center">
                          <p className="font-semibold">{feature.starter}</p>
                        </div>
                        <div key={`${index}-pro`} className="p-6 border-b border-primary-accent/10 text-center bg-gradient-to-br from-primary-accent/5 to-light-accent/5">
                          <p className="font-bold text-primary-accent">{feature.pro}</p>
                        </div>
                        <div key={`${index}-enterprise`} className="p-6 border-b border-primary-accent/10 text-center">
                          <p className="font-semibold">{feature.enterprise}</p>
                        </div>
                      </>
                    ))}
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 4: Benefits */}
        {/* <section className="py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade">
              <h2 className="text-4xl font-heading font-bold text-center mb-16">
                Everything You <span className="text-gradient">Need</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} animation={index % 2 === 0 ? "slide-left" : "slide-right"} delay={index * 0.1}>
                  <Card className="p-6 bg-card border-primary-accent/30 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-accent to-light-accent flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-base-dark" />
                    </div>
                    <p className="font-semibold">{benefit}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section> */}

        {/* Section 5: Testimonials */}
        {/* <section className="py-24 bg-secondary-dark/50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade">
              <h2 className="text-4xl font-heading font-bold text-center mb-16">
                What Customers <span className="text-gradient">Say</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedSection animation="slide-up">
                <Card className="p-8 bg-card border-primary-accent/30">
                  <p className="text-lg mb-6 italic">
                    "The Pro plan gave us everything we needed. Great value for money."
                  </p>
                  <p className="font-semibold">Amanda Rogers</p>
                  <p className="text-sm text-muted-foreground">Marketing Director</p>
                </Card>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={0.2}>
                <Card className="p-8 bg-card border-primary-accent/30">
                  <p className="text-lg mb-6 italic">
                    "Enterprise support has been phenomenal. Worth every penny."
                  </p>
                  <p className="font-semibold">James Wilson</p>
                  <p className="text-sm text-muted-foreground">IT Manager</p>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section> */}



        {/* Section 7: Final CTA */}
        <section className="py-8 bg-secondary-dark/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-card/80 to-secondary-dark/60 backdrop-blur-sm rounded-2xl border border-primary-accent/30 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Left Content */}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <AnimatedSection animation="fade">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary-accent/20 to-light-accent/20 border border-primary-accent/30 mb-4">
                        <span className="text-sm font-medium text-primary-accent">Start Free Trial</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                        Choose Your <span className="text-gradient">Plan</span>
                      </h2>
                      <p className="text-base md:text-lg text-light-accent mb-6">
                        No credit card required. 14-day free trial on all plans with full access.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to="/contact"
                          className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-primary-accent to-light-accent font-heading font-bold text-base text-base-dark overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          <span className="relative text-base-dark">Get Started Free</span>
                        </Link>
                      
                      </div>
                    </AnimatedSection>
                  </div>
                  
                  {/* Right Image */}
                  <div className="md:w-1/2">
                    <AnimatedSection animation="slide-up" delay={0.2}>
                      <div className="relative h-56 md:h-[420px] lg:h-[340px] xl:h-[340px]">
                        <img 
                          src="/CTA section1.png"
                          alt="Pricing plans"
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

export default Pricing;
