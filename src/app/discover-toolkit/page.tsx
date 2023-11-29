import Wrapper from "@/components/Wrapper";
import React from "react";
import useData from "./data";

const DiscoverToolkit = () => {
  const { state } = useData();
  const { toolkitData } = state;
  return (
    <Wrapper>
      {/* header */}
      <div className="flex flex-col gap-5 my-5">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Biotool Hub
        </h2>

        {/* overview */}
        <div>
          <h2 className="text-lg font-semibold">
            Discover Your Bioinformatics Toolkit :
          </h2>
          <p className="text-sm text-muted-foreground mt-1 mb-5">
            Navigate our categorized list of bioinformatics tools designed for
            specific research areas. From genomics to structural analysis, find
            the right tools to elevate your research effortlessly. Explore,
            select, and uncover the perfect solutions for your bioinformatics
            needs.
          </p>
          <ul className="text-muted-foreground text-sm flex flex-col gap-4 mt-1">
            {toolkitData.map((item, index) => (
              <div key={index}>
                <li>
                  <span className="text-yellow-600 font-semibold">
                    {index + 1}. {item.name}:
                  </span>{" "}
                </li>
                <ul className="list-disc ml-10">
                  {item.data.map((inerItem, index) => (
                    <li key={index}>{inerItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default DiscoverToolkit;
