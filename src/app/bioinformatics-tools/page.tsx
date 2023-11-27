import Wrapper from "@/components/Wrapper";
import React from "react";
import useData from "./data";

const BioinformaticsTools = () => {
  const { state } = useData();
  const { toolsData } = state;
  return (
    <Wrapper>
      {/* header */}
      <div className="flex flex-col gap-5 my-5">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Featured Bioinformatics Tools
        </h2>

        {/* overview */}
        <div>
          <p className="text-sm text-muted-foreground mt-1">
            Explore these popular and widely used bioinformatics tools that are
            essential for various analyses. Click on each tool to learn more
            about its features, applications, and how it can contribute to your
            projects.
          </p>
        </div>

        {/* all tools in cards */}
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className="bg-white h-40 rounded-3xl p-5 shadow-md border border-gray-300"
            >
              tool
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default BioinformaticsTools;
