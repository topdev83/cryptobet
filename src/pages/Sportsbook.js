import React from "react";
import "./pageStyle.scss";
import {
  liveTabIcons,
  matchTabIcons,
  svgSPortsIcons,
  upcomingTabIcons,
} from "../components/IconHolder";
import styled from "styled-components";
import { GamesNav } from "../components/GamesNav";
import { ReactComponent as Crown } from "../images/crown.svg";
import { ReactComponent as Soccer } from "../images/gamesnavbar/soccer.svg";

const Sportsbook = ({liveData, topData, upcomingData, newError, isBetDataLoading}) =>
{
  const tabItem = Array.from(
    document.querySelectorAll(`.main .tabBar .tabItem`)
  );
  tabItem.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      tabItem.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabItem[i].classList.add("active");
    });
  });
  const matchTab = Array.from(
    document.querySelectorAll(`.main .matches .matchTab ul li`)
  );
  matchTab.forEach((match, i) => {
    match.addEventListener("click", () => {
      matchTab.forEach((match) => {
        match.classList.remove("active");
      });
      matchTab[i].classList.add("active");
    });
  });
  return (
    <>
      <main className="main">
        <div className={"sportsbook"} style={{ background: "rgb(26,26,26)" }}>
          <SportsBookPreWrap>
            {/*<div className="tabBar">*/}
            {/*  <div className="tabFlow">*/}
            {/*      <div className="tabItem active">*/}
            {/*        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">*/}
            {/*              <path fillRule="evenodd" clipRule="evenodd" d="M16.669 8.94762C16.2887 8.60535 15.7113 8.60535 15.331 8.94762L7.33104 16.1476C7.12032 16.3373 7 16.6074 7 16.8909V23.0002C7 23.5525 7.44772 24.0002 8 24.0002H11.2727C11.825 24.0002 12.2727 23.5525 12.2727 23.0002V21.6002C12.2727 19.9433 13.6159 18.6002 15.2727 18.6002H16.7273C18.3841 18.6002 19.7273 19.9433 19.7273 21.6002V23.0002C19.7273 23.5525 20.175 24.0002 20.7273 24.0002H24C24.5523 24.0002 25 23.5525 25 23.0002V16.8909C25 16.6074 24.8797 16.3373 24.669 16.1476L16.669 8.94762ZM13.9931 7.46104C15.134 6.43421 16.866 6.43421 18.0069 7.46104L26.0069 14.661C26.639 15.23 27 16.0405 27 16.8909V23.0002C27 24.657 25.6569 26.0002 24 26.0002H20.7273C19.0704 26.0002 17.7273 24.657 17.7273 23.0002V21.6002C17.7273 21.0479 17.2796 20.6002 16.7273 20.6002H15.2727C14.7204 20.6002 14.2727 21.0479 14.2727 21.6002V23.0002C14.2727 24.657 12.9296 26.0002 11.2727 26.0002H8C6.34315 26.0002 5 24.657 5 23.0002V16.8909C5 16.0405 5.36096 15.23 5.99311 14.661L13.9931 7.46104Z"></path>*/}
            {/*        </svg>*/}
            {/*      </div>*/}
            {/*      {*/}
            {/*        svgSPortsIcons.map((svg,i)=>{*/}
            {/*          return(*/}
            {/*            <div key={i} className="tabItem">*/}
            {/*              {svg.img}*/}
            {/*            </div>*/}
            {/*          )*/}
            {/*        })*/}
            {/*      }*/}
            {/*  </div>*/}
            {/*</div>*/}
            <GamesNav />
            <div className="matches home">
              <div className="matchType homeType">
                <div>
                  <Crown />
                  <span>Top Matches</span>
                </div>
              </div>
              <div className={"top-match-wrapper"}>
                <div style={{ overflow: "visible" }}>
                  <div className="matchTab homeTab">
                    <div
                      style={{
                        height: "32px",
                        position: "relative",
                        width: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <div className={"homeTab-innerwrap"}>
                        <div className="active">
                          <div className={"homeTab-icon"}>
                            {svgSPortsIcons[4].img}
                          </div>
                          <span>FIFA</span>
                        </div>
                        {/*this should be a return of all sports that currently has bets placed on them*/}
                        {matchTabIcons.map((match, i) => {
                          return (
                            <div key={i}>
                              <div className={"homeTab-icon"}>
                                {svgSPortsIcons[match.icon].img}
                              </div>
                              <span>{match.match}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/*here should call an endpoint with the match with most bet placed i guess*/}
                  <div className={"matchTab-flex"}>
                    <div>
                      <div>
                        <div>
                          <div className={"top-match__title"}>
                            <div>
                              <Crown />
                              <span style={{ marginLeft: "10px" }}>
                                Top Match
                              </span>
                            </div>
                          </div>
                          <div className={"top-match__body"}>
                            <div className={"top-match__current-score"}>
                              <div
                                className={"top-match__current-score-tittle"}
                              >
                                EVENT STARTS IN
                              </div>
                              <div className={"top-match__event-starts-in"}>
                                <div>
                                  <span>00</span>
                                  <span>days</span>
                                </div>
                                <div>:</div>
                                <div>
                                  <span>14</span>
                                  <span>HOURS</span>
                                </div>
                                <div>:</div>
                                <div>
                                  <span>47</span>
                                  <span>MINS</span>
                                </div>
                              </div>
                            </div>
                            <div className={"top-match__current-time"}>
                              <div>
                                <span>
                                  <Soccer />
                                </span>
                                <span>
                                  {" "}
                                  International / UEFA Nations League
                                </span>
                              </div>
                              <div>
                                <div>Today at 15:45</div>
                              </div>
                            </div>
                            <div className={"top-match__current-odds"}>
                              <div>
                                <div className={"top-match-odds__odd"}>
                                  <div
                                    style={{ width: "48px", height: "48px" }}
                                  >
                                    <img
                                      src={""}
                                      alt={"BG"}
                                      width={48}
                                      height={48}
                                    />
                                  </div>
                                  <div>Belgium</div>
                                  <div className={"top-match-outcome"}>
                                    1.65
                                  </div>
                                </div>
                                <div className={"top-match-odds__odd"}>
                                  <div className={"top-match-tie"}>X</div>
                                  <div></div>
                                  <div className={"top-match-outcome"}>4.2</div>
                                </div>
                                <div className={"top-match-odds__odd"}>
                                  <div
                                    style={{ width: "48px", height: "48px" }}
                                  >
                                    <img
                                      src={""}
                                      alt={"POL"}
                                      width={48}
                                      height={48}
                                    />
                                  </div>
                                  <div>Poland</div>
                                  <div className={"top-match-outcome"}>5.6</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"top-match__bets"}>
                            <div>
                              <div>
                                <div className={"bet-value"}>
                                  <form className={"custom-bet-value"}>
                                    <label>
                                      <input
                                        inputMode="decimal"
                                        type="tel"
                                        pattern="\d*"
                                        maxLength="10"
                                        style={{
                                          height: "30px",
                                          width: "100%",
                                        }}
                                      />
                                      <i>€</i>
                                    </label>
                                  </form>
                                </div>
                                <div className={"bet-value-value"}>
                                  <div>
                                    <span>5</span>
                                    <span>10</span>
                                    <span>50</span>
                                    <span>100</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <button>
                                <div>Place Bet</div>
                              </button>
                            </div>
                            <div>
                              <div>
                                <div>«</div>
                                <div>»</div>
                              </div>
                              <div>Go to Event ᐅ</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      {/*  */}
                      {topData?.map((TopInfo, i) => {
                      return(
                      <div key={i} className="card">
                        <div>
                          <div className="card-header">
                            <div>
                              <div>
                                <span>{svgSPortsIcons[4].img}</span>
                                <span>{TopInfo.league}</span>
                              </div>
                              <div></div>
                            </div>
                          </div>
                          <a href="/view-match" className="card-body">
                            <div className="card-body-time">
                              <div className="card-body-time__left">
                                {TopInfo.time}
                              </div>
                              <div className="card-body-time__right">
                                <span></span>
                                <span>
                                  <span>live</span>
                                </span>
                              </div>
                            </div>
                            <div className={"card-body-body"}>
                              <div>
                                <div className="team">
                                  <div>
                                    <span>
                                      <img
                                        src={`${TopInfo.flag1}`}
                                        alt="team1"
                                      />
                                    </span>
                                    <div>{TopInfo.team1}</div>
                                  </div>
                                  <div>{TopInfo.score1}</div>
                                </div>
                                <div className="team">
                                  <div>
                                    <span>
                                      <img
                                        src={`${TopInfo.flag2}`}
                                        alt="team1"
                                      />
                                    </span>
                                    <div>{TopInfo.team2}</div>
                                  </div>
                                  <div>{TopInfo.score2}</div>
                                </div>
                              </div>
                            </div>
                          </a>
                          <div className="card-bet-section">
                            <div className={"card-bets"}>
                              <div>
                                {/*<div className={"card-bets-abso"}></div>*/}
                                <div className={"card-bets-badge"}>
                                  <span>{TopInfo.team1}</span>
                                  <span>{TopInfo.team1won}</span>
                                </div>
                              </div>
                              <div>
                                <div className={"card-bets-badge"}>
                                  <span>Draw</span>
                                  <span>{TopInfo.draw}</span>
                                </div>
                              </div>
                              <div>
                                <div className={"card-bets-badge"}>
                                  <span>{TopInfo.team2}</span>
                                  <span>{TopInfo.team2won}</span>
                                </div>
                              </div>
                            </div>
                            <div className={"card-show-markets"}>
                              Show main markets {svgSPortsIcons[21].img}
                            </div>
                          </div>
                          {/*<div className="card-market">*/}
                          {/*  <span>SHOW MAIN MARKETS</span>*/}
                          {/*  {svgSPortsIcons[21].img}*/}
                          {/*</div>*/}
                        </div>
                      </div>
                      )
                      })
                      }
                      {/*  */}
                  </div>
                </div>
              </div>
                {/*<div className="cards grid-container">*/}
                {/*  {topData?.map((info, i) => {*/}
                {/*    return (*/}
                {/*      <>*/}
                {/*        <div key={i} className="card">*/}
                {/*          <div>*/}
                {/*            <div className="card-header">*/}
                {/*              <div>*/}
                {/*                <div>*/}
                {/*                  <span>{svgSPortsIcons[4].img}</span>*/}
                {/*                  <span>{info.league}</span>*/}
                {/*                </div>*/}
                {/*                <div></div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="card-body">*/}
                {/*              <div className="card-body-time">*/}
                {/*                <div className="card-body-time__left">*/}
                {/*                  {info.time}*/}
                {/*                </div>*/}
                {/*                <div className="card-body-time__right">*/}
                {/*                  <span></span>*/}
                {/*                  <span>*/}
                {/*                    <span>live</span>*/}
                {/*                  </span>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*              <div className={"card-body-body"}>*/}
                {/*                <div>*/}
                {/*                  <div className="team">*/}
                {/*                    <div>*/}
                {/*                      <span>*/}
                {/*                        <img*/}
                {/*                          src={`${info.flag1}`}*/}
                {/*                          alt="team1"*/}
                {/*                        />*/}
                {/*                      </span>*/}
                {/*                      <div>{info.team1}</div>*/}
                {/*                    </div>*/}
                {/*                    <div>{info.score1}</div>*/}
                {/*                  </div>*/}
                {/*                  <div className="team">*/}
                {/*                    <div>*/}
                {/*                      <span>*/}
                {/*                        <img*/}
                {/*                          src={`${info.flag2}`}*/}
                {/*                          alt="team1"*/}
                {/*                        />*/}
                {/*                      </span>*/}
                {/*                      <div>{info.team2}</div>*/}
                {/*                    </div>*/}
                {/*                    <div>{info.score2}</div>*/}
                {/*                  </div>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            <div className="card-bet-section">*/}
                {/*              <div className={"card-bets"}>*/}
                {/*                <div>*/}
                {/*                  /!*<div className={"card-bets-abso"}></div>*!/*/}
                {/*                  <div className={"card-bets-badge"}>*/}
                {/*                    <span>{info.team1}</span>*/}
                {/*                    <span>{info.team1won}</span>*/}
                {/*                  </div>*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                  <div className={"card-bets-badge"}>*/}
                {/*                    <span>Draw</span>*/}
                {/*                    <span>{info.draw}</span>*/}
                {/*                  </div>*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                  <div className={"card-bets-badge"}>*/}
                {/*                    <span>{info.team2}</span>*/}
                {/*                    <span>{info.team2won}</span>*/}
                {/*                  </div>*/}
                {/*                </div>*/}
                {/*              </div>*/}
                {/*              <div className={"card-show-markets"}>*/}
                {/*                Show main markets {svgSPortsIcons[21].img}*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*            /!*<div className="card-market">*!/*/}
                {/*            /!*  <span>SHOW MAIN MARKETS</span>*!/*/}
                {/*            /!*  {svgSPortsIcons[21].img}*!/*/}
                {/*            /!*</div>*!/*/}
                {/*          </div>*/}
                {/*        </div>*/}
                {/*      </>*/}
                {/*    );*/}
                {/*  })}*/}
                {/*</div>*/}

              <div className={"matchType homeType"} style={{ textAlign: "left" }}>
                <div style={{display: "flex", alignItems:"center"}}>
                  <Crown />
                  <span style={{ marginLeft: "10px" }}>Live Matches</span>
                </div>
              </div>
              {/*<div className="matchTab liveTab">*/}
              {/*  <ul>*/}
              {/*    <li className="active">*/}
              {/*      {svgSPortsIcons[4].img}*/}
              {/*      <span>FIFA</span>*/}
              {/*    </li>*/}
              {/*    {*/}
              {/*      liveTabIcons.map((match, i) => {*/}
              {/*        return (*/}
              {/*          <li key={i}>*/}
              {/*            {svgSPortsIcons[match.icon].img}*/}
              {/*            <span>{match.match}</span>*/}
              {/*          </li>*/}
              {/*        );*/}
              {/*      })*/}
              {/*    }*/}
              {/*  </ul>*/}
              {/*</div>*/}
              <div className={"top-match-wrapper"}>
                <div style={{overflow:"visible"}}>
              <div className="matchTab homeTab">
                <div
                  style={{
                    height: "32px",
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div className={"homeTab-innerwrap"}>
                    <div className="active">
                      <div className={"homeTab-icon"}>
                        {svgSPortsIcons[4].img}
                      </div>
                      <span>FIFA</span>
                    </div>
                    {liveTabIcons.map((match, i) => {
                      return (
                        <div key={i}>
                          <div className={"homeTab-icon"}>
                            {svgSPortsIcons[match.icon].img}
                          </div>
                          <span>{match.match}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="matchBody">
                {/*<div className="cards grid-container">*/}
                  {liveData?.map((info, i) => {
                    return (
                      <>
                        <div key={i} className="card">
                          <div>
                            <div className="card-header">
                              <div>
                                <div>
                                  <span>{svgSPortsIcons[4].img}</span>
                                  <span>{info.league}</span>
                                </div>
                                <div></div>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="card-body-time">
                                <div className="card-body-time__left">
                                  {info.time}
                                </div>
                                <div className="card-body-time__right">
                                  <span></span>
                                  <span>
                                    <span>live</span>
                                  </span>
                                </div>
                              </div>
                              <div className={"card-body-body"}>
                                <div>
                                  <div className="team">
                                    <div>
                                      <span>
                                        <img
                                          src={`${info.flag1}`}
                                          alt="team1"
                                        />
                                      </span>
                                      <div>{info.team1}</div>
                                    </div>
                                    <div>{info.score1}</div>
                                  </div>
                                  <div className="team">
                                    <div>
                                      <span>
                                        <img
                                          src={`${info.flag2}`}
                                          alt="team1"
                                        />
                                      </span>
                                      <div>{info.team2}</div>
                                    </div>
                                    <div>{info.score2}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-bet-section">
                              <div className={"card-bets"}>
                                <div>
                                  {/*<div className={"card-bets-abso"}></div>*/}
                                  <div className={"card-bets-badge"}>
                                    <span>{info.team1}</span>
                                    <span>{info.team1won}</span>
                                  </div>
                                </div>
                                <div>
                                  <div className={"card-bets-badge"}>
                                    <span>Draw</span>
                                    <span>{info.draw}</span>
                                  </div>
                                </div>
                                <div>
                                  <div className={"card-bets-badge"}>
                                    <span>{info.team2}</span>
                                    <span>{info.team2won}</span>
                                  </div>
                                </div>
                              </div>
                              <div className={"card-show-markets"}>
                                Show main markets {svgSPortsIcons[21].img}
                              </div>
                            </div>
                            {/*<div className="card-market">*/}
                            {/*  <span>SHOW MAIN MARKETS</span>*/}
                            {/*  {svgSPortsIcons[21].img}*/}
                            {/*</div>*/}
                          </div>
                        </div>
                      </>
                    );
                  })}
                {/*</div>*/}
              </div>
                </div>
              </div>

              <div className={"matchType homeType"} style={{ textAlign: "left" }}>
                <div style={{display: "flex", alignItems:"center"}}>
                  <img src="images/team/upcoming.svg" alt="upcoming" />
                  <span>Upcoming Events</span>
                </div>
              </div>
              <div className={"top-match-wrapper"}>
                <div style={{overflow:"visible"}}>

              <div className="matchTab homeTab">
                <div
                  style={{
                    height: "32px",
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div className={"homeTab-innerwrap"}>
                    <div className="active">
                      <div className={"homeTab-icon"}>
                        {svgSPortsIcons[4].img}
                      </div>
                      <span>FIFA</span>
                    </div>
                    {upcomingTabIcons.map((match, i) => {
                      return (
                        <div key={i}>
                          <div className={"homeTab-icon"}>
                            {svgSPortsIcons[match.icon].img}
                          </div>
                          <span>{match.match}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="matchBody">
                {/*<div className="cards grid-container">*/}
                  {upcomingData?.map((info, i) => {
                    return (
                      <>
                        <div key={i} className="card">
                          <div>
                            <div className="card-header">
                              <div>
                                <div>
                                  <span>{svgSPortsIcons[4].img}</span>
                                  <span>{info.league}</span>
                                </div>
                                <div></div>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="card-body-time">
                                <div className="card-body-time__left">
                                  {info.time}
                                </div>
                                <div className="card-body-time__right">
                                  <span></span>
                                  <span>
                                    <span>live</span>
                                  </span>
                                </div>
                              </div>
                              <div className={"card-body-body"}>
                                <div>
                                  <div className="team">
                                    <div>
                                      <span>
                                        <img
                                          src={`${info.flag1}`}
                                          alt="team1"
                                        />
                                      </span>
                                      <div>{info.team1}</div>
                                    </div>
                                    <div>{info.score1}</div>
                                  </div>
                                  <div className="team">
                                    <div>
                                      <span>
                                        <img
                                          src={`${info.flag2}`}
                                          alt="team1"
                                        />
                                      </span>
                                      <div>{info.team2}</div>
                                    </div>
                                    <div>{info.score2}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-bet-section">
                              <div className={"card-bets"}>
                                <div>
                                  {/*<div className={"card-bets-abso"}></div>*/}
                                  <div className={"card-bets-badge"}>
                                    <span>{info.team1}</span>
                                    <span>{info.team1won}</span>
                                  </div>
                                </div>
                                <div>
                                  <div className={"card-bets-badge"}>
                                    <span>Draw</span>
                                    <span>{info.draw}</span>
                                  </div>
                                </div>
                                <div>
                                  <div className={"card-bets-badge"}>
                                    <span>{info.team2}</span>
                                    <span>{info.team2won}</span>
                                  </div>
                                </div>
                              </div>
                              <div className={"card-show-markets"}>
                                Show main markets {svgSPortsIcons[21].img}
                              </div>
                            </div>
                            {/*<div className="card-market">*/}
                            {/*  <span>SHOW MAIN MARKETS</span>*/}
                            {/*  {svgSPortsIcons[21].img}*/}
                            {/*</div>*/}
                          </div>
                        </div>
                      </>
                    );
                  })}
                {/*</div>*/}
              </div>
              </div>
                </div>

            </div>
          </SportsBookPreWrap>
        </div>
      </main>
    </>
  );
};

const SportsBookPreWrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  font-weight: 400;
  flex-direction: column;
  min-height: calc(0px + 100vh);
`;

export default Sportsbook;
