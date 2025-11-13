"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

interface Product {
  label: string;
  slug: string;
  description: string;
  details: string[];
}

const products: Record<string, Product> = {
  "outdoor-temples": {
    label: "Outdoor Temples",
    slug: "outdoor-temples",
    description:
      "Exquisite marble outdoor temples crafted with precision and devotion. Each piece showcases intricate architectural details and exceptional stonework.",
    details: [
      "Hand-carved marble",
      "Weather-resistant finish",
      "Traditional architecture",
      "Premium quality stone",
    ],
  },
  "indoor-temples": {
    label: "Indoor Temples",
    slug: "indoor-temples",
    description:
      "Elegant indoor marble temples designed for spiritual spaces and modern homes. Perfect for prayer rooms and meditation spaces.",
    details: [
      "Intricate carvings",
      "Smooth finishing",
      "Customizable designs",
      "Premium marble",
    ],
  },
  "handicraft-items": {
    label: "Handicraft Items",
    slug: "handicraft-items",
    description:
      "Unique handcrafted marble items that blend tradition with contemporary aesthetics. Each piece is a masterpiece.",
    details: [
      "Artisan crafted",
      "Unique designs",
      "Premium quality",
      "Perfect for gifting",
    ],
  },
  "tile-crafting": {
    label: "Tile Crafting",
    slug: "tile-crafting",
    description:
      "Beautiful marble tiles for flooring and wall applications. Durable and elegant solutions for any space.",
    details: [
      "Premium quality",
      "Durable finish",
      "Various sizes",
      "Contemporary designs",
    ],
  },
  "marble-statues": {
    label: "Marble Statues",
    slug: "marble-statues",
    description:
      "Stunning marble statues representing spirituality and art. Each sculpture is meticulously carved by skilled artisans.",
    details: [
      "Hand-carved",
      "High-quality marble",
      "Religious themes",
      "Artistic excellence",
    ],
  },
  "garden-ornaments": {
    label: "Garden Ornaments",
    slug: "garden-ornaments",
    description:
      "Transform your garden with our elegant marble ornaments and landscape features. Weather-resistant and timeless.",
    details: [
      "Weather-resistant",
      "Premium marble",
      "Landscape design",
      "Decorative pieces",
    ],
  },
  "countertops-surfaces": {
    label: "Countertops & Surfaces",
    slug: "countertops-surfaces",
    description:
      "Premium marble countertops and surfaces for kitchens and bathrooms. Luxurious and functional.",
    details: [
      "High durability",
      "Elegant aesthetics",
      "Easy maintenance",
      "Premium quality",
    ],
  },
  "wall-cladding": {
    label: "Wall Cladding",
    slug: "wall-cladding",
    description:
      "Sophisticated marble wall cladding for interior and exterior applications. Enhance any space with timeless elegance.",
    details: [
      "Premium finish",
      "Various colors",
      "Professional installation",
      "Long-lasting",
    ],
  },
  "custom-stone-work": {
    label: "Custom Stone Work",
    slug: "custom-stone-work",
    description:
      "Bespoke stone crafting solutions tailored to your specific requirements. Let us bring your vision to life.",
    details: [
      "Customizable designs",
      "Expert craftsmanship",
      "Premium materials",
      "Professional service",
    ],
  },
  "marble-flooring": {
    label: "Marble Flooring",
    slug: "marble-flooring",
    description:
      "Premium marble flooring solutions that elevate your space with elegance and sophistication.",
    details: [
      "Premium quality",
      "Elegant designs",
      "Durable finish",
      "Various patterns",
    ],
  },
};

const generateProductImages = (productName: string) => {
  const baseQueries = [
    `premium marble ${productName} showcase luxury`,
    `beautiful marble ${productName} artistic craftsmanship`,
    `elegant stone ${productName} detailed carving`,
    `luxury marble ${productName} architectural design`,
    `handcrafted marble ${productName} premium quality`,
    `marble ${productName} intricate patterns`,
    `stone ${productName} classic elegance`,
    `marble ${productName} artistic creation`,
  ];

  return baseQueries.map((query, index) => ({
    id: index + 1,
    query: query,
  }));
};

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products[slug];
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center pt-28">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link
            href="/"
            className="text-primary hover:text-primary/80 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const images = generateProductImages(product.label.toLowerCase());

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev! === 0 ? images.length - 1 : prev! - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev! === images.length - 1 ? 0 : prev! + 1
      );
    }
  };

  const closeModal = () => setSelectedImageIndex(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted pt-32">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            {product.label}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {product.description}
          </p>

          {/* Product Details */}
          <div className="mt-8 flex flex-wrap gap-4">
            {product.details.map((detail, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20"
              >
                {detail}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          Featured Collection
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-max">
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImageIndex(index)}
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              } ${index === 1 ? "lg:col-span-2" : ""}`}
            >
              <div
                className={`relative ${
                  index === 0 ? "h-96" : index === 1 ? "h-64" : "h-56"
                }`}
              >
                <Image
                  src={`/generic-placeholder-icon.png?height=${
                    index === 0 ? 384 : index === 1 ? 256 : 224
                  }&width=${
                    index === 0 ? 384 : index === 1 ? 512 : 280
                  }&query=${encodeURIComponent(image.query)}`}
                  alt={`${product.label} - ${image.id}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-start p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold text-sm">Item #{image.id}</p>
                  <p className="text-xs text-gray-200">{product.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary/10 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              Interested in Our {product.label}?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us to customize your perfect marble pieces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+917976732828"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Call Now
              </Link>
              <Link
                href="/"
                className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              <X size={24} />
            </button>

            {/* Large Image */}
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              <Image
                src={`/generic-placeholder-icon.png?height=800&width=1200&query=${encodeURIComponent(
                  images[selectedImageIndex].query
                )}`}
                alt={`Large view ${selectedImageIndex}`}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            {/* Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
