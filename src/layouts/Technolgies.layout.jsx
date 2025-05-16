import ReactIcon from "../assets/react-icon.svg";
import PythonIcon from "../assets/python.svg";
import GithubIcon from "../assets/github.svg";

function Technologies() {
  return (
    <>
      <div className="flex flex-row justify-center  space-x-8 mb-20">
        <div className="flex flex-col items-center">
          <img src={ReactIcon} width={40} height={40} alt="React Icon" />{" "}
          <span>React</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={PythonIcon} width={40} height={40} alt="Python Icon" />{" "}
          <span>Python</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={GithubIcon} width={40} height={40} alt="" />{" "}
          <span>GitHub</span>{" "}
        </div>
      </div>
    </>
  );
}

export default Technologies;
