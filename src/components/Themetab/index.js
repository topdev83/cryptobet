import React, { useState } from "react";
import "./themetab.css";
import { BsSunFill, BsMoonStars } from "react-icons/bs";
const Themetab = () => {
  const html = document.querySelector("html");
  const [lightMood, setMood] = useState(false);
  if (localStorage.theme !== undefined) {
    html.classList.add(localStorage.theme);
  }
  if (html.classList.length === 0) {
    html.classList.add("theme-dark");
  }
  const setNightVibes = () => {
    const switchTabMoods = document.querySelectorAll(
      ".theme-switch__wrapper .switch"
    );
    if (lightMood) {
      Array.from(switchTabMoods).forEach((switchTab) => {
        switchTab.classList.add("darkmood");
      });
      localStorage.setItem("theme", "theme-dark");
      html.classList.remove("theme-light");
      setMood(!lightMood);
    } else {
      Array.from(switchTabMoods).forEach((switchTab) => {
        switchTab.classList.remove("darkmood");
      });
      localStorage.setItem("theme", "theme-light");
      html.classList.remove("theme-dark");
      setMood(!lightMood);
    }
  };
  return (
    <div className="theme-switch__wrapper">
      <label id="switch" className="switch">
        <span onClick={setNightVibes} className="switcher round">
          <BsMoonStars className="icon-moon" />
          <BsSunFill className="icon-sun" />
        </span>
      </label>
      <span className="theme-switch__title"> </span>
    </div>
  );
};

export default Themetab;
