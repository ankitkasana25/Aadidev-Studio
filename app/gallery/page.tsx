"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
// Note: Metadata export doesn't work in client components
// Consider moving metadata to a layout or making this a server component wrapper

const galleryImages = [
  { id: 1, src: "/marble-temple-completed.jpg", alt: "Completed Marble Temple", category: "Temples" },
  { id: 2, src: "/marble-idol-carving.jpg", alt: "Marble Idol Carving", category: "Statues" },
  { id: 3, src: "/marble-sculpture-art.jpg", alt: "Marble Sculpture Art", category: "Sculptures" },
  { id: 4, src: "/marble-temple-architecture.jpg", alt: "Marble Temple Architecture", category: "Temples" },
  { id: 5, src: "/marble-relief-carving.jpg", alt: "Marble Relief Carving", category: "Carving" },
  { id: 6, src: "/marble-deity-statue.jpg", alt: "Marble Deity Statue", category: "Statues" },
  { id: 7, src: "/marble-ganesha-sculpture.jpg", alt: "Marble Ganesha Sculpture", category: "Statues" },
  { id: 8, src: "/marble-krishna-temple.jpg", alt: "Marble Krishna Temple", category: "Temples" },
  { id: 9, src: "/marble-ram-mandir-temple.jpg", alt: "Marble Ram Mandir Temple", category: "Temples" },
  { id: 10, src: "/marble-nandi-bull.jpg", alt: "Marble Nandi Bull", category: "Statues" },
  { id: 11, src: "/marble-goddess-durga-idol.jpg", alt: "Marble Goddess Durga Idol", category: "Statues" },
  { id: 12, src: "/marble-countertops.jpg", alt: "Marble Countertops", category: "Surfaces" },
  { id: 13, src: "/marble-flooring.jpg", alt: "Marble Flooring", category: "Flooring" },
  { id: 14, src: "/marble-wall-cladding.jpg", alt: "Marble Wall Cladding", category: "Cladding" },
  { id: 15, src: "/marble-garden-ornaments.jpg", alt: "Marble Garden Ornaments", category: "Garden" },
  { id: 16, src: "/marble-handicraft-items.jpg", alt: "Marble Handicraft Items", category: "Handicrafts" },
  { id: 17, src: "/indoor-marble-temple.jpg", alt: "Indoor Marble Temple", category: "Temples" },
  { id: 18, src: "/outdoor-marble-temple.jpg", alt: "Outdoor Marble Temple", category: "Temples" },
  { id: 19, src: "/white-marble-lord-shiva-idol.jpg", alt: "White Marble Lord Shiva Idol", category: "Statues" },
  { id: 20, src: "/white-marble-sculpture.jpg", alt: "White Marble Sculpture", category: "Sculptures" },
];

const categories = ["All", "Temples", "Statues", "Sculptures", "Carving", "Surfaces", "Flooring", "Cladding", "Garden", "Handicrafts"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our full collection of premium marble and stone work. Each piece showcases our commitment to excellence and craftsmanship.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedImage(null);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-80 hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">
                  🔍
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">{image.alt}</p>
                <p className="text-white/80 text-xs">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/70">No images found in this category.</p>
          </div>
        )}

        {/* Image Count */}
        <div className="mt-12 text-center">
          <p className="text-foreground/60">
            Showing {filteredImages.length} {filteredImages.length === 1 ? "image" : "images"} 
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 hover:bg-white/10 rounded-lg transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <div className="relative max-w-6xl w-full flex items-center justify-between gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="text-white hover:text-gray-300 p-3 hover:bg-white/10 rounded-lg transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>

            <div className="flex-1 flex items-center justify-center">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
                priority
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="text-white hover:text-gray-300 p-3 hover:bg-white/10 rounded-lg transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            {selectedImage + 1} / {filteredImages.length} - {filteredImages[selectedImage].alt}
          </div>
        </div>
      )}
    </main>
  );
}
