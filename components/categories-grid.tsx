"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const CategoriesGrid = () => {
  const categories = [
    {
      id: "outdoor-temples",
      name: "Outdoor Temples",
      description:
        "Beautiful outdoor temple structures and architectural designs",
      image: "/outdoor-marble-temple.jpg",
    },
    {
      id: "indoor-temples",
      name: "Indoor Temples",
      description: "Elegant indoor temple installations and decorative pieces",
      image: "/indoor-marble-temple.jpg",
    },
    {
      id: "handicraft-items",
      name: "Handicraft Items",
      description: "Artisan-crafted decorative items and traditional pieces",
      image: "/marble-handicraft-items.jpg",
    },
    {
      id: "tile-crafting",
      name: "Tile Crafting",
      description: "Custom tile designs and decorative tile work",
      image: "/marble-tile-crafting.jpg",
    },
    {
      id: "marble-statues",
      name: "Marble Statues",
      description: "Hand-carved marble statues and sculptures",
      image: "/white-marble-lord-shiva-idol.jpg",
    },
    {
      id: "garden-ornaments",
      name: "Garden Ornaments",
      description: "Outdoor garden decorations and landscape elements",
      image: "/marble-garden-ornaments.jpg",
    },
    {
      id: "countertops-surfaces",
      name: "Countertops & Surfaces",
      description: "Premium stone surfaces for kitchens and bathrooms",
      image: "/marble-countertops.jpg",
    },
    {
      id: "wall-cladding",
      name: "Wall Cladding",
      description: "Decorative wall cladding and finish solutions",
      image: "/marble-wall-cladding.jpg",
    },
    {
      id: "custom-stone-work",
      name: "Custom Stone Work",
      description: "Bespoke stone creations tailored to your specifications",
      image: "/marble-custom-stonework.jpg",
    },
    {
      id: "marble-flooring",
      name: "Marble Flooring",
      description: "Luxurious marble flooring options for all spaces",
      image: "/marble-flooring.jpg",
    },
  ];

  return (
    <section id="categories" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-3">
            Our Collections
          </h2>
          <p className="text-lg text-foreground/70">
            Explore our diverse range of stone and marble products
          </p>
        </div>

        {/* ✅ DOUBLE SIZE SQUARE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <Link href={`/category/${category.id}`} key={category.id}>
              <div className="group cursor-pointer aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card border border-border hover:border-primary/50">
                {/* Top half image */}
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-1/2 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Bottom half content */}
                <div className="p-6 h-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2 line-clamp-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-foreground/60 line-clamp-2">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">View Collection</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
