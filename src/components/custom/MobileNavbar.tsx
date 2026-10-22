"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

interface MobileNavbar {
  onClose: () => void;
}

const MobileNavbar = ({ onClose }: MobileNavbar) => {
  const pathname = usePathname();

  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.fromTo(
      "#MobileNavbar",
      { clipPath: "circle(0% at 90% 0%)" },
      {
        clipPath: "circle(150% at 90% 0%)",
        duration: 0.7,
        ease: "power3.inOut",
      },
    );
  });

  return (
    <div
      id="MobileNavbar"
      className="absolute inset-x-0  top-15 w-full h-[1000vh] z-50 bg-[#0A0A10] rounded"
    >
      <ul className="w-full mt-20 px-6 py-6 text-[#4C586A] text-2xl flex flex-col gap-4">
        <li>
          <Link
            href="/"
            onClick={onClose}
            className={`nav-link block mx-2 px-4 py-3 font-medium border-l-2 transition-all duration-300 hover:translate-x-2 hover:text-[#00D4FF] ${
              pathname === "/"
                ? "text-[#00D4FF] font-bold border-[#00D4FF]"
                : "border-transparent"
            }`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/projects"
            onClick={onClose}
            className={`nav-link block mx-2 px-4 py-3 font-medium border-l-2 transition-all duration-300 hover:translate-x-2 hover:text-[#00D4FF] ${
              pathname === "/projects"
                ? "text-[#00D4FF] font-bold border-[#00D4FF]"
                : "border-transparent"
            }`}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            onClick={onClose}
            className={`nav-link block mx-2 px-4 py-3 font-medium border-l-2 transition-all duration-300 hover:translate-x-2 hover:text-[#00D4FF] ${
              pathname === "/about"
                ? "text-[#00D4FF] font-bold border-[#00D4FF]"
                : "border-transparent"
            }`}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            onClick={onClose}
            className={`nav-link block mx-2 px-4 py-3 font-medium border-l-2 transition-all duration-300 hover:translate-x-2 hover:text-[#00D4FF] ${
              pathname === "/contact"
                ? "text-[#00D4FF] font-bold border-[#00D4FF]"
                : "border-transparent"
            }`}
          >
            Contact
          </Link>
        </li>

        <li className="mt-6 px-2">
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Keyur Panchal Resume.pdf";
              link.download = "Keyur Panchal Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="nav-link w-full py-4 px-5 border-2 border-[#00D4FF] text-[#00D4FF] rounded-none font-semibold tracking-wider cursor-pointer transition-all duration-300 hover:bg-[#00D4FF] hover:text-[#4C586A]"
          >
            Resume
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
