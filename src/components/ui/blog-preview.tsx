import { Clock, User, Tag, Eye, ArrowRight, ChevronRight, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  views: string;
}

const BlogPreview = () => {
  const latestPosts: BlogPost[] = [
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
    },
    {
      id: 3,
      title: "The Future of E-commerce: AI-Powered Shopping Experiences",
      excerpt: "Explore how AI is transforming online shopping with personalized recommendations and more.",
      author: "Emma Johnson",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      category: "Business Growth",
      image: "/Blog3.png",
      views: "2.5k",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 px-5 bg-secondary-dark/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="inline-block mb-3 text-primary-accent font-medium tracking-wider uppercase text-sm">Latest Updates</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3">
              Insights & <span className="text-primary-accent">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover the latest trends, expert tips, and industry insights in our blog.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px 0px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:text-right mt-6 md:mt-0"
          >
            <Link
              to="/blog"
              className="group relative px-6 py-3 md:px-8 md:py-3.5 rounded-xl bg-gradient-to-r from-primary-accent to-light-accent font-heading font-bold text-sm md:text-base text-base-dark overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 inline-flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-primary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative flex items-center">
                View All Articles
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {latestPosts.map((post, index) => (
            <motion.div 
              key={post.id} 
              variants={item}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden group bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary-accent/30 transition-all duration-300 p-5">
                <div className="relative h-56 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-[5px]"
                    style={{ borderRadius: '5px' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-12">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-primary-accent rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span className="flex items-center mr-4">
                      <User className="w-4 h-4 mr-1.5 text-primary-accent" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5 text-primary-accent" />
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Eye className="w-4 h-4 mr-1.5 text-primary-accent" />
                      {post.views} views
                    </span>
                    <Link to={`/blog#post-${post.id}`} className="group/button relative inline-block">
                      <span className="relative z-10 flex items-center font-heading font-semibold text-sm text-primary-accent group-hover/button:text-white px-4 py-2 rounded-md overflow-hidden">
                        <motion.span 
                          className="relative z-10 flex items-center"
                          whileHover={{ x: 4 }}
                        >
                          Read More
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:rotate-45" />
                        </motion.span>
                        <span className="absolute inset-0 bg-primary-accent/5 group-hover/button:bg-primary-accent transition-all duration-500 -z-10"></span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover/button:w-full"></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
