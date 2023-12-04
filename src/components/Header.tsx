import React from "react";
import Wrapper from "./Wrapper";
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import Image from "next/image";
import Logo from "../assets/images/biotoolhub_logo.svg";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <div className="sticky top-0 inset-x-0 border-b border-gray-300 bg-white h-14">
      <Wrapper>
        <div className="flex items-center justify-between h-full">
          {/* logo */}
          <div className="flex items-center gap-4">
            <div className="flex md:hidden">
              <MobileSidebar />
            </div>

            <Image
              src={Logo}
              alt="biotoolhub-logo"
              width={150}
              height={150}
              style={{ marginBottom: 13 }}
            />
          </div>

          {/* search */}
          <Searchbar />
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
