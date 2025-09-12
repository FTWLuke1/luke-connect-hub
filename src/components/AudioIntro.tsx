import { useEffect, useState } from "react";

const AudioIntro = () => {
  const [hasAudio, setHasAudio] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = new Audio('/media/intro.mp3');
    audioElement.preload = 'auto';
    audioElement.volume = 0.5;

    const onCanPlay = () => setHasAudio(true);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audioElement.addEventListener('canplay', onCanPlay);
    audioElement.addEventListener('play', onPlay);
    audioElement.addEventListener('pause', onPause);
    audioElement.addEventListener('ended', onPause);

    setAudio(audioElement);

    // Try to detect quickly if the file exists
    fetch('/media/intro.mp3')
      .then((res) => {
        if (res.ok) setHasAudio(true);
      })
      .catch(() => {});

    return () => {
      audioElement.removeEventListener('canplay', onCanPlay);
      audioElement.removeEventListener('play', onPlay);
      audioElement.removeEventListener('pause', onPause);
      audioElement.removeEventListener('ended', onPause);
      audioElement.pause();
    };
  }, []);

  const playAudio = async () => {
    if (audio && hasAudio) {
      try {
        await audio.play();
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  };

  const pauseAudio = () => {
    if (audio) {
      audio.pause();
    }
  };

  return { hasAudio, playAudio, pauseAudio, isPlaying };
};

export default AudioIntro;