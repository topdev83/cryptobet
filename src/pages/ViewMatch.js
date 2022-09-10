import React from "react";
import "./pageStyle.scss";
import "./viewMatchStyle.scss";
import styled from "styled-components";
import { GamesNav } from "../components/GamesNav";
import { svgSPortsIcons } from "../components/IconHolder";

// TODO this must get data from a single match from endpoint
const ViewMatch = () => {
  return (
    <main className={"main"}>
      <div className={"sportsbook"} style={{ background: "rgb(26,26,26)" }}>
        <SportsBookPreWrap>
          <GamesNav/>
          <div className={"matches home"}>
            <div className="top-match-wrapper">
              <div className={"matchTab homeTab"}>
                <div style={{height: "32px", position: "relative", width: "100%", overflow:"hidden", marginTop: "15px"}}>
                  <div className={"homeTab-innerwrap"}>
                    <div>
                      <div>Soccer <span>135</span></div>
                    </div>
                    <div>
                      <div>Popular Soccer</div>
                    </div>
                    <div  className="active">
                      <div>UEFA Nations League</div>
                    </div>
                         
                  </div>
                </div>
              </div>
              <div>
                <div className={"card"} style={{minWidth: "100%", paddingLeft: 0}}>
                  <div>
                    <div className={"card-header"}>
                      <div>
                        <div>
                          <span>{svgSPortsIcons[4].img}</span>
                          <span>Spain / La Liga</span>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="card-body-time">
                        <div className="card-body-time__left">
                          66' 2nd half
                        </div>
                        <div className="card-body-time__right">
                          <span></span>
                          <span>
                                  <span>live</span>
                                </span>
                        </div>
                      </div>
                      <div className={"view-card-body-body"}>
                        <div className="team">
                                    <span>
                                      <img
                                        src={`flag1`}
                                        alt="flag1"
                                      />
                                    </span>
                              <div>nombrequipo</div>
                              <div className={"faults-n-corners"}>
                                <div><i>R</i>0</div>
                                <div><i>A</i>0</div>
                                <div><i>cor</i>3</div>
                              </div>
                            </div>
                        <div className={"score"}>
                          <div style={{justifyContent: "center", fontSize: "32px"}}>
                            <div>2</div>&nbsp;
                            <div>:</div>&nbsp;
                            <div>0</div>
                          </div>
                          <div style={{fontSize: "14px", color: "#565656"}}>
                            <span>1st half</span>
                            <span>:</span>&nbsp; 
                            <span>0</span>&nbsp;
                            <span>:</span>&nbsp;
                            <span>0</span>
                          </div>
                        </div>
                        <div className="team">
                                    <span>
                                      <img
                                        src={`flag2`}
                                        alt="flag2"
                                      />
                                    </span>
                            <div>nombrequipo</div>
                            <div className={"faults-n-corners"} style={{justifyContent: "flex-end"}}>
                              <div><i>R</i>0</div>
                              <div><i>A</i>0</div>
                              <div><i>cor</i>3</div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"bet-section-wrapper"}>
                  
                </div>
                <div className={"bet-section"}>
                  <div className={"bet-section__nav-wrapper"}>
                    <div className={"bet-section__nav"} draggable={true}>
                      <div>
                        <div>
                          <div className={"active"}>
                            <span className={"tab-label"}>Main</span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <span className={"tab-label"}>Totals</span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <span className={"tab-label"}>Handicaps</span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <span className={"tab-label"}>Corners/Booking</span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <span className={"tab-label"}>Fast</span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <span className={"tab-label"}>Combo Markets</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*odds*/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">1x2
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>equipo1</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>draw</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>equipo2</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Double chance
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-3-item disabled"}>
                          <div>
                            <div></div>
                            <div><span>equipo1 or draw</span></div>
                            <div><span className="bt1065">-</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item disabled"}>
                          <div>
                            <div></div>
                            <div><span>equipo 2</span></div>
                            <div><span className="bt1065">-</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>draw or equipo2</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Total
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 2.5</span></div>
                            <div><span className="bt1065">1.57</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>under 2.5</span></div>
                            <div><span className="bt1065">2.2</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 3</span></div>
                            <div><span className="bt1065">1.57</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>under 3</span></div>
                            <div><span className="bt1065">2.2</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 3.5</span></div>
                            <div><span className="bt1065">1.57</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>under 3.5</span></div>
                            <div><span className="bt1065">2.2</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 4</span></div>
                            <div><span className="bt1065">1.57</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>under 4</span></div>
                            <div><span className="bt1065">2.2</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 4.5</span></div>
                            <div><span className="bt1065">1.57</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>under 4.5</span></div>
                            <div><span className="bt1065">2.2</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Asian Total
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 2.75</span></div>
                            <div><span className="bt1065">1.57</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>under 2.75</span></div>
                            <div><span className="bt1065">2.2</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 3.25</span></div>
                            <div><span className="bt1065">1.57</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>under 3.25</span></div>
                            <div><span className="bt1065">2.2</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 3.75</span></div>
                            <div><span className="bt1065">1.57</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>under 3.75</span></div>
                            <div><span className="bt1065">2.2</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 4.25</span></div>
                            <div><span className="bt1065">1.57</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>under 4.25</span></div>
                            <div><span className="bt1065">2.2</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 4.75</span></div>
                            <div><span className="bt1065">1.57</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>under 4.75</span></div>
                            <div><span className="bt1065">2.2</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Draw no bet
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-2-item disabled"}>
                          <div>
                            <div></div>
                            <div><span>Equipo1</span></div>
                            <div><span className="bt1065">-</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>Equipo 2 2.5</span></div>
                            <div><span className="bt1065">12.2</span></div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Thid goal
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>equipo1</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>none</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>equipo2</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Which team wins the rest of the match
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>equipo1</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>draw</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>equipo2</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Handicap 0:1
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>equipo1 (0:1)</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>draw(0:1)</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>equipo2(0:1)</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Handicap 0:2
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>equipo1 (0:2)</span></div>
                            <div><span className="bt1065">1.02</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>draw(0:2)</span></div>
                            <div><span className="bt1065">1.02</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>equipo2(0:2)</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Handicap 0:3
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>equipo1 (0:3)</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>draw(0:3)</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-3-item"}>
                          <div>
                            <div></div>
                            <div><span>equipo2(0:3)</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Equipo1 total
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 2.5</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 2.5</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Equipo2 total
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 0.5</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>over 0.5</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Equipo1 clean sheet
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>yes</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>no</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Both teams to score
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>yes</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>no</span></div>
                            <div><span className="bt1065">1.01</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Exact goals
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-2-item disabled"}>
                          <div>
                            <div></div>
                            <div><span>0</span></div>
                            <div><span className="bt1065">-</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item disabled"}>
                          <div>
                            <div></div>
                            <div><span>1</span></div>
                            <div><span className="bt1065">-</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item "}>
                          <div>
                            <div></div>
                            <div><span>2</span></div>
                            <div><span className="bt1065">6.5</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item "}>
                          <div>
                            <div></div>
                            <div><span>3</span></div>
                            <div><span className="bt1065">9.3</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item "}>
                          <div>
                            <div></div>
                            <div><span>4</span></div>
                            <div><span className="bt1065">16.5</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item "}>
                          <div>
                            <div></div>
                            <div><span>5+</span></div>
                            <div><span className="bt1065">89.3</span></div>
                          </div>
                        </div>
                        
                        
                        
                      </div>
                      
                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Equipo 1 exact goals
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-2-item disabled"}>
                          <div>
                            <div></div>
                            <div><span>0</span></div>
                            <div><span className="bt1065">-</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item disabled"}>
                          <div>
                            <div></div>
                            <div><span>1</span></div>
                            <div><span className="bt1065">-</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item "}>
                          <div>
                            <div></div>
                            <div><span>2</span></div>
                            <div><span className="bt1065">6.5</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item "}>
                          <div>
                            <div></div>
                            <div><span>3</span></div>
                            <div><span className="bt1065">9.3</span></div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  {/**/}
                  <div className={"bet-section__odd"}>
                    <div>
                      <div className="bet-section__odd-title" data-editor-id="marketTitle">Equipo 2 exact goals
                        <div className="bet-section__odd-title-chevron" style={{width: "16px", height: "16px"}}>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                          </svg>
                        </div>
                      </div>
                      <svg data-cy="ic-pin" fill="white" width="16" height="16" viewBox="0 0 16 16"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{fill: "currentcolor", color: "rgba(255, 255, 255, 0.3)", width: "auto", height: "16px"}}>
                        <g>
                          <path
                            d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="16" height="16"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className={"bet-section__odd-body"}>
                      <div className={"bet-section__odd-body-flex"}>
                        <div className={"col-2-item"}>
                          <div>
                            <div></div>
                            <div><span>1</span></div>
                            <div><span className="bt1065">1.05</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item "}>
                          <div>
                            <div></div>
                            <div><span>2</span></div>
                            <div><span className="bt1065">1.1</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item "}>
                          <div>
                            <div></div>
                            <div><span>3</span></div>
                            <div><span className="bt1065">2.5</span></div>
                          </div>
                        </div>
                        <div className={"col-2-item "}>
                          <div>
                            <div></div>
                            <div><span>4</span></div>
                            <div><span className="bt1065">9.3</span></div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </SportsBookPreWrap>
      </div>
    </main>
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
export default ViewMatch;