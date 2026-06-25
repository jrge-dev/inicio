import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

function Banner() {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/jrge-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-out text-sm font-medium text-slate-700 dark:text-slate-200"
        aria-label="Perfil de GitHub de Jorge"
      >
        <img className="w-5 h-5 dark:brightness-0 dark:invert" src={Github} alt="" />
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/jorge-luis-moya-moya/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-400 dark:hover:border-blue-500 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-out text-sm font-medium text-slate-700 dark:text-slate-200"
        aria-label="Perfil de LinkedIn de Jorge"
      >
        <img className="w-5 h-5 dark:brightness-0 dark:invert" src={Linkedin} alt="" />
        LinkedIn
      </a>
    </div>
  );
}

export default Banner;
