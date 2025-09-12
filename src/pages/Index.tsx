import { useState } from "react";
import { 
  MessageCircle, 
  Github, 
  Mail, 
  Store, 
  Globe, 
  Gamepad2,
  Zap
} from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import SocialLink from "@/components/SocialLink";
import BackgroundVideo from "@/components/BackgroundVideo";
import AudioIntro from "@/components/AudioIntro";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const { hasAudio, playAudio } = AudioIntro();
  const { toast } = useToast();

  const handlePlayAudio = () => {
    if (hasAudio) {
      const played = playAudio();
      if (played) {
        setIsAudioPlaying(true);
        toast({
          title: "Playing intro audio",
          description: "Welcome to Luke_NKY's profile!",
        });
        setTimeout(() => setIsAudioPlaying(false), 3000);
      }
    } else {
      toast({
        title: "No intro audio found",
        description: "Drop an MP3 file named 'intro.mp3' in the public/media folder",
        variant: "destructive"
      });
    }
  };

  const socialLinks = [
    {
      icon: MessageCircle,
      label: "Discord",
      url: "https://discord.com/users/luke_nky",
      description: "Gaming & Development",
      status: "online" as const,
      lastSeen: "2 minutes ago",
      gradient: "primary" as const
    },
    {
      icon: Gamepad2,
      label: "Steam",
      url: "https://steamcommunity.com/id/luke_nky",
      description: "Gaming Profile",
      status: "away" as const,
      lastSeen: "1 hour ago",
      gradient: "secondary" as const
    },
    {
      icon: Zap,
      label: "Epic Games",
      url: "https://epicgames.com",
      description: "Epic Games Profile",
      gradient: "accent" as const
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/luke_nky",
      description: "Code Repository",
      gradient: "primary" as const
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:luke@luke-nky.com",
      description: "Get in touch",
      gradient: "secondary" as const
    },
    {
      icon: Store,
      label: "D1 Store",
      url: "https://d1store.com",
      description: "My Store",
      gradient: "accent" as const
    },
    {
      icon: Globe,
      label: "infiltra.xyz",
      url: "https://infiltra.xyz",
      description: "Web Platform",
      gradient: "primary" as const
    }
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundVideo />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto space-y-12">
          <ProfileHeader 
            onPlayAudio={handlePlayAudio}
            isAudioPlaying={isAudioPlaying}
          />
          
          <div className="grid gap-4">
            {socialLinks.map((link, index) => (
              <div
                key={link.label}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SocialLink {...link} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Built with ❤️ by Luke_NKY
            </p>
          </div>
        </div>
      </div>
      
      {!hasAudio && (
        <div className="fixed bottom-4 left-4 glass p-4 rounded-lg max-w-sm z-10">
          <p className="text-xs text-muted-foreground">
            💡 Drop an MP3 file named "intro.mp3" in the public/media folder for audio intro
          </p>
        </div>
      )}
    </div>
  );
};

export default Index;