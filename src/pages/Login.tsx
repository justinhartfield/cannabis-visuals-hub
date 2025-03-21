
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication/registration
    setTimeout(() => {
      if (isLogin) {
        // Login logic
        console.log("Login attempt", { email, password });
        // Store user data in localStorage for simple auth simulation
        const user = { name: "Test User", email, isAuthenticated: true };
        localStorage.setItem("cannavisuals_user", JSON.stringify(user));
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        // Registration logic
        console.log("Register attempt", { email, password, name });
        // Store user data in localStorage for simple auth simulation
        const user = { name, email, isAuthenticated: true };
        localStorage.setItem("cannavisuals_user", JSON.stringify(user));
        toast.success("Account created successfully!");
        navigate("/dashboard");
      }
      setIsLoading(false);
    }, 1000); // Simulate network delay
  };

  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem("cannavisuals_user");
    if (user) {
      const userData = JSON.parse(user);
      if (userData.isAuthenticated) {
        navigate("/dashboard");
      }
    }
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>{isLogin ? "Sign In" : "Sign Up"} | CannaVisuals</title>
        <meta name="description" content={isLogin ? "Sign in to your CannaVisuals account to access premium cannabis imagery and API features." : "Create an account to access cannabis images and API features."} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <div className="py-4 px-6">
          <Link to="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md glass p-8 rounded-lg animate-fade-in">
            <div className="text-center mb-8">
              <Link to="/" className="inline-block mb-6">
                <h1 className="text-2xl font-bold text-white text-glow">CannaVisuals</h1>
              </Link>
              <h2 className="text-xl font-semibold text-white">{isLogin ? "Welcome Back" : "Create an Account"}</h2>
              <p className="text-white/70 mt-2">
                {isLogin 
                  ? "Enter your credentials to access your account" 
                  : "Join CannaVisuals to access our cannabis image repository and API"}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cannabis-500/50"
                    placeholder="Your Name"
                    required
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cannabis-500/50"
                  placeholder="you@example.com"
                  required
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-white/90">Password</label>
                  {isLogin && (
                    <Link to="/forgot-password" className="text-sm text-cannabis-400 hover:text-cannabis-300 transition-colors">
                      Forgot password?
                    </Link>
                  )}
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cannabis-500/50"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-cannabis-600 hover:bg-cannabis-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isLogin ? "Signing In..." : "Creating Account..."}
                  </span>
                ) : (
                  isLogin ? "Sign In" : "Create Account"
                )}
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-white/70">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button 
                  onClick={() => setIsLogin(!isLogin)} 
                  className="ml-2 text-cannabis-400 hover:text-cannabis-300 transition-colors"
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} CannaVisuals. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
