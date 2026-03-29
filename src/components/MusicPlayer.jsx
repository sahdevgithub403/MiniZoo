import React, { useRef, useEffect } from 'react';
import { Music, Music2 } from 'lucide-react';

const MusicPlayer = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  
  const src = currentSong || "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3";

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, src]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop />
      <div className="controls-container">
        <button 
          className="control-btn" 
          onClick={toggleMusic} 
          title="Toggle Emotion Ambience"
          style={{ 
            background: isPlaying ? 'var(--primary-accent)' : 'var(--card-bg)', 
            color: isPlaying ? '#fff' : 'var(--primary-accent)',
          }}
        >
          {isPlaying ? <Music size={16} /> : <Music2 size={16} />}
        </button>
      </div>
    </>
  );
};

export default MusicPlayer;
