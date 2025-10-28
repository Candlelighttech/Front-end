import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = {
    Product: [
      { name: "Features", path: "/features" },
      { name: "Pricing", path: "/pricing" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Integrations", path: "/" },
    ],
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/" },
      { name: "Contact", path: "/" },
    ],
    Resources: [
      { name: "Documentation", path: "/" },
      { name: "Help Center", path: "/" },
      { name: "Community", path: "/" },
      { name: "API Reference", path: "/" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "/" },
      { name: "Terms of Service", path: "/" },
      { name: "Cookie Policy", path: "/" },
      { name: "GDPR", path: "/" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-base-dark mt-20">
      {/* Angled Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-accent to-light-accent" 
           style={{ clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0 100%)" }} />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary-accent to-light-accent flex items-center justify-center">
                <span className="text-base-dark font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-heading font-bold text-gradient">
                Candlelight
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering businesses with innovative web tools designed for the modern era. 
              Transform your workflow with our cutting-edge solutions.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="h-10 w-10 rounded-lg bg-secondary-dark flex items-center justify-center text-light-accent hover:text-primary-accent transition-all hover:glow-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Columns */}
          {Object.entries(quickLinks).map(([category, links], index) => (
            <div key={category} className={`animate-fade-in`} style={{ animationDelay: `${index * 100}ms` }}>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-primary-accent/20 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold mb-3">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on new features, tips, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-secondary-dark border-primary-accent/30 focus:border-primary-accent"
                />
              </div>
              <Button className="bg-gradient-to-r from-primary-accent to-light-accent hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-accent/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Candlelight. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-primary-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-primary-accent transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="hover:text-primary-accent transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
