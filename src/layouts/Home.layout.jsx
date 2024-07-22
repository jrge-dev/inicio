import imageDeveloper from "../assets/image-developer.svg";
function Home() {
  return (
    <>
      <div className="flex justify-between items-center p-10 w-full max-w-screen">
        <div className="w-full h-full">
          <img src={imageDeveloper} alt="image developer" />
        </div>
        <div className="w-full h-full text-4xl ">
          <p className="text-blue-500 font-bold text-5xl mb-4 ">¡Hola!</p>
          <p className="mb-2">
            Mi nombre es <b>Jorge Moya</b>
          </p>
          <p>Soy un desarrollador de software junior.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
