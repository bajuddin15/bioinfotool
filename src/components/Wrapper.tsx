import React, { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:container md:mx-auto w-full h-full px-5 md:px-10">
      {children}
    </div>
  );
};

export default Wrapper;
