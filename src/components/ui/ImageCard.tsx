
import { useState } from "react";
import { Download, Info, Lock } from "lucide-react";
import Chip from "./Chip";
import { cn } from "@/lib/utils";
import { ImageMetadata } from "@/types/imageTypes";

interface ImageCardProps extends Omit<ImageMetadata, 'contentUrl'> {
  src: string;
  className?: string;
}

const ImageCard = ({
  id,
  src,
  name,
  category,
  subcategory,
  isPremium = false,
  isBlurred = false,
  className,
}: ImageCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg transition-all duration-300",
        isPremium ? "glass-card-premium" : "glass-card",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden relative">
        {isPremium && isBlurred ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-4 text-center">
            <Lock className="w-8 h-8 mb-2 text-cannabis-400" />
            <p className="text-white font-medium">Premium Content</p>
            <p className="text-sm text-white/70 mt-1">Subscribe to access this image</p>
          </div>
        ) : null}
        
        <img
          src={src}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 scale-105",
            isHovered ? "scale-110" : "scale-105",
            isLoaded ? "opacity-100" : "opacity-0",
            isPremium && isBlurred ? "blur-md" : ""
          )}
          onLoad={() => setIsLoaded(true)}
        />
        
        {!isLoaded && (
          <div className="absolute inset-0 bg-secondary animate-pulse"></div>
        )}
        
        <div className="absolute top-2 left-2 z-10">
          <Chip variant={isPremium ? "primary" : "default"} size="sm">
            {subcategory || category}
          </Chip>
        </div>
        
        {isPremium && !isBlurred && (
          <div className="absolute top-2 right-2 z-10">
            <Chip variant="primary" size="sm">Premium</Chip>
          </div>
        )}
      </div>
      
      <div className="p-3 z-10 relative">
        <h3 className="text-white font-medium truncate">{name}</h3>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-2">
            <button 
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Information"
            >
              <Info size={14} className="text-white/70" />
            </button>
            <button 
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Download"
            >
              <Download size={14} className="text-white/70" />
            </button>
          </div>
          <div className="text-xs text-white/50">ID: {id}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
