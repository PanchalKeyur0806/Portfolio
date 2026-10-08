"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const MobileNavbar = () => {
  const pathname = usePathname();

  useGSAP(() => {
    gsap.set("#MobileNavbar", {
      x: "100%",
    });

    gsap.to("#MobileNavbar", {
      x: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });
  });

  return (
    <div
      id="MobileNavbar"
      className="absolute  top-15 w-full z-50 bg-white rounded"
    >
      <ul className="w-full py-3 text-[#4C586A] text-[16px] flex flex-col items-center space-y-5">
        <Link
          href="/"
          className={`nav-link  mx-5 font-medium ${pathname === "/" ? "text-[#00D4FF] font-bold" : ""}`}
        >
          Home
        </Link>
        <Link href="/projects" className="nav-link mx-5 font-medium ">
          Projects
        </Link>
        <Link href="/about" className="nav-link mx-5 font-medium ">
          About
        </Link>
        <Link href="/contact" className="nav-link mx-5 font-medium ">
          Contact
        </Link>

        <Button
          className={`nav-link mx-3 py-4 px-5 border-2 border-[#00D4FF] text-[#00D4FF] rounded-none cursor-pointer `}
        >
          Resume
        </Button>
      </ul>
    </div>
  );
};

export default MobileNavbar;
