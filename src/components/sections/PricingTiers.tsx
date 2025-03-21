
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingTiers = () => {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "Basic access for personal use",
      features: [
        "Access to 500+ free cannabis images",
        "Basic API access (100 requests/day)",
        "Standard resolution downloads",
        "Attribution required",
        "Community support"
      ],
      cta: "Sign Up Free",
      highlight: false,
      ctaLink: "/login"
    },
    {
      name: "Premium",
      price: "$19",
      period: "/month",
      description: "For professional creators and developers",
      features: [
        "Access to 5,000+ premium images",
        "Advanced API access (1,000 requests/day)",
        "High-resolution downloads",
        "No attribution required",
        "Priority support",
        "Commercial use license",
        "Metadata and strain information",
        "Webhook notifications"
      ],
      cta: "Get Started",
      highlight: true,
      ctaLink: "/pricing/premium"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For businesses with advanced needs",
      features: [
        "Access to complete image library",
        "Unlimited API requests",
        "Ultra-high resolution downloads",
        "Dedicated support manager",
        "Custom integration assistance",
        "White-label options",
        "Custom metadata fields",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      highlight: false,
      ctaLink: "/contact"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-white/70">
            Flexible pricing options for individual developers, content creators, and enterprise users. 
            Start with our free tier and upgrade as your needs grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 ${
                tier.highlight 
                  ? 'glass-card-premium ring-2 ring-cannabis-500 ring-offset-2 ring-offset-background' 
                  : 'glass-card'
              }`}
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  {tier.period && <span className="text-white/60 ml-1">{tier.period}</span>}
                </div>
                <p className="text-white/70">{tier.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check size={18} className="text-cannabis-400 shrink-0 mt-0.5 mr-2" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to={tier.ctaLink}>
                <Button 
                  className={`w-full ${
                    tier.highlight 
                      ? 'bg-cannabis-600 hover:bg-cannabis-700 text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {tier.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-white/60 text-sm">
          All plans include basic customer support and access to our documentation. <br />
          For custom needs or enterprise quotes, please <Link to="/contact" className="text-cannabis-400 hover:underline">contact our sales team</Link>.
        </div>
      </div>
      
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cannabis-800/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default PricingTiers;
