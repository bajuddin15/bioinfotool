"use client";
import React from "react";
import useData from "./data";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import {} from 'lucide-react'

const Sidebar = () => {
  const { state } = useData();
  const { sidebarData } = state;

  const pathName = usePathname();
  return (
    <div className="border-r border-gray-300 py-5 px-5 md:px-10">
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
