import { Search, Clock, User, Tag, TrendingUp, X, Calendar, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/ui/modem-animated-footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const latestPosts = [
    {
      id: 1,
      title: "10 Web Development Trends to Watch in 2025",
      excerpt: "Discover the emerging technologies and practices that will shape web development this year.",
      author: "Sarah Chen",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "AI & Web Dev",
  image: "/Blog1.png",
      views: "2.1k",
      content: `The web development landscape is evolving at an unprecedented pace, and 2025 promises to bring revolutionary changes that will reshape how we build digital experiences. As we stand at the threshold of a new era in technology, developers must stay ahead of emerging trends to remain competitive and deliver cutting-edge solutions.

Artificial Intelligence integration has moved beyond simple chatbots to become a fundamental building block of modern web applications. AI-powered code generation, automated testing, and intelligent user interfaces are becoming standard practices. Developers are leveraging machine learning algorithms to create personalized user experiences, optimize performance in real-time, and automate complex decision-making processes.

WebAssembly (WASM) is gaining significant traction as it enables near-native performance for web applications. This technology allows developers to run high-performance applications directly in browsers, opening doors for complex applications like video editing, 3D modeling, and scientific computing to operate seamlessly on the web without traditional performance limitations.

The rise of edge computing is transforming how we think about application architecture. By processing data closer to users, edge computing reduces latency and improves user experience significantly. This trend is particularly important for real-time applications, IoT devices, and global applications that require consistent performance across different geographical locations.

Progressive Web Apps (PWAs) continue to bridge the gap between web and native applications, offering offline functionality, push notifications, and app-like experiences while maintaining the accessibility and reach of web technologies."`
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Website Building for Entrepreneurs",
      excerpt: "Learn how to architect applications that can grow with your business needs.",
      author: "Michael Park",
      date: "Jan 12, 2025",
      readTime: "8 min read",
      category: "AI Tools",
  image: "/Blog2.png",
      views: "1.8k",
      content: `In today’s fast-paced digital landscape, entrepreneurs need to establish their online presence quickly and efficiently. Traditional website building methods are time-consuming, often requiring coding skills, design expertise, and countless hours of trial and error. This is where AI-powered website builders like CandlelightTechnology.com come into play, transforming the way entrepreneurs create websites. By combining advanced AI intelligence with intuitive interfaces, these platforms allow users to launch professional, responsive websites in mere minutes, all without prior technical experience.

AI has evolved beyond simple automation, now capable of handling complex design, layout, and content generation. Modern AI website builders can interpret user prompts and automatically generate full website structures, layouts, and SEO-friendly content. For entrepreneurs, this translates into significant savings in both time and cost while accelerating the speed at which their businesses go to market. The ability to have a professional-quality website without hiring a designer or developer levels the playing field for small startups and solo entrepreneurs.

The benefits of AI website builders are clear. Speed is the most obvious advantage, allowing websites to go live in hours instead of weeks. Cost efficiency is another major factor, as the need for additional personnel is minimized. Professional-quality layouts and AI-generated content ensure that the final website looks polished and fully functional, while drag-and-drop editors provide flexibility for customization. Entrepreneurs can tailor their websites to reflect their brand identity without technical barriers.

For example, CandlelightTechnology.com allows users to type prompts like “I need a landing page for a tech startup,” instantly generating a full website layout including headers, content blocks, calls-to-action, and SEO metadata. Entrepreneurs can then make fine adjustments using the platform’s intuitive visual editor. This allows them to focus on strategic aspects of their business rather than spending weeks perfecting a website.

To maximize the benefits of AI website builders, entrepreneurs should provide clear, concise prompts to the AI engine, ensuring that the generated layouts align with their vision. Customizing the design with brand colors, logos, and fonts further enhances the website’s appeal, while AI content tools help generate blog posts, product descriptions, and calls-to-action quickly.

In conclusion, AI-powered website builders are no longer a futuristic concept; they are practical tools enabling entrepreneurs to create high-quality websites efficiently. Platforms like CandlelightTechnology.com democratize web design, empowering anyone to bring their digital vision to life with speed, accuracy, and professional polish. The future of entrepreneurship is increasingly intertwined with AI technology, and leveraging these tools offers a decisive competitive advantage`
    },
    {
      id: 3,
      title: "Top 5 Features Every AI Website Builder Should Have",
      excerpt: "Essential security measures every development team should implement.",
      author: "Emma Wilson",
      date: "Jan 10, 2025",
      readTime: "6 min read",
      category: "Platform Features",
  image: "/Blog3.png",
      views: "3.2k",
      content: `With the growing number of AI website builders on the market, choosing the right platform can be a daunting task. Not all tools deliver the same level of performance, design flexibility, or content intelligence. Understanding the essential features that an AI website builder should offer is key to maximizing efficiency and creativity. CandlelightTechnology.com has been designed with these features in mind, offering a robust platform for freelancers, agencies, and entrepreneurs.

The first essential feature is AI-powered website generation. A true AI website builder should be able to convert simple text prompts into complete websites. This includes generating headers, text blocks, images, call-to-action sections, and responsive layouts, reducing manual effort while maintaining a professional appearance. This feature allows users to create a fully functional website in a fraction of the time it would traditionally take.

Second is a drag-and-drop visual editor. While AI can generate impressive layouts automatically, human creativity often adds the finishing touch. A drag-and-drop editor allows users to fine-tune designs, adjust colors, change fonts, and rearrange sections with ease. This combination of automation and creative control ensures websites are unique and aligned with brand identity.

Third, an AI content assistant is critical. High-quality content is essential for engaging visitors and improving search engine rankings. Platforms like CandlelightTechnology.com include AI-powered tools that can create headlines, product descriptions, blogs, and call-to-action text automatically. This feature saves time, maintains consistency, and ensures websites are optimized for SEO.

The fourth must-have feature is a smart project dashboard. Managing multiple websites or client projects becomes seamless when all templates, projects, and content workflows are centralized in a single, organized interface. Users can track progress, preview changes, and manage multiple websites efficiently, which is especially important for freelancers and agencies handling multiple clients simultaneously.

Finally, SEO and performance optimization should be integrated. A visually stunning website that is invisible to search engines loses value. AI website builders must handle SEO automatically, including meta tags, alt text for images, and structured content. Performance optimization ensures the website loads quickly and functions smoothly across devices.

Additional features that enhance the platform include real-time editing powered by Vue.js, one-click publishing, and analytics integration for monitoring site performance. When combined, these features create a platform that enables users to build, launch, and scale websites efficiently.

In summary, a high-quality AI website builder balances automation with creative control, content intelligence, and optimization. Entrepreneurs, freelancers, and agencies that leverage these features can create websites that are not only beautiful but also functional, optimized, and ready to scale. CandlelightTechnology.com exemplifies these capabilities, offering a complete solution for modern website creation.`
    },
    {
      id: 4,
      title: "Why Freelancers and Agencies Are Adopting AI Website Builders",
      excerpt: "Proven strategies to make your web applications faster and more efficient.",
      author: "Alex Rivera",
      date: "Jan 8, 2025",
      readTime: "10 min read",
      category: "Business Growth",
  image: "/Blog4.png",
      views: "2.7k",
      content: `Freelancers and agencies face constant pressure to deliver websites quickly, efficiently, and at a high standard. Traditional website development involves long design cycles, repeated client revisions, and technical challenges, all of which can slow down project delivery and limit scalability. AI website builders, such as CandlelightTechnology.com, are emerging as a solution that addresses these pain points.

For freelancers, AI website builders reduce dependency on coding knowledge and complex design tools. By simply inputting a descriptive prompt, freelancers can generate a fully structured website ready for customization. This dramatically reduces time spent on repetitive tasks, allowing freelancers to handle more projects and increase their revenue without compromising quality. AI-driven design tools also ensure that layouts are visually appealing and fully responsive across devices, which enhances the final deliverable.

Agencies benefit in multiple ways as well. AI website builders allow for rapid prototyping, making it easy to create initial designs for client approval. Consistency across projects is improved because the AI engine automatically applies cohesive layouts, color schemes, and font choices. This is particularly valuable for agencies managing multiple client websites simultaneously.

By automating routine design and content tasks, agencies can focus on high-value customization, branding, and client strategy.

A real-world example involves a small marketing agency that used CandlelightTechnology.com to deliver five client websites in the same week that previously would have taken an entire month. The AI-generated layouts were polished, professional, and SEO-ready, while the drag-and-drop editor allowed designers to make minor refinements for each client’s brand identity. This increased efficiency translated directly into higher client satisfaction and profitability.

Freelancers also appreciate AI content generation tools integrated into the platform. From blog posts and product descriptions to call-to-action text, these tools provide ready-to-publish content aligned with the website’s style and target audience. This eliminates the need to outsource copywriting or spend hours writing content manually.

The adoption of AI website builders represents a strategic advantage for freelancers and agencies. By automating repetitive tasks, accelerating project delivery, and maintaining high-quality standards, these platforms empower professionals to scale their services, take on more clients, and focus on creativity and strategy. As AI continues to evolve, its role in web design will only expand, offering even more powerful tools for creative professionals.

In conclusion, AI website builders are transforming the workflow for freelancers and agencies, enabling faster, smarter, and more efficient web design. Platforms like CandlelightTechnology.com are at the forefront of this change, helping professionals maximize productivity, enhance client satisfaction, and deliver websites that are both visually compelling and performance-optimized. Embracing AI in web design is no longer optional—it’s a necessary step for staying competitive in today’s digital landscape.`
    },
  ];

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  const popularPosts = [
    "Getting Started with Candlelight: A Beginner's Guide",
    "5 Productivity Hacks for Developers",
    "Understanding Cloud Architecture Patterns",
  ];

  const categories = [
    { name: "Trends", count: 12 },
    { name: "Security", count: 8 },
    { name: "Performance", count: 15 },
    { name: "AI", count: 6 },
    { name: "Tools", count: 10 },
    { name: "Architecture", count: 9 },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32">
        {/* Section 1: Hero with Search */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-base-dark to-secondary-dark/80" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-accent/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-light-accent/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="fade">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary-accent/20 to-light-accent/20 border border-primary-accent/30 mb-6">
                  <span className="text-xs font-medium text-primary-accent">Latest Insights</span>
                </div>
                <h1 className="text-3xl md:text-6xl font-heading font-bold mb-4">
                  Candlelight <span className="text-light-accent">Blog</span>
                </h1>
                <p className="text-base md:text-lg text-light-accent max-w-2xl mx-auto">
                  Insights, tutorials, and updates from the world of web development.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 2: Featured Article + Latest Posts */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Featured Article */}
              <AnimatedSection animation="slide-up">
                <div className="relative mb-12 sm:mb-20">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-accent/10 via-light-accent/10 to-primary-accent/10 rounded-3xl blur-3xl opacity-30" />
                  <Card className="relative p-6 sm:p-8 lg:p-12 bg-card/95 backdrop-blur-xl border-2 border-primary-accent/30 hover:border-primary-accent/50 transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                      <div className="lg:col-span-3 order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-4 sm:mb-6">
                          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-accent to-light-accent text-sm font-bold text-white">
                            {latestPosts[0].category}
                          </span>
                          <div className="h-2 w-2 rounded-full bg-primary-accent animate-pulse" />
                          <span className="text-sm text-primary-accent font-semibold uppercase tracking-wider">Featured</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
                          <button
                            onClick={() => openModal(latestPosts[0])}
                            className="text-left w-full p-0 m-0 text-inherit"
                            aria-label={`Open article: ${latestPosts[0].title}`}
                          >
                            {latestPosts[0].title}
                          </button>
                        </h3>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                          {latestPosts[0].excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-accent to-light-accent flex items-center justify-center">
                              <User className="h-4 w-4 text-base-dark" />
                            </div>
                            <span className="text-sm font-semibold">{latestPosts[0].author}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{latestPosts[0].readTime}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">{latestPosts[0].date}</div>
                        </div>
                      </div>
                      <div className="lg:col-span-2 order-1 lg:order-2">
                        <div 
                          className="group relative aspect-video rounded-2xl overflow-hidden border-2 border-primary-accent/30 hover:border-primary-accent/50 transition-all duration-300 cursor-pointer"
                          onClick={() => openModal(latestPosts[0])}
                        >
                          <img 
                            src={latestPosts[0].image} 
                            alt={latestPosts[0].title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-base-dark/80 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                              <Eye className="h-4 w-4" />
                              <span>{latestPosts[0].views} views</span>
                            </div>
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-accent/90 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                              <TrendingUp className="h-6 w-6 text-base-dark" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </AnimatedSection>
              
              {/* Latest Posts Grid */}
              <AnimatedSection animation="fade">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                    Latest <span className="text-gradient">Articles</span>
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Explore our recent insights and tutorials on web development
                  </p>
                </div>
              </AnimatedSection>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestPosts.slice(1).map((post, index) => (
                  <AnimatedSection key={index + 1} animation="slide-up" delay={(index + 1) * 0.1}>
                    <div className="group relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary-accent/10 to-light-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                      <Card 
                        className="relative bg-card/95 backdrop-blur-sm border border-primary-accent/20 hover:border-primary-accent/50 transition-all duration-300 cursor-pointer group-hover:-translate-y-2 overflow-hidden"
                        onClick={() => openModal(post)}
                      >
                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                          <div className="aspect-[16/10] overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-base-dark/60 via-transparent to-transparent" />
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-accent to-light-accent text-xs font-bold text-white shadow-lg">
                              {post.category}
                            </span>
                          </div>
                          
                          {/* Views Badge */}
                          <div className="absolute top-4 right-4">
                            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-base-dark/80 backdrop-blur-sm text-xs text-white font-medium">
                              <Eye className="h-3 w-3" />
                              <span>{post.views}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-6">
                          <h3 className="text-xl font-heading font-bold mb-3 line-clamp-2 group-hover:text-primary-accent transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          {/* Author & Meta Info */}
                          <div className="flex items-center justify-between pt-4 border-t border-primary-accent/10">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-accent to-light-accent flex items-center justify-center">
                                <User className="h-4 w-4 text-base-dark" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold">{post.author}</p>
                                <p className="text-xs text-muted-foreground">{post.date}</p>
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
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

        {/* Blog Detail Modal */}
        {isModalOpen && selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-base-dark/90 backdrop-blur-sm" onClick={closeModal} />
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl border-2 border-primary-accent/30">
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-card/95 backdrop-blur-sm border-b border-primary-accent/20">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary-accent to-light-accent text-sm font-bold text-white">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    <span>{selectedPost.views} views</span>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="h-10 w-10 rounded-full bg-secondary-dark/50 hover:bg-primary-accent/20 transition-colors flex items-center justify-center"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
                  {selectedPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-primary-accent/20">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-accent to-light-accent flex items-center justify-center">
                      <User className="h-5 w-5 text-base-dark" />
                    </div>
                    <div>
                      <p className="font-semibold">{selectedPost.author}</p>
                      <p className="text-sm text-muted-foreground">Author</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  {selectedPost.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
                

              </div>
            </div>
          </div>
        )}

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
                        <span className="text-sm font-medium text-primary-accent">Stay Updated</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                        Never Miss an <span className="text-gradient">AI Website Building Insight</span>
                      </h2>
                      <p className="text-base md:text-lg text-light-accent mb-6">
                        Subscribe for AI web creation updates, tips, and trends from CandlelightTechnology.com stay informed and inspired!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to="/contact"
                          className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-primary-accent to-light-accent font-heading font-bold text-base text-base-dark overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          <span className="relative text-base-dark">Subscribe Now</span>
                        </Link>
                      </div>
                    </AnimatedSection>
                  </div>
                  
                  {/* Right Image */}
                  <div className="md:w-1/2">
                    <AnimatedSection animation="slide-up" delay={0.2}>
                    <div className="relative h-56 md:h-[420px] lg:h-[360px] xl:h-[360px]">
                        <img 
                          src="/Blog CTA section.png"
                          alt="Blog updates"
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

export default Blog;
