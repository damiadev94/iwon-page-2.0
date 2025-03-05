import React from "react";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="relative w-full min-h-screen bg-[url('/images/grainy.jpg')]">
      <Navbar />
      {children}
      <div className="flex flex-col gap-2 w-full h-48 justify-center items-center">
        <span className="text-white flex items-center justify-center text-2xl font-bold">
          IWON 
        </span>
        <span className=" text-white text-xs font-light block">Más de 350 Videoclips Producidos. 🚀</span>
      </div>
    </div>
  );
}

export default MainLayout;
