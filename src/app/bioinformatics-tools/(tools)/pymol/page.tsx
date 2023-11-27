import Wrapper from "@/components/Wrapper";
import React from "react";
import useData from "../../data";
import Toolinfo from "../components/Toolinfo";

const Page = () => {
  const { state } = useData();
  const { toolsData } = state;
  const index = 10;
  const data = toolsData[index];
  return (
    <Wrapper>
      <Toolinfo data={data} index={index} />
    </Wrapper>
  );
};

export default Page;
