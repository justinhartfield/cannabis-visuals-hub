
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageCard from "@/components/ui/ImageCard";
import Chip from "@/components/ui/Chip";
import { Link } from "react-router-dom";
import { Category } from "@/types/imageTypes";

// Sample data - in a real app, this would come from an API
const categories = [
  "All", 
  "Cannabis Strain Images", 
  "Cultivation Techniques", 
  "Dispensaries & Retailers", 
  "Extraction & Lab Testing", 
  "Infographics and Educational Graphics", 
  "Cannabis Products"
];

const sampleImages = [
  {
    id: "img001",
    src: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?q=80&w=500&auto=format&fit=crop",
    title: "Purple Haze Flower",
    category: "Cannabis Strain Images" as Category,
    isPremium: false,
  },
  {
    id: "img002",
    src: "https://images.unsplash.com/photo-1604907330125-0e0398ea1518?q=80&w=500&auto=format&fit=crop",
    title: "CBD Oil Extraction",
    category: "Cannabis Products" as Category,
    isPremium: true,
  },
  {
    id: "img003",
    src: "https://images.unsplash.com/photo-1570439481373-9a545903bf17?q=80&w=500&auto=format&fit=crop",
    title: "Cannabis Farm",
    category: "Cultivation Techniques" as Category,
    isPremium: false,
  },
  {
    id: "img004",
    src: "https://images.unsplash.com/photo-1584283604830-c1bb3b44d444?q=80&w=500&auto=format&fit=crop",
    title: "Sativa Leaves",
    category: "Cannabis Strain Images" as Category,
    isPremium: false,
  },
  {
    id: "img005",
    src: "https://images.unsplash.com/photo-1585063560265-30bceaa9f958?q=80&w=500&auto=format&fit=crop",
    title: "Lab Testing Process",
    category: "Extraction & Lab Testing" as Category,
    isPremium: true,
    isBlurred: true,
  },
  {
    id: "img006",
    src: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=500&auto=format&fit=crop",
    title: "Dispensary Interior",
    category: "Dispensaries & Retailers" as Category,
    isPremium: false,
  },
  {
    id: "img007",
    src: "https://images.unsplash.com/photo-1580127503396-d00a6bc7d868?q=80&w=500&auto=format&fit=crop",
    title: "Medical Cannabis",
    category: "Infographics and Educational Graphics" as Category,
    isPremium: true,
  },
  {
    id: "img008",
    src: "https://images.unsplash.com/photo-1589484152027-4ae5ed303e8b?q=80&w=500&auto=format&fit=crop",
    title: "Regulatory Compliance",
    category: "Infographics and Educational Graphics" as Category,
    isPremium: false,
  },
];

const FeaturedImages = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const [filteredImages, setFilteredImages] = useState(sampleImages);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredImages(sampleImages);
    } else {
      setFilteredImages(sampleImages.filter(img => img.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Featured Images</h2>
            <p className="text-white/70 max-w-2xl">
              Explore our curated collection of high-quality cannabis imagery. From strain close-ups to cultivation processes, 
              find the perfect visual assets for your projects.
            </p>
          </div>
          <Link to="/gallery" className="mt-4 md:mt-0">
            <Button variant="link" className="text-cannabis-400 hover:text-cannabis-300 p-0">
              View all images
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="mb-8 overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 pb-2">
            {categories.map(category => (
              <Chip
                key={category}
                variant={activeCategory === category ? "primary" : "outline"}
                onClick={() => setActiveCategory(category as "All" | Category)}
                className="cursor-pointer"
              >
                {category}
              </Chip>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map(image => (
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

        {filteredImages.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-white/60">No images found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedImages;
