import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "../Sidebar/Sidebar";
import { Menu } from "lucide-react";
import Image from "next/image";
import Logo from "../../assets/images/biotoolhub_logo.svg";

const MobileSidebar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="text-white">
          <Menu size={28} color="black" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="border-b border-gray-300 pb-3">
            <SheetTitle>
              <Image
                src={Logo}
                alt="biotoolhub-logo"
                width={150}
                height={150}
                style={{ marginBottom: 13 }}
              />
            </SheetTitle>
          </SheetHeader>
          <SheetDescription className="h-full max-h-screen">
            <div className="overflow-y-auto max-h-full">
              <Sidebar />
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
