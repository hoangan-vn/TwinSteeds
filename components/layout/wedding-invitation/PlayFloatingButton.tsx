'use client';

import React, { useRef, useState } from 'react';

// Đường dẫn file mp3 mẫu, có thể thay đổi nếu cần
const AUDIO_SRC = '/audio/abcadfs.mp3';

const PlayFloatingButton: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  // Đảm bảo cập nhật trạng thái khi nhạc kết thúc
  const handleEnded = () => {
    setPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} onEnded={handleEnded} />
      <button
        onClick={togglePlay}
        className='fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-full p-4 flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200'
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? (
          // Pause SVG
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='6' y='5' width='4' height='14' rx='1' fill='currentColor' />
            <rect x='14' y='5' width='4' height='14' rx='1' fill='currentColor' />
          </svg>
        ) : (
          // Play SVG
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <polygon points='6,4 20,12 6,20' fill='currentColor' />
          </svg>
        )}
      </button>
    </>
  );
};

export default PlayFloatingButton;
