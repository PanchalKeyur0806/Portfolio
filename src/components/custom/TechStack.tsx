"use client";
import Heading from "./Heading";
import TechCard from "./TechCard";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";
import { useSelectionAnimation } from "@/hooks/useSelectionAnimation";
const TechStack = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const techSections = [
    {
      name: "FRONTEND",
      skills: [
        "HTML",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "GSAP",
        "React.Js",
        "Next.Js",
      ],
    },
    {
      name: "BACKEND",
      skills: [
        "Node.Js",
        "Express.Js",
        "MongoDB",
        "Mongoose",
        "Prisma",
        "PostgreSQL",
        "REST APIs",
      ],
    },
    {
      name: "TOOLS",
      skills: ["VS Code", "Git", "Github", "Docker", "Antigravity"],
    },
  ];

  useSelectionAnimation({
    headingRef,
    sectionRef,
    cardRef,
    cardSelector: ".tech-card",
  });

  return (
    <section ref={sectionRef} className="mb-30">
      <Heading heading="Tech Stack" ref={headingRef} />

      <div
        ref={cardRef}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {techSections.map((section) => (
          <div key={section.name} className="tech-card w-full mt-10 md:mt-0">
            <TechCard section={section.name} skills={section.skills} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
