import axios from 'axios';
import { Track, YouTubeSearchResult } from '../types';

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

if (!YOUTUBE_API_KEY) {
  console.error('❌ Missing YouTube API Key! Add it to your .env file.');
}

export const searchTracks = async (query: string): Promise<Track[]> => {
  try {
    const { data } = await axios.get<{ items: YouTubeSearchResult[] }>(YOUTUBE_API_URL, {
      params: {
        part: 'snippet',
        maxResults: 9,
        q: `${query} music`,
        type: 'video',
        videoCategoryId: '10', // Music category
        key: YOUTUBE_API_KEY,
      },
    });

    return data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      artist: item.snippet.channelTitle,
      artwork: item.snippet.thumbnails.high.url,
      videoId: item.id.videoId,
    }));
  } catch (error) {
    console.error('❌ Error fetching tracks:', error);
    return [];
  }
};
