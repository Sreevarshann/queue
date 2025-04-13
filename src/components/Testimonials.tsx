
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Queue revolutionized our data validation and reduced manual workload by 70%. Their AI dashboards are intuitive and provide insights we never had access to before.",
    name: "Sarah Johnson",
    title: "CMO, EduTech Firm",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    quote: "Their AI dashboards help us spot issues before they happen. Queue's predictive analytics has become an essential part of our operations planning.",
    name: "Michael Chen",
    title: "VP Operations, Logistics Company",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    quote: "The chatbot implementation surpassed our expectations. Customer satisfaction scores increased by 35% within the first month.",
    name: "Priya Patel",
    title: "Customer Experience Director, Retail Chain",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-queue-soft-purple to-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Discover how Queue's AI solutions have transformed businesses across industries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative px-12">
            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Testimonial */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md text-center">
              <div className="relative mb-8 inline-block">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-queue-soft-purple">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-3 -right-3 bg-queue-purple text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path></svg>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl mb-8 italic text-gray-700">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex flex-col items-center">
                <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-3 rounded-full transition-all",
                  currentIndex === index ? "w-8 bg-queue-purple" : "w-3 bg-gray-300"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Company logos */}
          <div className="mt-16">
            <p className="text-center text-gray-500 mb-8">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="h-12 w-32 bg-gray-200 rounded animate-pulse-soft" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
