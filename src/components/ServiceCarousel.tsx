
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceItem {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const ServiceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services: ServiceItem[] = [
    {
      id: 1,
      image: "/lovable-uploads/1e35aeea-0616-4c01-a3b8-878cec285e87.png",
      title: "Business Intelligence Analysis",
      description: "Transform your business data into actionable insights with our comprehensive BI tools that visualize trends and patterns.",
      tags: ["Data Visualization", "SQL Analytics", "Tableau"]
    },
    {
      id: 2,
      image: "/lovable-uploads/8d173984-dbb9-43ec-a43d-8b28a15a7cad.png",
      title: "AI Agents",
      description: "Implement intelligent AI agents that automate tasks, provide recommendations, and enhance customer interactions.",
      tags: ["Chatbots", "Personal Assistants", "Automation", "Recommenders"]
    },
    {
      id: 3,
      image: "/lovable-uploads/b8b7685c-cfd9-4b50-a658-f500b8f6097c.png",
      title: "Website Development",
      description: "Create modern, responsive websites with integrated AI features like chatbots and personalized user experiences.",
      tags: ["Responsive Design", "Chatbot Integration"]
    },
    {
      id: 4,
      image: "/lovable-uploads/dd771631-b4ec-4e35-8f1c-305a06234297.png",
      title: "Social Media Advertisements",
      description: "Design and automate targeted social media campaigns across all major platforms with AI-driven audience segmentation.",
      tags: ["Campaign Management", "Performance Analytics"]
    },
    {
      id: 5,
      image: "/lovable-uploads/4c438829-2f86-4d8e-a0e6-5a7f2addb299.png",
      title: "Course Creation",
      description: "Build interactive online courses with AI-powered learning paths, automated assessments, and student engagement tools.",
      tags: ["E-Learning", "Assessment Tools", "Student Engagement"]
    },
    {
      id: 6,
      image: "/lovable-uploads/bbef6081-cf0e-486e-8af5-8f2d284c7a15.png",
      title: "Content Creation",
      description: "Produce engaging visual and written content with AI tools that ensure brand consistency across all channels.",
      tags: ["Visual Design", "Content Strategy"]
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Navigation Buttons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <button 
          onClick={prevSlide}
          className="bg-queue-purple text-white p-2 rounded-full shadow-lg hover:bg-purple-600 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <button 
          onClick={nextSlide}
          className="bg-queue-purple text-white p-2 rounded-full shadow-lg hover:bg-purple-600 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-6xl flex justify-center items-center">
          {services.map((item, index) => {
            // Calculate the position relative to activeIndex
            const position = (index - activeIndex + services.length) % services.length;
            
            // Determine if this card is visible (show 3 cards)
            const isVisible = position <= 2;
            
            // Calculate x position based on position
            let xPosition = "0%";
            let scale = 1;
            let opacity = 1;
            let zIndex = 0;
            
            if (position === 0) {
              xPosition = "-65%";
              scale = 0.9;
              opacity = 0.7;
              zIndex = 1;
            } else if (position === 1) {
              xPosition = "0%";
              scale = 1;
              opacity = 1;
              zIndex = 2;
            } else if (position === 2) {
              xPosition = "65%";
              scale = 0.9;
              opacity = 0.7;
              zIndex = 1;
            }
            
            if (!isVisible) {
              return null;
            }
            
            return (
              <motion.div
                key={item.id}
                className="absolute"
                initial={false}
                animate={{
                  x: xPosition,
                  scale,
                  opacity,
                  zIndex
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                onClick={() => {
                  if (position !== 1) {
                    setActiveIndex(index);
                  }
                }}
              >
                <Card 
                  className={`overflow-hidden cursor-pointer transition-shadow duration-300 shadow-md ${
                    position === 1 ? 'shadow-lg' : ''
                  }`}
                >
                  {/* Image container with 3:2 aspect ratio */}
                  <div className="relative w-[600px]">
                    <div className="relative pb-[66.66%] w-full">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="text-white font-bold text-xl">{item.title}</h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-4 bg-white">
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {item.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="inline-block bg-queue-soft-purple text-queue-purple text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
