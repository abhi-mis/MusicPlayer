import React, { useState, useCallback } from 'react';
import { Music2 } from 'lucide-react';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import MusicPlayer from './components/MusicPlayer';
import { Track } from './types';
import { searchTracks } from './api/youtube';

function App() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setTracks([]);
      return;
    }

    setLoading(true);
    try {
      const results = await searchTracks(query);
      setTracks(results);
    } catch (error) {
      console.error('Error searching tracks:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Music2 size={32} className="text-purple-500" />
          <h1 className="text-3xl font-bold">Melody</h1>
        </div>
        
        <SearchBar onSearch={handleSearch} />
        
        {loading ? (
          <div className="flex justify-center items-center mt-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <TrackList 
            tracks={tracks}
            onTrackSelect={setSelectedTrack}
          />
        )}
      </div>
      
      <MusicPlayer track={selectedTrack} />
    </div>
  );
}

export default App;