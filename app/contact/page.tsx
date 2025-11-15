import { ContactFormClient } from "./contact-form-client";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us - AADIDEV Studio | Get Your Custom Quote",
  description:
    "Get in touch with AADIDEV Studio for your custom marble and stone projects. We're here to help bring your vision to life. Call +91 79767 32828 or fill out our contact form.",
  keywords: [
    "contact Aadidev Studio",
    "marble temple quote",
    "custom stone work",
    "marble consultation",
  ],
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@aadidevstudio.com",
      subtext: "Response within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 79767 32828",
      subtext: "Call us during business hours",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Jaipur, India",
      subtext: "AADIDEV Studio PVT. LTD.",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Monday - Sunday: 9 AM - 6 PM",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-12 md:py-20">
        <div
          className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-stone-100 dark:from-stone-900 dark:via-stone-900 dark:to-stone-800"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(217, 119, 6, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(180, 83, 9, 0.1) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-pretty leading-tight animate-in fade-in slide-in-from-top-4 duration-700">
            Let's Create Your Masterpiece
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Have a custom stone project in mind? We'd love to hear from you. Get
            in touch with our team to discuss your vision.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={idx}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <Card className="p-6 border-amber-200 bg-white dark:bg-stone-800 dark:border-stone-700 hover:shadow-lg transition-all duration-300 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                      <IconComponent className="w-6 h-6 text-amber-700 dark:text-amber-400" />
                    </div>
                    <h3 className="text-lg font-serif font-bold mb-2">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-semibold mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.subtext}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will respond within 24 hours
              with a personalized quote.
            </p>
          </div>

          <ContactFormClient />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-stone-900 dark:bg-stone-950 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            Why Contact Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Consultation",
                description:
                  "Get professional guidance from our experienced design consultants who understand your vision.",
              },
              {
                title: "Custom Solutions",
                description:
                  "Every project is unique. We create personalized solutions tailored to your exact requirements and budget.",
              },
              {
                title: "Transparent Pricing",
                description:
                  "No hidden costs. We provide detailed quotes and timelines for complete transparency.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500 p-8 border border-amber-600/30 rounded-lg bg-stone-800/50 hover:bg-stone-800 transition-all duration-300"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-xl font-serif font-bold mb-3 text-amber-400">
                  {benefit.title}
                </h3>
                <p className="text-stone-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What types of stone projects do you handle?",
                a: "We handle everything from marble temples and spiritual sculptures to luxury home décor, architectural elements, kitchen countertops, and custom gifting. Our portfolio spans 500+ products across 9 categories.",
              },
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on complexity and scale. Simple items may take 2-4 weeks, while large architectural projects can take 2-6 months. We'll provide a detailed timeline with your quote.",
              },
              {
                q: "Can you ship internationally?",
                a: "Yes! We serve 8 countries globally and have experience with international shipping. Packaging and logistics are handled professionally to ensure safe delivery.",
              },
              {
                q: "Do you offer customization?",
                a: "100% customization is our specialty. Every piece is handcrafted to your exact specifications. You can provide designs, dimensions, materials, and finishes.",
              },
              {
                q: "What's your warranty policy?",
                a: "We offer quality guarantees on all our work. For more specific warranty details based on your project type, please contact our team.",
              },
              {
                q: "How do I request a quote?",
                a: "Simply fill out the contact form above with details of your project, and our team will reach out within 24 hours with a personalized quote.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="animate-in fade-in duration-500 border border-amber-200 dark:border-stone-700 rounded-lg p-6 bg-white dark:bg-stone-800 hover:shadow-md transition-shadow"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <h3 className="text-lg font-serif font-bold mb-3 text-amber-900 dark:text-amber-100">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today and let's transform your space with exquisite
            marble and stone craftsmanship.
          </p>
        </div>
      </section>
    </main>
  );
}
