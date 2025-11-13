"use client";

import React, { useRef } from "react";
import Link from "next/link";

const blogs = [
  {
    id: "marble-temple-crafting",
    title: "The Art of Marble Temple Crafting",
    desc: "Discover how traditional craftsmanship and modern design come together to create premium marble temples.",
    img: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
  },
  {
    id: "choosing-right-stone",
    title: "Choosing the Right Stone for Your Home",
    desc: "A complete guide to selecting perfect marble, granite, or quartz for interiors and exterior design.",
    img: "https://images.pexels.com/photos/1457840/pexels-photo-1457840.jpeg",
  },
  {
    id: "marble-inlay-work",
    title: "Marble Inlay Work: Luxury for Modern Homes",
    desc: "Explore the beauty of intricate marble inlay patterns inspired by royal Indian architecture.",
    img: "https://images.pexels.com/photos/593761/pexels-photo-593761.jpeg",
  },
  {
    id: "caring-for-marble",
    title: "Caring for Marble Surfaces",
    desc: "Tips and tricks for maintaining your marble installations and keeping them looking luxurious for years.",
    img: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg",
  },
];

export default function BlogSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 marble-texture">
      <h2 className="text-3xl font-semibold text-center text-primary mb-10">
        Our Blog
      </h2>

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={scrollContainerRef}
          className="
            flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory
            no-scrollbar  /* 👈 this hides scrollbar using Tailwind custom class */
          "
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="min-w-[300px] sm:min-w-[340px] md:min-w-[380px] snap-center
              bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-primary/20"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {blog.desc}
                </p>
                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-block text-primary font-medium hover:underline hover:text-accent transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
