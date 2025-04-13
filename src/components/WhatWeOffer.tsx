
import { 
  Database, 
  BarChart3, 
  MessageSquare
} from "lucide-react";
import ServiceCarousel from "./ServiceCarousel";

const WhatWeOffer = () => {
  const offerings = [
    {
      icon: <Database className="h-10 w-10 text-queue-purple" />,
      title: "AI-Powered Automation",
      description: "Extract, validate & automate data workflows with intelligent systems that learn and adapt."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-queue-purple" />,
      title: "Predictive Analytics",
      description: "Discover trends and make data-driven decisions with our advanced analytics platform."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-queue-purple" />,
      title: "Intelligent Interactions",
      description: "Build hyper-personalized voice and chat agents that provide seamless customer experiences."
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-600">
            Our AI-powered solutions help businesses automate processes, gain insights, 
            and deliver exceptional customer experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover-card" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-queue-soft-purple p-3 rounded-xl inline-flex mb-6">
                {offering.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
              <p className="text-gray-600">{offering.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12">Our Service Portfolio</h3>
          <ServiceCarousel />
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
