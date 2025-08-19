import imageDeveloper from "../assets/image-developer.svg";
import Card from "../components/Card";
import Database from "../assets/database.svg";
import Frontend from "../assets/frontend.svg";
import Banner from "../components/Banner";
import Cpu from "../assets/cpu.svg";
import AboutmeLayout from "./Aboutme.layout";
import Technologies from "./Technolgies.layout";

function Home() {
  const cardcontent = [
    {
      id: 1,
      icon: Database,
      title: "Back-end",
      body: "Conocimientos en lenguajes como python, java y c# y nociones sobre django, flask, rest-framework y manejo de conceptos sobre bases de datos relacionales y no relacionales.",
    },
    {
      id: 2,
      icon: Frontend,
      title: "Front-end",
      body: "Conocimientos en HTML, CSS, Javascript y React.js. Nociones para trabajar con Bootstrap y tailwind.",
    },
    {
      id: 3,
      icon: Cpu,
      title: "Informática",
      body: "Conocimientos en sistemas operativos, redes y fundamentos de computación en la nube (AWS).",
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-center px-20 w-full max-w-screen">
        <div className="mt-10 sm:mt-0 w-full h-full sm:px-20">
            <img src={imageDeveloper} alt="image developer" />
          </div>
          <div className="w-full h-full text-left text-xl sm:text-3xl">
            <div className="text-center">
            <p className=" text-2xl sm:text-4xl mb-2 ">
              <span className="text-blue-500">¡Hola!</span> me llamo
            </p>
            <p className="mb-2 text-7xl">
              <b>Jorge</b>
            </p>
            </div>
            
            <p className="text-4xl text-center mb-3 sm:mb-1">
              Desarrollador de software 
            </p>
            <p className="sm:text-lg mb-6"> Curioso por naturaleza y con muchas ganas de seguir aprendiendo</p>

            <Banner />
          </div>
          
        </div>

        <AboutmeLayout />

       

        <div className="flex  space-y-5 flex-col items-center sm:space-y-0 sm:flex-row sm:space-x-10 justify-center">
          {cardcontent.map((content) => (
            <Card key={content.id} icon={content.icon} title={content.title}>
              <p>{content.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
