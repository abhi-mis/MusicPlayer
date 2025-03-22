import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search for songs..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-3 pl-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
    </div>
  );
};

export default SearchBar;