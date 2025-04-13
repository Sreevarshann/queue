
import { 
  CheckCircle, 
  Battery, 
  Lightbulb, 
  Lock, 
  MessageCircle 
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Reduce Human Errors",
      description: "Our AI systems minimize manual errors by automating repetitive tasks with precision."
    },
    {
      icon: <Battery className="h-6 w-6" />,
      title: "Increase Productivity",
      description: "Free up your team's time for strategic work while AI handles routine processes."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Deliver Intelligent Insights",
      description: "Transform raw data into actionable insights with our advanced analytics."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Ensure Scalable and Secure AI Solutions",
      description: "Enterprise-grade security with the flexibility to scale as your business grows."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Real-Time Support with AI Agents",
      description: "Provide instant, accurate responses to customer inquiries around the clock."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-queue-soft-purple to-white">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/00ffb770-e5e3-4a78-ae8e-71397a2b83e1.png" 
              alt="Why Choose Queue" 
              className="rounded-2xl shadow-xl animate-float"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Queue?</h2>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="flex items-start animate-fade-in-right"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-queue-purple p-2 rounded-lg text-white flex-shrink-0 mr-4">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
