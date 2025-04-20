"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <section className="bg-primary text-white h-screen flex items-center justify-center" ref={heroRef}>
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-heading">Global Logistics, Redefined</h1>
        <p className="text-xl max-w-xl mx-auto">AI-driven supply chains for Fortune 500 precision</p>
        <a
          href="/#contact"
          className="bg-secondary text-primary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Request a Supply Chain Audit
        </a>
      </div>
    </section>
  );
}