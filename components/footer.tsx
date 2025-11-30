"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SOCIAL_ICONS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/aadidev-studio", icon: "in" },
  { name: "Instagram", href: "https://www.instagram.com/aadidevstudio", icon: "📷" },
  { name: "Facebook", href: "https://www.facebook.com/aadidevstudio", icon: "f" },
  { name: "YouTube", href: "https://www.youtube.com/@aadidevstudio", icon: "▶" },
  { name: "WhatsApp", href: "https://wa.me/917976732828", icon: "💬" },
  { name: "X", href: "https://twitter.com/aadidevstudio", icon: "𝕏" },
];

const NAVIGATION_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Gallery", path: "/gallery" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "Location", path: "/location" },
];

const QUICK_LINKS = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Feedback Form", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Customer Grievances", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-[#103b44] to-[#0e6a44] text-white"
      aria-labelledby="footer-heading"
    >
      <div className="absolute top-0 left-0 w-full z-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-auto block"
        >
          <path
            d="M0,80 C200,120 400,40 600,60 C800,80 1000,140 1200,100 C1300,80 1400,60 1440,40 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div
        className="absolute top-0 left-0 w-full z-0 opacity-60"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-auto block"
        >
          <path
            d="M0,90 C220,130 420,50 620,70 C820,90 1020,150 1220,110 C1320,90 1420,70 1440,50 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="relative z-10 pt-40 pb-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 mb-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div
              className={`transition-all duration-1000 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-[#baf3cf] via-[#6dd6a8] to-[#53c28c] flex items-center justify-center font-black text-lg tracking-wider text-[#0d2f2a] shadow-lg hover:scale-105 transition-transform duration-300">
                  AS
                </div>
                <div>
                  <h2
                    id="footer-heading"
                    className="text-2xl font-black tracking-wider text-[#baf3cf] uppercase"
                    style={{ fontFamily: "'Gochi Hand', cursive" }}
                  >
                    Aadidev Studio
                  </h2>
                  <p
                    className="text-lg text-[#baf3cf] opacity-95"
                    style={{ fontFamily: "'Gochi Hand', cursive" }}
                  >
                    Marble • Granite • Quartz
                  </p>
                </div>
              </div>
              <p
                className="text-base text-white/[0.78] leading-relaxed max-w-xs"
                style={{ fontFamily: "'Gochi Hand', cursive" }}
              >
                Elevating spaces with premium marble, expert craftsmanship, and
                timeless finishes.
              </p>
            </div>

            {/* Navigation */}
            <nav
              className={`transition-all duration-1000 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              aria-label="Navigation"
              style={{ transitionDelay: "0.1s" }}
            >
              <h3
                className="text-xl font-bold mb-4 text-[#baf3cf] uppercase"
                style={{ fontFamily: "'Gochi Hand', cursive" }}
              >
                Navigation
              </h3>
              <ul className="space-y-3">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <li
                    key={index}
                    className={`transition-all duration-1000 ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDelay: `${0.15 + index * 0.08}s` }}
                  >
                    <Link
                      href={item.path}
                      className="text-lg text-white opacity-90 hover:opacity-100 hover:text-[#baf3cf] transition-all duration-300 transform hover:translate-x-1"
                      style={{ fontFamily: "'Gochi Hand', cursive" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Quick Links */}
            <div
              className={`transition-all duration-1000 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              aria-label="Quick Links"
              style={{ transitionDelay: "0.2s" }}
            >
              <h3
                className="text-xl font-bold mb-4 text-[#baf3cf] uppercase"
                style={{ fontFamily: "'Gochi Hand', cursive" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                {QUICK_LINKS.map((item, index) => (
                  <li
                    key={index}
                    className={`transition-all duration-1000 ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDelay: `${0.25 + index * 0.08}s` }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg text-white opacity-90 hover:opacity-100 hover:text-[#baf3cf] transition-all duration-300"
                      style={{ fontFamily: "'Gochi Hand', cursive" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <address
              className={`transition-all duration-1000 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              aria-label="Contact Us"
              style={{ transitionDelay: "0.3s" }}
            >
              <h3
                className="text-xl font-bold mb-4 text-[#baf3cf] uppercase"
                style={{ fontFamily: "'Gochi Hand', cursive" }}
              >
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li
                  className={`transition-all duration-1000 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "0.35s" }}
                >
                  <span className="text-xl" aria-hidden="true">
                    📍
                  </span>
                  <span
                    className="text-base text-white/[0.78] block mt-1"
                    style={{ fontFamily: "'Gochi Hand', cursive" }}
                  >
                    In Front of Post Office, Near Truck Union, Vasundhara Nagar,
                    Manglana Road, Makrana Rajasthan India, Pin: 341505
                  </span>
                </li>
                <li
                  className={`transition-all duration-1000 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "0.4s" }}
                >
                  <span className="text-xl" aria-hidden="true">
                    📞
                  </span>
                  <a
                    href="tel:+917976732828"
                    className="text-base text-white/[0.78] hover:text-[#baf3cf] transition-colors block mt-1"
                    style={{ fontFamily: "'Gochi Hand', cursive" }}
                  >
                    +91 79767 32828
                  </a>
                </li>
              </ul>
            </address>
          </div>

          <div
            className={`border-t border-white/15 mb-6 transition-all duration-1000 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.45s" }}
          />

          {/* Bottom Bar */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <p
              className="text-base text-white/[0.78] text-center mb-8"
              style={{ fontFamily: "'Gochi Hand', cursive" }}
            >
              © {year} Aadidev Studio. All rights reserved.
            </p>
          </div>

          <ul
            className={`flex justify-center gap-3 transition-all duration-1000 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.55s" }}
          >
            {SOCIAL_ICONS.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 text-lg font-bold hover:scale-105 hover:text-[#baf3cf]"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
