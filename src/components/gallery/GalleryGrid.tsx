
import React from "react";
import ImageCard from "@/components/ui/ImageCard";
import { Button } from "@/components/ui/button";
import { Category } from "@/types/imageTypes";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: Category;
  isPremium: boolean;
  isBlurred?: boolean;
}

interface GalleryGridProps {
  images: GalleryImage[];
  gridView: "default" | "large";
  onResetFilters: () => void;
  onLoadMore?: () => void;
}

const GalleryGrid = ({ images, gridView, onResetFilters, onLoadMore }: GalleryGridProps) => {
  return (
    <>
      <div className={`grid gap-6 ${
        gridView === "default" 
          ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      }`}>
        {images.map(image => (
          <ImageCard
            key={image.id}
            id={image.id}
            src={image.src}
            name={image.title}
            category={image.category}
            isPremium={image.isPremium}
            isBlurred={image.isBlurred}
            // These properties are now optional in ImageCardProps, 
            // so we don't need to provide them explicitly
          />
        ))}
      </div>
      
      {images.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-white/70 mb-4">No images found matching your search criteria.</p>
          <Button 
            variant="outline"
            onClick={onResetFilters}
          >
            Clear Filters
          </Button>
        </div>
      )}
      
      {images.length > 0 && onLoadMore && (
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10"
            onClick={onLoadMore}
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
