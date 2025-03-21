
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? "Login attempt" : "Register attempt", { email, password, name });
    // Here we would handle authentication in a real app
  };

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
              >
                {isLogin ? "Sign In" : "Create Account"}
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
