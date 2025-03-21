
import { Database, Lock, Image, Clock, Code, BarChart3 } from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";
import APICodeBlock from "@/components/ui/APICodeBlock";

const APIFeatures = () => {
  const apiFeatures = [
    {
      icon: Database,
      title: "Rich Metadata",
      description: "Access comprehensive data including strain details, effects, medical uses, and more."
    },
    {
      icon: Image,
      title: "High-Quality Images",
      description: "Various resolutions and formats optimized for different applications and use cases."
    },
    {
      icon: Lock,
      title: "Secure Access",
      description: "Authentication via API keys with different permission levels and rate limits."
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Regularly updated database with the latest cannabis strains and research."
    },
    {
      icon: Code,
      title: "Flexible Integration",
      description: "Simple RESTful API with clear documentation and example code in multiple languages."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track your API usage, most used endpoints, and optimize your implementation."
    }
  ];

  const sampleAPICode = `curl -X GET "https://api.cannavisuals.com/v1/strains/blue-dream" \\
-H "X-API-Key: your_api_key_here"`;

  const sampleResponse = `{
  "id": "strain_001",
  "name": "Blue Dream",
  "type": "Hybrid",
  "thcContent": "18-24%",
  "cbdContent": "0.1-0.2%",
  "effects": ["Relaxed", "Creative", "Uplifted"],
  "flavor": ["Blueberry", "Sweet", "Herbal"],
  "description": "A sativa-dominant hybrid originating in California...",
  "images": [
    {
      "id": "img_bd_001",
      "url": "https://api.cannavisuals.com/images/blue-dream-1.jpg",
      "resolution": "high",
      "tags": ["flower", "closeup"]
    },
    // More images...
  ]
}`;

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Powerful API for Developers</h2>
          <p className="text-white/70">
            Integrate our comprehensive cannabis image and data API into your applications, websites, or research projects. 
            Build with confidence using our well-documented endpoints and robust infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {apiFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="bg-card/30 rounded-lg p-6 lg:p-8 backdrop-blur-sm border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Simple Integration</h3>
              <p className="text-white/70 mb-6">
                Our RESTful API allows you to easily retrieve cannabis strain information, images, and metadata with just a few lines of code.
              </p>
              
              <APICodeBlock
                code={sampleAPICode}
                language="bash"
                title="Request Example"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Structured JSON Response</h3>
              <p className="text-white/70 mb-6">
                Receive well-structured, consistent JSON responses that are easy to parse and integrate into your applications.
              </p>
              
              <APICodeBlock
                code={sampleResponse}
                language="json"
                title="Response Example"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background effects */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-cannabis-700/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-cannabis-900/20 blur-3xl -z-10"></div>
    </section>
  );
};

export default APIFeatures;
