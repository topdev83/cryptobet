import React from "react";
import "./popup.css";
import { Category, LangItem } from "../../Cards";
const Popup = ({
  showPop,
  isShowed,
  categoryLists,
  displayLang,
  displayCategory,
  categoryTitle,
  currentLanguage,
}) => {
  return (
    <>
      <div
        onClick={showPop}
        className={`mfp-bg sidebar-providers mfp-ready ${
          isShowed ? "show" : ""
        }`}
      ></div>
      <div
        className={`mfp-wrap mfp-close-btn-in mfp-auto-cursor sidebar-providers mfp-ready ${
          isShowed ? "show" : ""
        }`}
        tabIndex="-1"
        style={{
          overflow: "hidden auto",
          transform: `${isShowed ? "translateX(0%)" : "translateX(100%)"}`,
          transition: `all 0.4s ease-in-out`,
        }}
      >
        <div className="mfp-container mfp-s-ready mfp-inline-holder">
          <div className="mfp-content">
            <Category
              showPop={showPop}
              categoryLists={categoryLists}
              displayCategory={displayCategory}
              categoryTitle={categoryTitle}
            />
            <LangItem
              showPop={showPop}
              categoryLists={categoryLists}
              displayLang={displayLang}
              categoryTitle={categoryTitle}
              currentLanguage={currentLanguage}
            />
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </>
  );
};

export default Popup;
