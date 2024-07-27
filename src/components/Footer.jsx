import React from "react";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="mt-60 flex flex-col bg-blue-500 text-white p-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-center sm:text-left mb-4 sm:mb-0">
          © 2023 Jorge Moya.
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/jl999l" className="hover:text-gray-400 transition duration-300">
            <img  src={Github} alt="GitHub" className="w-6 h-6 filter invert" />
          </a>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="hover:text-gray-400 transition duration-300">
            <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 filter invert" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
