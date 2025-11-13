"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import OfferFormModal from "./OfferFormModal";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // ✅ Product page routes
  const marbleProducts = [
    { label: "Outdoor Temples", slug: "outdoor-temples" },
    { label: "Indoor Temples", slug: "indoor-temples" },
    { label: "Handicraft Items", slug: "handicraft-items" },
    { label: "Tile Crafting", slug: "tile-crafting" },
    { label: "Marble Statues", slug: "marble-statues" },
    { label: "Garden Ornaments", slug: "garden-ornaments" },
    { label: "Countertops & Surfaces", slug: "countertops-surfaces" },
    { label: "Wall Cladding", slug: "wall-cladding" },
    { label: "Custom Stone Work", slug: "custom-stone-work" },
    { label: "Marble Flooring", slug: "marble-flooring" },
  ];

  // ✅ Real page links
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-border shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-26">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-row items-center flex-shrink-0 group"
          >
            <div className="relative w-28 h-28 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/aadidev-logo.png"
                alt="AADIDEV STUDIO Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col items-center text-center opacity-0 translate-y-2 animate-[fadeInUp_0.6s_ease-out_forwards]">
              <span className="text-xl font-bold text-primary tracking-wide group-hover:text-primary/90 transition-colors">
                Aadidev Studio
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">
                Marble Temple & Stone
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1">
                Products
                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition-transform"
                />
              </button>

              <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                {marbleProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    {product.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex flex-col items-center gap-3">
            <button
              onClick={() => handleOpen()}
              className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-md"
            >
              Get Quote
            </button>

            <a
              href="tel:+917976732828"
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <Phone size={18} />
              <span>+91 79767 32828</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Products */}
            <div className="border-t border-border mt-2">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted hover:text-primary flex items-center justify-between"
              >
                Products
                <ChevronDown
                  size={16}
                  className={productsOpen ? "rotate-180" : ""}
                />
              </button>

              {productsOpen && (
                <div className="bg-muted/30 py-1">
                  {marbleProducts.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="block px-6 py-2 text-sm text-foreground hover:text-primary transition-colors"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setProductsOpen(false);
                      }}
                    >
                      {product.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTA */}
            <div className="border-t border-border mt-2 px-4 py-3 space-y-2">
              <a
                href="tel:+917976732828"
                className="block text-sm font-semibold text-primary hover:text-primary/80"
              >
                Call: +91 79767 32828
              </a>

              <Link
                href="/contact"
                className="block px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
      <OfferFormModal open={open} onClose={() => setOpen(false)} />
    </nav>
  );
};

export default Navbar;
