"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  color?: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "Candlelight",
  brandDescription = "Build, customize, and launch stunning, responsive websites in minutes no coding required.",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) => {
  // Default grouped quick links (Product + Company only). Resources/Legal removed per request.
  const defaultQuickLinks: Record<string, FooterLink[]> = {
    Product: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Terms of Service", href: "/terms-and-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  };

  // Default social links if none provided
  const defaultSocial = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/CandlelightTechnologies/", label: "Facebook", color: 'bg-white/20 text-white' },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/candle_light_T", label: "Twitter", color: 'bg-white/20 text-white' },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/candlelight-technologies1/", label: "LinkedIn", color: 'bg-white/20 text-white' },
    { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/@CandlelightTechnologies", label: "YouTube", color: 'bg-white/20 text-white' },
    { icon: <img src="/pinterest.svg" alt="Pinterest" className="w-5 h-5" />, href: "https://www.pinterest.com/candlelighttechnologies/", label: "Pinterest", color: 'bg-white/20' },
  ];

  const social = socialLinks.length > 0 ? socialLinks : defaultSocial;
  const groupsToRender = navLinks.length > 0 ? { Links: navLinks } : defaultQuickLinks;
  
  // Newsletter state
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Use localStorage to persist subscription state across sessions
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Check subscription status on component mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const subscribed = localStorage.getItem('newsletterSubscribed') === 'true';
      setIsSubscribed(subscribed);
    }
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');
    
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      console.error('Invalid email format');
      return;
    }

    // Check if this email has already been subscribed
    if (typeof window !== 'undefined') {
      const subscribedEmail = localStorage.getItem('subscribedEmail');
      if (subscribedEmail === email) {
        alert('This email is already subscribed!');
        return;
      }
    }
    
    setIsLoading(true);
    
    try {
      console.log('Sending request to Formspree...');
      const response = await fetch('https://formspree.io/f/mjkpgkez', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          _subject: 'New Newsletter Subscription',
          _format: 'plain',
          _language: 'en'
        }),
      });

      console.log('Response status:', response.status);
      const responseData = await response.text();
      console.log('Response data:', responseData);

      if (response.ok) {
        console.log('Subscription successful');
        setIsSubscribed(true);
        if (typeof window !== 'undefined') {
          // Store in localStorage to persist across sessions
          localStorage.setItem('newsletterSubscribed', 'true');
          // Also store the email to prevent duplicate submissions
          localStorage.setItem('subscribedEmail', email);
        }
        setEmail("");
      } else {
        const errorMessage = `Failed to subscribe: ${response.status} ${response.statusText}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      // Show error to user
      alert('Failed to subscribe. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t bg-background mt-20 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-2 flex flex-col items-center flex-1">
                <div className="flex items-center gap-3">
                  <Link to="/" className="transition-transform duration-300 hover:scale-105">
                    <img src="/Logo.svg" alt={`${brandName} logo`} className="h-20 w-30 object-contain" />
                  </Link>
                  {/* <span className="text-foreground text-3xl font-bold">
                    {brandName}
                  </span> */}
                </div>
                <p className="text-muted-foreground text-md text-center w-full max-w-sm sm:w-96 px-4 sm:px-0">
                  {brandDescription}
                </p>
              </div>

              {social.length > 0 && (
                <div className="flex justify-center items-center w-full mb-2 mt-3 gap-4">
                      {social.map((link: SocialLink, index) => (
                        <a
                          key={index}
                          href={link.href}
                          className="group"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                        >
                          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110 ${link.color || 'bg-card/20 text-foreground'}`}>
                            <div className="w-4 h-4 md:w-5 md:h-5">
                              {link.icon}
                            </div>
                          </div>
                          <span className="sr-only">{link.label}</span>
                        </a>
                      ))}
                </div>
              )}

              {/* Render grouped quick links (Product + Company) and a Newsletter block replacing Resources/Legal */}

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 md:justify-center md:text-center">
                {Object.entries(groupsToRender).map(([category, links], idx) => (
                  <div key={category} className="text-center">
                    <h3 className="font-heading font-semibold text-foreground mb-4">
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {links.map((link, i) => {
                        const isInternal = typeof link.href === 'string' && link.href.startsWith('/');
                        return (
                          <li key={i}>
                            {isInternal ? (
                              <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                {link.label}
                              </Link>
                            ) : (
                              <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                                {link.label}
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}

                {/* Newsletter block */}
                <div className="text-center">
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    {isSubscribed ? 'Thanks for Subscribing!' : 'Stay Updated'}
                  </h3>
                  {isSubscribed ? (
                    <div className="flex items-center gap-3 p-3 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20 dark:border-primary/30">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                        <svg 
                          className="w-5 h-5 text-primary dark:text-primary-foreground" 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-medium text-foreground">Thanks for subscribing!</p>
                        <p className="text-xs text-muted-foreground">Check your email for updates</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-muted-foreground mb-4">Get the latest updates on new features, tips, and industry insights delivered to your inbox.</p>
                      <form className="mx-auto max-w-sm" onSubmit={handleSubscribe} aria-label="Subscribe to newsletter" noValidate>
                        <div className="relative">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label="Email address"
                            placeholder="Enter your email"
                            className="w-full rounded-full border border-input bg-background px-4 py-3 pr-28 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            required
                          />
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:opacity-95 disabled:opacity-50"
                            aria-label={isLoading ? 'Subscribing...' : 'Subscribe'}
                          >
                            {isLoading ? 'Sending...' : 'Subscribe'}
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0">
            <p className="text-base text-muted-foreground text-center md:text-left">
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <a
                  href={creatorUrl}
                  target="_blank"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors duration-300 hover:font-medium"
                >
                  Crafted by {creatorName}
                </a>
              </nav>
            )}
          </div>
        </div>

        {/* Large background text - FIXED */}
        <div
          className="bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
          style={{
            fontSize: 'clamp(3rem, 12vw, 10rem)',
            maxWidth: '95vw'
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute hover:border-foreground duration-400 drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0px_20px_rgba(255,255,255,0.3)] bottom-24 md:bottom-20 backdrop-blur-sm rounded-3xl bg-background/60 left-1/2 border-2 border-border flex items-center justify-center p-3 -translate-x-1/2 z-10 transition-transform duration-300 hover:scale-110 cursor-pointer"
        >
          <div className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-br from-primary-accent/80 to-primary-accent rounded-2xl flex items-center justify-center shadow-lg">
            {brandIcon || (
              <img
                src="/Favicon.svg"
                alt={`${brandName} favicon`}
                className="w-7 sm:w-9 md:w-12 h-7 sm:h-9 md:h-12 object-contain drop-shadow-lg"
              />
            )}
          </div>
        </button>

        {/* Bottom line */}
        <div className="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-1 bg-gradient-to-r from-transparent via-border to-transparent w-full left-1/2 -translate-x-1/2"></div>

        {/* Bottom shadow */}
        <div className="bg-gradient-to-t from-background via-background/80 blur-[1em] to-background/40 absolute bottom-28 w-full h-24"></div>
      </footer>
    </section>
  );
};

export default Footer;
