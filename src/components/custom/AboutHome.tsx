"use client";
import { useGSAP } from "@gsap/react";
import { Button } from "../ui/button";
import { FaDownload } from "react-icons/fa";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";

const AboutHome = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // get all the elements
      const elements = gsap.utils.toArray<HTMLElement>(
        sectionRef.current.children,
      );

      // create timeline with 0.4 second delay
      const timeline1 = gsap.timeline({ delay: 0.4 });

      // perform animation on each and every elements
      elements.forEach((elem) => {
        timeline1.fromTo(
          elem,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            scrollTrigger: {
              trigger: elem,
              start: "top 80%",
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
    <section ref={sectionRef} className="font-sans px-3 py-5 sm:px-10 sm:py-8 ">
      <div className="mt-25">
        <h1 className="text-7xl font-bold">Keyur</h1>
      </div>

      <div className="mt-10 flex items-center gap-5">
        <div className="flex items-center gap-3 border border-[#00d4ff] px-3 py-2 rounded cursor-pointer">
          <span className="size-3 bg-[#00D4FF] rounded-full"></span>
          <span className="text-[#00D4FF]">Open to work</span>
        </div>
        <div className="flex items-center gap-3 border border-[#858597] px-3 py-2 rounded cursor-pointer">
          <span></span>
          <span className="text-[#858597]">Ahmedabad, India</span>
        </div>
      </div>

      <div className="mt-10 w-full md:w-2/3 lg:w-1/2 text-xl text-[#858597]">
        <p>
          I'm a Full-Stack Developer who enjoys building things that are fast,
          reliable, and well-crafted. I care about the details — clean APIs,
          snappy UIs, and code that's easy to reason about.
        </p>
      </div>

      <div className="mt-10 w-full md:w-2/3 lg:w-1/2 text-xl text-[#858597]">
        <p>
          I've worked across the stack — from designing database schemas to
          shipping pixel-perfect React interfaces. I'm comfortable owning a
          feature end-to-end.
        </p>
      </div>

      <div className="mt-10">
        <Button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Keyur Panchal Resume.pdf";
            link.download = "Keyur Panchal Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="bg-[#00D4FF] text-black px-10 py-6 cursor-pointer rounded text-[18px] hover:bg-[#00d4ff] flex items-center gap-2"
        >
          <FaDownload />
          <span>Download Resume</span>
        </Button>
      </div>
    </section>
  );
};

export default AboutHome;
