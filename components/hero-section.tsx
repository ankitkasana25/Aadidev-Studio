"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const slides = [
    {
      image: "/white-marble-temple-architecture-with-intricate-ca.jpg",
      title: "Crafting Eternal Beauty in Marble",
      subtitle: "Premium marble temples and divine sculptures",
    },
    {
      image: "/ornate-marble-temple-with-gold-accents-and-spiritu.jpg",
      title: "Divine Craftsmanship Perfected",
      subtitle: "Timeless elegance in every creation",
    },
    {
      image: "/marble-statue-carving-artisan-working-on-spiritual.jpg",
      title: "Master Artisans at Work",
      subtitle: "Traditional techniques, modern excellence",
    },
    {
      image: "/indoor-marble-temple-with-intricate-carved-details.jpg",
      title: "Sacred Spaces Created",
      subtitle: "Bring spirituality home with our temples",
    },
    {
      image: "/outdoor-marble-sculpture-garden-ornaments-landscap.jpg",
      title: "Garden Sculptures & Ornaments",
      subtitle: "Enhance your outdoor spaces",
    },
    {
      image: "/marble-handicraft-items-decorative-stone-art-piece.jpg",
      title: "Exquisite Handicraft Items",
      subtitle: "Unique pieces for every aesthetic",
    },
    {
      image: "/marble-wall-cladding-luxury-interior-stone-design.jpg",
      title: "Luxury Interior Surfaces",
      subtitle: "Transform your walls with marble elegance",
    },
    {
      image: "/marble-countertops-kitchen-premium-stone-surfaces.jpg",
      title: "Premium Countertops & Surfaces",
      subtitle: "Functional art for your spaces",
    },
    {
      image: "/marble-flooring-tiles-beautiful-stone-pattern-desi.jpg",
      title: "Custom Marble Flooring",
      subtitle: "Timeless foundation for elegant spaces",
    },
    {
      image: "/custom-stone-artwork-religious-spiritual-marble-ca.jpg",
      title: "Bespoke Custom Stone Work",
      subtitle: "Your vision in marble and stone",
    },
  ]

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [autoPlay, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  return (
    <section id="hero" className="pt-20 relative h-[600px] overflow-hidden bg-background">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg text-balance">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">{slides[currentSlide].subtitle}</p>
          <Link
            href="/gallery"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg inline-block"
          >
            Explore Products
          </Link>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/30 hover:bg-white/50 transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/30 hover:bg-white/50 transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={32} className="text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? "bg-white w-8 h-3" : "bg-white/50 hover:bg-white/70 w-3 h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
