import React from "react";
import { Track } from "../types";
import { Play, Pause, Volume2 } from "lucide-react";

interface MusicPlayerProps {
  track: Track | null;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ track }) => {
  if (!track) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[600px] bg-black/80 backdrop-blur-xl shadow-lg rounded-xl p-4 flex items-center gap-4 border border-white/10">
      {/* Album Art */}
      <img
        src={track.artwork}
        alt={track.title}
        className="w-16 h-16 rounded-lg object-cover shadow-md"
      />

      {/* Song Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-semibold truncate text-lg">{track.title}</h3>
        <p className="text-white/60 text-sm truncate">{track.artist}</p>
      </div>

      {/* Audio Player */}
      <div className="flex items-center gap-3">
        <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
          <Play size={20} />
        </button>
        <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
          <Pause size={20} />
        </button>
        <Volume2 className="text-white" size={20} />
      </div>

      {/* YouTube Iframe */}
      <iframe
        width="0"
        height="0"
        src={`https://www.youtube.com/embed/${track.videoId}?autoplay=1`}
        allow="autoplay"
        className="hidden"
      />
    </div>
  );
};

export default MusicPlayer;
