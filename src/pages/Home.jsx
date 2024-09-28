import React from "react";
import MainLayout from "../layout/MainLayout";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <MainLayout>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <p className="text-white font-medium text-sm text-center">
          SOY UN CABRON - LEON WAYNE
        </p>
        <div className="lg:mx-8 lg:max-w-[1200px] border-4 border-white">
          <video
            src="/videos/soy-un-cabron.mp4"
            loop={true}
            muted
            autoPlay
            controls={false}
          ></video>
        </div>
        <div className="text-white font-bold flex justify-between w-full lg:max-w-[1200px]">
          <a href="/works">WORK</a>
          <a href="/precios">PRECIOS</a>
          <a href="/contacto">CONTACTO</a>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
