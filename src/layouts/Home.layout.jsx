import imageDeveloper from "../assets/image-developer.svg";
import Card from "../components/Card";
import Database from "../assets/database.svg";
import Frontend from "../assets/frontend.svg";
import Banner from "../components/Banner";
import Cpu from "../assets/cpu.svg";

function Home() {
  const cardcontent = [
    {
      id: 1,
      icon: Database,
      title: "Back-end",
      body: "Conocimientos en lenguajes como python, java y c# y nociones sobre django, flask, rest-framework. manejo de conceptos sobre bases dedatos relacionales y no relacionales.",
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
      body: "Conocimientos intermedios en sistemas operativos y fundamentos de computación en la nube (AWS).",
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-center px-20 w-full max-w-screen">
          <div className="w-full h-full text-left text-xl sm:text-3xl">
            <p className="text-blue-500 font-bold text-4xl sm:text-5xl mb-4 ">
              ¡Hola!
            </p>
            <p className="mb-2">
              Mi nombre es <b>Jorge Moya</b>
            </p>
            <p className="mb-3 sm:mb-10">
              Soy un desarrollador de software junior.
            </p>

            <Banner />
          </div>
          <div className="mt-10 sm:mt-0 w-full h-full sm:px-20">
            <img src={imageDeveloper} alt="image developer" />
          </div>
        </div>

        <h3 className="font-bold text-4xl mt-20 m-10 text-center">
          Tecnologías
        </h3>

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
