import { Sidebar } from "@/components/component/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex items-center  flex-col md:flex-row justify-center h-screen">
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;
