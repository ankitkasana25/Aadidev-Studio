"use client"

import Link from "next/link"

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Lord Shiva Idol",
      price: "₹45,000",
      image: "/white-marble-lord-shiva-idol.jpg",
      description: "Handcrafted marble idol of Lord Shiva",
    },
    {
      id: 2,
      name: "Krishna Temple",
      price: "₹85,000",
      image: "/marble-krishna-temple.jpg",
      description: "Complete marble temple with Krishna idol",
    },
    {
      id: 3,
      name: "Ganesha Murti",
      price: "₹38,000",
      image: "/marble-ganesha-sculpture.jpg",
      description: "Beautiful Ganesha marble sculpture",
    },
    {
      id: 4,
      name: "Durga Idol",
      price: "₹65,000",
      image: "/marble-goddess-durga-idol.jpg",
      description: "Goddess Durga marble idol with details",
    },
    {
      id: 5,
      name: "Saiya Ram Temple",
      price: "₹95,000",
      image: "/marble-ram-mandir-temple.jpg",
      description: "Ram Lala temple marble sculpture",
    },
    {
      id: 6,
      name: "Nandi Bull",
      price: "₹52,000",
      image: "/marble-nandi-bull.jpg",
      description: "Intricately carved marble Nandi bull",
    },
  ]

  return (
    <section id="products" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-3">Featured Products</h2>
          <p className="text-lg text-foreground/70">Explore our collection of premium marble sculptures and temples</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 bg-white border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-1">{product.name}</h3>
                  <p className="text-sm text-foreground/60 mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
