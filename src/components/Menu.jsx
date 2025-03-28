import React, { useState } from "react";

function Menu({ isMenuActive }) {
 
  return (
    <div
      className={`absolute z-50 top-10 ${
        isMenuActive ? "right-0 visible" : "hidden -right-[200px]"
      } bg-gray-800 w-[200px] h-screen flex justify-center transition-all`}
    >
        <div className="mt-4 flex flex-col items-start gap-4">
          <a href="/works">WORK</a>
          <a href="/precios">PRECIOS</a>
          <a href="/contacto">CONTACTO</a>
        </div>
    </div>
  );
}

export default Menu;
