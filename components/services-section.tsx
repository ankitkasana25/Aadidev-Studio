import { Hammer, Wrench, Globe } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: Hammer,
      title: "Custom Marble Temple Design",
      description: "Personalized temple designs crafted according to your specifications and preferences",
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Expert installation services ensuring perfect placement and structural integrity",
    },
    {
      icon: Globe,
      title: "Export Services",
      description: "Worldwide shipping and export services for your precious marble creations",
    },
  ]

  return (
    <section id="services" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-3">Our Services</h2>
          <p className="text-lg text-foreground/70">Premium services tailored to your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 rounded-lg bg-secondary/20 border border-border hover:shadow-lg transition-shadow"
              >
                <Icon size={48} className="text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
