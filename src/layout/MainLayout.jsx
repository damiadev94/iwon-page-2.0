import React from "react";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="relative">
      <div className="bg-[url('../../public/images/granulado_3.1.1.jpg')] w-full h-screen">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
