import Navbar from "@/components/component/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
