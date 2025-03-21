
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Copy, Key, LogOut, Plus, RefreshCw, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ name: string; email: string; } | null>(null);
  const [keys, setKeys] = useState<Array<{id: string; name: string; key: string; status: 'active' | 'pending' | 'revoked'; created: string; lastUsed: string | null;}>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [requestFormData, setRequestFormData] = useState({
    name: '',
    description: '',
    useCase: 'personal'
  });
  
  // Check authentication
  useEffect(() => {
    const storedUser = localStorage.getItem("cannavisuals_user");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    
    try {
      const userData = JSON.parse(storedUser);
      if (!userData.isAuthenticated) {
        navigate("/login");
        return;
      }
      setUser(userData);
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate("/login");
    }
  }, [navigate]);

  // Simulate loading some API keys
  useEffect(() => {
    // Only load sample data if we don't have any keys yet
    if (keys.length === 0) {
      const sampleKeys = [
        {
          id: "api-key-1",
          name: "Development API Key",
          key: "cv_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          status: 'active' as const,
          created: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
          lastUsed: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() // 2 days ago
        }
      ];
      setKeys(sampleKeys);
    }
  }, [keys.length]);

  const handleRequestKey = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newKey = {
        id: "api-key-" + (keys.length + 1),
        name: requestFormData.name,
        key: "cv_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        status: 'pending' as const,
        created: new Date().toISOString(),
        lastUsed: null
      };
      
      setKeys([...keys, newKey]);
      setRequestFormData({
        name: '',
        description: '',
        useCase: 'personal'
      });
      
      toast.success("API key requested successfully! It's pending approval.");
      setIsLoading(false);
    }, 1500);
  };

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    toast.success("API key copied to clipboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("cannavisuals_user");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | CannaVisuals</title>
        <meta name="description" content="Manage your CannaVisuals account, API keys and access." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-white/10">
          <div className="container flex items-center justify-between h-16 px-4">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white text-glow">CannaVisuals</h1>
              </Link>
              <nav className="hidden md:flex items-center ml-6 space-x-4">
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">Home</Link>
                <Link to="/gallery" className="text-sm text-white/70 hover:text-white transition-colors">Gallery</Link>
                <Link to="/api-docs" className="text-sm text-white/70 hover:text-white transition-colors">API</Link>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white/70 hover:text-white" 
                onClick={handleLogout}
              >
                <LogOut size={16} className="mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>
      
        {/* Main content */}
        <main className="container px-4 py-8">
          <div className="flex items-center mb-8">
            <Link to="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-white ml-auto">Dashboard</h1>
            <div className="flex items-center ml-auto">
              <User size={18} className="text-cannabis-400 mr-2" />
              <span className="text-white">{user.name}</span>
            </div>
          </div>
          
          <Tabs defaultValue="api-keys" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="api-keys">API Keys</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>
            
            <TabsContent value="api-keys" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* API Key Management */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">API Keys</CardTitle>
                    <CardDescription>Manage your API keys for accessing the CannaVisuals API.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {keys.length > 0 ? (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Name</TableHead>
                              <TableHead>Key</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Created</TableHead>
                              <TableHead>Last Used</TableHead>
                              <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {keys.map((apiKey) => (
                              <TableRow key={apiKey.id}>
                                <TableCell className="font-medium">{apiKey.name}</TableCell>
                                <TableCell>
                                  <div className="font-mono text-xs">
                                    {apiKey.key.substring(0, 12)}...
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    apiKey.status === 'active' 
                                      ? 'bg-green-100/10 text-green-500' 
                                      : apiKey.status === 'pending' 
                                        ? 'bg-yellow-100/10 text-yellow-500' 
                                        : 'bg-red-100/10 text-red-500'
                                  }`}>
                                    {apiKey.status.charAt(0).toUpperCase() + apiKey.status.slice(1)}
                                  </span>
                                </TableCell>
                                <TableCell>
                                  {new Date(apiKey.created).toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                  {apiKey.lastUsed 
                                    ? new Date(apiKey.lastUsed).toLocaleDateString() 
                                    : 'Never'}
                                </TableCell>
                                <TableCell className="text-right">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleCopyKey(apiKey.key)}
                                  >
                                    <Copy size={16} />
                                    <span className="sr-only">Copy</span>
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground mb-4">You don't have any API keys yet.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                {/* Request New Key */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Request API Key</CardTitle>
                    <CardDescription>
                      Fill out this form to request a new API key for your application.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleRequestKey} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white/90">
                          Key Name
                        </label>
                        <Input
                          id="name"
                          placeholder="e.g. Production API Key"
                          value={requestFormData.name}
                          onChange={(e) => setRequestFormData({...requestFormData, name: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="description" className="text-sm font-medium text-white/90">
                          Description
                        </label>
                        <Textarea
                          id="description"
                          placeholder="Describe how you'll use this API key"
                          value={requestFormData.description}
                          onChange={(e) => setRequestFormData({...requestFormData, description: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="use-case" className="text-sm font-medium text-white/90">
                          Use Case
                        </label>
                        <select
                          id="use-case"
                          className="w-full h-10 px-3 rounded-md bg-background border border-input text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          value={requestFormData.useCase}
                          onChange={(e) => setRequestFormData({...requestFormData, useCase: e.target.value})}
                          required
                        >
                          <option value="personal">Personal Project</option>
                          <option value="commercial">Commercial Use</option>
                          <option value="educational">Educational</option>
                          <option value="research">Research</option>
                        </select>
                      </div>
                      
                      <Alert className="mt-4">
                        <Key className="h-4 w-4" />
                        <AlertTitle>Important Information</AlertTitle>
                        <AlertDescription>
                          API keys grant access to your account and resources. Never share your keys with others or expose them in client-side code.
                        </AlertDescription>
                      </Alert>
                    
                      <Button
                        type="submit"
                        className="w-full bg-cannabis-600 hover:bg-cannabis-700 text-white mt-4"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="inline-flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Requesting...
                          </span>
                        ) : (
                          <>
                            <Plus size={16} className="mr-2" />
                            Request New API Key
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Account Details</CardTitle>
                  <CardDescription>Manage your account details and preferences.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/90">Name</label>
                      <Input value={user.name} readOnly />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/90">Email</label>
                      <Input value={user.email} readOnly />
                    </div>
                    <Separator />
                    <div className="pt-4">
                      <h3 className="text-md font-semibold mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/90">Current Password</label>
                          <Input type="password" placeholder="Enter current password" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/90">New Password</label>
                          <Input type="password" placeholder="Enter new password" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/90">Confirm New Password</label>
                          <Input type="password" placeholder="Confirm new password" />
                        </div>
                        <Button className="bg-cannabis-600 hover:bg-cannabis-700 text-white" size="sm">
                          Update Password
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
