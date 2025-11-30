"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { id: 1, src: "/marble-temple-completed.jpg", alt: "Temple 1" },
    { id: 2, src: "/marble-idol-carving.jpg", alt: "Idol 1" },
    { id: 3, src: "/marble-sculpture-art.jpg", alt: "Sculpture 1" },
    { id: 4, src: "/marble-temple-architecture.jpg", alt: "Temple 2" },
    { id: 5, src: "/marble-relief-carving.jpg", alt: "Relief Work" },
    { id: 6, src: "/marble-deity-statue.jpg", alt: "Deity" },
  ]

  return (
    <section id="gallery" className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Link href="/gallery" className="inline-block">
            <h2 className="text-4xl font-bold text-primary mb-3 hover:text-primary/80 transition-colors">Our Gallery</h2>
          </Link>
          <p className="text-lg text-foreground/70">Showcase of our finest marble creations</p>
        </div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-80"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <X size={32} className="text-white" />
          </button>
          <img
            src={images[selectedImage].src || "/placeholder.svg"}
            alt={images[selectedImage].alt}
            className="max-w-4xl max-h-96 rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}

export default GallerySection
