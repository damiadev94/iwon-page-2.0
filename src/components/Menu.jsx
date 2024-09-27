import React, { useState } from "react";

function Menu({ isMenuActive }) {
 
  return (
    <div
      className={`absolute top-0 ${
        isMenuActive ? "right-0" : "-right-[200px]"
      } bg-gray-800 w-[200px] h-screen flex justify-center transition-all`}
    >
        <div className="mt-4 flex flex-col items-start gap-4">
          <a href="/work">WORK</a>
          <a href="/prices">PRICES</a>
          <a href="/contact">CONTACT</a>
        </div>
    </div>
  );
}

export default Menu;
