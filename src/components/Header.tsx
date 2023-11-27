import React from "react";
import Wrapper from "./Wrapper";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky top-0 inset-x-0 border-b border-gray-300 bg-black h-14">
      <Wrapper>
        <div className="flex items-center justify-between  h-full">
          {/* logo */}
          <div className="flex items-center gap-4">
            <div className="flex md:hidden">
              <Menu size={28} color="white" />
            </div>
            <h2 className="text-white text-2xl font-bold">
              Biotool
              <span className="bg-yellow-500 px-1 mx-1 rounded-md text-black">
                hub
              </span>
            </h2>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
