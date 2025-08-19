import Technologies from "../layouts/Technolgies.layout.jsx";

function AboutmeLayout() {
  return (
    <div className="flex flex-row items-center justify-center w-full h-full">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="w-1/3">
          <h3 id="aboutme" className="text-start text-4xl mt-20 mb-8 ">
            Sobre <b>Mí</b>
          </h3>
          <p className="text-start text:sm sm:text-lg  ">
            <b>Ingeniero en informática </b> y profe de tecnología en un liceo.
            Enseño programación, IA básica y electrónica. Me gusta explorar
            distintas áreas del desarrollo y <b>aprender haciendo</b>
          </p>
        </div>
      </div>

      <div className="w-1/2  flex-row justify-center items-center">
         <h3
          id="technologies"
          className="font-bold text-2xl mt-20 m-10 text-center"
        >
          Tecnologías
        </h3>

        <Technologies></Technologies>
      </div>
    </div>
  );
}

export default AboutmeLayout;