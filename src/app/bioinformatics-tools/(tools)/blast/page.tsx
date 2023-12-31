"use client";
import Wrapper from "@/components/Wrapper";
import React from "react";
import useData from "../../data";
import Toolinfo from "../components/Toolinfo";
import { usePathname } from "next/navigation";

const Page = ({ params }: { params: any }) => {
  const pathName = usePathname();
  const { state } = useData();
  const { toolsData } = state;
  const index = 0;
  const data = toolsData[index];
  return (
    <Wrapper>
      <Toolinfo data={data} index={index} />
    </Wrapper>
  );
};

export default Page;
