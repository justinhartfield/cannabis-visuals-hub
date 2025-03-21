
import React from "react";
import { ImageMetadata, MetadataJson } from "@/types/imageTypes";

interface StructuredDataProps {
  metadata: ImageMetadata;
}

const StructuredData = ({ metadata }: StructuredDataProps) => {
  const jsonLd: MetadataJson = {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;
