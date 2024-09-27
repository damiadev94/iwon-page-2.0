import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import Menu from "./Menu";

function Navbar() {
  const [isMobile, setIsMobile] = useState(Boolean);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  function setMenuActive() {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <div className="flex justify-center items-center text-white">
      <Menu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <div className="w-full p-4 flex justify-between">
        {/* LOGO */}
        <span className="text-white flex items-center justify-center text-2xl font-bold">
          IWON
        </span>
        {/* BUTTON */}
        <div className={`${isMobile ? "visible" : "hidden"}`}>
          <button onClick={setMenuActive}>
            {isMenuActive ? (
              <IoCloseSharp size={30} className="absolute top-2 right-2" />
            ) : (
              <CiMenuFries size={30} />
            )}
          </button>
        </div>
        {/* LONG MENU */}
        <div
          className={`flex items-center gap-4 ${
            isMobile ? "hidden" : "visible"
          }`}
        >
          <a href="/work">WORK</a>
          <a href="/contact">CONTACT</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
