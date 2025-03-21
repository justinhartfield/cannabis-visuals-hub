
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { categoryStructure } from "@/data/categories";
import { Category, Subcategory } from "@/types/imageTypes";
import Chip from "./Chip";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  onCategoryChange: (category: Category | "All") => void;
  onSubcategoryChange: (subcategory: Subcategory | null) => void;
  activeCategory: Category | "All";
  activeSubcategory: Subcategory | null;
}

const CategoryFilter = ({
  onCategoryChange,
  onSubcategoryChange,
  activeCategory,
  activeSubcategory
}: CategoryFilterProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Category[]>([]);

  const toggleCategory = (category: Category) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const isExpanded = (category: Category) => {
    return expandedCategories.includes(category);
  };

  return (
    <div className="glass p-4 rounded-lg">
      <div className="mb-4">
        <h3 className="text-white font-medium mb-2">Categories</h3>
        <Chip
          variant={activeCategory === "All" ? "primary" : "outline"}
          onClick={() => {
            onCategoryChange("All");
            onSubcategoryChange(null);
          }}
          className="cursor-pointer mb-2"
        >
          All Images
        </Chip>
      </div>

      <div className="space-y-2">
        {categoryStructure.map((category) => (
          <div key={category.name} className="text-sm">
            <div 
              className="flex items-center justify-between cursor-pointer hover:bg-white/5 p-2 rounded transition-colors"
              onClick={() => toggleCategory(category.name)}
            >
              <div className="flex items-center">
                {isExpanded(category.name) ? (
                  <ChevronDown size={16} className="text-white/70 mr-2" />
                ) : (
                  <ChevronRight size={16} className="text-white/70 mr-2" />
                )}
                <span 
                  className={cn(
                    "text-white/90 hover:text-white transition-colors",
                    activeCategory === category.name && !activeSubcategory && "text-cannabis-400 font-medium"
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    onCategoryChange(category.name);
                    onSubcategoryChange(null);
                  }}
                >
                  {category.name}
                </span>
              </div>
            </div>

            {isExpanded(category.name) && (
              <div className="ml-6 space-y-1 mt-1">
                {category.subcategories.map((subcategory) => (
                  <div 
                    key={subcategory}
                    className={cn(
                      "p-1.5 rounded hover:bg-white/5 transition-colors cursor-pointer",
                      activeSubcategory === subcategory && "bg-white/5 text-cannabis-400"
                    )}
                    onClick={() => {
                      onCategoryChange(category.name);
                      onSubcategoryChange(subcategory);
                    }}
                  >
                    {subcategory}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
