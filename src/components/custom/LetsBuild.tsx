"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const LetsBuild = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // contact functionality
  const gmail = "panchalkeyur694@gmail.com";
  const subject = encodeURIComponent("Regarding job opportunities");
  const body = encodeURIComponent(
    "Hi, I visited your portfolio and would like to connect.",
  );
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(gmail)}&su=${subject}&body=${body}`;

  const openGmail = () => {
    window.open(
      gmailUrl,
      "gmailWindow",
      "width=600,height=650,left=200,top=100,resizable=yes,scrollbars=yes",
    );
  };

  useGSAP(
    () => {
      if (!headingRef.current || !buttonRef.current) return;

      gsap.fromTo(
        headingRef.current,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.in",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
          },
        },
      );

      gsap.fromTo(
        buttonRef.current,
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.in",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
          },
        },
      );
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="h-100 px-1 mt-7 md:mt-0 md:px-10 bg-lienar-to-r from-[#0A1016] to-[#0A0A0F] flex flex-col gap-20 md:flex-row justify-center items-center md:justify-between font-sans"
    >
      <div ref={headingRef}>
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center font-mono">
            Let's Build Something.
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-[#3D4B64] text-xl text-center">
            Open to full-time roles and freelance projects.
          </p>
        </div>
      </div>

      <div ref={buttonRef}>
        <div>
          <Button
            onClick={openGmail}
            className={
              "px-10 py-6 bg-[#00D4FF] text-black rounded hover:bg-[#00D4FF] cursor-default text-[16px] w-55 md:w-70 h-18.75"
            }
          >
            Get In Touch
          </Button>
        </div>
        <div className="mt-1">
          <p className="text-[#3D4B64] text-[13px] text-center">
            panchalkeyur694@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default LetsBuild;
