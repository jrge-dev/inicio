function Card(promp) {
  return (
    <>
      <div className="hover:shadow-lg transition duration-450 ease-in-out w-full h-full md:w-[500px] md:min-h-[750px] rounded-lg border dark:bg-slate-600 dark:text-white border-blue-500 p-5">
        <div className="flex flex-col text-xl justify-center">
          <div className="w-full h-48 md:w-96 md:h-64 mx-auto overflow-hidden flex items-center justify-center bg-gray-100 rounded-md">
            <img
              src={promp.image}
              alt="icon"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <p className="mx-auto w-full flex items-center h-14 font-bold my-4">
            {promp.title}
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-slate-600 w-fit min-h-[10rem] dark:text-slate-200 text-sm leading-relaxed mb-2">
            {promp.description}
          </p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-white mb-3 border-t pt-4">
              Tecnologías{" "}
            </h4>
            <div className="bg-gray-50/80 dark:bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-white/10">
              <div className="flex flex-wrap gap-4 justify-center items-center">
                {promp.stack.map((tech, i) => (
                  <div
                    key={i}
                    className="group relative flex flex-col items-center w-16"
                  >
                    <div className="w-14 h-14 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        className="max-w-full max-h-full object-contain"
                        alt={tech.name}
                      />
                    </div>
                    <span className="text-[12px] mt-1 font-medium text-slate-500 dark:text-slate-200 text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full mt-6 flex justify-center">
            <a
              href={promp.repository}
              target="_blank"
              rel="noopener noreferrer"
              title="Ir a aplicación"
              className="w-full p-2 text-center bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 block"
            >
              Ver en GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
