
import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (term: string) => void;
  className?: string;
}

const SearchBar = ({
  placeholder = "Search...",
  onSearch,
  className,
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        "relative w-full max-w-xl mx-auto transition-all duration-300",
        className
      )}
    >
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full h-12 pl-12 pr-4 rounded-full bg-secondary/50 border border-white/10 backdrop-blur-sm text-white 
                   placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cannabis-500/50 
                   transition-all duration-300"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Search size={18} />
        </div>
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-cannabis-600 hover:bg-cannabis-700 text-white 
                   rounded-full h-8 px-4 text-sm font-medium transition-colors duration-200"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
