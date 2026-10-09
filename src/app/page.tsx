import AnimateSeparator from "@/components/custom/AnimateSeparator";
import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import LetsBuild from "@/components/custom/LetsBuild";
import Navbar from "@/components/custom/Navbar";
import Particles from "@/components/custom/Particles";
import Projects from "@/components/custom/Projects";
import TechStack from "@/components/custom/TechStack";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Navbar />
      <AnimateSeparator />

      <Hero />
      <AnimateSeparator />

      <TechStack />
      <AnimateSeparator />

      <Projects />

      <AnimateSeparator />
      <LetsBuild />

      <AnimateSeparator className={`bg-[#4C586A] w-full mt-10`} />
      <Footer />
    </>
  );
}
