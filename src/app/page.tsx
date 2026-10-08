import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
import Particles from "@/components/custom/Particles";
import Projects from "@/components/custom/Projects";
import TechStack from "@/components/custom/TechStack";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Navbar />
      <Separator className={`bg-[#4C586A]`} />
      <Hero />
      <Separator className={`bg-[#4C586A]`} />
      <TechStack />
      <Separator className={`bg-[#4C586A]`} />
      <Projects />
    </>
  );
}
