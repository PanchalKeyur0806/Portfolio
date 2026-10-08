"use client";
import React, { useRef } from "react";
import Heading from "./Heading";
import { useSelectionAnimation } from "@/hooks/useSelectionAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Button } from "@base-ui/react";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useSelectionAnimation({
    sectionRef,
    headingRef,
    cardRef,
    cardSelector: ".project-card",
  });

  useGSAP(() => {
    if (!buttonRef.current) return;

    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power3.in",
        duration: 0.6,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
      },
    );
  });

  const projects = [
    {
      name: "Book Store API",
      description:
        "A full-stack bookstore application with authentication, book management, cart and order processing, Stripe payments, reviews, wishlist, admin analytics, Redis, and background jobs.",
      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Stripe",
        "Docker",
        "Cloudinary",
      ],
      links: "https://github.com/PanchalKeyur0806/BookStore",
    },
    {
      name: "Authentication API",
      description:
        "A secure authentication API with user registration, login, JWT-based authentication, role-based authorization, protected routes, and password security.",
      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "bcrypt",
        "Google Auth",
      ],
      links: "https://github.com/PanchalKeyur0806/authenticationApi",
    },
    {
      name: "URL Shortener",
      description:
        "A URL shortening service that generates short links, redirects users to original URLs, and provides a simple interface for managing shortened links.",
      techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "Tailwind CSS"],
      links: "https://github.com/PanchalKeyur0806/url-shortener",
    },
  ];

  return (
    <section ref={sectionRef} className="mt-20 mb-30">
      <Heading heading="Projects" ref={headingRef} />

      <div
        ref={cardRef}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {projects.map((project) => (
          <Card
            key={project.name}
            className="project-card bg-[#0C0C13] px-6 py-5 mt-10 md:mt-0 border border-[#11111B] font-sans hover:border-[#00D4FF] hover:shadow-[rgba(0,212,255,0.25)_0px_0px_5px_0px,rgba(0,212,255,0.15)_0px_0px_1px_0px] cursor-default"
          >
            <CardHeader>
              <CardTitle className="text-white font-bold text-2xl">
                {project.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-3">
              <p className="text-[#3D4B64] text-[14px]">
                {project.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {project.techStack.map((techStack: string) => (
                  <span
                    key={techStack}
                    className="bg-[#0B1C26] px-3 py-1 rounded text-[#00D4FF] border border-[#0778A3] font-mono"
                  >
                    {techStack}
                  </span>
                ))}
              </div>

              <div className="mt-15 text-[#3D4B64] hover:text-[#00D4FF]">
                <Link href={project.links}>GitHub</Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div ref={buttonRef} className="flex justify-center items-center mt-20">
        <Link href="/projects">
          <Button className="px-7 py-4 border border-gray-700 text-white rounded cursor-pointer flex items-center gap-3 hover:text-[#00D4FF] hover:border-[#00D4FF]">
            <span>View More Projects</span>
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
