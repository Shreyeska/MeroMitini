import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="wave-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="120 0 1740 320"
          className="wave"
        >
          <path
            fill="var(--secondary-color)"
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
      <div className="footer-content">
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
      </div>
    </footer>
  );
};

export default Footer;
