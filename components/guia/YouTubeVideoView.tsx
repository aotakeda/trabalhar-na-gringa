'use client';

import { useState } from 'react';
import { PlayCircle } from 'lucide-react';

interface YouTubeVideoViewProps {
  youtubeUrl: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const YouTubeVideoView: React.FC<YouTubeVideoViewProps> = ({
  youtubeUrl,
  className,
  size = 'small',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getVideoId = (url: string) => {
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(youtubeUrl);

  if (!videoId) return <p>Invalid YouTube URL</p>;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const sizeClasses = {
    small: 'w-48 h-28',  
    medium: 'w-80 h-45', 
    large: 'w-full aspect-video',
  };

  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg ${className} ${sizeClasses[size]}`}>
      {!isPlaying ? (
        <div className="relative cursor-pointer">
          <img
            src={thumbnailUrl}
            alt="YouTube Video Preview"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
            aria-label="Play Video"
          >
            <PlayCircle className="w-12 h-12 text-white" />
          </button>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};
