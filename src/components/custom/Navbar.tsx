"use client"
import gsap from "gsap";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


const Navbar = () => {
  const pathname = usePathname()

  useEffect(() => {
    gsap.set("#Text", { x: -30 })
    gsap.set(".nav-link", { y: -30, opacity: 0 })


    gsap.to("#Text", {
      x: 0,
      opacity: 1,
      ease: "back.in"
    })

    const ctx = gsap.context(() => {
      gsap.to(".nav-link", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power1.in",
        stagger: 0.2
      })

      return () => ctx.revert();

    })
  }, [])



  return (
    <nav
      id="navigations"
      aria-label="Main navigation"
      className="h-15  flex justify-between items-center font-sans"
    >
      <div id="Text" className="font-bold text-xl px-1 opacity-0">
        <span className="text-[#00D4FF]">keyur</span>
        <span>.dev</span>
      </div>

      <div className="flex   justify-evenly items-center   text-[#4C586A] text-[16px] ">
        <Link href="/" className={`nav-link mx-5 font-medium ${pathname === "/" ? "text-[#00D4FF]" : ""}`} >
          Home
        </Link>
        <Link href="/projects" className="nav-link mx-5 font-medium">
          Projects
        </Link>
        <Link href="/about" className="nav-link mx-5 font-medium">
          About
        </Link>
        <Link href="/contact" className="nav-link mx-5 font-medium">
          Contact
        </Link>

        <Button
          className={`nav-link mx-3 py-4 px-5 border-2 border-[#00D4FF] text-[#00D4FF] rounded-none cursor-pointer `}
        >
          Hire Me
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
