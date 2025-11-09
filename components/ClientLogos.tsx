"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Tata_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5f/Adani_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/0f/Reliance_Industries_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c0/Larsen_%26_Toubro_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0c/HDFC_Bank_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/04/Axis_Bank_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Bosch-logotype.svg",
];

export default function ClientScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold text-center text-primary mb-10">
        Our Clients
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 
                     bg-white/70 backdrop-blur-md border border-primary/20 rounded-full 
                     hover:bg-primary hover:text-white transition"
        >
          <ChevronLeft size={22} />
        </button>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="overflow-x-hidden scrollbar-hide relative"
        >
          {/* AUTO SCROLLING TRACK */}
          <div
            className="
              flex items-center gap-20 
              w-max 
              animate-scroll 
              hover:[animation-play-state:paused]
              shrink-0
            "
          >
            {logos.concat(logos).map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="client-logo"
                className="h-14 w-auto opacity-80 hover:opacity-100 transition shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 
                     bg-white/70 backdrop-blur-md border border-primary/20 rounded-full 
                     hover:bg-primary hover:text-white transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
