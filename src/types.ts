export interface Track {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  videoId: string;
}

export interface SearchResponse {
  tracks: Track[];
  loading: boolean;
  error: string | null;
}

export interface YouTubeSearchResult {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}