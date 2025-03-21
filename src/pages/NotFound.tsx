
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | CannaVisuals</title>
        <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md animate-fade-in">
          <div className="text-7xl font-bold text-cannabis-400 mb-4 text-glow">404</div>
          
          <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
          
          <p className="text-white/70 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <Link to="/">
              <Button 
                className="bg-cannabis-600 hover:bg-cannabis-700 text-white w-full"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Homepage
              </Button>
            </Link>
            
            <p className="text-white/50 text-sm">
              If you believe this is an error, please <Link to="/contact" className="text-cannabis-400 hover:underline">contact our support team</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
