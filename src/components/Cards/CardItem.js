import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export const CardsCategory = ({ link, imgSrc, imgAlt, cardName }) => {
  return (
    <li className="category-card__item">
      <Link className="category-card__link" to={`${link}`}>
        <div className="category-card__img">
          <img className="icon-slots" src={`${imgSrc}`} alt={`${imgAlt}`} />
        </div>
        <p className="category-card__name">
          <span>{cardName}</span>
          <MdArrowRightAlt className="icon-arrow" />
        </p>
      </Link>
    </li>
  );
};

export const CardsLanguage = ({
  imgSrc,
  imgAlt,
  languageName,
  currentLanguage,
}) => {
  const languages = Array.from(document.querySelectorAll(".lang-list__item"));
  if (localStorage.languageIndex === undefined) {
    if (languages[3] !== undefined) {
      languages[3].classList.add("active");
    }
  } else {
    if (languages[localStorage.languageIndex] !== undefined) {
      languages[localStorage.languageIndex].classList.add("active");
    }
  }
  languages.forEach((language, i) => {
    language.addEventListener("click", () => {
      languages.forEach((language) => {
        language.classList.remove("active");
      });
      languages[i].classList.add("active");
      localStorage.setItem("languageIndex", `${i}`);
      if (languages[localStorage.languageIndex] !== undefined) {
        languages[localStorage.languageIndex].classList.add("active");
      }
      currentLanguage(localStorage.languageIndex);
    });
  });
  const path = useLocation();
  return (
    <li className="lang-list__item">
      <Link className="lang-list__link" to={`${path.pathname}`}>
        <img src={`${imgSrc}`} alt={`${imgAlt}`} />
        <span className="lang-list__title">{languageName}</span>
      </Link>
    </li>
  );
};
