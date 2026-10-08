"use client";
import { gsap } from "@/lib/gsap";
import React, { useEffect, useRef } from "react";

const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles = containerRef.current.children;

    const { width, height } = containerRef.current.getBoundingClientRect();

    // loop through all particles
    Array.from(particles).forEach((particle) => {
      // get current element
      const element = particle as HTMLDivElement;

      // set the intital postition of particles
      gsap.set(element, {
        x: Math.random() * width,
        y: Math.random() * height,
        opacity: Math.random() * 0.5 + 0.1,
        scale: Math.random() * 0.5 + 0.1,
      });

      // move out each particle
      gsap.to(element, {
        x: `+=${Math.random() * 150 - 50}`,
        y: `+=${Math.random() * 150 - 50}`,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        duration: Math.random() * 5 + 5,
      });

      // blick each particle
      gsap.to(element, {
        opacity: Math.random() * 0.4 + 1,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      gsap.killTweensOf(particles);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none  overflow-hidden"
    >
      {Array.from({ length: 200 }).map((_, i) => (
        <div
          key={i}
          className="absolute size-1 rounded-full bg-[#00D4FF] opacity-0.3"
        />
      ))}
    </div>
  );
};

export default Particles;
