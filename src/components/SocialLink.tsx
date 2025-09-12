import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLinkProps {
  icon: LucideIcon;
  label: string;
  url: string;
  description?: string;
  status?: "online" | "offline" | "away";
  lastSeen?: string;
  gradient?: "primary" | "secondary" | "accent";
}

const SocialLink = ({ 
  icon: Icon, 
  label, 
  url, 
  description, 
  status, 
  lastSeen,
  gradient = "primary" 
}: SocialLinkProps) => {
  const gradientClass = {
    primary: "hover:bg-gradient-primary",
    secondary: "hover:bg-gradient-secondary", 
    accent: "hover:bg-accent/20"
  }[gradient];

  return (
    <Button
      asChild
      variant="outline"
      className="h-auto p-6 w-full justify-center space-x-4 group border-primary/30 bg-background/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary text-center"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="relative">
          <Icon className="w-8 h-8 group-hover:text-primary-glow transition-colors mx-auto" />
          {status && (
            <div className={`absolute -top-1 -right-1 status-dot status-${status}`} />
          )}
        </div>
        
        <div className="flex-1 text-center">
          <div className="font-semibold text-lg">{label}</div>
          {description && (
            <div className="text-muted-foreground text-sm">{description}</div>
          )}
          {lastSeen && (
            <div className="text-xs text-muted-foreground mt-1">
              Last seen: {lastSeen}
            </div>
          )}
        </div>
      </a>
    </Button>
  );
};

export default SocialLink;