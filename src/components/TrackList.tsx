import React from 'react';
import { Play, Music } from 'lucide-react';
import { Track } from '../types';

interface TrackListProps {
  tracks: Track[];
  onTrackSelect: (track: Track) => void;
}

const TrackList: React.FC<TrackListProps> = ({ tracks, onTrackSelect }) => {
  if (tracks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 text-white/60">
        <Music size={48} className="mb-4" />
        <p className="text-lg">Search for your favorite music</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {tracks.map((track) => (
        <div
          key={track.id}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group relative overflow-hidden"
          onClick={() => onTrackSelect(track)}
        >
          <div className="relative">
            <img
              src={track.artwork}
              alt={track.title}
              className="w-full aspect-square object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  onTrackSelect(track);
                }}
              >
                <Play fill="white" size={24} className="ml-1" />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-white font-medium truncate text-lg">{track.title}</h3>
            <p className="text-white/60 text-sm truncate mt-1">{track.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;