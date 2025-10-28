import React from "react";
import { Link } from "react-router-dom";
import { Code, Zap, Shield, TrendingUp, Users, Star, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TestimonialsDemo from "@/components/ui/testimonials-demo";
import FeatureCarouselDemo from "@/components/ui/feature-carousel-demo";
import BouncyCardsFeatures from "@/components/ui/bounce-card-features";
import { About3 } from "@/components/ui/about-3";
import FinancialHeroDemo from "@/components/ui/hero-section";
import CallToActionOne from "@/components/ui/call-to-action-1";
import { motion } from "framer-motion";
import { PricingSection } from "@/components/ui/pricing";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import Header from "@/components/layout/Header";
// Use the modem animated footer (placed under components/ui) so theme and animation are consistent
import Footer from "@/components/ui/modem-animated-footer";
import { AnimatedFeatureSpotlight } from '@/components/ui/feature-spotlight';
import BlogPreview from "@/components/ui/blog-preview";

const Homepage = () => {
  const toolCategories = [
    {
      icon: Code,
      title: "Development Tools",
      description: "Powerful code editors, debuggers, and version control integrations.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your applications with advanced caching and compression.",
    },
    {
      icon: Shield,
      title: "Security Suite",
      description: "Enterprise-grade security tools to protect your digital assets.",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Real-time insights and data visualization for informed decisions.",
    },
  ];

  const steps = [
    { number: "01", title: "Sign Up", description: "Get started instantly with a free account. Access your personal AI workspace and explore powerful tools designed to simplify website creation." },
    { number: "02", title: "Describe Your Vision", description: "Type in a short description of your business, style preferences, or goals. Our AI engine instantly interprets your intent and generates layouts, text, and visual components" },
    { number: "03", title: "Customize Instantly", description: "Use our intuitive visual builder to fine-tune every section. Adjust content, swap visuals, and preview changes in real-time ,no coding required" },
    { number: "04", title: "Launch & Scale", description: "Deploy your site instantly and manage everything from your dynamic dashboard. Candlelight’s smart optimization ensures your site is fast, SEO-ready, and built to grow." },
  ];

  const featuredTools = [
    { name: "Project Dashboard", users: "50K+", rating: 4.9 },
    { name: "Visual Page Builder", users: "35K+", rating: 4.8 },
    { name: "Responsive Output", users: "42K+", rating: 4.9 },
    { name: "AI SEO Generator", users: "28K+", rating: 4.7 },
  ];

  const stats = [
    { icon: TrendingUp, label: "Average Growth", value: 300, suffix: "%" },
    { icon: Users, label: "Happy Clients", value: 5000, suffix: "+" },
    { icon: Clock, label: "Time Saved", value: 40, suffix: "%" },
    { icon: Award, label: "Success Rate", value: 99, suffix: "%" },
  ];

  const PRICING_PLANS = [
    {
      name: 'Starter',
      free: true,
      info: 'For individuals and small teams',
      price: { monthly: 0, yearly: 0 },
      features: [
        { text: '1 AI-generated website' },
        { text: 'Access to core design toolse' },
        { text: 'Basic drag-and-drop builder' },
        { text: 'SEO auto-setup' },
      ],
      btn: { text: 'Get Started', href: '/contact' },
    },
    {
      name: 'Pro',
      highlighted: true,
      info: 'For growing teams',
      price: { monthly: 19, yearly: 19 * 12 },
      features: [
        { text: 'Up to 5 AI-generated websites' },
        { text: 'Advanced visual editor' },
        { text: 'Custom domain connection' },
        { text: 'Full SEO optimization' },
      ],
      btn: { text: 'Start Free Trial', href: '/contact' },
    },
    {
      name: 'Enterprise',
      info: 'For large organizations',
      price: { monthly: 49, yearly: 49 * 12 },
      features: [
        { text: 'Unlimited AI-generated websites' },
        { text: 'Team collaboration dashboard' },
        { text: 'Export production-ready code' },
        { text: 'AI layout & content suggestions' },
      ],
      btn: { text: 'Contact Sales', href: '/contact' },
    },
  ];

  const testimonials = [
    {
      quote: "Candlelight transformed how our team works. The tools are intuitive and powerful.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
    },
    {
      quote: "We've seen a 3x increase in productivity since adopting Candlelight's platform.",
      author: "Michael Chen",
      role: "Lead Developer, StartupXYZ",
    },
  ];

  // Helper: pick an illustrative image URL based on a short title keyword
  const getImageForTitle = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('visual') || t.includes('builder')) {
      return 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop';
    }
    if (t.includes('dashboard') || t.includes('project')) {
      return 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop';
    }
    if (t.includes('seo') || t.includes('ai')) {
      return 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop';
    }
    if (t.includes('responsive') || t.includes('output')) {
      return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop';
    }
    // fallback
    return 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop';
  };

  return (
    <>
      <Header />
  <main className="min-h-screen pt-32 overflow-x-hidden">
  {/* Section 1: Hero */}
  <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background video (responsive) */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/Bg.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-base-dark via-secondary-dark to-base-dark opacity-60 z-10" />
          <div className="absolute inset-0 opacity-20 z-20">
            <div className="absolute top-1/4 left-1/4 w-36 h-36 sm:w-96 sm:h-96 bg-primary-accent rounded-full blur-[60px] sm:blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-36 h-36 sm:w-96 sm:h-96 bg-light-accent rounded-full blur-[60px] sm:blur-[120px]" />
          </div>
          
          <div className="container relative z-30 mx-auto px-4 text-center">
            <AnimatedSection animation="fade">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 text-gradient leading-snug">
                Build Smarter & Launch
                <br />
                <span className="bg-gradient-to-r from-primary-accent via-light-accent to-primary-accent bg-clip-text text-transparent font-extrabold animate-gradient" style={{backgroundImage: 'linear-gradient(90deg, hsl(232 27% 56%), hsl(242 20% 67%), hsl(232 27% 56%), hsl(242 20% 67%), hsl(232 27% 56%), hsl(242 20% 67%), hsl(232 27% 56%))'}}>
                  Powered by AI
                </span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={0.2}>
              <p className="text-sm sm:text-base md:text-md text-light-accent mb-6 sm:mb-8 max-w-3xl mx-auto">
                Welcome to CandlelightTechnology.com, the next-generation AI-powered website builder designed to help entrepreneurs, freelancers, and agencies create stunning, responsive websites effortlessly. Simply describe your idea 
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={0.4}>
              <div className="flex justify-center">
                <Link to="/contact" className="group relative px-4 py-3 sm:px-8 sm:py-6 rounded-2xl bg-gradient-to-r from-primary-accent to-light-accent font-heading font-bold text-sm sm:text-lg text-base-dark overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative text-base-dark">Start Free Trial</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
  </section>

  {/* About section (added) */}
  <About3
    achievements={[]}
    mainImage={{ src: '/About section 1.png', alt: 'About section large' }}
    secondaryImage={{ src: '/About section 2.png', alt: 'About section small' }}
  />

        {/* Section: Results That Matter - Modern Design */}
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-secondary-dark/30 to-base-dark/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-light-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="fade">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-accent/20 to-light-accent/20 border border-primary-accent/30 mb-6">
                  <span className="text-sm font-medium text-primary-accent">Our Impact</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
                  Results That <span className="text-gradient">Matter</span>
                </h2>
                <p className="text-base md:text-lg text-light-accent max-w-2xl mx-auto">
                  Numbers that showcase our commitment to excellence and growth
                </p>
              </div>
            </AnimatedSection>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <AnimatedSection key={index} animation="scale" delay={index * 0.15}>
                    <div className="group relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary-accent/20 via-light-accent/20 to-primary-accent/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                      <div className="relative bg-gradient-to-br from-card/95 to-secondary-dark/80 backdrop-blur-xl border border-primary-accent/30 hover:border-primary-accent/60 rounded-3xl p-8 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary-accent/25 group-hover:-translate-y-3">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-accent/10 to-light-accent/10 rounded-bl-3xl" />
                        <div className="relative">
                          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-accent to-light-accent p-1 group-hover:scale-110 transition-transform duration-500">
                            <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                              <stat.icon className="w-10 h-10 text-primary-accent" />
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">
                              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="h-1 w-16 bg-gradient-to-r from-primary-accent to-light-accent rounded-full mx-auto group-hover:w-24 transition-all duration-500" />
                          </div>
                          <p className="text-base text-light-accent/80 font-medium group-hover:text-primary-accent transition-colors duration-300">{stat.label}</p>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-light-accent to-primary-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
                            <div className="w-3 h-3 bg-white rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        

        {/* Section 3: How It Works - Card Grid Layout */}
        <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade">
              <div className="text-center mb-12 sm:mb-16 md:mb-20">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-accent/10 to-light-accent/10 border border-primary-accent/30 text-primary-accent text-sm mb-6">
                  How It Works
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
                  Simple Steps to <span className="text-gradient">Success</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Follow our intelligent, four-step process to design and launch your dream website powered entirely by AI innovation.
                </p>
              </div>
            </AnimatedSection>
            
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                  {steps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <AnimatedSection key={index} animation="slide-up" delay={index * 0.2}>
                        <div className={`group relative ${isEven ? 'md:mt-0' : 'md:mt-12'}`}>
                          <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-800/40 dark:to-gray-900/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-primary-accent/20 hover:border-primary-accent/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                            {/* Step number badge */}
                            <div className="absolute -top-4 left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary-accent to-light-accent flex items-center justify-center shadow-lg">
                              <span className="text-base-dark font-heading font-bold text-lg sm:text-xl">{step.number}</span>
                            </div>

                            <div className="pt-8 sm:pt-10">
                              <h3 className="text-xl sm:text-2xl font-heading font-bold mb-4 text-foreground group-hover:text-primary-accent transition-colors">{step.title}</h3>
                              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">{step.description}</p>

                              {/* Visual elements */}
                              <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-primary-accent rounded-full" />
                                  <div className="flex-1 h-1 bg-gradient-to-r from-primary-accent/30 to-transparent rounded-full" />
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-light-accent rounded-full" />
                                  <div className="flex-1 h-1 bg-gradient-to-r from-light-accent/30 to-transparent rounded-full" />
                                </div>
                              </div>

                              {/* Progress indicator */}
                              <div className="mt-6 flex items-center justify-between">
                                <span className="text-sm font-semibold text-primary-accent">Step {index + 1} of {steps.length}</span>
                                <div className="flex items-center gap-1">
                                  {[...Array(4)].map((_, i) => (
                                    <div key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${i <= index ? 'bg-primary-accent' : 'bg-primary-accent/20'}`} />
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Hover glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-accent/5 to-light-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>

                          {/* Connection line for desktop */}
                          {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-1/2 -right-5 w-10 h-0.5 bg-gradient-to-r from-primary-accent/50 to-light-accent/30" />
                          )}
                        </div>
                      </AnimatedSection>
                    );
                  })}
                </div>
              </div>
          </div>
        </section>
        {/* Feature Spotlight (moved after How It Works) */}
        <section className="py-12">
          <div className="container mx-auto px-2 sm:px-4">
            <AnimatedFeatureSpotlight
              preheaderIcon={<Zap className="h-4 w-4" />}
              preheaderText="Powerful Insights"
              heading={<><span className="text-primary">AI-Powered </span> <br></br>Visual Page Builder</>}
              description="Design stunning, responsive web pages with the intelligence of AI. Candlelight’s visual page builder lets you create, customize, and deploy websites faster than ever,all without writing a single line of code."
              cta={
                <Link to="/features" className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-accent to-light-accent font-heading font-bold text-lg text-base-dark overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative text-base-dark">See In Action</span>
                </Link>
              }
              imageUrl={'/AI-Powered Visual Page Builder.png'}
              imageAlt="Visual Page Builder preview"
            />
          </div>
        </section>

        {/* Section 4.5: Double Marquee with Scroll Animation */}
        <section className="py-8 sm:py-12 md:py-16 bg-secondary-dark/20 overflow-hidden relative">
          {/* Background animation */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-light-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          </div>
          
          <div className="space-y-4 sm:space-y-6 md:space-y-8 relative z-10">
            {/* First Marquee - Left to Right */}
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee space-x-4 sm:space-x-6 md:space-x-8">
                {[
                  { icon: TrendingUp, text: "300% Faster" },
                  { icon: Zap, text: "Lightning Speed" },
                  { icon: Shield, text: "AI-Powered" },
                  { icon: Code, text: "Developer Tools" },
                  { icon: Clock, text: "Time Saving" },
                  { icon: Users, text: "50K+ Users" }
                ].concat([
                  { icon: TrendingUp, text: "300% Faster" },
                  { icon: Zap, text: "Lightning Speed" },
                  { icon: Shield, text: "AI-Powered" },
                  { icon: Code, text: "Developer Tools" },
                  { icon: Clock, text: "Time Saving" },
                  { icon: Users, text: "50K+ Users" }
                ]).map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="group/item flex-shrink-0 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary-accent/10 to-light-accent/10 border border-primary-accent/20 hover:border-primary-accent/50 hover:bg-primary-accent/15 transition-all duration-300 cursor-pointer">
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary-accent" />
                      <span className="font-heading font-semibold text-xs sm:text-sm md:text-lg text-primary-accent whitespace-nowrap">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Second Marquee - Right to Left */}
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee-reverse space-x-4 sm:space-x-6 md:space-x-8">
                {[
                  { icon: Award, text: "Enterprise Security" },
                  { icon: Star, text: "Award Winning" },
                  { icon: TrendingUp, text: "Real-time Analytics" },
                  { icon: Shield, text: "99.9% Uptime" },
                  { icon: Code, text: "Clean Code" },
                  { icon: Clock, text: "24/7 Support" }
                ].concat([
                  { icon: Award, text: "Enterprise Security" },
                  { icon: Star, text: "Award Winning" },
                  { icon: TrendingUp, text: "Real-time Analytics" },
                  { icon: Shield, text: "99.9% Uptime" },
                  { icon: Code, text: "Clean Code" },
                  { icon: Clock, text: "24/7 Support" }
                ]).map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="group/item flex-shrink-0 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-light-accent/10 to-primary-accent/10 border border-light-accent/20 hover:border-light-accent/50 hover:bg-light-accent/15 transition-all duration-300 cursor-pointer">
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-light-accent" />
                      <span className="font-heading font-semibold text-xs sm:text-sm md:text-lg text-light-accent whitespace-nowrap">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Testimonials (shadcn demo) */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* new demo component */}
            <div className="max-w-6xl mx-auto">
              {/* lazy import demo to avoid SSR issues */}
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <TestimonialsDemo />
            </div>
          </div>
        </section>

        {/* Section 6: Pricing (replaced with PricingSection component) */}
        <section className="py-24 bg-secondary-dark/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <PricingSection
                plans={PRICING_PLANS}
                heading="Simple Plans"
                description="Choose a plan that fits your team's needs"
              />
            </div>
          </div>
        </section>

        {/* Section 7: Blog Preview */}
        <BlogPreview />

        {/* Section 7: Final CTA (replaced by call-to-action-1 component) */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <CallToActionOne />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
