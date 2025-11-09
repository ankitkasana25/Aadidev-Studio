"use client"

const AboutSection = () => {
  const leaders = [
    { name: "Narayana Poojari", role: "CEO" },
    { name: "Abhimanu Singh", role: "Head of Operations" },
    { name: "Deepa K C", role: "Head of Strategy" },
    { name: "OmPrakash Singh", role: "Head of Manufacturing" },
    { name: "Divya K C", role: "Head of Marketing" },
  ]

  const stats = [
    { number: "2022", label: "Founded" },
    { number: "8", label: "Countries Served" },
    { number: "500+", label: "Projects Delivered" },
    { number: "25+", label: "Years of Experience" },
    { number: "100%", label: "Custom Crafted" },
    { number: "500+", label: "Products" },
  ]

  const certifications = [
    { title: "Certified Excellence", subtitle: "Certified by KSR" },
    { title: "Delivery Excellence", subtitle: "On-time Delivery" },
    { title: "Pure Craft", subtitle: "Handmade Quality" },
  ]

  const coreValues = ["Craftsmanship", "Innovation", "Pursuit of Excellence", "Sustainability", "Integrity"]

  return (
    <section id="about" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About AADIDEV STUDIO</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A Subsidiary of Indian Stonex, founded in 2018. AADIDEV Studio was established in 2022 with a vision to
            redefine artistry in stone.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20 p-8 bg-secondary/20 rounded-xl">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/50 backdrop-blur rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-foreground/80 leading-relaxed">
              "To redefine artistry in stone by blending timeless craftsmanship with modern design, creating enduring
              masterpieces that inspire spaces and elevate lifestyles globally."
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-foreground/80 leading-relaxed">
              Our mission is to craft exceptional stone creations that merge traditional artistry with innovative
              design, delivering timeless elegance and durability to every space we touch.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center hover:bg-primary/20 transition-colors"
              >
                <p className="font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur rounded-lg p-6 text-center border border-border hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-foreground mb-2">{leader.name}</h4>
                <p className="text-sm text-primary font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="bg-secondary/10 rounded-xl p-8">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Certifications & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">✓</div>
                <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                <p className="text-sm text-foreground/60">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
