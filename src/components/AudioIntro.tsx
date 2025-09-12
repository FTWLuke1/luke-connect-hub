import { useEffect, useState } from "react";

const AudioIntro = () => {
  const [hasAudio, setHasAudio] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const checkAudio = async () => {
      try {
        const response = await fetch('/media/intro.mp3');
        if (response.ok) {
          setHasAudio(true);
          const audioElement = new Audio('/media/intro.mp3');
          audioElement.volume = 0.5;
          setAudio(audioElement);
        }
      } catch (error) {
        console.log('No intro audio found');
      }
    };
    
    checkAudio();
  }, []);

  const playAudio = () => {
    if (audio && hasAudio) {
      audio.currentTime = 0;
      audio.play();
      return true;
    }
    return false;
  };

  return { hasAudio, playAudio };
};

export default AudioIntro;