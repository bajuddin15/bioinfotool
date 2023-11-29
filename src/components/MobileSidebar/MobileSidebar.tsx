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

const MobileSidebar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="text-white">
          <Menu size={28} color="white" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="border-b border-gray-300 pb-3">
            <SheetTitle>
              <h2 className="text-2xl font-bold text-black">
                Biotool
                <span className="bg-yellow-500 px-1 mx-1 rounded-md">hub</span>
              </h2>
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
