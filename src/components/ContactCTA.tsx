
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message received!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      company: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Ready to Skip the Errors and Embrace AI?
          </h2>
          <p className="text-gray-600">
            Contact us today to explore how Queue can transform your business operations with intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-queue-purple to-queue-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Get Started</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Call us</p>
                  <p className="font-semibold">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email us</p>
                  <p className="font-semibold">info@queue-ai.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Working hours</p>
                  <p className="font-semibold">Mon - Fri: 9AM - 6PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 space-y-4">
              <h4 className="font-semibold">Connect with us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                <Input 
                  id="company" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  placeholder="your@email.com" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?" 
                  rows={4} 
                  required 
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button type="submit" className="button-primary w-full">Send Message</Button>
              </div>
              
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500">
                  or 
                </span>
                <div className="flex justify-center gap-4 mt-4">
                  <Button variant="outline" className="bg-white hover:bg-gray-50 border border-queue-purple text-queue-purple">Schedule Demo</Button>
                  <Button variant="outline" className="bg-white hover:bg-gray-50 border border-queue-purple text-queue-purple">Join Waitlist</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
