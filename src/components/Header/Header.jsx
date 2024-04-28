import React, { useState } from "react";
import {ReactComponent as Logo} from "./Asset 3.svg";
import { Link } from "react-router-dom";
import "./styles.css";
const Header = () => {
  const navigationLinks = [
    { label: "Home", Path: "/" },
    { label: "About", Path: "/about" },
    { label: "Feedback", Path: "/feedback" },
    { label: "Contact", Path: "/contact" },
  ];
  const [showMobileSidebar, setShowMobileSidebar] = useState(true);
  const handleItemClick = () => {
    setShowMobileSidebar(true);
  };
  return (
    <header>
      {/* Mobile Menu Icon */}
      <nav>
        <div className="navtop">
          <h3>
            <Link
              to="/"
              onClick={() => showMobileSidebar && setShowMobileSidebar(false)}
              className="project-title"
            >
              Revo's Store  <Logo style={{ width: "80px", height: "80px", marginLeft: "10px",position:"absolute"}} />
            </Link>
          </h3>
          <div
            className={`mobile-menu-icon ${!showMobileSidebar ? "active" : ""}`}
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          >
            {Array.from({ length: 2 + showMobileSidebar }, (_, i) => (
              <div
                key={i}
                className={
                  i === 0 ? "firstbar" : i === 1 ? "secondbar" : "lastbar"
                }
              />
            ))}
            {/* If the condition is true, only the first, second, and last div elements will be rendered. */}
          </div>
        </div>
        {/* Desktop Navigation */}
      </nav>
      <ul className={`desktop-nav ${showMobileSidebar ? "" : "show"}`}>
        {navigationLinks.map((items, key) => {
          return (
            <li key={key} onClick={handleItemClick}>
              <Link to={items.Path}>{items.label}</Link>
            </li>
          );
          /* activeStyle={{ color: "blue", textDecoration: "underline" }} */
        })}
      </ul>
    </header>
  );
};

export default Header;
