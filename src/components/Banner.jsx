import React from "react";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

const Banner = () => {
  return (
    <div className="flex space-x-8 justify-center">
      <a target="__blank" href="https://github.com/jrge-dev">
        <img className="w-7 h-7 dark:filter dark:invert" src={Github} alt="" />
      </a>
      <a target="__blank" href="https://www.linkedin.com/in/jorge-luis-moya-moya/">
        <img className="w-7 h-7 dark:filter dark:invert " src={Linkedin} alt="" />
      </a>
    </div>
  );
};

export default Banner;
