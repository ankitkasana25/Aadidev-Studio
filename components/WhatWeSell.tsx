"use client";

import React, { useState } from "react";
import OfferFormModal from "./OfferFormModal";

const categories = [
  "Exterior Cladding",
  "Designer Wall Panels",
  "Natural Stone Cladding",
  "Decorative Stone Surfaces",
  "Stone Feature Walls",
  "Premium Wall Tiles",
  "Stone Tile Collection",
  "Designer Cladding Tiles",
  "Tile & Stone Showroom",
  "Exterior Stone Facades",
  "Bathroom Tile Collection",
  "Bath Flooring Solutions",
  "Shower Wall Tiles",
  "Designer Bathroom Concepts",
  "Restroom Tile Options",
  "Vanity & Basin Faucet Range",
  "Pooja Room Tile Concepts",
  "Wooden Murals",
  "Designer Wooden Ceilings",
  "Stone Inlay Artwork",
  "Marble Inlay Designs",
  "Marble Medallion Flooring",
  "Ceramic Wall Cladding",
  "Kitchen Tile Collection",
  "Modular Kitchen Wall Tiles",
  "Kitchen Floor Tiles",
  "Premium Floor Tiles",
  "Vitrified Flooring",
  "Engineered Wooden Floors",
  "Luxury Ceramic Tiles",
  "Best-in-Class Tile Store",
  "Marble Tile Collection",
  "Outdoor Parking Tiles",
  "Wooden Texture Tiles",
  "High-End Flooring Solutions",
  "Quartz Surfaces",
  "Kitchen Countertops",
  "Quartz Countertops",
  "Designer Wash Basins",
  "Basin Price Range",
  "Modern Bathroom Basins",
  "Handwash Counter Basins",
  "Sink & Basin Collection",
  "Tabletop Basins",
  "Name Plates",
  "Custom House Name Boards",
  "Designer Home Signage",
  "Bar Counter Designs",
  "Moroccan Pattern Tiles",
  "Gold Leaf Artwork",
  "Gold Gilding Work",
  "Gold Leaf Paintings",
  "Buddha Idols",
  "Buddha Wall Murals",
  "Buddha Water Features",
  "Buddha Fountain",
  "Live Edge Dining Tables",
  "Metal Mosaic Art",
  "Glass Mosaic Tiles",
  "Mosaic Tile Designs",
  "Pool Tiles",
  "Rose Quartz Stones",
  "Quartz Crystals",
  "Stone Carving Work",
  "Stone Sculptures",
  "Buddha Stone Idols",
  "Marble Buddha Murtis",
  "Marble Buddha",
  "Metal Wall Murals",
];

const WhatWeOffer = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleOpen = (item: string) => {
    setSelectedItem(item);
    setOpen(true);
  };

  return (
    <section className="py-12 marble-texture">
      <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
        What We Offer
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => handleOpen(item)}
            style={{ animationDelay: `${index * 0.05}s` }}
            className="
              animate-[fadeInUp_0.5s_ease-out_forwards]
              opacity-0
              p-4 rounded-xl text-sm font-medium cursor-pointer select-none
              bg-white/70 backdrop-blur-sm shadow-sm
              border border-primary/30
              hover:shadow-lg hover:scale-[1.05] hover:bg-white transition-all
              relative overflow-hidden
            "
          >
            <span className="text-foreground">{item}</span>
          </div>
        ))}
      </div>

      {/* Modal */}
      <OfferFormModal
        open={open}
        onClose={() => setOpen(false)}
        selectedItem={selectedItem}
      />
    </section>
  );
};

export default WhatWeOffer;
