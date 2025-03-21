
import React from "react";
import SearchBar from "@/components/ui/SearchBar";

interface GalleryHeaderProps {
  onSearch: (term: string) => void;
}

const GalleryHeader = ({ onSearch }: GalleryHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h1 className="text-3xl font-bold text-white mb-4">Cannabis Image Gallery</h1>
      <p className="text-white/70">
        Browse our extensive collection of high-quality cannabis imagery. Search, filter, and download 
        the perfect visuals for your projects.
      </p>
      
      <div className="mt-8">
        <SearchBar 
          placeholder="Search by name, strain, or category..."
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default GalleryHeader;
