import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
 

type useSelectionAnimationProps = {
    sectionRef: React.RefObject<HTMLElement | null>;
    headingRef: React.RefObject<HTMLDivElement | null>;
    cardRef: React.RefObject<HTMLDivElement | null>;
    cardSelector: string
}

export const useSelectionAnimation = ({sectionRef, headingRef, cardRef, cardSelector}:useSelectionAnimationProps)=> {
     useGSAP(
    () => {
      if (!headingRef.current || !cardRef.current ) return;

    //   Heading Animation
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power4.in",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 70%",
          },
        },
      );

    //   Card Animation
      gsap.fromTo(
        cardSelector,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.in",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "0 70%",
          },
        },
      );
    },
    {
      scope: sectionRef,
    },
  );
}