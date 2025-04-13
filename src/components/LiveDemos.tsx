
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const demoItems = [
  {
    title: "Dynamic Dashboards in Action",
    description: "Interactive analytics dashboards that transform complex data into actionable insights with natural language queries.",
    image: "/lovable-uploads/0f7a336d-5c46-4caf-ac82-9b03062edf38.png"
  },
  {
    title: "AI Agents for Lead Qualification",
    description: "Watch our AI agents qualify leads, schedule meetings, and provide personalized follow-ups without human intervention.",
    image: "/lovable-uploads/cf6760dc-cf47-4d08-842e-006ab3e09f0e.png"
  },
  {
    title: "Hyper-Personalized Chatbots",
    description: "Experience chatbots that understand context, sentiment and provide personalized responses based on customer history.",
    image: "/lovable-uploads/44dfbdc2-82f3-4ab6-ab08-b6861c0b9816.png"
  },
  {
    title: "AI-Based Content Scheduling Platforms",
    description: "See how our content scheduling platform uses AI to optimize posting times and content types for maximum engagement.",
    image: "/lovable-uploads/0f3fd993-ddd4-48a1-aee9-7ac66df5a4e0.png"
  }
];

const LiveDemos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % demoItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + demoItems.length) % demoItems.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-white to-queue-soft-purple/30">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Demos</h2>
          <p className="text-gray-600">
            Experience our AI solutions in action and see the transformative impact they can have on your business.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Controls */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {demoItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="button-primary flex items-center gap-2">
                        Try Live Demo <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button className="button-secondary">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {demoItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-3 w-3 rounded-full transition-all",
                  currentIndex === index ? "bg-queue-purple w-6" : "bg-gray-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemos;
