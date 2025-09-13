import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackgroundVideoProps {
  onGlobalPause?: () => void;
  autoPlay?: boolean;
}

const BackgroundVideo = ({ onGlobalPause, autoPlay = true }: BackgroundVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    // Check if video exists in public/media folder
    const checkVideo = async () => {
      try {
        const response = await fetch('/media/background.mp4');
        if (response.ok) {
          setHasVideo(true);
        }
      } catch (error) {
        console.log('No background video found');
      }
    };
    checkVideo();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (hasVideo && v && autoPlay) {
      const playPromise = v.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    }
  }, [hasVideo, autoPlay]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      onGlobalPause?.();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
    // Pause audio as requested when interacting with the mute button
    onGlobalPause?.();
  };

  if (!hasVideo) {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background-secondary to-background">
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="absolute top-4 right-4 glass p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Drop a video file named "background.mp4" in the public/media folder
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        onError={() => setHasVideo(false)}
      >
        <source src="/media/background.mp4" type="video/mp4" />
      </video>
      
      <div className="fixed inset-0 bg-background/55 -z-10" />
    </>
  );
};

export default BackgroundVideo;