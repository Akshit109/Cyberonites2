import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import logo from "../../img/ps-final.png";

const Navbar = ({ scrollToComponent }) => {
  const [activeItem, setActiveItem] = useState("Home");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 40) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = ["Home", "About", "Events"];

  const handleClick = (item) => {
    setActiveItem(item);
    scrollToComponent(item);
  };

  return (
    <header
      className={`navbar ${
        visible ? "navbar--visible" : "navbar--hidden"
      }`}
    >
      <div className="navbar__container">

        {/* Logo */}

        <button
          type="button"
          className="navbar__logo"
          onClick={() => handleClick("Home")}
          aria-label="Cyberonites Home"
        >
          <img
            src={logo}
            alt="Cyberonites"
            className="navbar__logo-image"
          />
        </button>

        {/* Navigation */}

        <nav className="navbar__menu">
          {navItems.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => handleClick(item)}
              className={`navbar__link ${
                activeItem === item
                  ? "navbar__link--active"
                  : ""
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
};

Navbar.propTypes = {
  scrollToComponent: PropTypes.func.isRequired,
};

export default Navbar;