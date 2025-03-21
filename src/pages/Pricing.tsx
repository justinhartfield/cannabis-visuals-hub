
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingTiers from "@/components/sections/PricingTiers";
import { Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const faqItems = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and cryptocurrency payments including Bitcoin and Ethereum."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 7-day money-back guarantee for all paid plans. If you're not satisfied with our service, you can request a full refund within 7 days of purchase."
    },
    {
      question: "Is there a limit to how many images I can download?",
      answer: "Free users can download up to 10 images per day. Premium users have a 100 image daily limit, and Enterprise users have unlimited downloads."
    },
    {
      question: "Do I need to provide attribution when using the images?",
      answer: "Free users must provide attribution. Premium and Enterprise users don't need to provide attribution for most use cases, but please check our licensing terms for specific details."
    },
    {
      question: "Can I use the images for commercial projects?",
      answer: "Free users can use images for personal projects only. Premium and Enterprise users can use images for commercial projects with some restrictions."
    }
  ];

  const comparisonFeatures = [
    { name: "Image Access", free: "500+ images", premium: "5,000+ images", enterprise: "Complete library" },
    { name: "API Requests", free: "100/day", premium: "1,000/day", enterprise: "Unlimited" },
    { name: "Image Resolution", free: "Standard", premium: "High", enterprise: "Ultra-high" },
    { name: "Commercial Use", free: "Limited", premium: "Full", enterprise: "Full" },
    { name: "Attribution Required", free: "Yes", premium: "No", premium_highlight: true, enterprise: "No", enterprise_highlight: true },
    { name: "Metadata Access", free: "Basic", premium: "Full", premium_highlight: true, enterprise: "Custom", enterprise_highlight: true },
    { name: "Support", free: "Community", premium: "Priority", premium_highlight: true, enterprise: "Dedicated", enterprise_highlight: true },
    { name: "Webhook Support", free: "No", premium: "Yes", premium_highlight: true, enterprise: "Yes", enterprise_highlight: true },
    { name: "Custom Integration", free: "No", premium: "No", enterprise: "Yes", enterprise_highlight: true },
    { name: "White Labeling", free: "No", premium: "No", enterprise: "Yes", enterprise_highlight: true },
    { name: "SLA Guarantee", free: "No", premium: "No", enterprise: "Yes", enterprise_highlight: true }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing & Plans | CannaVisuals</title>
        <meta name="description" content="Explore CannaVisuals subscription plans and pricing. Choose the right option for your cannabis image and API needs." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <section className="pt-32 pb-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Scale as you grow.
            </p>
          </div>
        </section>
        
        <PricingTiers />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Features Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full glass">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-white font-medium">Features</th>
                    <th className="px-6 py-4 text-center text-white font-medium">Free</th>
                    <th className="px-6 py-4 text-center text-white font-medium">Premium<br/><span className="text-sm font-normal text-white/70">$19/month</span></th>
                    <th className="px-6 py-4 text-center text-white font-medium">Enterprise<br/><span className="text-sm font-normal text-white/70">Custom</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white">{feature.name}</td>
                      <td className="px-6 py-4 text-center text-white/80">
                        {feature.free === "Yes" ? <Check size={18} className="mx-auto text-green-400" /> : 
                         feature.free === "No" ? <span className="text-white/50">—</span> : 
                         feature.free}
                      </td>
                      <td className={`px-6 py-4 text-center ${feature.premium_highlight ? "text-cannabis-400 font-medium" : "text-white/80"}`}>
                        {feature.premium === "Yes" ? <Check size={18} className="mx-auto text-green-400" /> : 
                         feature.premium === "No" ? <span className="text-white/50">—</span> : 
                         feature.premium}
                      </td>
                      <td className={`px-6 py-4 text-center ${feature.enterprise_highlight ? "text-cannabis-400 font-medium" : "text-white/80"}`}>
                        {feature.enterprise === "Yes" ? <Check size={18} className="mx-auto text-green-400" /> : 
                         feature.enterprise === "No" ? <span className="text-white/50">—</span> : 
                         feature.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-purple-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="glass rounded-lg divide-y divide-white/10">
                {faqItems.map((item, index) => (
                  <div key={index} className="p-6">
                    <h3 className="text-white font-medium flex items-center mb-2">
                      <HelpCircle size={18} className="text-cannabis-400 mr-2" />
                      {item.question}
                    </h3>
                    <p className="text-white/70 pl-6">{item.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-white/80 mb-4">
                  Have more questions? Contact our sales team for personalized assistance.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Need a custom solution for your organization? Our enterprise plan offers tailored features, 
              dedicated support, and flexible integration options.
            </p>
            
            <div className="max-w-3xl mx-auto glass p-8 rounded-lg text-left">
              <h3 className="text-xl font-medium text-white mb-4">Enterprise Benefits</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  "Dedicated account manager",
                  "Custom integration support",
                  "Unlimited API access",
                  "White-label options",
                  "Priority feature requests",
                  "Custom data fields",
                  "Custom analytics",
                  "Premium SLA",
                  "Advanced security features",
                  "Bulk downloads"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check size={18} className="text-cannabis-400 mt-0.5 mr-2 shrink-0" />
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button className="bg-cannabis-600 hover:bg-cannabis-700 text-white">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Pricing;
