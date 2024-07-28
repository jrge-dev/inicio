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
      <header id="home" className=" p-4 flex flex-col sm:flex-row sm:justify-between sm:text-lg">
        <a href="#home" className="flex mb-10 sm:mb-0  space-x-6 h-6 font-bold">
          <img className="w-5 h-5" src={icon} alt="" /> <h3>Jorge Moya</h3>
        </a>

        <button className="absolute right-4 dark:filter dark:invert  sm:hidden" onClick={toggleMenu}>
          {!isMenuOpen ? <img src={Menu} alt="" /> : <img src={Close} alt="" /> }
        </button>

        <nav
          className={`flex flex-col sm:flex-row ${isMenuOpen ? 'block mb-4' : 'hidden'} sm:block items-center space-y-4 sm:space-y-0  sm:space-x-12`}
        >
          <a href="#home">Inicio</a>
          <a href="">Sobre mi</a>
          <a href="#technologies">Tecnologías</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
