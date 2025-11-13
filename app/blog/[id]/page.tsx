"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const blogPosts: Record<
  string,
  { title: string; desc: string; img: string; content: string }
> = {
  "marble-temple-crafting": {
    title: "The Art of Marble Temple Crafting",
    desc: "Discover how traditional craftsmanship and modern design come together to create premium marble temples.",
    img: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
    content: `
Marble temples represent the pinnacle of traditional Indian architecture combined with contemporary design sensibilities. Over centuries, artisans have perfected the craft of transforming raw marble into spiritual and aesthetic masterpieces.

## The Heritage of Marble Craftsmanship

The use of marble in temple construction dates back thousands of years. From the intricate inlays of the Taj Mahal to the grand temples of Rajasthan, marble has been the material of choice for creating spaces of divine reverence and timeless beauty.

## Traditional Techniques

Master craftsmen employ techniques passed down through generations:
- Hand carving with precision chisels
- Intricate inlay work with semi-precious stones
- Complex geometric patterns reflecting spiritual symbolism
- Stone polishing that brings out the natural beauty of marble

## Modern Design Integration

Today's marble temple designs honor tradition while embracing modern functionality. Contemporary architects blend classical proportions with modern amenities, creating spaces that serve both spiritual and practical purposes.

## The Craftsmanship Process

Creating a marble temple involves multiple stages:
1. Design conceptualization
2. Stone selection and acquisition
3. Precise cutting and shaping
4. Detailed carving and inlay work
5. Finishing and polishing

## Sustainability and Ethics

Modern marble sourcing emphasizes sustainable practices and ethical quarrying methods. Craftsmen work to preserve traditional skills while adopting environmentally responsible techniques.

The art of marble temple crafting continues to evolve, blending the wisdom of ancient techniques with the innovation of contemporary design.
    `,
  },
  "choosing-right-stone": {
    title: "Choosing the Right Stone for Your Home",
    desc: "A complete guide to selecting perfect marble, granite, or quartz for interiors and exterior design.",
    img: "https://images.pexels.com/photos/1457840/pexels-photo-1457840.jpeg",
    content: `
Selecting the right natural stone for your home is a crucial decision that impacts both aesthetics and functionality. This comprehensive guide helps you understand the characteristics of different stones.

## Stone Types Comparison

### Marble
- Elegant and luxurious appearance
- Softer than granite, requires more maintenance
- Ideal for low-traffic areas, bathrooms, and accents
- Wide variety of colors and veining patterns

### Granite
- Extremely durable and hardwearing
- Highly resistant to stains and scratches
- Perfect for kitchens and high-traffic areas
- Rich, natural color patterns

### Quartz
- Engineered stone with consistent appearance
- Non-porous and requires minimal maintenance
- Excellent for kitchens and bathrooms
- Wide range of colors and finishes

## Factors to Consider

1. **Location**: Different stones suit different areas
2. **Traffic**: High-traffic areas need more durable stones
3. **Maintenance**: Consider cleaning and upkeep requirements
4. **Budget**: Costs vary significantly by stone type
5. **Aesthetic**: Color, pattern, and finish preferences

## Installation and Sealing

Proper installation is crucial for longevity. Professional installation ensures:
- Correct support and structure
- Proper sealing (for porous stones)
- Appropriate grout and adhesive use
- Waterproofing where needed

## Long-term Care

Different stones require different maintenance approaches. Understanding your stone's needs ensures it remains beautiful for years to come.
    `,
  },
  "marble-inlay-work": {
    title: "Marble Inlay Work: Luxury for Modern Homes",
    desc: "Explore the beauty of intricate marble inlay patterns inspired by royal Indian architecture.",
    img: "https://images.pexels.com/photos/593761/pexels-photo-593761.jpeg",
    content: `
Marble inlay work represents one of the most exquisite forms of stone artistry. This ancient technique, perfected in the royal palaces of India, brings unparalleled elegance to contemporary interiors.

## Historical Significance

The marble inlay technique reached its zenith during the Mughal period. The intricate pietra dura work on monuments like the Taj Mahal demonstrates the incredible skill and patience of ancient artisans.

## Artistic Elements

Traditional marble inlay work incorporates:
- Semi-precious stones (lapis lazuli, jade, coral)
- Complex geometric patterns
- Floral motifs and botanical designs
- Color combinations that create stunning visual effects

## Contemporary Applications

Modern homes can incorporate marble inlay work in:
- Entrance floors and foyers
- Accent wall panels
- Table tops and decorative surfaces
- Kitchen backsplashes
- Bathroom features

## The Crafting Process

Creating marble inlay work requires:
1. Detailed design planning
2. Stone cutting with precision
3. Color stone selection
4. Careful fitting and placement
5. Grouting and finishing

## Investment and Value

While marble inlay work is a significant investment, it adds tremendous value and character to your home. Each piece is unique and becomes a testament to fine craftsmanship.

## Customization Options

Modern artisans can create custom designs that:
- Reflect personal aesthetics
- Incorporate family motifs
- Blend traditional and contemporary styles
- Match existing interior design

Marble inlay work transforms spaces into galleries of artistic expression.
    `,
  },
  "caring-for-marble": {
    title: "Caring for Marble Surfaces",
    desc: "Tips and tricks for maintaining your marble installations and keeping them looking luxurious for years.",
    img: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg",
    content: `
Marble is a beautiful but porous stone that requires proper care to maintain its elegance. With the right maintenance practices, your marble surfaces can remain stunning for generations.

## Daily Care Tips

- Wipe spills immediately with a soft cloth
- Use coasters under glasses and bottles
- Avoid placing acidic substances directly on marble
- Clean with warm water and mild soap
- Dry surfaces after cleaning

## Cleaning Methods

### For Regular Cleaning
- Mix warm water with a small amount of pH-neutral dish soap
- Use soft microfiber cloths to avoid scratching
- Dry with a separate clean cloth

### For Stubborn Stains
- Create a paste with baking soda and water
- Apply gently and let sit for 15 minutes
- Wipe clean with a damp cloth

## Substances to Avoid

Never use:
- Acidic cleaners (vinegar, lemon juice)
- Abrasive scrubbers or sponges
- Commercial marble cleaners without proper dilution
- Bleach or harsh chemicals

## Sealing Your Marble

Proper sealing protects marble from stains:
- Seal new marble surfaces within 6-12 months
- Reapply sealant annually for high-traffic areas
- Test sealant effectiveness with water droplet method

## Addressing Damage

### Minor Etches
- Can often be polished out by professionals
- Prevention is easier than repair

### Cracks and Chips
- Professional repair is recommended
- Match original marble for seamless repairs

## Long-term Preservation

Regular maintenance ensures:
- Preserved natural luster and shine
- Prevention of permanent staining
- Extended lifespan of marble surfaces
- Maintained investment value

By following these care guidelines, your marble surfaces will maintain their timeless beauty.
    `,
  },
};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogPosts[id];

  if (!blog) {
    return (
      <main className="min-h-screen bg-background p-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-foreground">
            Blog Post Not Found
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Hero Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src={blog.img || "/placeholder.svg"}
            alt={blog.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Blog Header */}
        <article className="prose prose-sm max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
            {blog.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {blog.desc}
          </p>

          {/* Blog Content */}
          <div className="prose-content space-y-6">
            {blog.content.split("\n\n").map((paragraph, idx) => {
              if (paragraph.startsWith("##")) {
                return (
                  <h2
                    key={idx}
                    className="text-2xl font-semibold text-foreground mt-8 mb-4"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("-")) {
                return (
                  <ul
                    key={idx}
                    className="list-disc list-inside space-y-2 text-foreground"
                  >
                    {paragraph.split("\n").map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.match(/^\d+\./)) {
                return (
                  <ol
                    key={idx}
                    className="list-decimal list-inside space-y-2 text-foreground"
                  >
                    {paragraph.split("\n").map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item.replace(/^\d+\.\s*/, "")}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={idx} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>

        {/* Related Navigation */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            ← Back to All Posts
          </Link>
        </div>
      </div>
    </main>
  );
}
