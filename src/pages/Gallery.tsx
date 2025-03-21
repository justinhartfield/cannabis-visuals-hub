import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Category } from "@/types/imageTypes";
import GalleryHeader from "@/components/gallery/GalleryHeader";
import GalleryFilters from "@/components/gallery/GalleryFilters";
import GalleryGrid from "@/components/gallery/GalleryGrid";

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

// Extended sample images for gallery page
const galleryImages = [
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
    category: "Medical" as Category,
    isPremium: true,
  },
  {
    id: "img008",
    src: "https://images.unsplash.com/photo-1589484152027-4ae5ed303e8b?q=80&w=500&auto=format&fit=crop",
    title: "Regulatory Compliance",
    category: "Legal" as Category,
    isPremium: false,
  },
  {
    id: "img009",
    src: "https://images.unsplash.com/photo-1590134272249-a0ad2f89bab3?q=80&w=500&auto=format&fit=crop",
    title: "Cannabis Buds Close-up",
    category: "Cannabis Strain Images" as Category,
    isPremium: true,
  },
  {
    id: "img010",
    src: "https://images.unsplash.com/photo-1579154673002-bde977fd0e1c?q=80&w=500&auto=format&fit=crop",
    title: "Hydroponic Growing",
    category: "Cultivation Techniques" as Category,
    isPremium: false,
  },
  {
    id: "img011",
    src: "https://images.unsplash.com/photo-1595159602547-3709fea2ad53?q=80&w=500&auto=format&fit=crop",
    title: "CBD Tinctures",
    category: "Cannabis Products" as Category,
    isPremium: true,
    isBlurred: true,
  },
  {
    id: "img012",
    src: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=500&auto=format&fit=crop",
    title: "Cannabis Retail Store",
    category: "Dispensaries & Retailers" as Category,
    isPremium: false,
  },
  {
    id: "img013",
    src: "https://images.unsplash.com/photo-1632215863129-8bddea0c5f5f?q=80&w=500&auto=format&fit=crop",
    title: "Cannabis Laboratory",
    category: "Extraction & Lab Testing" as Category,
    isPremium: true,
  },
  {
    id: "img014",
    src: "https://images.unsplash.com/photo-1630146706550-1087696a0be7?q=80&w=500&auto=format&fit=crop",
    title: "Medical Cannabis Patient",
    category: "Medical" as Category,
    isPremium: false,
  },
  {
    id: "img015",
    src: "https://images.unsplash.com/photo-1638865105789-9a267c03257c?q=80&w=500&auto=format&fit=crop",
    title: "Cannabis Licenses",
    category: "Legal" as Category,
    isPremium: true,
    isBlurred: true,
  },
  {
    id: "img016",
    src: "https://images.unsplash.com/photo-1628942113083-cb8951cf1c30?q=80&w=500&auto=format&fit=crop",
    title: "OG Kush",
    category: "Cannabis Strain Images" as Category,
    isPremium: false,
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [gridView, setGridView] = useState<"default" | "large">("default");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterImages(term, activeCategory);
  };

  const handleCategoryChange = (category: "All" | Category) => {
    setActiveCategory(category);
    filterImages(searchTerm, category);
  };

  const filterImages = (term: string, category: "All" | Category) => {
    let filtered = galleryImages;
    
    if (term) {
      const lowercaseTerm = term.toLowerCase();
      filtered = filtered.filter(img => 
        img.title.toLowerCase().includes(lowercaseTerm) || 
        String(img.category).toLowerCase().includes(lowercaseTerm)
      );
    }
    
    if (category !== "All") {
      filtered = filtered.filter(img => img.category === category);
    }
    
    setFilteredImages(filtered);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setActiveCategory("All");
    setFilteredImages(galleryImages);
  };

  const handleLoadMore = () => {
    console.log("Load more images");
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
            <GalleryHeader onSearch={handleSearch} />
            
            <GalleryFilters 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              gridView={gridView}
              setGridView={setGridView}
              onClearFilters={handleResetFilters}
            />
            
            <GalleryGrid 
              images={filteredImages}
              gridView={gridView}
              onResetFilters={handleResetFilters}
              onLoadMore={handleLoadMore}
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Gallery;
