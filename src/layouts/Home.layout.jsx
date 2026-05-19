import imageDeveloper from "../assets/image-developer.svg";
import Banner from "../components/Banner";
import AboutmeLayout from "./Aboutme.layout";
import Expertice from "./Experience.layout";
import ProjectLayout from "./Projects.layout.jsx";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50 dark:bg-slate-900">
      <section className="flex flex-col lg:flex-row items-center justify-center min-h-[90vh] px-6 md:px-20 max-w-7xl mx-auto gap-12">
        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10 transform scale-110"></div>
            <img
              src={imageDeveloper}
              alt="Jorge Developer"
              className="w-full max-w-[400px] h-auto drop-shadow-xl"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
          <header className="space-y-2">
            <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-50 font-medium tracking-tight">
              <span className="text-blue-500 dark:text-blue-300 font-bold">
                ¡Hola!
              </span>{" "}
              me llamo
            </h2>
            <span className="space-y-6">
              <h1 className="text-7xl md:text-8xl font-bold dark:text-slate-50 text-slate-900 tracking-tighter">
                Jorge
              </h1>
              <h3 className="text-2xl md:text-4xl dark:text-slate-50 font-bold text-slate-700">
                Desarrollador de software
              </h3>
            </span>
            <p className="text-slate-500 text-lg mt-4 max-w-md dark:text-slate-50 mx-auto lg:mx-0 leading-relaxed">
              Apasionado por la lógica y el desarrollo backend. Diseño y
              construyo aplicaciones con un propósito claro: resolver problemas
              reales del día a día mediante soluciones tecnológicas eficientes.
            </p>
          </header>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Banner />
          </div>
        </div>
      </section>
      <div className="space-y-32 pb-20">
        <section id="aboutme" className="w-full">
          <AboutmeLayout />
        </section>

        <section
          id="expertise"
          className="bg-white py-24 border-y border-slate-100"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 ">
                Trayectoria <br />
                <span className="text-blue-600">Profesional</span>
              </h2>
              <p className="text-slate-500 max-w-sm mt-4 text-sm leading-relaxed">
                Mi recorrido combinando la ingeniería de software con la
                educación tecnológica.
              </p>
            </div>
            <div className="lg:col-span-3">
              <Expertice />
            </div>
          </div>
        </section>
        <section id="projects" className="w-full px-6 ">
          <ProjectLayout />
        </section>
      </div>
    </div>
  );
}

export default Home;
