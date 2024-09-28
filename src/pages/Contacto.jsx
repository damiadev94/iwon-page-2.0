import React from "react";
import MainLayout from "../layout/MainLayout";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Contacto() {
  return (
    <MainLayout>
      <h1 className="text-white font-bold text-xl text-center my-4 uppercase">
        Contacto
      </h1>
      <div className="flex max-w-48 justify-center mx-auto">
      <div className="w-full flex flex-col gap-4 items-start justify-center">
        <div className="flex gap-2 text-white items-center justify-center">
          <FaWhatsapp />
          <a href="https://wa.link/4iun7m" target="_blank">
            11-5473-4725
          </a>
        </div>
        <div className="flex gap-2 text-white items-center justify-center">
          <FaInstagram />
          <a href="https://www.instagram.com/iwon.audiovisual/" target="_blank">
            /iwon.audiovisual
          </a>
        </div>
      </div>

      </div>
    </MainLayout>
  );
}

export default Contacto;
