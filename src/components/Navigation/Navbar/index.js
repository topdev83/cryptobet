import React from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { BiLeftArrow } from "react-icons/bi";
import {
  IoPlayOutline,
  IoSearchOutline,
  IoDocumentOutline,
} from "react-icons/io5";
import {
  MdArrowRight,
  MdOutlineFavoriteBorder,
  MdOutlineSportsBaseball,
  MdOutlineMonetizationOn,
  MdOutlineChatBubbleOutline,
  MdSportsBaseball,
} from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import Themetab from "../../Themetab";
import { GameLists, Providers, Languages } from "../../Cards/CategoryInfo";

function Navbar({
  toggle,
  isOpened,
  showPop,
  showSearch,
  currentLanguageNumber,
}) {
  const location = useLocation();
  const getActiveColor = (activeColor) => {
    if (location.pathname === activeColor) {
      return "#00a87c";
    }
  };
  return (
    <aside className={`sidebar ${isOpened ? "opened" : ""}`}>
      <div
        onClick={toggle}
        className={`sidebar-toggler ${isOpened ? "opened" : ""}`}
      >
        <BiLeftArrow className="icon-menu-toggler" />
      </div>
      <div className="logo">
        <Link to="/">
          <div >
            <img src="images/logo/logo.png" alt="BetSweet" />
          </div>
        </Link>
      </div>
      <div className="sidebar__wrapper">
        <div className="sidebar__component">
          <ul className="header-menu">
            <li className="header-menu-item">
              <Link className="header-menu-item-link" to="/">
                <div className="nav-icon">
                  <img src={'images/navIcons/Icono-1.png'} alt=''/>
                </div>
                <span className="sidebar-menu-text">Apuestas deportivas</span>
              </Link>
            </li>
            <li className="header-menu-item">
              <Link className="header-menu-item-link" to="/">
                <div className="nav-icon">
                  <img src={'images/navIcons/Icono-2.png'} alt=''/>
                </div>
                <span className="sidebar-menu-text">Todos los juegos</span>
              </Link>
            </li>
            <li className="sidebar-separator"></li>
            <li className="header-menu-item">
              <Link className="header-menu-item-link" to="/">
                <div className="nav-icon">
                  <img src={'images/navIcons/Icono-3.png'} alt=''/>
                </div>
                <span className="sidebar-menu-text">
                  Caja de recompenzas
                </span>
              </Link>
            </li>
            <li className="header-menu-item">
              <Link className="header-menu-item-link" to="/">
                <div className="nav-icon">
                  <img src={'images/navIcons/Icono-4.png'} alt=''/>
                </div>
                <span className="sidebar-menu-text">Caja fuerte</span>
              </Link>
            </li>
            <li className="header-menu-item">
              <Link className="header-menu-item-link" to="/">
                <div className="nav-icon">
                  <img src={'images/navIcons/Icono-5.png'} alt=''/>
                </div>
                <span className="sidebar-menu-text">Sweet well</span>
              </Link>
            </li>
            <li className="header-menu-item">
              <Link className="header-menu-item-link" to="/">
                <div className="nav-icon">
                  <img src={'images/navIcons/Icono-6.png'} alt=''/>
                </div>
                <span className="sidebar-menu-text">Chat</span>
              </Link>
            </li>
            <li className="header-menu-item">
              <Link className="header-menu-item-link" to="/">
                <div className="nav-icon">
                  <img src={'images/navIcons/Icono-7.png'} alt=''/>
                </div>
                <span className="sidebar-menu-text">Soporte en vivo</span>
              </Link>
            </li>
            <li className="sidebar-separator"></li>
            <li className="header-menu-item">
              <Link className="header-menu-item-link" to="/">
                <div className="nav-icon">
                  <img src={'images/navIcons/Icono-8.png'} alt=''/>
                </div>
                <span className="sidebar-menu-text">Idioma</span>
              </Link>
            </li>
            <li className="header-menu-item">
              <Link className="header-menu-item-link" to="/">
                <div className="nav-icon">
                  <img src={'images/navIcons/Icono-9.png'} alt=''/>
                </div>
                <span className="sidebar-menu-text">Grupos telegram</span>
              </Link>
            </li>
            <li className="header-menu-item">
              <Link className="header-menu-item-link" to="/">
                <div className="nav-icon">
                  <img src={'images/navIcons/Icono-10.png'} alt=''/>
                </div>
                <span className="sidebar-menu-text">Novedades</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Navbar;
