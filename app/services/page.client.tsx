"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const serviceCategories = [
  {
    id: "A",
    title: "Temple & Spiritual Stone Products",
    icon: "🕉️",
    color: "from-amber-400 to-orange-500",
    items: [
      "Marble Temples (Home & Big Temples)",
      "Stone Carved Temples (Sandstone & Granite)",
      "Shivling, Nandi",
      "Radha Krishna, Ram Darbar, Vishnu, Shiva Family Idols",
      "Buddha Statues (All Postures)",
      "Jain Derasar / Jain Temple Stone Work",
      "Ganesha, Hanuman, Tirupati Balaji, Durga Maa Murti",
      "Jesus & Mary Statues / Church Altar Work",
      "Gurudwara Stone Carving & Sikh Symbols",
      "Khatu Shyam / Sai Baba Marble Moorti",
    ],
  },
  {
    id: "B",
    title: "Home Decor & Interior Stone Art",
    icon: "🏠",
    color: "from-rose-400 to-pink-500",
    items: [
      "Marble / Onyx Table Tops",
      "Inlay Worked Table Tops",
      "Marble Wall Panels & Jaali",
      "Stone Carved Wall Murals",
      "Decorative Stone Planters",
      "Stone Fountains (Indoor/Outdoor)",
      "Marble & Stone Lamps and Lanterns",
      "Stone Candle Holders / Diffusers",
      "Stone Name Plates & House Signs",
      "Marble Clocks & Home Decor Articles",
    ],
  },
  {
    id: "C",
    title: "Outdoor & Garden Stone Products",
    icon: "🌿",
    color: "from-green-400 to-emerald-500",
    items: [
      "Garden Statues & Sculptures",
      "Stone Gazebo / Chhatri / Pavilion",
      "Bird Baths, Garden Benches",
      "Stone Water Fountains (Tiered, Wall Mounted, Buddha)",
      "Garden Pebbles, Cobble Stones, Landscaping Stones",
      "Stone Planters and Pots",
      "Stone Animal Sculptures (Lion, Elephant, Horse)",
    ],
  },
  {
    id: "D",
    title: "Architectural Stone Work",
    icon: "🏛️",
    color: "from-blue-400 to-indigo-500",
    items: [
      "Carved Pillars & Jharokhas",
      "Domes, Chhatris & Shikhars",
      "Stone Carved Doors & Door Frames",
      "Stone Arches & Entrance Gates",
      "Mandapam, Haveli, Courtyard Stone Work",
      "Marble Inlay Flooring",
      "Stone Cladding & Facades",
      "Window Frames & Balcony Railings",
      "Jaali & CNC Carved Panels",
      "Brass Inlay Work (flooring, table tops, wall panels)",
    ],
  },
  {
    id: "E",
    title: "Kitchen & Utility Stone Products",
    icon: "🍳",
    color: "from-yellow-400 to-amber-500",
    items: [
      "Marble/Granite Kitchen Countertops",
      "Stone Sinks & Wash Basins",
      "Mortar & Pestle (Khalbatta)",
      "Serving Platters & Stone Trays",
      "Coasters, Bowls, Fruit Stand",
      "Stone Spice Jars & Storage Containers",
    ],
  },
  {
    id: "F",
    title: "Corporate & Custom Gifting",
    icon: "🎁",
    color: "from-purple-400 to-violet-500",
    items: [
      "Customized Marble Awards & Trophies",
      "Corporate Logo Stone Mementos",
      "Stone Pen Holders / Office Decor",
      "Engraved Stone Plaques",
      "Customized Stone Gifts for Events",
    ],
  },
  {
    id: "G",
    title: "Luxury Stone Furniture",
    icon: "🪑",
    color: "from-cyan-400 to-blue-500",
    items: [
      "Stone Dining Tables (Marble/Granite/Onyx)",
      "Stone Centre Tables / Coffee Tables",
      "Stone Benches & Seats",
      "Stone Bed Backdrops & Headboards",
    ],
  },
  {
    id: "H",
    title: "Tiles, Slabs & Raw Material",
    icon: "⬜",
    color: "from-slate-400 to-gray-500",
    items: [
      "Marble Slabs & Tiles",
      "Granite Slabs & Tiles",
      "Sandstone Slabs, Tiles & Blocks",
      "Cobbles, Pebbles, Pavers",
      "Customized Stone Cut-to-Size Material",
    ],
  },
  {
    id: "I",
    title: "Other Custom Stone Work",
    icon: "✨",
    color: "from-fuchsia-400 to-rose-500",
    items: [
      "Hotel, Resort & Farmhouse Stone Projects",
      "Monuments & Memorial Stones",
      "Customized Nameplates & Address Stones",
      "3D Stone Engraving & CNC Custom Artwork",
      "Stone Restoration & Polishing Services",
    ],
  },
];

function ServiceCategoryCard({
  category,
  index,
}: {
  category: (typeof serviceCategories)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="animate-in fade-in slide-in-from-bottom-4 duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Card
        className="overflow-hidden border-0 bg-white dark:bg-stone-800 transition-all duration-300 hover:shadow-xl cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div
          className={`bg-gradient-to-r ${category.color} p-6 text-white transition-all duration-300 group-hover:shadow-lg`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h3 className="text-xl font-serif font-bold">
                  {category.title}
                </h3>
                <p className="text-sm opacity-90">
                  {category.items.length} Products
                </p>
              </div>
            </div>
            <ChevronDown
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              size={24}
            />
          </div>
        </div>

        {isExpanded && (
          <div className="animate-in fade-in duration-300">
            <div className="p-6 bg-stone-50 dark:bg-stone-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-stone-800 hover:bg-amber-50 dark:hover:bg-stone-700 transition-colors duration-200 animate-in fade-in slide-in-from-left-2"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <span className="text-amber-600 mt-1 flex-shrink-0">✓</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

export function ServicePageClient() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-12 md:py-20">
        <div
          className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-stone-100 dark:from-stone-900 dark:via-stone-900 dark:to-stone-800"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(217, 119, 6, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(180, 83, 9, 0.1) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-pretty leading-tight animate-in fade-in slide-in-from-top-4 duration-700">
            Timeless Stone Creations
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Explore our extensive collection of handcrafted marble and stone
            products, from spiritual sculptures to luxury furniture, each piece
            a masterpiece of artistry and precision.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-in fade-in duration-700 delay-200">
            <Button className="px-8 py-6 text-base">Browse All Services</Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-base bg-transparent"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-stone-900 dark:bg-stone-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Products" },
              { value: "9", label: "Categories" },
              { value: "8", label: "Countries Served" },
              { value: "100%", label: "Customizable" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center animate-in fade-in duration-500"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-stone-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Our Complete Product Range
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Click on any category to explore our detailed product offerings and
            find the perfect stone creation for your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCategories.map((category, idx) => (
              <ServiceCategoryCard
                key={category.id}
                category={category}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            Why Choose AADIDEV Studio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Craftsmanship",
                description:
                  "Over 25 years of heritage combined with modern techniques to create stunning stone pieces.",
                icon: "🎨",
              },
              {
                title: "100% Custom Solutions",
                description:
                  "Every piece is handcrafted to your exact specifications and design requirements.",
                icon: "✨",
              },
              {
                title: "Global Quality Standards",
                description:
                  "ISO certified excellence delivered to 8 countries with consistent quality assurance.",
                icon: "🌍",
              },
              {
                title: "Sustainable Practices",
                description:
                  "Eco-friendly sourcing and ethical production methods for responsible luxury.",
                icon: "♻️",
              },
              {
                title: "Timely Delivery",
                description:
                  "Project-based delivery excellence ensuring your orders arrive as promised.",
                icon: "📦",
              },
              {
                title: "Dedicated Support",
                description:
                  "Personalized service from concept to completion with 95% customer satisfaction.",
                icon: "👥",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="p-8 border-amber-200 bg-white dark:bg-stone-800 dark:border-stone-700 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Contact our team to discuss your custom stone project or to request
            a detailed product catalog.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="px-10 py-6 text-base">Start Your Project</Button>
            <Button
              variant="outline"
              className="px-10 py-6 text-base bg-transparent"
            >
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
