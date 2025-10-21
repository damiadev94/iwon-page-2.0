import React from "react";
import MainLayout from "../layout/MainLayout";

function Works() {
  return (
    <MainLayout>
      {/* HERO */}
      <div className="relative min-h-[728px] max-h-screen min-w-full overflow-hidden">
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

      {/* ################################################################################################### */}

      <div className="grid lg:grid-cols-3 grid-cols-1">

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=tYMx3zbuiFw"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">
                CRELTAN
              </span>
              <span className="text-white font-medium text-sm">X El Pelpa La Sustancia</span>
            </div>
            <img
              src="/images/creltan.jpg"
              alt="img"
              className="group-hover:opacity-40 transition-opacity"
            />
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=C5jqoxea6gk"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">
                VITAMINA
              </span>
              <span className="text-white font-medium text-sm">Lucacio</span>
            </div>
            <img
              src="/images/vitamina.jpg"
              alt="img"
              className="group-hover:opacity-40 transition-opacity"
            />
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=A7HE7bTu0AA"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">
                MVP
              </span>
              <span className="text-white font-medium text-sm">JOWI,CK</span>
            </div>
            <img
              src="/images/mvp.jpg"
              alt="img"
              className="group-hover:opacity-40 transition-opacity"
            />
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=cyvWHhpiO_4"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">
                MENTE ENTRENADA
              </span>
              <span className="text-white font-medium text-sm">Shoar</span>
            </div>
            <img
              src="/images/mente-entrenada.jpg"
              alt="img"
              className="group-hover:opacity-40 transition-opacity"
            />
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=jEF5wD-W9Os"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">
                NO LO PUEDO ENTENDER
              </span>
              <span className="text-white font-medium text-sm">Blowzzzito</span>
            </div>
            <img
              src="/images/no-lo-puedo-entender.jpg"
              alt="img"
              className="group-hover:opacity-40 transition-opacity"
            />
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=7GO4erRttl8"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">
                POR SI NO RESULTA
              </span>
              <span className="text-white font-medium text-sm">Keras</span>
            </div>
            <img
              src="/images/por-si-no-resulta.jpg"
              alt="img"
              className="group-hover:opacity-40 transition-opacity"
            />
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=iomooUYzfjY"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">
                Shawty BALLING
              </span>
              <span className="text-white font-medium text-sm">Sanso Lbk</span>
            </div>
            <img
              src="/images/shawty.jpg"
              alt="img"
              className="group-hover:opacity-40 transition-opacity"
            />
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=x8TTSETv7_E"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">
                HOLANDA
              </span>
              <span className="text-white font-medium text-sm">Bryan BTM</span>
            </div>
            <img
              src="/images/holanda.jpg"
              alt="img"
              className="group-hover:opacity-40 transition-opacity"
            />
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=BXpgqg1kjWM"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">
                HORAS Y HORAS
              </span>
              <span className="text-white font-medium text-sm">FEDELUCKER</span>
            </div>
            <img
              src="/images/horas-y-horas.jpg"
              alt="img"
              className="group-hover:opacity-40 transition-opacity"
            />
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=HuspyfNwJvE"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">TALENTO Y FE</span>
              <span className="text-white font-medium text-sm"></span>
            </div>
            <img
              src="/images/talento-y-fe.jpg"
              alt="img"
              className="group-hover:opacity-40 transition-opacity"
            />
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=SyaY5-A0ok0"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">PALESTINA</span>
              <span className="text-white font-medium text-sm"></span>
            </div>
            <img src="/images/palestina.jpg" alt="img" className="group-hover:opacity-40 transition-opacity"/>
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/@IWon-c1m"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">NO PROMO</span>
              <span className="text-white font-medium text-sm"></span>
            </div>
            <img src="/images/no-promo.jpg" alt="img" className="group-hover:opacity-40 transition-opacity"/>
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=NR5c7b-Kz8c"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">OPIUM</span>
              <span className="text-white font-medium text-sm"></span>
            </div>
            <img src="/images/opium.jpg" alt="img" className="group-hover:opacity-40 transition-opacity"/>
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=_DoXKmH_n5w"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">
                ANGELINA JOLIE
              </span>
              <span className="text-white font-medium text-sm"></span>
            </div>
            <img src="/images/angelina.jpg" alt="img" className="group-hover:opacity-40 transition-opacity"/>
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=PPbQst-km9c"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">ANSIEDAD</span>
              <span className="text-white font-medium text-sm"></span>
            </div>
            <img src="/images/ansiedad.jpg" alt="img" className="group-hover:opacity-40 transition-opacity"/>
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=4zWkHqcY_Nc"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">CHIPIADO</span>
              <span className="text-white font-medium text-sm"></span>
            </div>
            <img src="/images/chipiado.jpg" alt="img" className="group-hover:opacity-40 transition-opacity"/>
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=gp3L6Ys6nhk"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">CRELTAN</span>
              <span className="text-white font-medium text-sm"></span>
            </div>
            <img src="/images/creltan.jpg" alt="img" className="group-hover:opacity-40 transition-opacity"/>
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=r4Vbq-SPBNw"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">PERREO</span>
              <span className="text-white font-medium text-sm"></span>
            </div>
            <img src="/images/perreo.jpg" alt="img" className="group-hover:opacity-40 transition-opacity"/>
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=0nHBt6PztQQ"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">BENDECIDO</span>
              <span className="text-white font-medium text-sm">ONE PLANE</span>
            </div>
            <img src="/images/one-plane.jpg" alt="img" className="group-hover:opacity-40 transition-opacity"/>
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/@IWon-c1m"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">CHIPIADO</span>
              <span className="text-white font-medium text-sm"></span>
            </div>
            <img src="/images/2.jpg" alt="img" className="group-hover:opacity-40 transition-opacity"/>
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=y8RZibdrWj4"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">RUKAIR</span>
              <span className="text-white font-medium text-sm"></span>
            </div>
            <img src="/images/rukair.jpg" alt="img" className="group-hover:opacity-40 transition-opacity"/>
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=y8RZibdrWj4"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">ROLO PAPERS</span>
              <span className="text-white font-medium text-sm">ONE PLANE</span>
            </div>
            <img src="/images/roleta_4.3.2.jpg" alt="img" className="group-hover:opacity-40 transition-opacity"/>
          </a>
        </div>

        <div className="relative">
          <a
            href="https://www.youtube.com/watch?v=VwYbdaQZaEI"
            target="_blank"
            className="group"
          >
            <div className="absolute z-30 w-full h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">C EST LA VIE</span>
              <span className="text-white font-medium text-sm">Rukair</span>
            </div>
            <img src="/images/joven ikari_4.3.1.jpg" alt="img" className="group-hover:opacity-40 transition-opacity"/>
          </a>
        </div>
      </div>
    </MainLayout>
  );
}

export default Works;
