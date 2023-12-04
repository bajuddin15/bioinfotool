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
      </div>
    </Wrapper>
  );
};

export default BioinformaticsTools;
