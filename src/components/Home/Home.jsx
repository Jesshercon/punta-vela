import { FaWhatsapp } from "react-icons/fa";

const LINKS = {
  WHATSAPP:
    "https://api.whatsapp.com/send?phone=+526566385985&text=Quiero%20más%20información%20sobre%20VelaTowers",
  LOCATION: "https://maps.app.goo.gl/WEUjS8xLdRbwD9nz6",
};

function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="min-h-full h-screen w-full md:w-1/2 z-10 bg-dark-blue flex flex-col justify-between px-4 space-y-10">
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
          <div className="bg-white text-sm inline-flex flex-wrap gap-1 md:gap-2 p-1 md:p-2 px-1 md:px-4 font-raleway text-center justify-center">
            <a className="flex items-center gap-1" href={LINKS.WHATSAPP}>
              <FaWhatsapp className="text-base" />
              <p>(656) 638 5985</p>
            </a>

            <a href={LINKS.LOCATION} target="_blank" rel="noreferrer">
              | Rancho El Retiro 7608, Fracc. Partido Iglesias, C. Juárez, Chih.
            </a>
          </div>
        </div>
      </div>

      <video
          className="md:h-screen w-full md:w-1/2 object-contain object-center lg:object-cover lg:object-bottom"
          autoPlay
          playsInline
          muted
          controls={false}
          loop
        >
          <source src="/hero-video-cropped.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default Home;
