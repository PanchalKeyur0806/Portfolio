import socialLinks from "@/constants/sociallinks";
import { MdNavigateNext } from "react-icons/md";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactForm = () => {
  return (
    <section className="px-3 mb-20 sm:px-10 mt-20 py-5 flex flex-col md:flex-row">
      <div className="mt-5 w-full lg:w-1/2">
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
      <div className="mt-20 md:mt-0 w-full lg:w-1/2 border border-[#858597] px-3 md:px-10 py-3 md:py-10 rounded">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <Field>
            <FieldLabel className="text-[#00d4ff] font-bold">Name</FieldLabel>
            <Input
              type="text"
              placeholder="Enter Your Name"
              className="py-5 rounded border border-[#858597]"
            />
          </Field>

          <Field>
            <FieldLabel className="text-[#00d4ff] font-bold">Email</FieldLabel>
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="py-5 rounded border border-[#858597]"
            />
          </Field>
        </div>

        <Field className="mt-5">
          <FieldLabel className="text-[#00d4ff] font-bold">Subject</FieldLabel>
          <Input
            type="text"
            placeholder="Enter Your Subject"
            className="py-5 rounded border border-[#858597]"
          />
        </Field>

        <Field className="mt-5">
          <FieldLabel className="text-[#00d4ff] font-bold">Message</FieldLabel>
          <Textarea
            placeholder="Enter Your Message"
            className="py-5 rounded border border-[#858597] focus:ring-0 focus:outline-none h-37.5"
          />
        </Field>

        <Button
          className={
            "mt-5 bg-[#00d4ff] text-black font-medium px-10 py-6 rounded hover:bg-[#00d4ff] cursor-pointer "
          }
        >
          <span>Send Message</span>
          <span>
            <MdNavigateNext />
          </span>
        </Button>
      </div>
    </section>
  );
};

export default ContactForm;
