import React from "react";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="relative w-full min-h-screen bg-[url('/images/grainy.jpg')]">
      <Navbar />
      {children}
      <div className="absolute bottom-0 flex w-full h-48 justify-center items-center">
        <span className="text-white flex items-center justify-center text-2xl font-bold">
          IWON
        </span>
      </div>
    </div>
  );
}

export default MainLayout;
