import { Target, Eye, Heart, Award, Users2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import Header from "@/components/layout/Header";
import Footer from "@/components/ui/modem-animated-footer";

const About = () => {
  const values = [
    { icon: Target, title: "Innovation First", description: "Pushing boundaries with cutting-edge technology" },
    { icon: Heart, title: "User-Centric", description: "Building tools that truly serve our users" },
    { icon: Award, title: "Excellence", description: "Maintaining the highest quality standards" },
    { icon: Rocket, title: "Growth Minded", description: "Continuously evolving and improving" },
  ];

  const team = [
    { name: "Calvin Reed", role: "CEO & Founder", image: "/Alex Rivera.png" },
    { name: "Charlotte Eve", role: "CTO", image: "/Sarah Chen.png" },
    { name: "Michael Park", role: "Head of Design", image: "/Michael Park.png" },
    { name: "Emma Wilson", role: "Lead Developer", image: "/Emma Wilson.png" },
  ];

  const milestones = [
    { label: "Active Users", value: 50000, suffix: "+" },
    { label: "Tools Deployed", value: 120, suffix: "+" },
    { label: "Countries", value: 85, suffix: "" },
    { label: "Customer Satisfaction", value: 98, suffix: "%" },
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
                <span className="text-xs font-medium text-primary-accent">Innovating Since 2020</span>
              </div>
              <h1 className="text-3xl md:text-6xl font-heading font-bold mb-4">
                About <span className="text-light-accent">Candlelight</span>
              </h1>
              <p className="text-base md:text-lg text-light-accent max-w-2xl mx-auto">
                We're on a mission to empower businesses with the most innovative web tools in the industry.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 3: Story & Mission */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <AnimatedSection animation="slide-up">
                    <h2 className="text-4xl font-heading font-bold mb-8">
                      Our <span className="text-gradient">Journey</span>
                    </h2>
                    <div className="space-y-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        At Candlelight Technology, we’re reimagining website creation through the power of Generative AI. Our platform allows anyone regardless of technical skill  to build and launch a professional website using simple text prompts or drag-and-drop tools.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                       Every design, layout, and content block is intelligently generated to match your vision, ensuring you get a website that’s not only visually appealing but also performance-optimized and ready to grow with your business.
                      </p>
                      
                      {/* Achievements */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {milestones.map((milestone, index) => (
                          <div key={index} className="text-center p-3 rounded-lg bg-gradient-to-br from-card/40 to-secondary-dark/20 border border-primary-accent/20">
                            <div className="text-lg md:text-xl font-heading font-bold text-gradient">
                              {milestone.value}{milestone.suffix}
                            </div>
                            <p className="text-xs text-light-accent mt-1">{milestone.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
                <div className="space-y-8">
                  <AnimatedSection animation="slide-up" delay={0.2}>
                    <Card className="p-6 bg-gradient-to-br from-primary-accent/10 to-light-accent/10 border-primary-accent/30 overflow-hidden">
                      <Eye className="h-8 w-8 text-primary-accent mb-4" />
                      <h3 className="text-xl font-heading font-bold mb-3">Our Vision</h3>
                      <p className="text-muted-foreground text-sm">
                        To become the world's most trusted platform for web development tools.
                      </p>
                    </Card>
                  </AnimatedSection>
                  <AnimatedSection animation="slide-up" delay={0.3}>
                    <Card className="p-6 bg-gradient-to-br from-light-accent/10 to-primary-accent/10 border-primary-accent/30 overflow-hidden">
                      <Target className="h-8 w-8 text-primary-accent mb-4" />
                      <h3 className="text-xl font-heading font-bold mb-3">Our Mission</h3>
                      <p className="text-muted-foreground text-sm">
                        To make intelligent website creation accessible to everyone, empowering digital creators to build, launch, and scale effortlessly.
                      </p>
                    </Card>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Section 4: Values Showcase */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-4">
                What Drives <span className="text-gradient">Us</span>
              </h2>
              <p className="text-base md:text-lg text-light-accent text-center mb-16 max-w-2xl mx-auto">
                Our core values shape everything we do and guide us toward excellence
              </p>
            </AnimatedSection>
            <div className="max-w-6xl mx-auto space-y-12">
              {values.map((value, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 0.2}>
                  <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="flex-1 text-center lg:text-left">
                      <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-primary-accent to-light-accent mb-6 shadow-2xl">
                        <value.icon className="h-10 w-10 md:h-12 md:w-12 text-base-dark" />
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 text-gradient">{value.title}</h3>
                      <p className="text-lg md:text-xl text-light-accent leading-relaxed max-w-lg mx-auto lg:mx-0">{value.description}</p>
                    </div>
                    <div className="flex-1">
                      <Card className="p-8 md:p-12 bg-gradient-to-br from-card/90 to-secondary-dark/70 backdrop-blur-sm border-primary-accent/40 shadow-2xl hover:shadow-primary-accent/20 transition-all duration-500 group">
                        <div className="relative">
                          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-accent/20 to-light-accent/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                          <div className="relative z-10">
                            <div className="h-2 w-20 bg-gradient-to-r from-primary-accent to-light-accent rounded-full mb-6 group-hover:w-32 transition-all duration-500" />
                            <h4 className="text-xl md:text-2xl font-heading font-bold mb-4 text-white">Core Focus</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {index === 0 && "We leverage the latest technologies and methodologies to create solutions that push the boundaries of what's possible."}
                              {index === 1 && "Every decision we make is guided by our users' needs, ensuring our tools genuinely improve their workflows and experiences."}
                              {index === 2 && "We never compromise on quality, maintaining rigorous standards in every aspect of our development process."}
                              {index === 3 && "We embrace change and continuously seek opportunities to learn, adapt, and improve our products and processes."}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Team */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary-dark/30 to-base-dark/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-light-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="fade">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-3 md:mb-4">
                Meet the <span className="text-gradient">Team</span>
              </h2>
              <p className="text-sm md:text-lg text-light-accent text-center mb-8 md:mb-16 max-w-2xl mx-auto">
                The passionate individuals behind Candlelight's innovation and success
              </p>
            </AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {team.map((member, index) => (
                  <AnimatedSection key={index} animation="slide-up" delay={index * 0.15}>
                    <div className="group relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary-accent/20 via-light-accent/20 to-primary-accent/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                      <Card className="relative bg-gradient-to-br from-card/95 to-secondary-dark/80 backdrop-blur-xl border border-primary-accent/30 hover:border-primary-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-accent/25 overflow-hidden group-hover:-translate-y-2">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-accent/10 to-light-accent/10 rounded-bl-3xl" />
                        <div className="p-6 text-center relative">
                          <div className="relative mb-6">
                            <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto">
                              <div className="absolute inset-0 bg-gradient-to-br from-primary-accent to-light-accent rounded-full p-1 group-hover:scale-110 transition-transform duration-500">
                                <img 
                                  src={member.image} 
                                  alt={member.name}
                                  className="w-full h-full rounded-full object-cover bg-card"
                                />
                              </div>
                              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-light-accent to-primary-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
                                <div className="w-3 h-3 bg-white rounded-full" />
                              </div>
                            </div>
                          </div>
                          <h3 className="text-lg md:text-xl font-heading font-bold mb-2 group-hover:text-primary-accent transition-colors duration-300">{member.name}</h3>
                          <p className="text-sm md:text-base text-light-accent/80 mb-4 font-medium">{member.role}</p>
                          <div className="flex justify-center mb-4">
                            <div className="h-1 w-16 bg-gradient-to-r from-primary-accent to-light-accent rounded-full group-hover:w-24 transition-all duration-500" />
                          </div>
                          <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-8 h-8 rounded-full bg-primary-accent/20 hover:bg-primary-accent/40 transition-colors cursor-pointer flex items-center justify-center">
                              <div className="w-4 h-4 bg-primary-accent rounded-full" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-light-accent/20 hover:bg-light-accent/40 transition-colors cursor-pointer flex items-center justify-center">
                              <div className="w-4 h-4 bg-light-accent rounded-full" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 7: CTA */}
        <section className="py-24 bg-secondary-dark/50">
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
                        Join Our <span className="text-gradient">Journey</span>
                      </h2>
                      <p className="text-base md:text-lg text-light-accent mb-6">
                        Be part of a community that's shaping the future of web development.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link to="/contact" className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-primary-accent to-light-accent font-heading font-bold text-base text-base-dark overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          <span className="relative text-base-dark">Get Started</span>
                        </Link>
                      </div>
                    </AnimatedSection>
                  </div>
                  
                  {/* Right Image */}
                  <div className="md:w-1/2">
                    <AnimatedSection animation="slide-up" delay={0.2}>
                      <div className="relative h-56 md:h-[420px] lg:h-[340px] xl:h-[340px]">
                        <img 
                          src="/About page CTA.png"
                          alt="Team collaboration"
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

export default About;
