import React from "react";
import useData from "./data";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const TutorialGuidePage = () => {
  const { state } = useData();
  const { tutorialsData } = state;
  return (
    <Wrapper>
      {/* header */}
      <div className="flex flex-col gap-5 my-5">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Tutorials and Guides
        </h2>

        <div>
          <p className="text-sm text-muted-foreground mt-1 mb-5">
            Explore our comprehensive tutorials and guides designed to help you
            master bioinformatics tools and analyses. Whether you're a beginner
            or an experienced researcher, these resources provide step-by-step
            instructions, practical examples, and valuable insights to enhance
            your bioinformatics skills.
          </p>
          <ul className="text-muted-foreground text-sm flex flex-col gap-4 mt-1">
            {tutorialsData.map((list, index) => (
              <div key={index}>
                <Link href={list.href}>
                  <li>
                    <span className="font-semibold">
                      {index + 1}. {list.name}
                    </span>{" "}
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default TutorialGuidePage;
