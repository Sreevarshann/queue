
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-secondary overflow-hidden">
      <div className="container-section relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Skip the Human Error. 
              <br />
              <span className="gradient-text">Jump into AI Power.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Accelerate your business with intelligent automation, personalized experiences, and domain-specific AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="button-primary">Explore Solutions</Button>
              <Button className="bg-white text-queue-purple hover:bg-gray-50 border border-queue-purple flex items-center gap-2">
                <Play size={16} fill="currentColor" /> Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative w-full h-[400px] animate-float">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-queue-soft-purple/50 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative h-full w-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/0f7a336d-5c46-4caf-ac82-9b03062edf38.png" 
                  alt="AI Dashboard Visualization" 
                  className="max-w-full h-auto object-cover rounded-2xl shadow-xl" 
                />
                
                {/* Floating elements */}
                <div className="absolute -top-8 -right-4 bg-white p-3 rounded-lg shadow-lg animate-float">
                  <div className="w-12 h-12 bg-queue-soft-purple rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-queue-purple"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path><path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path><path d="M19 11h2m-1 -1v2"></path></svg>
                  </div>
                </div>
                
                <div className="absolute bottom-8 -left-4 bg-white p-3 rounded-lg shadow-lg animate-float" style={{animationDelay: "1s"}}>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-queue-blue"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
