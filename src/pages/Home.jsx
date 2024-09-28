import React from "react";
import MainLayout from "../layout/MainLayout";

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
      </div>
    </MainLayout>
  );
}

export default Home;
