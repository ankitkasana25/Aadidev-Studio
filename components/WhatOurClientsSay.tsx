"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Architect, Mumbai",
    text: "Their marble work is absolutely world-class. The detailing and finishing exceeded our expectations.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Mehra",
    role: "Interior Designer",
    text: "The temple they crafted for my client was breathtaking. Truly unmatched craftsmanship.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Patel",
    role: "Home Owner",
    text: "From design to installation, everything was handled flawlessly. Highly recommended.",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Kavita Soni",
    role: "Business Owner",
    text: "Premium quality marble and exceptional customer service. Worth every rupee!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function WhatOurClientsSay() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 marble-texture">
      <h2 className="text-3xl font-semibold text-center text-primary mb-12">
        What Our Clients Say
      </h2>

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Card */}
        <div
          key={index}
          className="
            animate-[fadeInUp_0.6s_ease-out_forwards]
            opacity-0
            bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-primary/20
            transition-all duration-500 hover:-translate-y-1
          "
        >
          <Quote className="text-primary w-10 h-10 mb-4" />

          <p className="text-lg text-foreground mb-6 leading-relaxed">
            "{testimonials[index].text}"
          </p>

          <div className="flex items-center gap-4">
            <img
              src={testimonials[index].img}
              alt={testimonials[index].name}
              className="w-14 h-14 rounded-full object-cover border border-primary/30 shadow-md"
            />

            <div>
              <h4 className="text-xl font-semibold">
                {testimonials[index].name}
              </h4>
              <p className="text-muted-foreground text-sm">
                {testimonials[index].role}
              </p>
            </div>
          </div>
        </div>

        {/* Left Button */}
        <button
          onClick={prev}
          className="
            absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full 
            bg-white/70 border border-primary/20 shadow-sm
            hover:bg-primary hover:text-white transition
          "
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Button */}
        <button
          onClick={next}
          className="
            absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full 
            bg-white/70 border border-primary/20 shadow-sm
            hover:bg-primary hover:text-white transition
          "
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
