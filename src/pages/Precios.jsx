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
        <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-1 lg:min-h-[728px]">
          {/* VIDEOCLIP ESTANDAR */}
          <Card
            title={"VIDEOCLIP ESTANDAR"}
            features={[
              "Rodaje de 2 horas",
              "1 Locación",
              "Edición",
              "Color",
              "Filmación con cámara 6k",
            ]}
            oldPrice={"$119.999"}
            actualPrice={"$89.999"}
          />
          {/* VIDEOCLIP COMPLETO */}
          <Card
            title={"VIDEOCLIP COMPLETO"}
            features={[
              "Rodaje de 2 horas",
              "Luces led rgb profesionales incluidas",
              "Ya diponible (vertical) incluido",
              "Trailer incluido",
              "Edición",
              "Color",
              "Filmación con cámara 6k",
            ]}
            oldPrice={"$169.999"}
            actualPrice={"$119.999"}
          />
          {/* VIDEOCLIP BANDA */}
          <Card
            title={"VIDEOCLIP BANDA"}
            features={[
              "Rodaje de 2 horas",
              "Edición",
              "Color",
              "Filmación con cámara 6k",
              "Ya disponible (vertical) incluido",
            ]}
            oldPrice={"$199.999"}
            actualPrice={"$149.999"}
          />
          {/* VIDEOCLIP GUIONADO */}
          <Card
            title={"VIDEOCLIP GUIONADO"}
            features={[
              "Rodaje de 4 horas",
              "Guión",
              "Edición",
              "Color",
              "Filmación con cámara 6k",
            ]}
            oldPrice={"$249.999"}
            actualPrice={"$199.999"}
          />
        </div>
        <div className="bg-gray-50 rounded-md py-2 px-4 flex gap-2 w-fit mx-auto">
          <FaWhatsapp />
          <a href="https://wa.link/4iun7m" target="_blank" className="text-lg font-bold">
            HABLANOS AL WP
          </a>
        </div>
      </div>
    </MainLayout>
  );
}

export default Precios;
