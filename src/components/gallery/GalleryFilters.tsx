
import React from "react";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal, Grid3X3, Grid2X2 } from "lucide-react";
import Chip from "@/components/ui/Chip";
import { Category } from "@/types/imageTypes";

interface GalleryFiltersProps {
  categories: string[];
  activeCategory: "All" | Category;
  onCategoryChange: (category: "All" | Category) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  gridView: "default" | "large";
  setGridView: (view: "default" | "large") => void;
  onClearFilters: () => void;
}

const GalleryFilters = ({
  categories,
  activeCategory,
  onCategoryChange,
  showFilters,
  setShowFilters,
  gridView,
  setGridView,
  onClearFilters
}: GalleryFiltersProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full">
          {categories.map(category => (
            <Chip
              key={category}
              variant={activeCategory === category ? "primary" : "outline"}
              onClick={() => onCategoryChange(category as "All" | Category)}
            >
              {category}
            </Chip>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 text-white/70 hover:bg-white/10"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} className="mr-2" />
            Filters
          </Button>
          
          <div className="flex border border-white/20 rounded-md overflow-hidden">
            <button
              className={`p-2 ${gridView === "default" ? "bg-white/10 text-white" : "bg-transparent text-white/50"}`}
              onClick={() => setGridView("default")}
              aria-label="Default grid view"
            >
              <Grid3X3 size={16} />
            </button>
            <button
              className={`p-2 ${gridView === "large" ? "bg-white/10 text-white" : "bg-transparent text-white/50"}`}
              onClick={() => setGridView("large")}
              aria-label="Large grid view"
            >
              <Grid2X2 size={16} />
            </button>
          </div>
        </div>
      </div>
      
      {showFilters && (
        <div className="mb-8 glass p-4 rounded-lg animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-medium">Advanced Filters</h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white"
              onClick={onClearFilters}
            >
              <SlidersHorizontal size={16} className="mr-2" />
              Clear All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-white/70 text-sm mb-2">Content Type</label>
              <select className="w-full bg-secondary/50 border border-white/10 rounded-md p-2 text-white">
                <option>All Types</option>
                <option>Photographs</option>
                <option>Illustrations</option>
                <option>Vector Graphics</option>
              </select>
            </div>
            
            <div>
              <label className="block text-white/70 text-sm mb-2">License Type</label>
              <select className="w-full bg-secondary/50 border border-white/10 rounded-md p-2 text-white">
                <option>All Licenses</option>
                <option>Free</option>
                <option>Premium</option>
                <option>Editorial</option>
              </select>
            </div>
            
            <div>
              <label className="block text-white/70 text-sm mb-2">Sort By</label>
              <select className="w-full bg-secondary/50 border border-white/10 rounded-md p-2 text-white">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Most Popular</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryFilters;
