
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "Top 5 AI Trends in Business Automation (2025)",
    excerpt: "Explore the latest AI innovations transforming business operations and driving efficiency across industries.",
    date: "April 10, 2025",
    author: "Alex Johnson",
    image: "/lovable-uploads/cf6760dc-cf47-4d08-842e-006ab3e09f0e.png"
  },
  {
    title: "How Multi-Agent Systems Are Shaping the Future of Work",
    excerpt: "Discover how collaborative AI agents are creating new possibilities for workflow optimization and decision support.",
    date: "April 2, 2025",
    author: "Maria Rodriguez",
    image: "/lovable-uploads/6a845c21-72a6-48b3-9b64-6dab9362e903.png"
  },
  {
    title: "Voice vs. Chatbots: What Does Your Business Need?",
    excerpt: "A comprehensive guide to choosing the right conversational AI interface for your specific business requirements.",
    date: "March 28, 2025",
    author: "David Chen",
    image: "/lovable-uploads/44dfbdc2-82f3-4ab6-ab08-b6861c0b9816.png"
  }
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container-section">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Insights</h2>
          <a 
            href="#" 
            className="flex items-center text-queue-purple hover:text-queue-purple/80 transition-colors font-medium"
          >
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-queue-purple hover:text-queue-purple/80 font-medium transition-colors"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
