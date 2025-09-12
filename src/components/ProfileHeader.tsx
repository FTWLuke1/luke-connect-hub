import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileAvatar from "@/assets/profile-avatar.jpg";

interface ProfileHeaderProps {
  onPlayAudio: () => void;
  isAudioPlaying: boolean;
}

const ProfileHeader = ({ onPlayAudio, isAudioPlaying }: ProfileHeaderProps) => {

  return (
    <div className="text-center space-y-6 animate-float">
      <div className="relative">
        <div className="w-32 h-32 mx-auto rounded-full glass border-2 border-primary/30 p-2 animate-pulse-glow overflow-hidden">
          <img 
            src={profileAvatar}
            alt="Luke_NKY profile avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2">
          <Button
            onClick={onPlayAudio}
            size="sm"
            variant="outline"
            className="rounded-full w-12 h-12 p-0 border-primary/30 bg-background/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary"
            disabled={isAudioPlaying}
            aria-label="Play intro audio"
          >
            <Music className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div>
        <h1 className="text-5xl font-bold neon-text bg-gradient-primary bg-clip-text text-transparent">
          Luke_NKY
        </h1>
        <p className="text-muted-foreground text-lg mt-2">
          Check out my socials
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;