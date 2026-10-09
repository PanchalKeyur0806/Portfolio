"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      gsap.fromTo(
        footerRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.in",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        },
      );
    },
    {
      scope: footerRef,
    },
  );

  return (
    <>
      <footer
        ref={footerRef}
        className="h-55 flex flex-col gap-5 items-center  font-sans"
      >
        <div className="py-3 md:px-20 gap-3 w-full flex flex-col md:flex-row items-center justify-between border-b border-[#65758b]">
          {/* name */}
          <div>
            <p className="font-bold text-xl">
              <span className="text-[#00d4ff]">keyur</span>
              <span>.dev</span>
            </p>
          </div>
          {/* links */}
          <div>
            <ul className="flex items-center gap-3 text-[#65758b]">
              <Link href={"/"}>HOME</Link>
              <Link href={"/projects"}>PROJECTS</Link>
              <Link href={"/about"}>ABOUT</Link>
              <Link href={"/contact"}>CONTACT</Link>
            </ul>
          </div>
          {/* social icons */}
          <div className="flex items-center gap-3">
            <Link href={"https://github.com/PanchalKeyur0806/"}>
              <FaGithub size={20} color="#65758b" />
            </Link>
            <Link href={"https://www.linkedin.com/in/keyur-panchal-7a04a0361"}>
              <FaLinkedin size={20} color="#65758b" />
            </Link>
            <Link href={"https://medium.com/@panchalkeyur.dev"}>
              <FaMedium size={20} color="#65758b" />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-[#65758b] font-mono text-sm">
            © 2026 Keyur. Built with precision.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
