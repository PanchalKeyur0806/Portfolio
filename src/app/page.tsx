import AnimateSeparator from "@/components/custom/AnimateSeparator";
import Hero from "@/components/custom/Hero";
import LetsBuild from "@/components/custom/LetsBuild";
import Projects from "@/components/custom/Projects";
import TechStack from "@/components/custom/TechStack";

export default function Home() {
  return (
    <>
      <AnimateSeparator />

      <Hero />
      <AnimateSeparator />

      <TechStack />
      <AnimateSeparator />

      <Projects />

      <AnimateSeparator />
      <LetsBuild />

      <AnimateSeparator className={`bg-[#4C586A] w-full mt-10`} />
    </>
  );
}
