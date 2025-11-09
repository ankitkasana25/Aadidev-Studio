"use client";

import React from "react";
import Link from "next/link";

const blogs = [
  {
    title: "The Art of Marble Temple Crafting",
    desc: "Discover how traditional craftsmanship and modern design come together to create premium marble temples.",
    img: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
    link: "#",
  },
  {
    title: "Choosing the Right Stone for Your Home",
    desc: "A complete guide to selecting perfect marble, granite, or quartz for interiors and exterior design.",
    img: "https://images.pexels.com/photos/1457840/pexels-photo-1457840.jpeg",
    link: "#",
  },
  {
    title: "Marble Inlay Work: Luxury for Modern Homes",
    desc: "Explore the beauty of intricate marble inlay patterns inspired by royal Indian architecture.",
    img: "https://images.pexels.com/photos/593761/pexels-photo-593761.jpeg",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 marble-texture">
      <h2 className="text-3xl font-semibold text-center text-primary mb-10">
        Our Blog
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
            className="
              animate-[fadeInUp_0.6s_ease-out_forwards]
              opacity-0
              bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300
              border border-primary/20
            "
          >
            {/* Blog Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Blog Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {blog.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {blog.desc}
              </p>

              <Link
                href={blog.link}
                className="
                  inline-block text-primary font-medium
                  hover:underline hover:text-accent transition
                "
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
