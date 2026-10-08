import React from "react";

const TechCard = ({
  section,
  skills,
}: {
  section: string;
  skills: string[];
}) => {
  return (
    <div className="px-3 py-1">
      <div>
        <h2 className="text-[#065C6B] font-bold font-sans">{section}</h2>
      </div>

      <div className="mt-7 flex flex-wrap gap-5">
        {skills.map((skill) => (
          <span
            key={skill}
            className=" px-3 py-2 text-[12px] font-mono border-2 border-[#4C586A] rounded hover:text-[#00D4FF] hover:border-[#00D4FF] cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
