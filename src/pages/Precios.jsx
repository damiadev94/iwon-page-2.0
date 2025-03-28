import React from "react";
import MainLayout from "../layout/MainLayout";
import Card from "../components/Card";
import { FaWhatsapp } from "react-icons/fa";

function Precios() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-white font-bold text-4xl text-center my-4 uppercase">
          nuestros precios
        </h1>
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-1 lg:min-h-[728px]">
          {/* VIDEOCLIP COMPLETO */}
          <Card
            title={"VIDEOCLIP COMPLETO"}
            features={[
              "Rodaje de 2 horas",
              "1 Locación",
              "Edición",
              "Color",
              "Filmación con cámara 6k",
              "1 Asistente de direccion",
            ]}
            oldPrice={"$199.999"}
            actualPrice={"$149.999"}
            bg={"bg-gray-300"}
            textColor={"text-gray-900"}
          />
          {/* VIDEOCLIP BANDA */}
          <Card
            title={"VIDEOCLIP BANDA"}
            features={[
              "Rodaje de 2 horas",
              "Edición",
              "Color",
              "Filmación con cámara 6k",
            ]}
            oldPrice={"$249.999"}
            actualPrice={"$199.999"}
            bg={"bg-gray-700"}
            textColor={"text-white"}
          />
          {/* VIDEOCLIP GUIONADO */}
          <Card
            title={"VIDEOCLIP GUIONADO"}
            features={[
              "Rodaje de 3 horas",
              "Guión",
              "Edición",
              "Color",
              "Filmación con cámara 6k",
            ]}
            oldPrice={"$249.999"}
            actualPrice={"$199.999"}
            bg={"bg-gray-900"}
            textColor={"text-white"}
          />
        </div>
        <div className="w-full flex justify-center items-center text-white">
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-2xl font-bold">EXTRAS</h1>
            <span>Lente angular <i class="fa-solid fa-arrow-right"></i> <span className="font-bold"> $19.999</span></span>
            <span>Tripode <i class="fa-solid fa-arrow-right"></i> <span className="font-bold"> $29.999</span></span>
            <span>Luz de ESTUDIO <i class="fa-solid fa-arrow-right"></i> <span className="font-bold"> $39.999</span></span>
            <span>2 tubos leds RGB <i class="fa-solid fa-arrow-right"></i> <span className="font-bold"> $34.999</span></span>   
          </div>
        </div>
        <div className="bg-gray-50 rounded-md py-2 px-4 flex gap-2 w-fit mx-auto">
          <FaWhatsapp />
          <a
            href="https://wa.link/5dcj3j"
            target="_blank"
            className="text-lg font-bold"
          >
            HABLANOS AL WP
          </a>
        </div>
      </div>
    </MainLayout>
  );
}

export default Precios;
