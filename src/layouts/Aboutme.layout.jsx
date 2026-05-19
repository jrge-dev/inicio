import Technologies from "../layouts/Technolgies.layout.jsx";

function AboutmeLayout() {
  return (
    <section className="flex flex-col md:flex-row items-center dark:text-white justify-center w-full max-w-6xl mx-auto px-6 py-20 min-h-[400px] gap-12 lg:gap-20">
      <div className="flex-1 flex flex-col justify-center">
        <h3 id="aboutme" className="text-4xl lg:text-5xl mb-6 tracking-tight">
          Sobre <span className="font-bold border-b-4 border-blue-500">Mí</span>
        </h3>

        <p className="text-lg dark:text-slate-50 lg:text-xl text-slate-700 leading-relaxed max-w-xl">
          <span className="font-bold text-slate-900 dark:text-slate-50">
            Ingeniero en informática
          </span>{" "}
          apasionado por el desarrollo de software y la resolución de problemas.
          Me motiva mantener un aprendizaje constante y, sobre todo, entender el
          porqué de las cosas para construir{" "}
          <span className="text-blue-600 dark:text-blue-200 font-medium italic">
            soluciones tecnológicas
          </span>{" "}
          que sean lógicas, eficientes y estratégicas.{" "}
        </p>
      </div>
      <div className="w-full md:w-auto flex flex-col items-center bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
        <h3
          id="technologies"
          className="font-bold text-xl mb-8 text-slate-800 uppercase tracking-widest text-center"
        >
          Tecnologías
        </h3>

        <div className="flex justify-center items-center">
          <Technologies />
        </div>
      </div>
    </section>
  );
}

export default AboutmeLayout;
