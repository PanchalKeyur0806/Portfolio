"use client";
import { gsap } from "@/lib/gsap";

import React, { useRef } from "react";
import { Separator } from "../ui/separator";
import { useGSAP } from "@gsap/react";

const AnimateSeparator = ({ className }: { className?: string }) => {
  const selectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const element = selectionRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        },
      },
    );
  });

  return (
    <section ref={selectionRef}>
      <Separator className={` bg-[#4C586A] ${className}`} />
    </section>
  );
};

export default AnimateSeparator;
