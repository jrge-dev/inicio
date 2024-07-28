import React from "react";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

const Banner = () => {
  return (
    <div className="flex space-x-4 justify-start">
      <a href="https://github.com/jl999l">
        <img className="w-7 h-7 dark:filter dark:invert" src={Github} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/jorge-luis-moya-moya/">
        <img className="w-7 h-7 dark:filter dark:invert " src={Linkedin} alt="" />
      </a>
    </div>
  );
};

export default Banner;
