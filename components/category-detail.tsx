"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Grid3x3 } from "lucide-react";

interface CategoryDetailProps {
  categoryId: string;
  categoryName: string;
}

const CategoryDetail = ({ categoryId, categoryName }: CategoryDetailProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categoryImages: Record<string, string[]> = {
    "outdoor-temples": [
      "/outdoor-marble-temple.jpg",
      "/marble-temple-completed.jpg",
      "/marble-temple-architecture.jpg",
      "/marble-temple-design.jpg",
      "/ornate-marble-temple-with-gold-accents-and-spiritu.jpg",
      "/white-marble-temple-architecture-with-intricate-ca.jpg",
    ],
    "indoor-temples": [
      "/indoor-marble-temple.jpg",
      "/indoor-marble-temple-with-intricate-carved-details.jpg",
      "/marble-krishna-temple.jpg",
      "/marble-ram-mandir-temple.jpg",
    ],
    "handicraft-items": [
      "/marble-handicraft-items.jpg",
      "/marble-handicraft-items-decorative-stone-art-piece.jpg",
      "/marble-custom-stonework.jpg",
    ],
    "tile-crafting": [
      "/marble-tile-crafting.jpg",
      "/marble-flooring-tiles-beautiful-stone-pattern-desi.jpg",
    ],
    "marble-statues": [
      "/marble-deity-statue.jpg",
      "/marble-ganesha-sculpture.jpg",
      "/marble-nandi-bull.jpg",
      "/marble-goddess-durga-idol.jpg",
      "/white-marble-lord-shiva-idol.jpg",
      "/marble-idol-carving.jpg",
      "/marble-sculpture-art.jpg",
      "/white-marble-sculpture.jpg",
    ],
    "garden-ornaments": [
      "/marble-garden-ornaments.jpg",
      "/outdoor-marble-sculpture-garden-ornaments-landscap.jpg",
    ],
    "countertops-surfaces": [
      "/marble-countertops.jpg",
      "/marble-countertops-kitchen-premium-stone-surfaces.jpg",
    ],
    "wall-cladding": [
      "/marble-wall-cladding.jpg",
      "/marble-wall-cladding-luxury-interior-stone-design.jpg",
    ],
    "custom-stone-work": [
      "/marble-custom-stonework.jpg",
      "/custom-stone-artwork-religious-spiritual-marble-ca.jpg",
      "/artisans-working-on-marble-sculpture.jpg",
      "/marble-relief-carving.jpg",
      "/marble-statue-carving-artisan-working-on-spiritual.jpg",
    ],
    "marble-flooring": [
      "/marble-flooring.jpg",
      "/marble-flooring-tiles-beautiful-stone-pattern-desi.jpg",
    ],
  };

  const images = (categoryImages[categoryId] || []).map((url, i) => ({
    id: i + 1,
    url: url,
    title: `${categoryName} - Image ${i + 1}`,
  }));

  const categoryDescriptions: Record<string, string> = {
    "outdoor-temples":
      "Our outdoor temple collection features stunning architectural designs perfect for gardens, compounds, and public spaces. Each piece is meticulously carved from premium marble or stone.",
    "indoor-temples":
      "Bring divine elegance into your home with our indoor temple collection. Perfect for prayer rooms, meditation spaces, and living areas.",
    "handicraft-items":
      "Discover our exquisite collection of handcrafted items, each piece a unique work of art created by master artisans.",
    "tile-crafting":
      "Custom tile designs that transform spaces into artistic expressions. From traditional patterns to contemporary designs.",
    "marble-statues":
      "Hand-carved marble statues depicting religious figures, cultural icons, and artistic expressions.",
    "garden-ornaments":
      "Enhance your outdoor space with our beautiful garden ornaments including fountains, planters, and decorative sculptures.",
    "countertops-surfaces":
      "Premium stone surfaces for kitchens and bathrooms that combine functionality with aesthetic beauty.",
    "wall-cladding":
      "Transform your walls with our decorative cladding solutions in various finishes and textures.",
    "custom-stone-work":
      "Bespoke creations tailored to your specifications. Let us bring your vision to life.",
    "marble-flooring":
      "Luxurious marble flooring that adds timeless elegance to any space.",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/#categories">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
              </Link>
              <h1 className="text-3xl font-bold text-primary">
                {categoryName}
              </h1>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-lg transition-colors bg-muted hover:bg-muted/80"
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-foreground/70 mb-12">
          {categoryDescriptions[categoryId] ||
            "Explore our premium collection."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id - 1)}
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4.5-4.5 3 3 5-5 2.5 2.5V5a1 1 0 00-1-1H4a1 1 0 00-1 1v10z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Count */}
        <div className="mt-12 text-center">
          <p className="text-foreground/60">
            Showing {images.length} premium images in this collection
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
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold"
          >
            ✕
          </button>
          <div className="flex items-center justify-between max-w-6xl w-full gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) =>
                  prev === null
                    ? null
                    : prev === 0
                    ? images.length - 1
                    : prev - 1
                );
              }}
              className="text-white hover:text-gray-300 p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                />
              </svg>
            </button>
            <img
              src={images[selectedImage].url || "/placeholder.svg"}
              alt={images[selectedImage].title}
              className="max-w-5xl max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) =>
                  prev === null
                    ? null
                    : prev === images.length - 1
                    ? 0
                    : prev + 1
                );
              }}
              className="text-white hover:text-gray-300 p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDetail;
