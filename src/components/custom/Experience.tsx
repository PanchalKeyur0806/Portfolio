"use client";
import { useRef } from "react";
import Heading from "./Heading";
import experience from "@/constants/experience";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!headingRef.current || !cardRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(cardRef.current.children);

      //   Heading animation
      gsap.fromTo(
        headingRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power3.in",
          duration: 0.7,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power3.in",
            duration: 0.7,
            scrollTrigger: {
              trigger: card,
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
    <section ref={sectionRef} className="px-3 sm:px-10 mb-20">
      <Heading heading="EXPERIENCE" ref={headingRef} />

      <div ref={cardRef} className="mt-20">
        {experience.map((exp) => (
          <div key={exp.role} className="px-3 py-2 rounded-md mt-7 sm:mt-15">
            <div>
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold">{exp.role}</h4>
                <p className="text-[#858597]">{exp.timeline}</p>
              </div>

              <div>
                <p className="text-[#00D4FF] font-bold">{exp.company}</p>
              </div>
            </div>

            <div className="mt-5 text-[#858597]">
              <p>{exp.description}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 md:gap-5">
              {exp.technology.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[14px] border border-[#00d4ff] rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
