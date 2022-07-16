import React from "react";
import Navbar from "../navbar/navbar.component";
import "./hero.style.css";
import TheWeeknd from "./the_weeknd_poster2.png";
import Footer from "../footer/footer.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";


const Hero = () => {
  return (
    <div>
      <Navbar />
      <div>
        <main
          className={`flex justify-between h-[600px] pb-20  mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28`}
        >
          <div className="hero-text py-2 px-4 mb-5">
            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block font-abril font-extrabold leading-tight">
                Namaste,
              </span>
              <span className="pr-4 font-abril font-extrabold leading-normal">
                I'm
              </span>{" "}
              <span className="inline font-abril tracking-wide leading-normal">
                Manas Tiwari
              </span>
            </h1>
            <span className="mt-6 mr-16 pt-4 block font-poppins text-[30px]">
              <span className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                illum?
              </span>
              <span className="block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                expedita!
              </span>
            </span>

            <a href="https://www.google.com" rel="noreferrer">
              <button className="btn-primary mt-10 ml-80 px-8 py-6 text-xl font-poppins shadow-lg">
                <FontAwesomeIcon icon={faFile} className="pr-4 text-2xl" />
                Download Resume
              </button>
            </a>
          </div>
          <div className="hero-img py-2 px-4 mb-5">
            <img src={TheWeeknd} alt="Hero" />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
