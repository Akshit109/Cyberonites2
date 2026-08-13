import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="cyb-footer">

      {/* Background */}
      <div className="cyb-footer__grid" />

      {/* Top section */}
      <div className="cyb-footer__top">

        {/* Left */}
        <div className="cyb-footer__intro">

          <div className="cyb-footer__index">
            
            <i />
            <span>END OF TRANSMISSION</span>
          </div>

          <h2 className="cyb-footer__logo">
            C Y B E R O N I  T E S 
          </h2>

          <p className="cyb-footer__text">
            A student-driven cybersecurity community focused on
            practical learning, technical exploration, and building
            the next generation of cyber professionals.
          </p>

        </div>


        {/* Right */}
        <div className="cyb-footer__navigation">

          {/* Navigation */}
          <div className="cyb-footer__group">

            <span className="cyb-footer__label">
              NAVIGATION
            </span>

            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Events">Events</a>
            <a href="/team2025">Team</a>

          </div>


          {/* Connect */}
          <div className="cyb-footer__group">

            <span className="cyb-footer__label">
              CONNECT
            </span>

            <a href="mailto:support@cyberonites.com">
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/cyberonites-club/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/official_cyberonites/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://chat.whatsapp.com/Hq3fqUz5J0eD4i4bYUSzR1"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

          </div>


          {/* Information */}
          <div className="cyb-footer__group cyb-footer__info">

            <span className="cyb-footer__label">
              SYSTEM
            </span>

            <p>
              GLA UNIVERSITY
            </p>

            <p>
              MATHURA, INDIA
            </p>

            <p>
              EST. 2016
            </p>

            <span className="cyb-footer__status">
              <i />
              SYSTEM ONLINE
            </span>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="cyb-footer__bottom">

        <span>
          © 2026 CYBERONITES
        </span>

        <span>
          BUILD · LEARN · DEFEND
        </span>

        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          BACK TO TOP ↑
        </button>

      </div>

    </footer>
  );
};

export default Footer;