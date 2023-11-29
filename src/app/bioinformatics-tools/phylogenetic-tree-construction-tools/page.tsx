import Wrapper from "@/components/Wrapper";
import React from "react";
import CuratedListTool from "../components/CuratedListTool";
import useData from "../data";

const Page = () => {
  const { state } = useData();
  const { toolsList } = state;
  const index = 10;
  const data = toolsList[index];
  return (
    <Wrapper>
      <CuratedListTool data={data} index={index} />
    </Wrapper>
  );
};

export default Page;
