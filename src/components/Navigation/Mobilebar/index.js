import React from "react";
import "./mobilebar.scss";
import { Link, useLocation } from "react-router-dom";
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { AiOutlineThunderbolt, AiOutlineLogin } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
const MobileBar = ({ toggle, isOpened }) => {
  const location = useLocation();
  const getActiveColor = (activeColor) => {
    if (location.pathname === activeColor) {
      return "var(--brand-color)";
    }
  };
  return (
    <div className="mobile-bar">
      <div className="mobile-bar__layout">
        <div className="mobile-bar--left">
          <Link to="/games">
            <IoPlayOutline
              className="icon-games"
              style={{ color: getActiveColor("/games") }}
            />
            <span>All Games</span>
          </Link>
          <Link to="/bonuses">
            <MdOutlineMonetizationOn
              className="icon-bonuses"
              style={{ color: getActiveColor("/bonuses") }}
            />
            <span>Bonuses</span>
          </Link>
        </div>
        <div className="mobile-bar--center">
          <Link to="/login">
            <AiOutlineLogin
              className="icon-login"
              style={{ color: getActiveColor("/login") }}
            />
          </Link>
        </div>
        <div className="mobile-bar--right">
          <Link to="/tournaments">
            <AiOutlineThunderbolt
              className="icon-tournaments"
              style={{ color: getActiveColor("/tournaments") }}
            />
            <span>Tournaments</span>
          </Link>
          <Link
            to="/#"
            onClick={toggle}
            className={`mobile-bar__menu ${isOpened ? "menu_open" : ""}`}
            data-sidebar-closer="">
            <FaBars className="icon-more icon-menu-toogler" />
            <span>More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileBar;
