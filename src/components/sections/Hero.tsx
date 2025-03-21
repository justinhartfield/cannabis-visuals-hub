
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SearchBar from "@/components/ui/SearchBar";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            The Ultimate <span className="text-cannabis-400 text-glow">Cannabis</span> Visual Asset Repository
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Access thousands of high-quality cannabis images via our gallery or API.
            Perfect for developers, marketers, and content creators.
          </p>
          
          <SearchBar 
            placeholder="Search for cannabis strains, images, or categories..." 
            className="mb-8"
          />
          
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
                className="border-cannabis-600/50 text-white hover:bg-cannabis-600/20 w-full sm:w-auto"
              >
                API Documentation
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 animate-fade-in-slow">
          <p className="text-sm text-white/60 mb-4">Trusted by leading cannabis companies and developers</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {/* Placeholder for logos */}
            <div className="h-8 w-24 bg-white/10 rounded"></div>
            <div className="h-8 w-28 bg-white/10 rounded"></div>
            <div className="h-8 w-20 bg-white/10 rounded"></div>
            <div className="h-8 w-32 bg-white/10 rounded"></div>
            <div className="h-8 w-24 bg-white/10 rounded"></div>
          </div>
        </div>
      </div>
      
      {/* Background effects */}
      <div className="absolute top-0 -left-64 w-[500px] h-[500px] rounded-full bg-cannabis-700/20 blur-3xl"></div>
      <div className="absolute bottom-0 -right-64 w-[500px] h-[500px] rounded-full bg-cannabis-900/20 blur-3xl"></div>
    </section>
  );
};

export default Hero;
