"use client";

import emailjs from "@emailjs/browser";
import socialLinks from "@/constants/sociallinks";
import { MdNavigateNext } from "react-icons/md";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const ContactForm = () => {
  const [loading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sectionRef = useRef<HTMLElement>(null);
  const refOne = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const templateParams = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        },
      );

      setStatus("Email send successfully");
      setIsLoading(false);
      form.reset();
    } catch (error) {
      setIsLoading(false);
      setStatus("");
      console.error(error);
    }
  }

  useGSAP(
    () => {
      if (!refOne.current || !formRef.current) return;

      const refOneElements = gsap.utils.toArray<HTMLElement>(
        refOne.current.children,
      );
      const formRefElements = gsap.utils.toArray<HTMLElement>(
        formRef.current.children,
      );

      refOneElements.forEach((elem) => {
        gsap.fromTo(
          elem,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            scrollTrigger: {
              trigger: elem,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
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
      className="px-3 mb-20 sm:px-10 mt-20 py-5 flex flex-col md:flex-row"
    >
      <div ref={refOne} className="mt-5 w-full lg:w-1/2">
        <div>
          <h4 className="font-bold text-[#00d4ff] text-xl">Email</h4>
          <p className="font-bold mt-2">panchalkeyur694@gmail.com</p>
        </div>

        <div className="mt-10">
          <h4 className="font-bold text-[#00d4ff] text-xl">Availability</h4>
          <p className="font-bold mt-2 flex gap-2 items-center">
            <span className="size-3 bg-[#00d4ff] rounded-full"></span>
            <span> Open to full-time roles and freelance projects.</span>
          </p>
        </div>

        <div className="mt-10">
          <h4 className="font-bold text-[#00d4ff] text-xl mb-2">Elsewhere</h4>
          {socialLinks.map((link) => (
            <div
              key={link.name}
              className="flex items-center gap-2 mt-2 text-[#858597]"
            >
              <span className="cursor-pointer">{link.logo}</span>
              <span className="cursor-pointer">{link.link}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div
        ref={formRef}
        className="mt-20 md:mt-0 w-full lg:w-1/2 border border-[#858597] px-3 md:px-10 py-3 md:py-10 rounded"
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Field>
              <FieldLabel className="text-[#00d4ff] font-bold">Name</FieldLabel>
              <Input
                type="text"
                placeholder="Enter Your Name"
                className="py-5 rounded border border-[#858597]"
                name="name"
              />
            </Field>

            <Field>
              <FieldLabel className="text-[#00d4ff] font-bold">
                Email
              </FieldLabel>
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="py-5 rounded border border-[#858597]"
                name="email"
              />
            </Field>
          </div>

          <Field className="mt-5">
            <FieldLabel className="text-[#00d4ff] font-bold">
              Subject
            </FieldLabel>
            <Input
              type="text"
              placeholder="Enter Your Subject"
              className="py-5 rounded border border-[#858597]"
              name="subject"
            />
          </Field>

          <Field className="mt-5">
            <FieldLabel className="text-[#00d4ff] font-bold">
              Message
            </FieldLabel>
            <Textarea
              placeholder="Enter Your Message"
              className="py-5 rounded border border-[#858597] focus:ring-0 focus:outline-none h-37.5"
              name="message"
            />
          </Field>

          <Button
            type="submit"
            className={
              "mt-5 bg-[#00d4ff] text-black font-medium px-10 py-6 rounded hover:bg-[#00d4ff] cursor-pointer "
            }
          >
            <span>{loading ? "Sending..." : "Send Email"}</span>
            <span>
              <MdNavigateNext />
            </span>
          </Button>

          <p role="status" className="font-bold mt-4 text-green-700">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
