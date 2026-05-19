import Card from "../components/Card.jsx";
import fastapi from "../assets/fast-api.svg";
import postgresql from "../assets/Postgressql.svg";
import sqlalchemy from "../assets/SQLAlchemy.svg";
import estacionamiento from "../assets/estacionamiento-app.webp";
import webAntenas from "../assets/web-antenas.png";
import scriptAntenas from "../assets/script-antenas.png";
import php from "../assets/php-logo.svg";
import mysql from "../assets/mysql-logo.svg";
import loguru from "../assets/logoru.webp";
import pythonLogo from "../assets/python.svg";
export default function ProjectsLayout() {
  const projects = [
    {
      title: "Sistema de Gestión de Estacionamientos",
      img: estacionamiento,
      description:
        "API REST que automatiza el control de ingresos y salidas en eventos masivos. Digitaliza flujos operativos para reemplazar sistemas físicos de alto costo.",
      stack: [
        { name: "FastApi", icon: fastapi },
        { name: "PostgreSQL", icon: postgresql },
        { name: "SQLAlchemy", icon: sqlalchemy },
      ],
      repository: "https://github.com/jrge-dev/estacionamiento-api",
    },

    {
      title: "Web control de antenas",
      img: webAntenas,
      description:
        "Sistema centralizado para el monitoreo y gestión de antenas por personal autorizado, optimizando la supervisión de la infraestructura.",
      stack: [
        { name: "PHP", icon: php },
        { name: "MySQL", icon: mysql },
      ],
      repository: "https://github.com/jrge-dev/geret-web-project",
    },
    {
      title: "Script control de antenas",
      img: scriptAntenas,
      description:
        "Herramienta desarrollada en Python para el monitoreo persistete de antenas activas. Permite la supervisión rápida y automatiza la creación de un historico con las lecturas generadas.",
      stack: [
        { name: "PYTHON", icon: pythonLogo },
        { name: "LOGURU", icon: loguru },
      ],
      repository: "https://github.com/jrge-dev/geret-script-obtener-antenas",
    },
  ];

  return (
    <>
      <section className="w-full dark:text-white py-10 pb-40 px-6">
        <h3
          className="text-4xl font-bold mb-16 text-center lg:text-left"
          id="projects"
        >
          Proyectos <span className="text-blue-500">Destacados</span>
        </h3>

        <div className="w-full mx-auto flex flex-col md:flex-wrap gap-y-8  justify-center items-center md:flex-row md:gap-x-10">
          {projects.map((proj, index) => (
            <Card
              key={index}
              image={proj.img}
              title={proj.title}
              description={proj.description}
              stack={proj.stack}
              repository={proj.repository}
            ></Card>
          ))}
        </div>
      </section>
    </>
  );
}
