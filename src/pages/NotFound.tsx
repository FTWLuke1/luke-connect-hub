import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background -z-10" />
      <div className="absolute inset-0 bg-gradient-hero opacity-30 -z-10" />
      
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold neon-text bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
            404
          </h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            Looks like you've ventured into uncharted digital territory.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            className="btn-neon"
          >
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Hub
            </a>
          </Button>
          
          <Button 
            onClick={() => window.history.back()}
            className="btn-glass"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground">
          Error logged for route: {location.pathname}
        </div>
      </div>
    </div>
  );
};

export default NotFound;