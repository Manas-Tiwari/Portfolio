import React from "react";
import "./footer.style.css";

const Footer = () => {
  return (
    <footer className="footer container text-zinc-200 border-t-2 border-gray-700 min-h-max h-16 p-2 flex justify-evenly items-center">
      <span className="copyright">© Manas Tiwari 2022</span>
      <span className="copyright">
        Made with 💖 by{" "}
        <a
          className="btn-sec inline font-abril border-b-4"
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com"
        >
          Manas Tiwari
        </a>
      </span>
    </footer>
  );
};

export default Footer;
