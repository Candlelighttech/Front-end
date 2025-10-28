import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Users2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/ui/modem-animated-footer";
import { z } from "zod";
import { useEffect } from "react";

// Form configuration
const FORMPREE_ENDPOINT = 'https://formspree.io/f/xrboebao';

// Secure form validation schema
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  company: z.string()
    .trim()
    .max(100, { message: "Company name must be less than 100 characters" })
    .optional(),
  subject: z.string()
    .trim()
    .min(5, { message: "Subject must be at least 5 characters" })
    .max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Prepare form data for Formspree
      const formDataForSubmission = new FormData();
      Object.entries(validatedData).forEach(([key, value]) => {
        if (value) formDataForSubmission.append(key, value);
      });
      
      // Add additional form fields
      formDataForSubmission.append('_captcha', 'false');
      formDataForSubmission.append('_subject', `New Contact Form: ${validatedData.subject}`);

      // Submit form to Formspree
      const response = await fetch('https://formspree.io/f/xrboebao', {
        method: 'POST',
        body: formDataForSubmission,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Set success state
        setIsSuccess(true);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
        
        // Reset success state after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } else {
        // Try to get error message from response
        let errorMessage = 'Failed to send message. Please try again later.';
        try {
          const errorData = await response.json();
          if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch (e) {
          console.error('Error parsing error response:', e);
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Form submission error:', error);
        
      if (error instanceof z.ZodError) {
        // Set validation errors
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        // Show error message for submission failure
        toast({
          title: "Failed to Send Message",
          description: "Please try again or contact us directly at help@CandlelightTechnology.com",
          variant: "destructive",
          className: "z-[100]"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "help@CandlelightTechnology.com",
      link: "mailto:help@CandlelightTechnology.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (234) 376-3561",
      link: "tel:+12343763561",
    },
    {
      icon: MapPin,
      title: "Address",
      value: " 982 South La Brea Ave, Los Angeles, CA 90036, United States",
      link: "https://maps.google.com",
    },
  ];

  const departments = [
    { icon: MessageSquare, name: "Sales", email: "sales@candlelight.com" },
    { icon: Users2, name: "Support", email: "support@candlelight.com" },
    { icon: Mail, name: "General", email: "hello@candlelight.com" },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "Closed" },
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
                <span className="text-xs font-medium text-primary-accent">We're Here to Help</span>
              </div>
              <h1 className="text-3xl md:text-6xl font-heading font-bold mb-4">
                Get in <span className="text-light-accent">Touch</span>
              </h1>
              <p className="text-base md:text-lg text-light-accent max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 2: Contact Methods */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <AnimatedSection animation="slide-up">
                    <Card className="p-8 bg-card/90 backdrop-blur-sm border-primary-accent/30">
                      <h2 className="text-3xl font-heading font-bold mb-6">
                        Send Us a <span className="text-gradient">Message</span>
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-heading font-semibold mb-2 text-gradient">
                              Name *
                            </label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              className={`bg-white/10 border-primary-accent/50 focus:border-primary-accent focus:bg-white/15 text-white placeholder:text-gray-400 ${
                                errors.name ? "border-red-500" : ""
                              }`}
                              maxLength={100}
                              required
                            />
                            {errors.name && (
                              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-heading font-semibold mb-2 text-gradient">
                              Email *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              className={`bg-white/10 border-primary-accent/50 focus:border-primary-accent focus:bg-white/15 text-white placeholder:text-gray-400 ${
                                errors.email ? "border-red-500" : ""
                              }`}
                              maxLength={255}
                              required
                            />
                            {errors.email && (
                              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="company" className="block text-sm font-heading font-semibold mb-2 text-gradient">
                              Company
                            </label>
                            <Input
                              id="company"
                              name="company"
                              type="text"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Your Company"
                              className="bg-white/10 border-primary-accent/50 focus:border-primary-accent focus:bg-white/15 text-white placeholder:text-gray-400"
                              maxLength={100}
                            />
                          </div>
                          <div>
                            <label htmlFor="subject" className="block text-sm font-heading font-semibold mb-2 text-gradient">
                              Subject *
                            </label>
                            <Input
                              id="subject"
                              name="subject"
                              type="text"
                              value={formData.subject}
                              onChange={handleInputChange}
                              placeholder="How can we help?"
                              className={`bg-white/10 border-primary-accent/50 focus:border-primary-accent focus:bg-white/15 text-white placeholder:text-gray-400 ${
                                errors.subject ? "border-red-500" : ""
                              }`}
                              maxLength={200}
                              required
                            />
                            {errors.subject && (
                              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                            )}
                          </div>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-heading font-semibold mb-2 text-gradient">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us more about your inquiry..."
                            className={`bg-white/10 border-primary-accent/50 focus:border-primary-accent focus:bg-white/15 text-white placeholder:text-gray-400 min-h-[120px] ${
                              errors.message ? "border-red-500" : ""
                            }`}
                            maxLength={2000}
                            required
                          />
                          {errors.message && (
                            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                          )}
                        </div>
                        <div className="w-full">
                          <button
                            type="submit"
                            disabled={isSubmitting || isSuccess}
                            className={`group relative w-full py-3 px-6 rounded-lg font-heading font-bold text-base overflow-hidden shadow-lg transition-all duration-500 ${
                              isSuccess 
                                ? 'bg-green-600 hover:bg-green-600 text-white' 
                                : 'bg-gradient-to-r from-primary to-primary-accent text-base-dark'
                            } ${isSubmitting || isSuccess ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'}`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            {isSuccess ? (
                              <>
                                <span className="relative inline-flex items-center">
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  MESSAGE SENT!
                                </span>
                              </>
                            ) : isSubmitting ? (
                              <>
                                <span className="relative inline-flex items-center">
                                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  SENDING...
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="relative inline-flex items-center">
                                  <Send className="w-4 h-4 mr-2" />
                                  {isSubmitting ? 'SENDING...' : isSuccess ? 'MESSAGE SENT!' : 'SEND MESSAGE'}
                                </span>
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </Card>
                  </AnimatedSection>
                  {/* Map under form */}
                  <AnimatedSection animation="slide-up" delay={0.3}>
                    <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary-accent/30 mt-8">
                      <h3 className="text-xl font-heading font-bold mb-4">
                        Visit Our <span className="text-gradient">Office</span>
                      </h3>
                      <div className="h-64 rounded-lg overflow-hidden border border-primary-accent/30">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4724908487!2d-118.3484889252445!3d34.0574002174596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8e20692e80d%3A0xc1e4e715d0a0e5be!2s982%20S%20La%20Brea%20Ave%2C%20Los%20Angeles%2C%20CA%2090036%2C%20USA!5e0!3m2!1sen!2slk!4v1761556736541!5m2!1sen!2slk"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Candlelight Office Location"
                        />
                      </div>
                    </Card>
                  </AnimatedSection>
                </div>

                {/* Contact Info Sidebar */}
                <div className="space-y-8">
                  <AnimatedSection animation="slide-up" delay={0.2}>
                    <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary-accent/30">
                      <h3 className="text-xl font-heading font-bold mb-6">
                        Get in <span className="text-gradient">Touch</span>
                      </h3>
                      <div className="space-y-3">
                        {contactInfo.map((info, index) => (
                          <a
                            key={index}
                            href={info.link}
                            className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary-accent/5 to-light-accent/5 hover:from-primary-accent/15 hover:to-light-accent/15 border border-primary-accent/20 hover:border-primary-accent/40 transition-all group"
                          >
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-accent to-light-accent flex items-center justify-center">
                              <info.icon className="h-4 w-4 text-base-dark" />
                            </div>
                            <div>
                              <p className="text-sm font-heading font-semibold text-gradient">{info.title}</p>
                              <p className="text-xs text-muted-foreground group-hover:text-primary-accent transition-colors">{info.value}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection animation="slide-up" delay={0.3}>
                    <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary-accent/30">
                      <h3 className="text-xl font-heading font-bold mb-6">
                        <span className="text-gradient">Departments</span>
                      </h3>
                      <div className="space-y-3">
                        {departments.map((dept, index) => (
                          <a
                            key={index}
                            href={`mailto:${dept.email}`}
                            className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary-accent/5 to-light-accent/5 hover:from-primary-accent/15 hover:to-light-accent/15 border border-primary-accent/20 hover:border-primary-accent/40 transition-all group"
                          >
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-accent to-light-accent flex items-center justify-center">
                              <dept.icon className="h-4 w-4 text-base-dark" />
                            </div>
                            <div>
                              <p className="text-sm font-heading font-semibold text-gradient">{dept.name}</p>
                              <p className="text-xs text-muted-foreground group-hover:text-primary-accent transition-colors">{dept.email}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection animation="slide-up" delay={0.4}>
                    <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary-accent/30">
                      <h3 className="text-xl font-heading font-bold mb-6">
                        Business <span className="text-gradient">Hours</span>
                      </h3>
                      <div className="space-y-3">
                        {businessHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between items-center py-2">
                            <span className="text-sm text-muted-foreground">{schedule.day}</span>
                            <span className="text-sm font-semibold">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: General FAQ */}
        <section className="py-10 bg-secondary-dark/50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-accent/20 to-light-accent/20 border border-primary-accent/30 mb-6">
                  <span className="text-sm font-medium text-primary-accent">Support</span>
                </div>
                <h2 className="text-4xl font-heading font-bold mb-4">
                  Frequently Asked <span className="text-gradient">Questions</span>
                </h2>
                <p className="text-lg text-light-accent max-w-2xl mx-auto">
                  Find answers to common questions about our services and support
                </p>
              </div>
            </AnimatedSection>
            
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                {[
                  {
                    question: "What is CandlelightTechnology.com?",
                    answer: "CandlelightTechnology.com is an AI-powered website builder designed for entrepreneurs, freelancers, and agencies. It lets you create fully responsive, professional websites quickly using plain-text prompts and an intuitive drag-and-drop editor , no coding experience required.",
                  },
                  {
                    question: "How does the AI website generation work?",
                    answer: "Our AI engine interprets your input and automatically generates complete website layouts, including headers, content blocks, images, calls-to-action, and SEO metadata. Simply describe your vision, and Candlelight transforms it into a ready-to-customize website.",
                  },
                  {
                    question: "Do I need coding or design skills?",
                    answer: "No! CandlelightTechnology.com is built for everyone, regardless of technical background. You can create, customize, and launch websites using AI-generated templates and a drag-and-drop editor, making web design effortless and fast",
                  },
                  {
                    question: "Can I use my own domain and host my website?",
                    answer: "Yes. With our Pro and Agency plans, you can connect your own domain and publish your website with just one click. Candlelight also provides fast, secure hosting, ensuring your site is always live and optimized for performance",
                  },
                ].map((faq, index) => (
                  <AnimatedSection key={index} animation="slide-up" delay={index * 0.1}>
                    <div className="group">
                      <div className={`bg-card/90 backdrop-blur-sm border border-primary-accent/30 rounded-lg overflow-hidden ${openFAQ===index ? 'ring-2 ring-primary-accent/20' : ''}`}>
                        <button
                          type="button"
                          aria-expanded={openFAQ === index}
                          className="w-full flex items-center justify-between p-4 text-left"
                          onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-accent to-light-accent flex items-center justify-center">
                              <span className="text-sm font-bold text-base-dark">{index + 1}</span>
                            </div>
                            <h3 className="text-lg font-heading font-bold group-hover:text-primary-accent transition-colors duration-300">
                              {faq.question}
                            </h3>
                          </div>
                          <svg className={`h-5 w-5 text-muted-foreground transform transition-transform duration-300 ${openFAQ===index ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" aria-hidden>
                            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>

                        <div className={`${openFAQ===index ? 'block' : 'hidden'} px-4 pb-4` }>
                          <div className="text-muted-foreground leading-relaxed text-sm pt-2">
                            {faq.answer}
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
      </main>
      <Footer />
    </>
  );
};

export default Contact;
