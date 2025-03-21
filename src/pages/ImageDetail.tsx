
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Download, Share2, Lock, Info } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Chip from "@/components/ui/Chip";
import StructuredData from "@/components/ui/StructuredData";
import { sampleImages } from "@/data/sampleImages";
import { ImageMetadata } from "@/types/imageTypes";
import { formatKeywords, getLicenseText } from "@/utils/metadataUtils";

const ImageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [image, setImage] = useState<ImageMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundImage = sampleImages.find(img => img.id === id);
    setImage(foundImage || null);
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!image) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <h1 className="text-3xl font-bold text-white mb-4">Image Not Found</h1>
              <p className="text-white/70 mb-8">The image you're looking for doesn't exist or has been removed.</p>
              <Link to="/gallery">
                <Button>
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Gallery
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{image.name} | CannaVisuals</title>
        <meta name="description" content={image.description} />
        <meta name="keywords" content={formatKeywords(image.keywords)} />
      </Helmet>
      
      {/* Add structured data for SEO */}
      <StructuredData metadata={image} />
      
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/gallery" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Gallery
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="glass rounded-lg overflow-hidden">
                {image.isPremium && image.isBlurred ? (
                  <div className="relative">
                    <img 
                      src={image.contentUrl} 
                      alt={image.name}
                      className="w-full blur-md"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
                      <Lock className="w-12 h-12 mb-4 text-cannabis-400" />
                      <h3 className="text-xl font-medium text-white mb-2">Premium Content</h3>
                      <p className="text-white/70 max-w-md text-center mb-4">
                        This high-quality image is available exclusively to premium subscribers.
                      </p>
                      <Button>Upgrade to Premium</Button>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={image.contentUrl} 
                    alt={image.name}
                    className="w-full"
                  />
                )}
              </div>
              
              <div className="flex justify-between mt-4">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download size={16} className="mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 size={16} className="mr-2" />
                    Share
                  </Button>
                </div>
                
                {image.isPremium && (
                  <Chip variant="primary">Premium</Chip>
                )}
              </div>
            </div>
            
            <div>
              <div className="glass p-6 rounded-lg">
                <h1 className="text-2xl font-bold text-white mb-4">{image.name}</h1>
                <p className="text-white/70 mb-6">{image.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-white/70 mb-1">Category</h3>
                    <div className="flex flex-wrap gap-2">
                      <Chip>{image.category}</Chip>
                      <Chip variant="outline">{image.subcategory}</Chip>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-white/70 mb-1">Keywords</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {image.keywords.map((keyword, index) => (
                        <Chip key={index} size="sm" variant="outline">{keyword}</Chip>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <h3 className="text-sm font-medium text-white/70 mb-1">License</h3>
                    <p className="text-white">{getLicenseText(image.license)}</p>
                  </div>
                  
                  {image.creator && (
                    <div>
                      <h3 className="text-sm font-medium text-white/70 mb-1">Creator</h3>
                      <p className="text-white">{image.creator.name}</p>
                      {image.creator.url && (
                        <a href={image.creator.url} className="text-cannabis-400 text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                          Visit creator website
                        </a>
                      )}
                    </div>
                  )}
                  
                  <div className="border-t border-white/10 pt-4">
                    <h3 className="text-sm font-medium text-white/70 mb-2">Image ID</h3>
                    <code className="bg-secondary/50 px-2 py-1 rounded text-sm text-white/90">{image.id}</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ImageDetail;
