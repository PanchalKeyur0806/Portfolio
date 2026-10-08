import React from "react";

const Heading = ({
  heading,
  ref,
}: {
  heading: string;
  ref?: React.Ref<HTMLDivElement>;
}) => {
  return (
    <div ref={ref} className="mt-30 text-4xl text-white font-bold font-mono">
      <h2>{heading}</h2>
    </div>
  );
};

export default Heading;
