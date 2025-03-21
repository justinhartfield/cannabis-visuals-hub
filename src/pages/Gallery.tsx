
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchBar from "@/components/ui/SearchBar";
import ImageCard from "@/components/ui/ImageCard";
import Chip from "@/components/ui/Chip";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal, Grid3X3, Grid2X2 } from "lucide-react";

// Sample data - in a real app, this would come from an API
const categories = [
  "All", "Strains", "Products", "Cultivation", "Medical", "Lifestyle", "Science", "Legal"
];

// Extended sample images for gallery page
const galleryImages = [
  {
    id: "img001",
    src: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?q=80&w=500&auto=format&fit=crop",
    title: "Purple Haze Flower",
    category: "Strains",
    isPremium: false,
  },
  {
    id: "img002",
    src: "https://images.unsplash.com/photo-1604907330125-0e0398ea1518?q=80&w=500&auto=format&fit=crop",
    title: "CBD Oil Extraction",
    category: "Products",
    isPremium: true,
  },
  {
    id: "img003",
    src: "https://images.unsplash.com/photo-1570439481373-9a545903bf17?q=80&w=500&auto=format&fit=crop",
    title: "Cannabis Farm",
    category: "Cultivation",
    isPremium: false,
  },
  {
    id: "img004",
    src: "https://images.unsplash.com/photo-1584283604830-c1bb3b44d444?q=80&w=500&auto=format&fit=crop",
    title: "Sativa Leaves",
    category: "Strains",
    isPremium: false,
  },
  {
    id: "img005",
    src: "https://images.unsplash.com/photo-1585063560265-30bceaa9f958?q=80&w=500&auto=format&fit=crop",
    title: "Lab Testing Process",
    category: "Science",
    isPremium: true,
    isBlurred: true,
  },
  {
    id: "img006",
    src: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=500&auto=format&fit=crop",
    title: "Dispensary Interior",
    category: "Lifestyle",
    isPremium: false,
  },
  {
    id: "img007",
    src: "https://images.unsplash.com/photo-1580127503396-d00a6bc7d868?q=80&w=500&auto=format&fit=crop",
    title: "Medical Cannabis",
    category: "Medical",
    isPremium: true,
  },
  {
    id: "img008",
    src: "https://images.unsplash.com/photo-1589484152027-4ae5ed303e8b?q=80&w=500&auto=format&fit=crop",
    title: "Regulatory Compliance",
    category: "Legal",
    isPremium: false,
  },
  {
    id: "img009",
    src: "https://images.unsplash.com/photo-1590134272249-a0ad2f89bab3?q=80&w=500&auto=format&fit=crop",
    title: "Cannabis Buds Close-up",
    category: "Strains",
    isPremium: true,
  },
  {
    id: "img010",
    src: "https://images.unsplash.com/photo-1579154673002-bde977fd0e1c?q=80&w=500&auto=format&fit=crop",
    title: "Hydroponic Growing",
    category: "Cultivation",
    isPremium: false,
  },
  {
    id: "img011",
    src: "https://images.unsplash.com/photo-1595159602547-3709fea2ad53?q=80&w=500&auto=format&fit=crop",
    title: "CBD Tinctures",
    category: "Products",
    isPremium: true,
    isBlurred: true,
  },
  {
    id: "img012",
    src: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=500&auto=format&fit=crop",
    title: "Cannabis Retail Store",
    category: "Lifestyle",
    isPremium: false,
  },
  {
    id: "img013",
    src: "https://images.unsplash.com/photo-1632215863129-8bddea0c5f5f?q=80&w=500&auto=format&fit=crop",
    title: "Cannabis Laboratory",
    category: "Science",
    isPremium: true,
  },
  {
    id: "img014",
    src: "https://images.unsplash.com/photo-1630146706550-1087696a0be7?q=80&w=500&auto=format&fit=crop",
    title: "Medical Cannabis Patient",
    category: "Medical",
    isPremium: false,
  },
  {
    id: "img015",
    src: "https://images.unsplash.com/photo-1638865105789-9a267c03257c?q=80&w=500&auto=format&fit=crop",
    title: "Cannabis Licenses",
    category: "Legal",
    isPremium: true,
    isBlurred: true,
  },
  {
    id: "img016",
    src: "https://images.unsplash.com/photo-1628942113083-cb8951cf1c30?q=80&w=500&auto=format&fit=crop",
    title: "OG Kush",
    category: "Strains",
    isPremium: false,
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [gridView, setGridView] = useState<"default" | "large">("default");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterImages(term, activeCategory);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    filterImages(searchTerm, category);
  };

  const filterImages = (term: string, category: string) => {
    let filtered = galleryImages;
    
    if (term) {
      const lowercaseTerm = term.toLowerCase();
      filtered = filtered.filter(img => 
        img.title.toLowerCase().includes(lowercaseTerm) || 
        img.category.toLowerCase().includes(lowercaseTerm)
      );
    }
    
    if (category !== "All") {
      filtered = filtered.filter(img => img.category === category);
    }
    
    setFilteredImages(filtered);
  };

  return (
    <>
      <Helmet>
        <title>Gallery | CannaVisuals - Premium Cannabis Image Repository</title>
        <meta name="description" content="Browse our extensive library of high-quality cannabis images. Filter by category, search, and download the perfect visuals for your projects." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl font-bold text-white mb-4">Cannabis Image Gallery</h1>
              <p className="text-white/70">
                Browse our extensive collection of high-quality cannabis imagery. Search, filter, and download 
                the perfect visuals for your projects.
              </p>
            </div>
            
            <div className="mb-8">
              <SearchBar 
                placeholder="Search by name, strain, or category..."
                onSearch={handleSearch}
              />
            </div>
            
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full">
                {categories.map(category => (
                  <Chip
                    key={category}
                    variant={activeCategory === category ? "primary" : "outline"}
                    onClick={() => handleCategoryChange(category)}
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
            
            <div className={`grid gap-6 ${
              gridView === "default" 
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}>
              {filteredImages.map(image => (
                <ImageCard
                  key={image.id}
                  id={image.id}
                  src={image.src}
                  title={image.title}
                  category={image.category}
                  isPremium={image.isPremium}
                  isBlurred={image.isBlurred}
                />
              ))}
            </div>
            
            {filteredImages.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-white/70 mb-4">No images found matching your search criteria.</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                    setFilteredImages(galleryImages);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
            
            {filteredImages.length > 0 && (
              <div className="mt-12 text-center">
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Load More
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Gallery;
