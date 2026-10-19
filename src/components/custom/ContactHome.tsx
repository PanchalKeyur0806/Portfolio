"use client";
import { useGSAP } from "@gsap/react";
import AnimateSeparator from "./AnimateSeparator";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";

const ContactHome = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const elements = gsap.utils.toArray<HTMLElement>(
        sectionRef.current.children,
      );
      const timeline = gsap.timeline({ delay: 0.3 });

      elements.forEach((elem) => {
        timeline.fromTo(
          elem,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            scrollTrigger: {
              trigger: elem,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    },
    {
      scope: sectionRef,
    },
  );
  return (
    <>
      <section
        ref={sectionRef}
        className="px-3 sm:px-10 font-sans h-[45vh] flex justify-center flex-col"
      >
        <div className="text-6xl font-bold ">
          <h1>Get In Touch</h1>
        </div>

        <div className="w-full lg:w-1/2 md:w-2/3 mt-5">
          <p className="text-xl text-[#858597]">
            Have a project in mind or want to work together? Drop me a message
            and I'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <AnimateSeparator />
    </>
  );
};

export default ContactHome;
