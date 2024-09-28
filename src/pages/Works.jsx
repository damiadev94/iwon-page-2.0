import React from "react";
import MainLayout from "../layout/MainLayout";

function Works() {
  return (
    <MainLayout>
      {/* HERO */}
      <div className="relative lg:min-h-[728px] max-h-screen lg:min-w-full overflow-hidden">
        <div className="w-full h-full">
          {/* POLARIZADO */}
          <div className="absolute w-full h-full z-20 bg-gray-950 opacity-50"></div>
          {/* VIDEO */}
          <video
            className="absolute bottom-0 z-10 w-auto min-w-full min-h-full max-w-none"
            src="/videos/soy-un-cabron.mp4"
            muted
            autoPlay
            loop
          ></video>
        </div>
        {/* TITULO */}
        <div className="absolute z-30 w-full h-full flex justify-center items-center">
          <div>
            <h1 className="text-white font-bold text-4xl text-center my-4">
              PRODUCCIONES
            </h1>
            <p className="text-white font-medium text-sm text-center">
              SOY UN CABRON - LEON WAYNE
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1">
        <a href="https://www.youtube.com/watch?v=xm9JnzLyNkE">
          <img src="/images/horas-y-horas.jpg" alt="img" />
        </a>
        <a href="https://www.youtube.com/watch?v=HuspyfNwJvE">
          <img src="/images/talento-y-fe.jpg" alt="img" />
        </a>
        <a href="https://www.youtube.com/watch?v=a5Lj3Lnm7LI">
          <img src="/images/palestina.jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (12).jpg" alt="img" />
        </a>
        <a href="https://www.youtube.com/watch?v=VvUOLPBSY94">
          <img src="/images/opium.jpg" alt="img" />
        </a>
        <a href="https://www.youtube.com/watch?v=_DoXKmH_n5w">
          <img src="/images/angelina.jpg" alt="img" />
        </a>
        <a href="https://www.youtube.com/watch?v=PPbQst-km9c">
          <img src="/images/ansiedad.jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (22).jpg" alt="img" />
        </a>
        <a href="https://www.youtube.com/watch?v=gp3L6Ys6nhk">
          <img src="/images/creltan.jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (8).jpg" alt="img" />
        </a>
        <a href="https://www.youtube.com/watch?v=0nHBt6PztQQ">
          <img src="/images/one-plane.jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (16).jpg" alt="img" />
        </a>
        <a href="https://www.youtube.com/watch?v=vHnaEPIaoE8">
          <img src="/images/rukair.jpg" alt="img" />
        </a>
      </div>
    </MainLayout>
  );
}

export default Works;
