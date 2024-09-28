import React from "react";
import MainLayout from "../layout/MainLayout";

function Precios() {
  return (
    <MainLayout>
      <h1 className="text-white font-bold text-xl text-center my-4 uppercase">
        Precios
      </h1>
      <div className="w-full grid grid-cols-4">
        {/* TARJETA 1 */}
        <div className="bg-gray-200 py-4 px-2">
          <h3>videoclip estandar</h3>
          <p>
            Rodaje de 2 horas <br /> 1 Locación <br /> Edición <br /> Color <br /> Filmación con cámara 6k
          </p>
          <span className="line-through block">$119.999</span>
          <span className="block">89.999</span>
        </div>
        {/* TARJETA 2 */}
        <div className="bg-gray-200 py-4 px-2">
          <h3>videoclip estandar</h3>
          <p>
            Rodaje de 2 horas <br /> 1 Locación <br /> Edición <br /> Color <br /> Filmación con cámara 6k
          </p>
          <span className="line-through block">$119.999</span>
          <span className="block">89.999</span>
        </div>
        {/* TARJETA 3 */}
        <div className="bg-gray-200 py-4 px-2">
          <h3>videoclip estandar</h3>
          <p>
            Rodaje de 2 horas <br /> 1 Locación <br /> Edición <br /> Color <br /> Filmación con cámara 6k
          </p>
          <span className="line-through block">$119.999</span>
          <span className="block">89.999</span>
        </div>
        {/* TARJETA 4 */}
        <div className="bg-gray-200 py-4 px-2">
          <h3>videoclip estandar</h3>
          <p>
            Rodaje de 2 horas <br /> 1 Locación <br /> Edición <br /> Color <br /> Filmación con cámara 6k
          </p>
          <span className="line-through block">$119.999</span>
          <span className="block">89.999</span>
        </div>
      </div>
    </MainLayout>
  );
}

export default Precios;
