import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hi! I'm here to help you with Candlelight. How can I assist you today?");
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text,
        isBot: true,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Pricing and Plans
    if (message.includes("price") || message.includes("cost") || message.includes("pricing") || message.includes("plan") || message.includes("subscription")) {
      return "Our pricing starts at $29/month for the Starter plan, $79/month for Professional, and $199/month for Enterprise. Each plan includes different features like AI website building, SEO tools, and priority support. Would you like details about a specific plan?";
    }
    
    // Features and Capabilities
    if (message.includes("feature") || message.includes("what can") || message.includes("capabilities") || message.includes("do")) {
      return "Candlelight offers: ✨ AI-powered website building, 🎨 Visual design tools, 📈 SEO optimization, 🔧 Custom integrations, 📱 Mobile-responsive designs, and 🚀 Performance optimization. Which feature interests you most?";
    }
    
    // AI and Technology
    if (message.includes("ai") || message.includes("artificial intelligence") || message.includes("machine learning") || message.includes("smart")) {
      return "Our AI technology helps you build websites faster by understanding your requirements and generating optimized code, designs, and content. It learns from your preferences to create personalized experiences. Want to see it in action?";
    }
    
    // SEO Related
    if (message.includes("seo") || message.includes("search engine") || message.includes("ranking") || message.includes("google")) {
      return "Our SEO tools automatically optimize your website for search engines with meta tags, structured data, performance optimization, and content analysis. We help improve your Google rankings and organic traffic significantly!";
    }
    
    // Getting Started
    if (message.includes("start") || message.includes("begin") || message.includes("how to") || message.includes("setup")) {
      return "Getting started is easy! 1️⃣ Click 'Get Started' to create your account, 2️⃣ Choose your plan, 3️⃣ Use our AI wizard to build your site, 4️⃣ Customize and publish! The whole process takes just minutes. Ready to begin?";
    }
    
    // Support and Contact
    if (message.includes("contact") || message.includes("support") || message.includes("help") || message.includes("customer service")) {
      return "Our support team is available at hello@candlelight.com or +1 (234) 567-890. We offer 24/7 email support, live chat (Mon-Fri 9AM-6PM PST), and comprehensive documentation. Premium users get priority support!";
    }
    
    // Demos and Testing
    if (message.includes("demo") || message.includes("try") || message.includes("test") || message.includes("preview")) {
      return "Absolutely! We have interactive demos for our AI website builder, visual design tools, and SEO optimizer. You can also start a free trial to test all features. Which demo would you like to explore first?";
    }
    
    // Company Information
    if (message.includes("about") || message.includes("company") || message.includes("who are") || message.includes("founded")) {
      return "Candlelight is a innovative tech company focused on democratizing web development through AI. We believe everyone should be able to create beautiful, professional websites without coding knowledge. Our mission is to empower creativity with technology!";
    }
    
    // Security and Privacy
    if (message.includes("security") || message.includes("safe") || message.includes("privacy") || message.includes("data")) {
      return "Security is our top priority! We use enterprise-grade encryption, SOC 2 compliance, regular security audits, and GDPR compliance. Your data is protected with bank-level security measures. We never share your information with third parties.";
    }
    
    // Integration Questions
    if (message.includes("integration") || message.includes("connect") || message.includes("api") || message.includes("third party")) {
      return "We integrate with 100+ popular tools including Google Analytics, Mailchimp, Stripe, PayPal, Slack, and social media platforms. Our API allows custom integrations, and we're constantly adding new connections. Need a specific integration?";
    }
    
    // Mobile and Responsive
    if (message.includes("mobile") || message.includes("responsive") || message.includes("phone") || message.includes("tablet")) {
      return "All Candlelight websites are automatically mobile-responsive and optimized for all devices. Our AI ensures your site looks perfect on phones, tablets, and desktops with fast loading times and touch-friendly interfaces!";
    }
    
    // Performance Questions
    if (message.includes("speed") || message.includes("performance") || message.includes("fast") || message.includes("loading")) {
      return "Our websites are built for speed! We use advanced optimization techniques, CDN delivery, image compression, and clean code to ensure lightning-fast loading times. Most sites load in under 2 seconds globally!";
    }
    
    // Customization
    if (message.includes("custom") || message.includes("personalize") || message.includes("modify") || message.includes("change")) {
      return "Full customization is available! You can modify colors, fonts, layouts, add custom code, upload your own images, and even use our visual editor for pixel-perfect designs. Your website, your way!";
    }
    
    // Greetings
    if (message.includes("hello") || message.includes("hi") || message.includes("hey") || message.includes("good")) {
      return "Hello! Welcome to Candlelight! 👋 I'm your AI assistant, ready to help you discover how our platform can transform your web development journey. What would you like to explore today?";
    }
    
    // Thanks
    if (message.includes("thank") || message.includes("thanks") || message.includes("appreciate")) {
      return "You're absolutely welcome! 😊 I'm here whenever you need assistance. Feel free to ask about our features, pricing, or anything else about Candlelight. How else can I help you today?";
    }
    
    // Goodbye
    if (message.includes("bye") || message.includes("goodbye") || message.includes("see you") || message.includes("later")) {
      return "Goodbye! Thanks for chatting with me today. Remember, I'm always here if you have questions about Candlelight. Have a wonderful day! 🌟";
    }
    
    // Default intelligent response
    return "That's an excellent question! 🤔 I'd love to help you learn more about Candlelight. You can explore our Features for capabilities, check Pricing for plans, try our Demos, or contact our team for personalized assistance. What aspect interests you most?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Get bot response
    const botResponse = getBotResponse(inputValue);
    addBotMessage(botResponse);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-primary-accent to-light-accent shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <MessageCircle className="h-6 w-6 text-base-dark group-hover:scale-110 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-light-accent rounded-full animate-pulse" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-40 w-80 sm:w-96 h-96 bg-card/95 backdrop-blur-md border border-primary-accent/30 rounded-2xl shadow-2xl transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-primary-accent/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-accent to-light-accent flex items-center justify-center">
              <Bot className="h-4 w-4 text-base-dark" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm">Candlelight Assistant</h3>
              <p className="text-xs text-light-accent">Online now</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-primary-accent transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 animate-slide-up ${
                message.isBot ? "justify-start" : "justify-end"
              }`}
            >
              {message.isBot && (
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-accent to-light-accent flex items-center justify-center flex-shrink-0">
                  <Bot className="h-3 w-3 text-base-dark" />
                </div>
              )}
              <div
                className={`max-w-xs px-3 py-2 rounded-2xl text-sm ${
                  message.isBot
                    ? "bg-primary-accent/20 text-light-accent"
                    : "bg-gradient-to-r from-primary-accent to-light-accent text-base-dark font-medium"
                }`}
              >
                {message.text}
              </div>
              {!message.isBot && (
                <div className="w-6 h-6 rounded-full bg-light-accent/20 flex items-center justify-center flex-shrink-0">
                  <User className="h-3 w-3 text-light-accent" />
                </div>
              )}
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-2 justify-start animate-slide-up">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-accent to-light-accent flex items-center justify-center flex-shrink-0">
                <Bot className="h-3 w-3 text-base-dark" />
              </div>
              <div className="bg-primary-accent/20 px-3 py-2 rounded-2xl">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-light-accent rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-light-accent rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 bg-light-accent rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-primary-accent/20">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 bg-white/10 border border-primary-accent/30 rounded-lg text-sm text-light-accent placeholder:text-muted-foreground focus:outline-none focus:border-primary-accent focus:bg-white/15 transition-colors"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="px-3 py-2 bg-gradient-to-r from-primary-accent to-light-accent rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4 text-base-dark" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;