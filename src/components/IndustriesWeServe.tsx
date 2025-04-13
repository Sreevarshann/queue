
import { cn } from "@/lib/utils";
import { useState } from "react";

const industries = [
  {
    name: "Healthcare",
    description: "Streamline patient care with AI-powered medical record processing, diagnostic assistance, and automated appointment scheduling.",
    image: "/lovable-uploads/cf6760dc-cf47-4d08-842e-006ab3e09f0e.png"
  },
  {
    name: "Education",
    description: "Transform learning experiences with personalized curriculum development, automated grading systems, and intelligent tutoring.",
    image: "/lovable-uploads/6a845c21-72a6-48b3-9b64-6dab9362e903.png"
  },
  {
    name: "Marketing",
    description: "Optimize campaigns with AI-driven audience targeting, content generation, and performance analytics.",
    image: "/lovable-uploads/44dfbdc2-82f3-4ab6-ab08-b6861c0b9816.png"
  },
  {
    name: "SaaS Products",
    description: "Enhance your software with embedded AI capabilities, predictive user behavior modeling, and intelligent automation.",
    image: "/lovable-uploads/0f3fd993-ddd4-48a1-aee9-7ac66df5a4e0.png"
  },
  {
    name: "Customer Service",
    description: "Deliver exceptional support with AI-powered chatbots, sentiment analysis, and automated ticket resolution.",
    image: "/lovable-uploads/e98d158f-e56c-4829-b936-912718d2eb5a.png"
  },
  {
    name: "Logistics",
    description: "Optimize supply chains with route optimization, inventory forecasting, and automated order processing.",
    image: "/lovable-uploads/ea127cb2-ba11-4ba2-ba74-3b31d3a17b51.png"
  }
];

const IndustriesWeServe = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-600">
            Tailored AI solutions for diverse sectors, addressing unique challenges with innovative approaches.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-2">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-full text-left p-4 rounded-lg transition-all duration-300 border-l-4",
                  activeIndex === index
                    ? "bg-queue-soft-purple border-l-queue-purple"
                    : "border-l-transparent hover:bg-gray-100"
                )}
              >
                <h3 className={cn(
                  "text-xl font-semibold",
                  activeIndex === index && "text-queue-purple"
                )}>
                  {industry.name}
                </h3>
              </button>
            ))}
          </div>
          
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-1">
              <img
                src={industries[activeIndex].image}
                alt={industries[activeIndex].name}
                className="rounded-lg h-[350px] w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{industries[activeIndex].name}</h3>
              <p className="text-gray-600">{industries[activeIndex].description}</p>
              <div className="mt-6">
                <button className="button-primary">View Case Studies</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
