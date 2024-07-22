import icon from "../assets/bug.svg";

function Header() {
  return (
    <>
      <header className="flex justify-between font-bold text-lg p-4">
        <div className="flex space-x-6 h-6 font-bold">
          <img src={icon} alt="" /> <h3>Jorge Moya</h3>
        </div>

        <nav className="space-x-12">
          <a href="">Inicio</a>
          <a href="">Sobre mi</a>
          <a href="">Tecnologías</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
