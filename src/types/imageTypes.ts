
export type License = 'free' | 'premium' | 'editorial' | 'cc-by' | 'cc-by-nc' | 'cc-by-sa' | 'cc-by-nd';

export interface Creator {
  name: string;
  url?: string;
}

export interface ImageMetadata {
  id: string;
  contentUrl: string;
  name: string;
  description: string;
  category: Category;
  subcategory: Subcategory;
  keywords: string[];
  license: License;
  isPremium: boolean;
  isBlurred?: boolean;
  creator?: Creator;
  dateAdded?: string;
  width?: number;
  height?: number;
  fileSize?: string;
  fileFormat?: string;
}

export type Category = 
  | 'Cannabis Strain Images'
  | 'Cultivation Techniques'
  | 'Dispensaries & Retailers'
  | 'Extraction & Lab Testing'
  | 'Infographics and Educational Graphics'
  | 'Cannabis Products';

export type Subcategory = 
  // Cannabis Strain Images subcategories
  | 'Close-up flower photography'
  | 'Macro shots'
  | 'Strain identification visuals'
  
  // Cultivation Techniques subcategories
  | 'Growing setups'
  | 'Equipment visuals'
  | 'Nutrient deficiency/problem identification visuals'
  
  // Dispensaries & Retailers subcategories
  | 'Storefront images'
  | 'Product displays and setups'
  | 'Packaging and branding examples'
  
  // Extraction & Lab Testing subcategories
  | 'Extraction methods'
  | 'Lab testing procedures and reports'
  | 'Equipment visuals (lab)'
  
  // Infographics and Educational Graphics subcategories
  | 'Consumption methods'
  | 'Dosage guidelines'
  | 'Regulatory compliance visuals'
  
  // Cannabis Products subcategories
  | 'Edibles and infused products imagery'
  | 'Packaging and branding examples (products)'
  | 'Consumption device visuals';

export interface CategoryStructure {
  name: Category;
  subcategories: Subcategory[];
}

export interface MetadataJson {
  "@context": string;
  "@type": string;
  contentUrl: string;
  name: string;
  description: string;
  keywords: string[];
  license: string;
  creator: {
    "@type": string;
    name: string;
    url: string;
  };
}
