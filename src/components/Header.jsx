import { useState } from "react";
import icon from "../assets/bug.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";

function Header() {
  const [isMenuOpen, setIsMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuIsOpen(!isMenuOpen);
  };
  return (
    <>
      <header
        id="home"
        className="dark:bg-slate-800 dark:text-white p-4 flex flex-col  md:flex-row md:justify-between md:text-lg"
      >
        <a href="#home" className="flex space-x-6 h-6 font-bold">
          <img className="w-5 h-5" src={icon} alt="" /> <h3>Jorge Moya</h3>
        </a>

        <button
          className="absolute right-4 dark:filter dark:invert  md:hidden"
          onClick={toggleMenu}
        >
          {!isMenuOpen ? <img src={Menu} alt="" /> : <img src={Close} alt="" />}
        </button>

        <nav
          className={`flex flex-col md:flex-row ${isMenuOpen ? "block mb-4" : "hidden"} md:block items-center space-y-4 md:space-y-0  md:space-x-12`}
        >
          <a href="#home">Inicio</a>
          <a href="#aboutme">Sobre mi</a>
          <a href="#projects">Proyectos</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
