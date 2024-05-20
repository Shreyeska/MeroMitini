import React from "react";
import logo1 from "../asset/aaviyanta.png";
import logo2 from "../asset/tlh.png";
import logo3 from "../asset/kmc.jpg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="wave-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="100 0 1490 240"
            className="wave"
          >
            <path
              fill="var(--nav)"
              fillOpacity="1"
              d="M80,160c64,-20,128,-40,192,-40s128,40,192,20s128,-80,192,-60s128,20,192,20s128,-60,192,-40s128,60,192,20s128,-60,192,-20s128,80,192,60s128,-20,192,-40v100H80V160z"
              transform="rotate(-1.7, 50, 50)"
            ></path>
            <path
              fill="var(--primary-color)"
              fillOpacity="1"
              d="M80,160c64,-20,128,-40,192,-40s128,40,192,20s128,-80,192,-60s128,20,192,20s128,-60,192,-40s128,60,192,20s128,-60,192,-20s128,80,192,60s128,-20,192,-40v100H80V160z"
            ></path>
          </svg>
        </div>
        <p>
          &copy; 2023 Digitizing Women-Centric Events in Ward 17. All rights
          reserved.
        </p>

        <ul className="footer-links">
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/Privacy">Privacy Policy</a>
          </li>
        </ul>
        <div className="footer-logo-container">
          <img src={logo1} alt="Logo 1" className="footer-logo" />
          <img src={logo2} alt="Logo 2" className="footer-logo" />
          <img src={logo3} alt="Logo 3" className="footer-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
