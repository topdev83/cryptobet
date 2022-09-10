import React from "react";
import "./search.css";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
const SearchModal = ({ isSearchActive, showSearch }) => {
  return (
    <div
      className="search-modal"
      id="search-modal"
      style={{ display: `${isSearchActive ? "block" : "none"}` }}
    >
      <div
        className="search-modal-background"
        id="search-modal-background"
      ></div>
      <div className="search-modal-body">
        <div className="search-modal-body-header">
          <div className="search-icon">
            <IoSearchOutline className="icon-search" />
          </div>
          <form
            className="search-widget-form"
            id="search-widget-form"
            action="/game/search"
          >
            <input
              maxLength="100"
              type="text"
              name=""
              placeholder="Search"
              data-trim-l=""
            />
          </form>
          <div onClick={showSearch} className="close-icon">
            <MdOutlineClose className="icon-close" />
          </div>
        </div>
        <div className="search-modal-body-games" id="search-widget-body">
          <div
            className="games_not_found"
            id="games-not-found"
            style={{ display: "none" }}
          >
            <img src="/images/search/ghost.png" alt="" /> Sorry, no games found
          </div>
          <div
            className="search-widget-game-list"
            id="search-widget-game-list"
            style={{ display: "none" }}
          >
            <div className="game-item" data-game-id="14527">
              <div
                className="game-img"
                style={{ background: "url('/images/search/football.png')" }}
              ></div>
              <div className="game-info">
                <div className="game-name">Virtual Football World Cup</div>
                <div className="game-provider">Betradar</div>
                <div className="game-tags">
                  <span className="game-top">TOP</span>
                </div>
              </div>
              <div className="game-buttons">
                <div
                  className="game-button button button--t3"
                  data-game-type="real"
                >
                  Play
                </div>
                <div
                  className="game-button button button--t4"
                  data-game-type="demo"
                >
                  Demo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
