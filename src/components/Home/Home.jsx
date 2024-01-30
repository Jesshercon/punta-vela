import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <div className="md:flex min-h-screen pb-[500px] relative">
      <div className="w-full md:w-1/2 z-10 bg-dark-blue flex flex-col h-full justify-between">
        <div></div>
        <div className="self-center text-center">
          <img
            className="w-80 max-w-full"
            src="/images/svg-logo-velatowers.svg"
          />
          <p className="text-white text-xl md:text-2xl pt-16 px-4 md:px-0 tracking-widest font-forum">
            UN NUEVO ESTILO DE VIDA
          </p>
        </div>
        <div className="self-center">
          <div className="bg-white text-xs md:text-sm inline-flex gap-1 md:gap-2 p-1 md:p-2 px-1 md:px-4 font-raleway">
            <a
              className="flex items-center gap-1"
              href="https://api.whatsapp.com/send?phone=+526563015805&text=Quiero%20más%20información%20sobre%20VelaTowers"
            >
              <FaWhatsapp className="text-base" />
              <p>(656) 301 5805</p>
            </a>

            <p>
              | Rancho El Retiro 7608, Fracc. Partido Iglesias, C. Juárez, Chih.
            </p>
          </div>
        </div>
      </div>

      <video
        className="w-[200%] md:top-0 md:bottom-auto bottom-0 top-auto right-0 lg:w-full z-0 h-[500px] absolute md:h-full lg:object-cover lg:object-right-bottom"
        src="/hero-video.mp4"
        autoPlay
        playsInline
        muted
        controls={false}
        loop
      />
    </div>
  );
}

export default Home;
