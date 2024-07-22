import { useState } from "react";
import icon from "../assets/bug.svg";

function Header() {
  const [isMenuOpen, setIsMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuIsOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="font-bold p-4 flex flex-col sm:flex-row sm:justify-between sm:text-lg">
        <div className="flex mb-10 sm:mb-0  space-x-6 h-6 font-bold">
          <img className="w-5 h-5" src={icon} alt="" /> <h3>Jorge Moya</h3>
        </div>

        <button className="absolute right-4  sm:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <p>cerrar</p> : <p>abrir</p>}
        </button>

        <nav
          className={`flex flex-col sm:flex-row ${isMenuOpen ? 'block' : 'hidden'} sm:block items-center space-y-4 sm:space-y-0  sm:space-x-12`}
        >
          <a href="">Inicio</a>
          <a href="">Sobre mi</a>
          <a href="">Tecnologías</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
