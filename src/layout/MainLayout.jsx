import React from "react";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div>
      <div className="">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
