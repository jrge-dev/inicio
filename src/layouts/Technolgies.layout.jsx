import ReactIcon from "../assets/react-icon.svg";
import PythonIcon from "../assets/python.webp";
import GithubIcon from "../assets/github.svg";
import OpenCodeIcon from "../assets/opencode.svg";
import LinuxIcon from "../assets/linux.svg";
import BrunoIcon from "../assets/bruno.svg";
import FastApiIcon from "../assets/fast-api.svg";
import PostgreIcon from "../assets/Postgressql.svg";
import MySqlIcon from "../assets/mysql-logo.svg";
import FlaskIcon from "../assets/flask.svg";
import TailwindIcon from "../assets/tailwind.svg";
import MongoIcon from "../assets/mongodb.svg";

export default function Technologies() {
  const categories = [
    {
      title: "Backend",
      items: [
        { name: "Python", icon: PythonIcon },
        { name: "FastAPI", icon: FastApiIcon },
        { name: "Flask", icon: FlaskIcon },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", icon: ReactIcon },
        { name: "Tailwind", icon: TailwindIcon },
      ],
    },
    {
      title: "Bases de Datos",
      items: [
        { name: "PostgreSQL", icon: PostgreIcon },
        { name: "MySQL", icon: MySqlIcon },
        { name: "MongoDB", icon: MongoIcon },
      ],
    },
    {
      title: "Herramientas",
      items: [
        { name: "GitHub", icon: GithubIcon },
        { name: "OpenCode", icon: OpenCodeIcon },
        { name: "Linux", icon: LinuxIcon },
        { name: "Bruno", icon: BrunoIcon },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
      {categories.map((cat) => (
        <div
          key={cat.title}
          className="bg-gray-50/80 dark:bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-gray-200 dark:border-white/10"
        >
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
            {cat.title}
          </h4>
          <div className="flex flex-wrap gap-3">
            {cat.items.map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/70 dark:bg-white/10 border border-gray-100 dark:border-white/5"
              >
                <img
                  src={tech.icon}
                  className="w-5 h-5 object-contain"
                  alt={tech.name}
                />
                <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
