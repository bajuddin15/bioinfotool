"use client";
import React from "react";
import useData from "./data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {}

const Sidebar: React.FC<IProps> = ({}) => {
  const { state } = useData();
  const { sidebarData } = state;

  const pathName = usePathname();
  return (
    <div className="md:border-r border-gray-300 py-5 px-5 md:px-10 md:max-h-full md:overflow-y-auto">
      {sidebarData.map((item, index) => (
        <div key={index} className="pb-3">
          <Link href={item.href}>
            <h2 className={`text-sm font-semibold text-black`}>{item.name}</h2>
          </Link>
          {item.data.map((inerItem, index) => (
            <div key={index} className="my-2">
              <Link href={inerItem.href}>
                <p
                  className={`text-[14px] text-muted-foreground ${
                    pathName === inerItem.href
                      ? "text-yellow-500 font-semibold"
                      : "hover:underline"
                  }`}
                >
                  {inerItem.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
