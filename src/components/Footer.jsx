import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="flex flex-col bg-blue-500 text-white p-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-center sm:text-left mb-4 ">© 2026 Jorge Moya.</p>
        <div className="flex space-x-4 ">
          <a
            target="__blank"
            href="https://github.com/jrge-dev"
            className="hover:text-gray-400 transition duration-300"
          >
            <img src={Github} alt="GitHub" className="w-6 h-6 filter invert" />
          </a>
          <a
            target="__blank"
            href="https://www.linkedin.com/in/jorge-luis-moya-moya/"
            className="hover:text-gray-400 transition duration-300"
          >
            <img
              src={Linkedin}
              alt="LinkedIn"
              className="w-6 h-6 filter invert"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
