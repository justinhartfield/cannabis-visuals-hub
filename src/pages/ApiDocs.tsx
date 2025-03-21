
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import APICodeBlock from "@/components/ui/APICodeBlock";
import { Check } from "lucide-react";

const ApiDocs = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sidebarItems = [
    { id: "overview", label: "Overview" },
    { id: "authentication", label: "Authentication" },
    { id: "rate-limits", label: "Rate Limits" },
    { id: "endpoints", label: "Endpoints" },
    { id: "images", label: "Images API" },
    { id: "strains", label: "Strains API" },
    { id: "categories", label: "Categories API" },
    { id: "search", label: "Search API" },
    { id: "webhooks", label: "Webhooks" },
    { id: "errors", label: "Error Handling" },
    { id: "sdks", label: "SDKs & Libraries" },
  ];

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const authSample = `curl -X GET "https://api.cannavisuals.com/v1/strains" \\
-H "X-API-Key: your_api_key_here"`;

  const strainsSample = `curl -X GET "https://api.cannavisuals.com/v1/strains?limit=10&offset=0" \\
-H "X-API-Key: your_api_key_here"`;

  const strainsResponse = `{
  "data": [
    {
      "id": "strain_001",
      "name": "Blue Dream",
      "type": "Hybrid",
      "thcContent": "18-24%",
      "cbdContent": "0.1-0.2%",
      "effects": ["Relaxed", "Creative", "Uplifted"],
      "images": [
        {
          "id": "img_bd_001",
          "thumbnailUrl": "https://api.cannavisuals.com/images/blue-dream-1-thumb.jpg",
          "fullUrl": "https://api.cannavisuals.com/images/blue-dream-1.jpg",
          "isPremium": false
        }
      ]
    },
    // More strains...
  ],
  "pagination": {
    "total": 500,
    "limit": 10,
    "offset": 0,
    "next": "https://api.cannavisuals.com/v1/strains?limit=10&offset=10"
  }
}`;

  const imagesSample = `curl -X GET "https://api.cannavisuals.com/v1/images?category=strains&limit=5" \\
-H "X-API-Key: your_api_key_here"`;

  const searchSample = `curl -X GET "https://api.cannavisuals.com/v1/search?q=purple+kush" \\
-H "X-API-Key: your_api_key_here"`;

  return (
    <>
      <Helmet>
        <title>API Documentation | CannaVisuals</title>
        <meta name="description" content="Comprehensive documentation for the CannaVisuals API. Learn how to integrate high-quality cannabis imagery and data into your applications." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-1/4 lg:sticky lg:top-28 lg:self-start mb-8 lg:mb-0">
              <div className="glass p-4 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-4">API Documentation</h2>
                <nav>
                  <ul className="space-y-1">
                    {sidebarItems.map(item => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleSectionClick(item.id)}
                          className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                            activeSection === item.id
                              ? "bg-cannabis-600/20 text-cannabis-300"
                              : "text-white/70 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              
              <div className="glass p-4 rounded-lg mt-6">
                <h3 className="font-medium text-white mb-3">Need Help?</h3>
                <p className="text-white/70 text-sm mb-4">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <Link 
                  to="/contact" 
                  className="block text-cannabis-400 text-sm hover:text-cannabis-300 transition-colors"
                >
                  Contact Support →
                </Link>
              </div>
            </aside>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="prose prose-invert max-w-none">
                <section id="overview" className="mb-16">
                  <h1 className="text-3xl font-bold text-white mb-6">CannaVisuals API Documentation</h1>
                  <div className="glass p-6 rounded-lg mb-8">
                    <p className="text-white/80 mb-4">
                      Welcome to the CannaVisuals API documentation. Our API provides programmatic access to our comprehensive cannabis
                      image repository and strain database, enabling developers to integrate high-quality cannabis content into their applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 bg-secondary/30 p-4 rounded-md">
                        <h3 className="text-white font-medium mb-2">Base URL</h3>
                        <code className="block bg-secondary/50 p-2 rounded text-white/90 font-mono text-sm">
                          https://api.cannavisuals.com/v1
                        </code>
                      </div>
                      <div className="flex-1 bg-secondary/30 p-4 rounded-md">
                        <h3 className="text-white font-medium mb-2">Current Version</h3>
                        <p className="text-white/90">v1 (stable)</p>
                        <p className="text-xs text-white/60 mt-1">Released: January 2023</p>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4">API Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                      "Access to 10,000+ cannabis images",
                      "Comprehensive strain information",
                      "Multiple image resolutions",
                      "Advanced search capabilities",
                      "Webhook notifications",
                      "Detailed metadata",
                      "Rate limiting",
                      "Authentication"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={20} className="text-cannabis-400 mt-0.5 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                
                <section id="authentication" className="mb-16">
                  <h2 className="text-2xl font-bold text-white mb-4">Authentication</h2>
                  <p className="text-white/80 mb-4">
                    All API requests require authentication using an API key. You can obtain your API key by signing up for a 
                    CannaVisuals account and visiting your profile dashboard.
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-white mb-3">API Key Authentication</h3>
                    <p className="text-white/80 mb-4">
                      Include your API key in the request headers using the <code className="bg-secondary/50 px-1 py-0.5 rounded">X-API-Key</code> header.
                    </p>
                    
                    <APICodeBlock
                      code={authSample}
                      language="bash"
                      title="Authentication Example"
                    />
                  </div>
                  
                  <div className="glass p-4 rounded-lg border-l-4 border-cannabis-500">
                    <h4 className="font-medium text-white mb-2">Important</h4>
                    <p className="text-white/80 text-sm">
                      Never share your API key publicly or commit it to version control systems. Always use environment variables 
                      or secure configuration management for API keys.
                    </p>
                  </div>
                </section>
                
                <section id="rate-limits" className="mb-16">
                  <h2 className="text-2xl font-bold text-white mb-4">Rate Limits</h2>
                  <p className="text-white/80 mb-6">
                    To ensure availability for all users, the API employs rate limiting based on your subscription tier.
                    Rate limit information is included in the response headers.
                  </p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-secondary/30 text-left">
                          <th className="px-4 py-3 font-medium">Tier</th>
                          <th className="px-4 py-3 font-medium">Rate Limit</th>
                          <th className="px-4 py-3 font-medium">Features</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3">Free</td>
                          <td className="px-4 py-3">100 requests/day</td>
                          <td className="px-4 py-3">Basic read access to public data</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Premium</td>
                          <td className="px-4 py-3">1,000 requests/day</td>
                          <td className="px-4 py-3">Full read access, basic write access</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Business</td>
                          <td className="px-4 py-3">10,000 requests/day</td>
                          <td className="px-4 py-3">Full read/write access, webhook support</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Enterprise</td>
                          <td className="px-4 py-3">Custom limits</td>
                          <td className="px-4 py-3">All features, dedicated support, SLA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h3 className="text-xl font-medium text-white mb-3">Rate Limit Headers</h3>
                  <div className="glass-card p-4 mb-6">
                    <p className="font-mono text-sm mb-2"><span className="text-cannabis-400">X-RateLimit-Limit:</span> Maximum number of requests allowed per day</p>
                    <p className="font-mono text-sm mb-2"><span className="text-cannabis-400">X-RateLimit-Remaining:</span> Number of requests remaining in the current period</p>
                    <p className="font-mono text-sm"><span className="text-cannabis-400">X-RateLimit-Reset:</span> Time when the rate limit will reset (Unix timestamp)</p>
                  </div>
                </section>
                
                <section id="endpoints" className="mb-16">
                  <h2 className="text-2xl font-bold text-white mb-6">API Endpoints</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-white mb-4" id="strains">Strains API</h3>
                    <p className="text-white/80 mb-4">
                      Access detailed information about cannabis strains, including effects, medical uses, and associated images.
                    </p>
                    
                    <div className="glass-card p-5 mb-6 border-l-4 border-cannabis-500">
                      <h4 className="font-medium text-white mb-2">GET /strains</h4>
                      <p className="text-white/80 text-sm mb-3">Retrieves a list of cannabis strains with pagination support.</p>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-white mb-1">Query Parameters:</p>
                        <ul className="text-sm text-white/80 space-y-1 pl-5 list-disc">
                          <li><code>limit</code> - Number of results to return (default: 20, max: 100)</li>
                          <li><code>offset</code> - Pagination offset (default: 0)</li>
                          <li><code>type</code> - Filter by strain type (indica, sativa, hybrid)</li>
                          <li><code>effect</code> - Filter by effect (relaxed, energetic, creative, etc.)</li>
                        </ul>
                      </div>
                      
                      <APICodeBlock
                        code={strainsSample}
                        language="bash"
                        title="Request Example"
                      />
                      
                      <APICodeBlock
                        code={strainsResponse}
                        language="json"
                        title="Response Example"
                        className="mt-4"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-white mb-4" id="images">Images API</h3>
                    <p className="text-white/80 mb-4">
                      Access the extensive collection of cannabis images with various filtering options.
                    </p>
                    
                    <div className="glass-card p-5 mb-6 border-l-4 border-cannabis-500">
                      <h4 className="font-medium text-white mb-2">GET /images</h4>
                      <p className="text-white/80 text-sm mb-3">Retrieves a collection of cannabis images with filtering and pagination.</p>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-white mb-1">Query Parameters:</p>
                        <ul className="text-sm text-white/80 space-y-1 pl-5 list-disc">
                          <li><code>category</code> - Filter by category (strains, products, cultivation, etc.)</li>
                          <li><code>strain</code> - Filter by associated strain ID</li>
                          <li><code>premium</code> - Filter by premium status (true/false)</li>
                          <li><code>limit</code> - Number of results to return (default: 20, max: 100)</li>
                          <li><code>offset</code> - Pagination offset (default: 0)</li>
                        </ul>
                      </div>
                      
                      <APICodeBlock
                        code={imagesSample}
                        language="bash"
                        title="Request Example"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-white mb-4" id="search">Search API</h3>
                    <p className="text-white/80 mb-4">
                      Powerful search functionality across all cannabis data and images.
                    </p>
                    
                    <div className="glass-card p-5 mb-6 border-l-4 border-cannabis-500">
                      <h4 className="font-medium text-white mb-2">GET /search</h4>
                      <p className="text-white/80 text-sm mb-3">Search across strains, images, and other cannabis-related content.</p>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-white mb-1">Query Parameters:</p>
                        <ul className="text-sm text-white/80 space-y-1 pl-5 list-disc">
                          <li><code>q</code> - Search query (required)</li>
                          <li><code>type</code> - Limit search to specific content types (strains, images, articles)</li>
                          <li><code>limit</code> - Number of results to return (default: 20, max: 100)</li>
                          <li><code>offset</code> - Pagination offset (default: 0)</li>
                        </ul>
                      </div>
                      
                      <APICodeBlock
                        code={searchSample}
                        language="bash"
                        title="Request Example"
                      />
                    </div>
                  </div>
                </section>
                
                <section id="errors" className="mb-16">
                  <h2 className="text-2xl font-bold text-white mb-4">Error Handling</h2>
                  <p className="text-white/80 mb-6">
                    The API uses conventional HTTP response codes to indicate success or failure of requests.
                    In general, codes in the 2xx range indicate success, codes in the 4xx range indicate 
                    client errors, and codes in the 5xx range indicate server errors.
                  </p>
                  
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-secondary/30 text-left">
                          <th className="px-4 py-3 font-medium">Code</th>
                          <th className="px-4 py-3 font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3">200 - OK</td>
                          <td className="px-4 py-3">The request was successful</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">400 - Bad Request</td>
                          <td className="px-4 py-3">The request was invalid or cannot be served</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">401 - Unauthorized</td>
                          <td className="px-4 py-3">Authentication failed or user doesn't have permissions</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">403 - Forbidden</td>
                          <td className="px-4 py-3">The request is understood but refused (e.g., premium content for free users)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">404 - Not Found</td>
                          <td className="px-4 py-3">The requested resource doesn't exist</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">429 - Too Many Requests</td>
                          <td className="px-4 py-3">Rate limit exceeded</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">500, 502, 503, 504 - Server Errors</td>
                          <td className="px-4 py-3">Something went wrong on our end</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                
                <section id="sdks" className="mb-16">
                  <h2 className="text-2xl font-bold text-white mb-4">SDKs & Libraries</h2>
                  <p className="text-white/80 mb-6">
                    We provide official client libraries to make integrating with our API even easier.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="glass-card p-5">
                      <h3 className="font-medium text-white mb-3">JavaScript SDK</h3>
                      <p className="text-white/80 text-sm mb-4">
                        Our official JavaScript library for browser and Node.js environments.
                      </p>
                      <APICodeBlock
                        code="npm install cannavisuals-js"
                        language="bash"
                        title="Installation"
                      />
                    </div>
                    
                    <div className="glass-card p-5">
                      <h3 className="font-medium text-white mb-3">Python SDK</h3>
                      <p className="text-white/80 text-sm mb-4">
                        Our official Python library for data analysis and backend integration.
                      </p>
                      <APICodeBlock
                        code="pip install cannavisuals"
                        language="bash"
                        title="Installation"
                      />
                    </div>
                  </div>
                  
                  <p className="text-white/80">
                    Additionally, community-maintained libraries are available for other programming languages.
                    Visit our <Link to="/developers" className="text-cannabis-400 hover:underline">Developers Hub</Link> to learn more.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ApiDocs;
