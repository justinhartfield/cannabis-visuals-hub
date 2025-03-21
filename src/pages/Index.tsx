
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedImages from "@/components/sections/FeaturedImages";
import APIFeatures from "@/components/sections/APIFeatures";
import PricingTiers from "@/components/sections/PricingTiers";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CannaVisuals - Premium Cannabis Image Repository & API</title>
        <meta name="description" content="Access thousands of high-quality cannabis images via our gallery or API. Perfect for developers, marketers, and content creators." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero />
        <FeaturedImages />
        <APIFeatures />
        
        {/* Stats Section */}
        <section className="py-16 bg-purple-gradient">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="glass p-6 rounded-lg">
                <div className="text-4xl font-bold text-white mb-2">10K+</div>
                <p className="text-white/70">Premium Images</p>
              </div>
              <div className="glass p-6 rounded-lg">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <p className="text-white/70">Cannabis Strains</p>
              </div>
              <div className="glass p-6 rounded-lg">
                <div className="text-4xl font-bold text-white mb-2">250+</div>
                <p className="text-white/70">API Integrations</p>
              </div>
              <div className="glass p-6 rounded-lg">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <p className="text-white/70">Uptime</p>
              </div>
            </div>
          </div>
        </section>
        
        <PricingTiers />
        
        {/* CTA Section */}
        <section className="py-20 bg-purple-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Join thousands of developers, content creators, and cannabis businesses using CannaVisuals to power their projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/gallery">
                <Button 
                  size="lg" 
                  className="bg-cannabis-600 hover:bg-cannabis-700 text-white w-full sm:w-auto"
                >
                  Explore Gallery
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/api-docs">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto"
                >
                  Read API Docs
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
