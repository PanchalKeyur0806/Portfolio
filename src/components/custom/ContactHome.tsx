import React from "react";
import AnimateSeparator from "./AnimateSeparator";

const ContactHome = () => {
  return (
    <>
      <section className="px-3 sm:px-10 font-sans h-[45vh] flex justify-center flex-col">
        <div className="text-6xl font-bold ">
          <h1>Get In Touch</h1>
        </div>

        <div className="w-full lg:w-1/2 md:w-2/3 mt-5">
          <p className="text-xl text-[#858597]">
            Have a project in mind or want to work together? Drop me a message
            and I'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <AnimateSeparator />
    </>
  );
};

export default ContactHome;
