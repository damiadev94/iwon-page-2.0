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
            src="/public/videos/soy-un-cabron.mp4"
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
        <a href="#">
          <img src="/images/video (1).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (2).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (3).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (4).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (5).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (6).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (7).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (8).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (9).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (10).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (11).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (14).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (15).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (16).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (17).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (18).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (19).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (20).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (21).jpg" alt="img" />
        </a>
        <a href="#">
          <img src="/images/video (22).jpg" alt="img" />
        </a>
      </div>
    </MainLayout>
  );
}

export default Works;
