import Wrapper from "@/components/Wrapper";
import React from "react";
import TutorialInfo from "../components/TutorialInfo";
import useData from "../data";

const Page = () => {
  const { state } = useData();
  const { tutorialsData } = state;
  const index = 6;
  const data = tutorialsData[index];
  return (
    <Wrapper>
      <TutorialInfo data={data} index={index} />
    </Wrapper>
  );
};

export default Page;
