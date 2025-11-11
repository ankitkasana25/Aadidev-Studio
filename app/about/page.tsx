import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

export const metadata = {
  title: "About Us - AADIDEV Studio",
  description:
    "Discover our heritage, craftsmanship, and vision for luxury stone artistry",
};

export default function AboutPage() {
  const leaders = [
    { name: "Narayana Poojari", title: "CEO" },
    { name: "Abhimanu Singh", title: "Head Of Operations" },
    { name: "Deepa K C", title: "Head Of Strategy" },
    { name: "OmPrakash Singh", title: "Head Of Manufacturing" },
    { name: "Divya K C", title: "Head of Marketing" },
  ];

  const stats = [
    { value: "2022", label: "Year Founded" },
    { value: "25+", label: "Years Experience" },
    { value: "8", label: "Countries Served" },
    { value: "500", label: "Projects Delivered" },
    { value: "500+", label: "Products" },
    { value: "100%", label: "Custom Crafted" },
  ];

  const values = [
    {
      title: "Craftsmanship",
      description: "Excellence in every detail of our creations",
    },
    {
      title: "Innovation",
      description: "Blending tradition with modern design",
    },
    { title: "Excellence", description: "Uncompromising standards in quality" },
    {
      title: "Sustainability",
      description: "Eco-friendly sourcing and production",
    },
    { title: "Integrity", description: "Transparent and ethical practices" },
  ];

  const services = [
    "Home Decors",
    "Luxury Flooring & Surfaces",
    "Interior Décor Elements",
    "Custom Stone Art & Sculptures",
    "Outdoor Art and Sculptures",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-amber-50 via-amber-50 to-stone-100 dark:from-stone-900 dark:via-stone-900 dark:to-stone-800"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(217, 119, 6, 0.1) 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-pretty leading-tight">
            Timeless Artistry in Stone
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            A journey of 25+ years blending heritage craftsmanship with
            contemporary design, creating marble masterpieces that inspire
            spaces globally.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="px-8 py-6 text-base">Explore Our Work</Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-base bg-transparent"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 px-4 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              AADIDEV Studio
            </h2>
            <p className="text-lg text-muted-foreground">
              A Subsidiary of Indian Stonex (Founded in 2018)
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <Card
                key={idx}
                className="p-6 text-center border-amber-200 bg-white dark:bg-stone-800 dark:border-stone-700"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-amber-700 dark:text-amber-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white dark:bg-stone-800 rounded-lg p-8 text-center border border-amber-200 dark:border-stone-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-serif font-bold mb-2">
                  Certified Excellence
                </div>
                <p className="text-muted-foreground">Certified by KSR</p>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold mb-2">
                  Delivery Excellence
                </div>
                <p className="text-muted-foreground">Pure Craft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="p-10 border-amber-200 bg-amber-50 dark:bg-stone-800 dark:border-stone-700">
              <h3 className="text-2xl font-serif font-bold mb-4 text-amber-900 dark:text-amber-100">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-amber-950 dark:text-amber-50">
                To redefine artistry in stone by blending timeless craftsmanship
                with modern design, creating enduring masterpieces that inspire
                spaces and elevate lifestyles globally.
              </p>
            </Card>

            {/* Mission */}
            <Card className="p-10 border-amber-200 bg-stone-50 dark:bg-stone-800 dark:border-stone-700">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our mission is to craft exceptional stone creations that merge
                traditional artistry with innovative design, delivering timeless
                elegance and durability to every space we touch.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {leaders.map((leader, idx) => (
              <Card
                key={idx}
                className="p-6 text-center border-amber-200 bg-white dark:bg-stone-800 dark:border-stone-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 mx-auto mb-4" />
                <h3 className="font-serif font-bold text-lg mb-2">
                  {leader.name}
                </h3>
                <p className="text-sm text-muted-foreground">{leader.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, idx) => (
              <Card
                key={idx}
                className="p-8 border-amber-200 bg-white dark:bg-stone-800 dark:border-stone-700 hover:bg-amber-50 dark:hover:bg-stone-700 transition-colors"
              >
                <h3 className="font-serif font-bold text-xl mb-3 text-amber-900 dark:text-amber-100">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="p-8 border-2 border-amber-300 bg-white dark:bg-stone-800 dark:border-amber-700 text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-serif font-bold text-lg">{service}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Goals & Objectives Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            Goals & Objectives
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Goals */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-amber-900 dark:text-amber-100 mb-6">
                Our Goals
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <div>
                    <p className="font-semibold">Establish Brand Leadership</p>
                    <p className="text-sm text-muted-foreground">
                      Become a recognized name in luxury stone craftsmanship and
                      design globally.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <div>
                    <p className="font-semibold">
                      Promote Sustainable Practices
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Lead the industry in eco-friendly sourcing and ethical
                      production.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <div>
                    <p className="font-semibold">Expand Market Reach</p>
                    <p className="text-sm text-muted-foreground">
                      Enter new markets in hospitality, architecture, and art
                      sectors.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <div>
                    <p className="font-semibold">Preserve Heritage</p>
                    <p className="text-sm text-muted-foreground">
                      Revive and sustain traditional stone art techniques while
                      integrating modern design.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <div>
                    <p className="font-semibold">Deliver Exceptional Quality</p>
                    <p className="text-sm text-muted-foreground">
                      Maintain uncompromising standards in every product and
                      service.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Objectives */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-amber-900 dark:text-amber-100 mb-6">
                Our Objectives
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <p className="text-sm">
                    Launch premium stone collections annually to cater to luxury
                    interiors.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <p className="text-sm">
                    Build strategic partnerships with architects, designers, and
                    real estate developers.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <p className="text-sm">
                    Implement digital presence through a strong website and
                    social media campaigns.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <p className="text-sm">
                    Train artisans in modern techniques while preserving
                    traditional skills.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 text-xl">•</span>
                  <p className="text-sm">
                    Achieve customer satisfaction rate of 95% through
                    personalized services.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-stone-900 dark:bg-stone-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-stone-300 mb-8">
            Discover how our marble and stone creations can elevate your home or
            project.
          </p>
          <Button className="px-8 py-6 text-base bg-amber-600 hover:bg-amber-700 text-white">
            Start Your Project
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
