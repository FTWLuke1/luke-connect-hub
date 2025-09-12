import { User, Music } from "lucide-react";
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
        <div className="w-32 h-32 mx-auto rounded-full glass border-2 border-primary/30 p-2 animate-pulse-glow">
          <img 
            src={profileAvatar}
            alt="Luke_NKY Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2">
          <Button
            onClick={onPlayAudio}
            size="sm"
            className="btn-neon rounded-full w-12 h-12 p-0"
            disabled={isAudioPlaying}
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
          Gaming & Development Hub
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;