import { Music, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileAvatar from "@/assets/profile-avatar.jpg";
import { useEffect, useRef, useState } from "react";

interface ProfileHeaderProps {
  onPlayAudio: () => void;
  isAudioPlaying: boolean;
}

const ProfileHeader = ({ onPlayAudio, isAudioPlaying }: ProfileHeaderProps) => {
  const [avatarSrc, setAvatarSrc] = useState<string>(profileAvatar);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("profile-avatar-src");
    if (saved) setAvatarSrc(saved);
  }, []);

  const onSelectAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result);
      setAvatarSrc(dataUrl);
      localStorage.setItem("profile-avatar-src", dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const openFilePicker = () => fileInputRef.current?.click();

  return (
    <div className="text-center space-y-6 animate-float">
      <div className="relative">
        <div className="w-32 h-32 mx-auto rounded-full glass border-2 border-primary/30 p-2 animate-pulse-glow overflow-hidden">
          <img 
            src={avatarSrc}
            alt="Luke_NKY profile avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 flex gap-2">
          <Button
            onClick={onPlayAudio}
            size="sm"
            className="btn-neon rounded-full w-12 h-12 p-0"
            disabled={isAudioPlaying}
            aria-label="Play intro audio"
          >
            <Music className="w-5 h-5" />
          </Button>
          <Button
            onClick={openFilePicker}
            size="sm"
            className="btn-glass rounded-full w-12 h-12 p-0"
            aria-label="Upload profile photo"
          >
            <Camera className="w-5 h-5" />
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onSelectAvatar}
            className="hidden"
            aria-hidden="true"
          />
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