"use client";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { Menu } from "lucide-react";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLElement>(null);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(
    () => {
      const t1 = gsap.timeline();

      t1.fromTo(
        "#Text",
        {
          x: -30,
          opacity: 0,
          duration: 0.5,
          ease: "back.in",
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          ease: "back.in",
        },
      );

      t1.fromTo(
        ".nav-link",
        {
          y: -30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
          stagger: 0.1,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.in",
        },
      );
    },
    {
      scope: navRef,
    },
  );

  return (
    <header className="relative z-50">
      <nav
        ref={navRef}
        id="navigations"
        aria-label="Main navigation"
        className="h-15 flex justify-between items-center font-sans"
      >
        <div id="Text" className="font-bold text-xl px-1 opacity-0">
          <span className="text-[#00D4FF]">keyur</span>
          <span>.dev</span>
        </div>

        <div className="flex items-center">
          {/* Container for Navlinks */}
          <ul className="hidden sm:flex flex-row justify-evenly items-center   text-[#4C586A] text-[16px] ">
            <Link
              href="/"
              className={`nav-link opacity-0 mx-5 font-medium ${pathname === "/" ? "text-[#00D4FF]" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="nav-link mx-5 font-medium opacity-0"
            >
              Projects
            </Link>
            <Link href="/about" className="nav-link mx-5 font-medium opacity-0">
              About
            </Link>
            <Link
              href="/contact"
              className="nav-link mx-5 font-medium opacity-0"
            >
              Contact
            </Link>

            <Button
              className={`nav-link opacity-0 mx-3 py-4 px-5 border-2 border-[#00D4FF] text-[#00D4FF] rounded-none cursor-pointer `}
            >
              Resume
            </Button>
          </ul>

          <div onClick={openNavbar} className="sm:hidden opacity-0 nav-link ">
            <Menu color="white" />
          </div>
        </div>
      </nav>

      {isOpen && <MobileNavbar />}
    </header>
  );
};

export default Navbar;
