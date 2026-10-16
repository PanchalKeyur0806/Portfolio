import { Button } from "../ui/button";
import AnimateSeparator from "./AnimateSeparator";

const ProjectSection = ({
  length,
  active,
  setActive,
}: {
  length: number;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <section className="mt-30 text-[#858597] h-full">
      <div className="py-5 flex justify-between items-center border-t border-b border-[#858597]">
        <div className="flex gap-3 font-mono px-3 sm:px-10">
          <Button
            onClick={() => setActive("ALL")}
            className={`border hover:border-[#00d4ff] rounded-none px-6  py-5 cursor-pointer ${active === "ALL" ? "text-[#00d4ff] border-[#00d4ff]" : "text-[#858597] border-[#858597]"}`}
          >
            ALL
          </Button>
          <Button
            onClick={() => setActive("FEATURED")}
            className={`border hover:border-[#00d4ff] rounded-none px-6  py-5 cursor-pointer ${active === "FEATURED" ? "text-[#00d4ff] border-[#00d4ff]" : "text-[#858597] border-[#858597]"}`}
          >
            FEATURED
          </Button>
          <Button
            onClick={() => setActive("OPEN SOURCE")}
            className={`border hover:border-[#00d4ff] rounded-none px-6  py-5 cursor-pointer ${active === "OPEN SOURCE" ? "text-[#00d4ff] border-[#00d4ff]" : "text-[#858597] border-[#858597]"}`}
          >
            OPEN SOURCE
          </Button>
        </div>

        <div className="font-sans px-3 sm:px-10">
          <p>{length} projects</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
