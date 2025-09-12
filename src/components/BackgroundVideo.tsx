import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackgroundVideo = () => {
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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
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
      >
        <source src="/media/background.mp4" type="video/mp4" />
      </video>
      
      <div className="fixed inset-0 bg-background/70 -z-10" />
      
      <div className="fixed bottom-4 right-4 flex space-x-2 z-10">
        <Button
          onClick={togglePlay}
          size="sm"
          className="btn-glass w-10 h-10 p-0"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </Button>
        
        <Button
          onClick={toggleMute}
          size="sm"
          className="btn-glass w-10 h-10 p-0"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </Button>
      </div>
    </>
  );
};

export default BackgroundVideo;