"use client";
import AnimateSeparator from "@/components/custom/AnimateSeparator";
import Heading from "@/components/custom/Heading";
import ProjectSection from "@/components/custom/ProjectSection";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import projects from "@/constants/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink, ShoppingCart } from "lucide-react";

const Projects = () => {
  const [active, setActive] = useState<string>("ALL");
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  //   useGSAP hook
  useGSAP(
    () => {
      if (!headingRef.current || !projectsRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

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
        },
      );

      //   Projects card animation
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power3.in",
            duration: 0.7,
            stagger: 0.3,
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
    <main className="min-h-screen w-full" ref={sectionRef}>
      <AnimateSeparator />
      <section className="sm:px-10 px-3" ref={headingRef}>
        <Heading heading="Projects" />

        <div className="mt-5">
          <h3 className="text-xl text-[#858597]">
            Things I've built — from side experiments to production systems.
          </h3>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectSection
        active={active}
        setActive={setActive}
        length={projects.length}
      />

      {/* Project Lists */}
      <section
        ref={projectsRef}
        className="sm:px-10 px-3 mt-30 mb-20 pb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-b  border-[#4C586A] "
      >
        {projects.map((project) => (
          <Card
            key={project.name}
            className="project-card bg-[#0C0C13] px-3 md:px-6 py-5 mt-10 md:mt-0 border border-[#11111B] font-sans hover:border-[#00D4FF] hover:shadow-[rgba(0,212,255,0.25)_0px_0px_5px_0px,rgba(0,212,255,0.15)_0px_0px_1px_0px] cursor-default"
          >
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-white font-bold text-2xl">
                {project.name}
              </CardTitle>
              <CardTitle
                className={`text-white font-bold text-[11px]  border px-2 py-1 ${project.tag === "OPEN SOURCE" ? "text-green-500 border-green-500" : "text-blue-500 border-blue-500"}`}
              >
                {project.tag}
              </CardTitle>
            </CardHeader>

            <CardContent className="mt-3">
              <p className="text-[#858597] text-[14px]">
                {project.description1}
              </p>

              {project.description2 && (
                <p className="mt-5 text-[#858597] text-[14px]">
                  {project.description2}
                </p>
              )}

              <div className="mt-10 flex flex-wrap gap-2">
                {project.technology.map((techStack: string) => (
                  <span
                    key={techStack}
                    className="bg-[#0B1C26] px-3 py-1 rounded text-[#00D4FF] border border-[#0778A3] font-mono"
                  >
                    {techStack}
                  </span>
                ))}
              </div>

              <div className={`mt-20 border-t border-[#4C586A] pt-5`}>
                {/* Product Link */}
                {project.links.type === "product" && (
                  <Link
                    href={project.links.url}
                    className="text-[#858597] text-[14px] flex items-center gap-2 hover:fond-bold hover:text-[#00d4ff]"
                  >
                    <span>
                      <ShoppingCart size={18} />
                    </span>
                    <span>{project.links.name}</span>
                  </Link>
                )}

                {/* GitHub Link */}
                {project.links.type === "github" && (
                  <Link
                    href={project.links.url}
                    className="text-[#858597] text-[14px] flex items-center gap-2 hover:fond-bold hover:text-[#00d4ff]"
                  >
                    <span>
                      <ExternalLink size={18} />
                    </span>
                    <span> {project.links.name}</span>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default Projects;
