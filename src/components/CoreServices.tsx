
import { 
  Database, 
  FileBarChart, 
  BarChart, 
  Bot, 
  Mic, 
  MessageSquare, 
  Globe, 
  Share2, 
  FileText, 
  GraduationCap 
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Service = {
  icon: JSX.Element;
  title: string;
  description: string[];
};

const CoreServices = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const services: Service[] = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Entry and Analytics",
      description: [
        "Automated Data Extraction",
        "AI-Based Validation Pipelines",
        "Predictive Modeling"
      ]
    },
    {
      icon: <FileBarChart className="h-6 w-6" />,
      title: "Business Analysis",
      description: [
        "AI-Driven Requirements Gathering",
        "AI-Powered Process Optimization",
        "Continuous Improvement Tracking"
      ]
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Dashboard Building",
      description: [
        "Interactive, Role-Based Dashboards",
        "Natural Language Query Dashboards",
        "Real-time Data Visualization"
      ]
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Automation with AI Agents",
      description: [
        "Specialized Business AI Agents",
        "Multi-Agent Orchestration",
        "Workflow Automation"
      ]
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Voice Assistants",
      description: [
        "Domain-Specific Voice Interfaces",
        "Voice Integration with Enterprise Systems",
        "Conversational Analytics"
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Chatbot Development",
      description: [
        "Context-Aware Chatbots",
        "AI Agent-Integrated Chat Systems",
        "Multi-platform Implementation"
      ]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website Building",
      description: [
        "AI-Personalized Web Experiences",
        "AI-Search and Recommendation Engines",
        "Conversion-optimized Designs"
      ]
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Social Media Marketing",
      description: [
        "Sentiment Analysis & Trend Monitoring",
        "AI-Based Content Scheduling",
        "Engagement Analytics"
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Content Creation",
      description: [
        "Automated Multi-Format Drafting",
        "Personalized Content Engines",
        "Brand Voice Consistency"
      ]
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Course Creation",
      description: [
        "AI-Personalized Learning Paths",
        "Auto-Grading & Feedback Systems",
        "Interactive Learning Materials"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
          <p className="text-gray-600">
            Comprehensive AI solutions tailored to enhance your business processes 
            and drive innovation across your organization.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <div className="space-y-1">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "flex items-center w-full p-3 text-left rounded-lg transition-all duration-200",
                      activeIndex === index
                        ? "bg-queue-purple text-white"
                        : "hover:bg-gray-100"
                    )}
                  >
                    <div className={cn(
                      "mr-3 p-2 rounded-lg",
                      activeIndex === index
                        ? "bg-white/20"
                        : "bg-queue-soft-purple"
                    )}>
                      {service.icon}
                    </div>
                    <span className="font-medium">{service.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-span-2">
            <div className="bg-white h-full rounded-2xl shadow-sm p-8">
              <div className="mb-6 flex items-center">
                <div className="bg-queue-soft-purple p-3 rounded-xl">
                  {services[activeIndex].icon}
                </div>
                <h3 className="text-2xl font-bold ml-4">{services[activeIndex].title}</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-600">
                  Our {services[activeIndex].title.toLowerCase()} solutions leverage cutting-edge AI 
                  to transform how your business operates. Streamline workflows, gain valuable insights, 
                  and enhance decision-making with our specialized AI systems.
                </p>
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-3">
                    {services[activeIndex].description.map((item, i) => (
                      <li key={i} className="flex items-start animate-fade-in" style={{animationDelay: `${i * 100}ms`}}>
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 flex">
                  <button className="button-primary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
