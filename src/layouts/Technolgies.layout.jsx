import ReactIcon from "../assets/react-icon.svg";
import PythonIcon from "../assets/python.webp";
import GithubIcon from "../assets/github.svg";

export default function Technologies() {
  const mainTech = [
    { icon: ReactIcon, name: "React" },
    { icon: PythonIcon, name: "Python" },
    { icon: GithubIcon, name: "GitHub" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-center space-x-12 mb-10">
        {mainTech.map((tech, i) => (
          <div key={i} className="flex flex-col items-center group">
            <img
              src={tech.icon}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              alt={`${tech.name} Icon`}
            />
            <span className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-tighter">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <div className="relative max-w-xs text-center">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-slate-200"></div>

        <p className="text-xs md:text-sm text-slate-400 italic leading-relaxed">
          Fiel creyente de que la tecnología es transitoria:
          <span className="block font-medium text-slate-500 not-italic mt-1">
            Adaptable a cualquier stack para resolver el problema correcto.
          </span>
        </p>
      </div>
    </div>
  );
}
