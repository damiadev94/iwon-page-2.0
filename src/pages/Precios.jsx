import React from "react";
import MainLayout from "../layout/MainLayout";
import Card from "../components/Card";

function Precios() {
  return (
    <MainLayout>
      <h1 className="text-white font-bold text-xl text-center my-4 uppercase">
        Precios
      </h1>
      <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-1 lg:min-h-[728px]">
        {/* VIDEOCLIP ESTANDAR */}
        <Card title={"VIDEOCLIP ESTANDAR"} features={["Rodaje de 2 horas","1 Locación", "Edición", "Color", "Filmación con cámara 6k"]} oldPrice={"$119.999"} actualPrice={"$89.999"}/>
        {/* VIDEOCLIP COMPLETO */}
        <Card title={"VIDEOCLIP COMPLETO"} features={["Rodaje de 2 horas","Luces led rgb profesionales incluidas", "Ya diponible (vertical) incluido", "Trailer incluido", "Edición", "Color", "Filmación con cámara 6k"]} oldPrice={"$169.999"} actualPrice={"$119.999"}/>
        {/* VIDEOCLIP BANDA */}
        <Card title={"VIDEOCLIP BANDA"} features={["Rodaje de 2 horas", "Edición", "Color", "Filmación con cámara 6k", "Ya disponible (vertical) incluido"]} oldPrice={"$199.999"} actualPrice={"$149.999"}/>
        {/* VIDEOCLIP GUIONADO */}
        <Card title={"VIDEOCLIP GUIONADO"} features={["Rodaje de 4 horas","Guión", "Edición", "Color", "Filmación con cámara 6k"]} oldPrice={"$249.999"} actualPrice={"$199.999"}/>
        
      </div>
    </MainLayout>
  );
}

export default Precios;
