
import { ImageMetadata, MetadataJson } from "@/types/imageTypes";

export function generateJsonLd(metadata: ImageMetadata): MetadataJson {
  return {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    contentUrl: metadata.contentUrl,
    name: metadata.name,
    description: metadata.description,
    keywords: metadata.keywords,
    license: typeof metadata.license === 'string'
      ? metadata.license
      : "https://creativecommons.org/licenses/by-nc/4.0/",
    creator: {
      "@type": "Organization",
      name: metadata.creator?.name || "CannaVisuals",
      url: metadata.creator?.url || "https://cannavisuals.com"
    }
  };
}

export function formatKeywords(keywords: string[]): string {
  return keywords.join(", ");
}

export function getLicenseText(license: string): string {
  switch (license) {
    case 'free':
      return 'Free to use';
    case 'premium':
      return 'Premium license required';
    case 'editorial':
      return 'Editorial use only';
    case 'cc-by':
      return 'Creative Commons Attribution';
    case 'cc-by-nc':
      return 'Creative Commons Attribution-NonCommercial';
    case 'cc-by-sa':
      return 'Creative Commons Attribution-ShareAlike';
    case 'cc-by-nd':
      return 'Creative Commons Attribution-NoDerivs';
    default:
      return license;
  }
}
