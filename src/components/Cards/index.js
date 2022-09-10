import React from "react";
import "./cards.scss";
import { CardsCategory, CardsLanguage } from "./CardItem";

export const Category = ({
  showPop,
  categoryLists,
  displayCategory,
  categoryTitle,
}) => {
  return (
    <div
      className="category-card"
      id="sidebar-category-card"
      style={{ display: `${displayCategory}` }}
    >
      <h2 className="section__title">{categoryTitle}</h2>
      <div className="category-card__wrapper">
        <ul>
          {categoryLists.map((category, i) => {
            return (
              <CardsCategory
                key={i}
                link={category.link}
                imgSrc={category.imgSrc}
                imgAlt={category.imgAlt}
                cardName={category.cardName}
              />
            );
          })}
        </ul>
      </div>
      <button
        onClick={showPop}
        title="Close (Esc)"
        type="button"
        className="mfp-close"
      >
        ×
      </button>
    </div>
  );
};
export const LangItem = ({
  showPop,
  categoryLists,
  displayLang,
  categoryTitle,
  currentLanguage,
}) => {
  return (
    <div
      className="lang-menu"
      id="lang-menu"
      style={{ display: `${displayLang}` }}
    >
      <h2 className="section__title">{categoryTitle}</h2>
      <div className="lang__dropdown">
        <ul className="lang-list">
          {categoryLists.map((language, i) => {
            return (
              <CardsLanguage
                key={i}
                imgSrc={language.imgSrc}
                imgAlt={language.imgAlt}
                languageName={language.language}
                currentLanguage={currentLanguage}
              />
            );
          })}
        </ul>
      </div>
      <button
        onClick={showPop}
        title="Close (Esc)"
        type="button"
        className="mfp-close"
      >
        ×
      </button>
    </div>
  );
};
