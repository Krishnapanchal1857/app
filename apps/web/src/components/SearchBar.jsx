import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, placeholder = "Search resources..." }) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 text-foreground"
      />
    </div>
  );
};

export default SearchBar;
