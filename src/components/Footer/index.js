import React from "react";
import "./footer.scss";

const Footer = ({ showPop }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__layout">
          <div className="footer__layout--bottom">
            <div className="footer__menu--wrapper">

              <div className="footer__menu">
                <span className="footer__menu--title">I-GAMING</span>
                <ul className="footer__menu-list">
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 1
                    </a>
                  </li>
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 2
                    </a>
                  </li>
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 3
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__menu">
                <span className="footer__menu--title">CARACTERISTICAS</span>
                <ul className="footer__menu-list">
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 1
                    </a>
                  </li>
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 2
                    </a>
                  </li>
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 3
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__menu">
                <span className="footer__menu--title">PROMOCIONES</span>
                <ul className="footer__menu-list">
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 1
                    </a>
                  </li>
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 2
                    </a>
                  </li>
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 3
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__menu">
                <span className="footer__menu--title">SOBRE NOSOTROS</span>
                <ul className="footer__menu-list">
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 1
                    </a>
                  </li>
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 2
                    </a>
                  </li>
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 3
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__menu">
                <span className="footer__menu--title">AYUDA</span>
                <ul className="footer__menu-list">
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 1
                    </a>
                  </li>
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 2
                    </a>
                  </li>
                  <li className="footer__menu--item">
                    <a
                      href="/"
                      className="footer__menu--item-link"
                    >
                      Item 3
                    </a>
                  </li>
                </ul>
              </div>

            </div>
            <div className="disclaimer">
              <div className="images">
                <div>
                  <img src={'images/footer/18+.png'} alt=''/>
                </div>
                <div>
                  <img src={'images/footer/logo01.png'} alt=''/>
                </div>
              </div>
              <p>
              Estesitiowebofrecejuegosdeazarconexperienciade
              riesgo.Paraserunusuariodenuestrositiodebesermayor
              de18años.Nosomosresponsablesdelaviolacióndesus
              leyeslocalesrelacionadasconeli-gaming.Jueguecon
              responsabilidadydiviértaseenBetSweet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
