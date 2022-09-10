import React, { Component } from "react";
import { ReactComponent as DefaultAvatar } from "../images/avatar-default.svg";
import "./profilepage.scss"
import QR from "./../images/qr.png"
const Profile = () => {
    return (
      <main className={"main"}>
        <div className={"page page-profile"}>
          <div className={"container"}>
            <div className={"page__header"}>
              <h1 className="page__title">My profile</h1>
            </div>
            <div className={"profile__wrapper"}>
              <div className={"profile-info"}>
                <div className={"form__block form__block--avatar"}>
                  <div className={"form form--avatar"}>
                    <div className={"form-avatar__left"}>
                      <div className={"form-avatar__img"}>
                        <DefaultAvatar/>
                        <i className="icon-camera" data-avatar-change="">C</i>
                      </div>
                    </div>
                    <div className={"form-avatar__right"}>
                    <div className="user-info__profile-name">testdev</div>
                    <div className="profile-info__id">
                      <div className="profile-info__id-heading">Casino ID:</div>
                      <span>94809430</span>
                    </div>
                    
                  </div>
                    <a href="#" className="profile__logout"><i className="icon-logout">logout</i></a>
                  </div>
                <div className="profile-info__socials">
                  <p>Click on icon to link or unlink an account</p>

                  <ul className="socials">
                    <li className="socials__item ">
                      <a className="socials__link facebook inactive"
                         href="https://sollogin.com/social/login/facebook/3512d63c10d8f881cd4a9fb0f97f7ab6?back_url=https://demo.casino/user/social/login?page=%2F">
                        <i className="icon-facebook">f</i>
                      </a>
                    </li>
                    <li className="socials__item ">
                      <a className="socials__link google linked" data-modal=""
                         href="https://demo.casino/modal/unbind_social?askfor=https://demo.casino/user/social/logout?networkName=google">
                        <i className="icon-google">g</i>
                      </a>
                    </li>
                    <li className="socials__item ">
                      <a className="socials__link telegram inactive"
                         href="https://sollogin.com/social/login/telegram/3512d63c10d8f881cd4a9fb0f97f7ab6?back_url=https://demo.casino/user/social/login?page=%2F">
                        <i className="icon-telegram">t</i>
                      </a>
                    </li>
                  </ul>
                </div>

                </div>
                <div className={"profile-info__extra"}>
                  <div className="profile-info__buttons">
                    <a href="/cabinet/buycredits/choosePayMethod"
                       className="button  button--t4 "><span>Deposit</span></a> <a
                    href="/cabinet/account/credits_to_money" className="button  button--t1 "><span>Withdraw</span></a>
                  </div>
                  <div className={"row row--balance"}>
                    <div className={"currency"}>
                      <label>Currency: USD</label>
                      <div>0.00 USD</div>
                    </div>
                    <div className={"currency"}>
                      <label>BONUS</label>
                      <div>1,000.00 USD</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="points">
                      <i className="icon-diamond"></i>
                      <span className="points__title">Experience level</span>
                      <span className="points__value">1</span>
                    </div>
                    <div className="points">
                      <span className="points__title">Points</span>
                      <div className="points__value">
                        0 <span> / 150 </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="points">
                      <i className="icon-diamond"></i>
                      <div className="points__title">Loyalty level</div>
                      <div className="points__value"> 1</div>
                    </div>
                    <div className="points">
                      <div className="points__title">Loyalty Points</div>
                      <div className="points__value">
                        0 <span>/ 1000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"profile-menu-wrapper"}>
                <ul className="profile-menu">
                  <li className="profile-menu__item ">
                    <a className="profile-menu__item-link" href="/favoriteGames">
                      <i className=" icon-favorite"></i>
                      <span>Featured games</span>

                      <i className="icon-arrow"></i>
                    </a>

                  </li>
                  <li className="profile-menu__item ">
                    <a className="profile-menu__item-link" href="/tournaments/tournaments/getAll">
                      <i className=" icon-tournament"></i>
                      <span>My Tournaments</span>

                      <i className="icon-arrow"></i>
                    </a>

                  </li>
                  <li className="profile-menu__item ">
                    <a className="profile-menu__item-link" href="/bonus/player/myBonus">
                      <i className=" icon-bonuses"></i>
                      <span>My bonuses</span>

                      <i className="icon-arrow"></i>
                    </a>

                  </li>
                  <li className="profile-menu__item ">
                    <a className="profile-menu__item-link" href="/player/accounts">
                      <i className=" icon-accounts"></i>
                      <span>My accounts</span>

                      <i className="icon-arrow"></i>
                    </a>

                  </li>
                  <li className="profile-menu__item ">
                    <a className="profile-menu__item-link" href="/cabinet/account/history">
                      <i className=" icon-transactions-history"></i>
                      <span>Transaction history</span>

                      <i className="icon-arrow"></i>
                    </a>

                  </li>
                  <li className="profile-menu__item ">
                    <a className="profile-menu__item-link" href="/messaging/default/index">
                      <i className=" icon-message"></i>
                      <span>Notifications</span>

                      <span className="user-info-messages__count" style={{display: "block"}} data-messages-count=""
                            data-messages-indicator="">2</span>
                      <i className="icon-arrow"></i>
                    </a>

                  </li>
                  <li className="profile-menu__item ">
                    <a className="profile-menu__item-link" href="/user/upload/index">
                      <i className=" icon-documents"></i>
                      <span>Documents</span>

                      <i className="icon-arrow"></i>
                    </a>

                  </li>
                </ul>
                <div className="profile-menu__item active">
                  <a className="profile-menu__item-link" href="#profile-settings" data-user-navigation="">
                    <i className="icon-user"></i><span> Profile settings </span>
                    <i className="icon-arrow"></i>
                  </a>
                </div>
              </div>
              <a href="https://t.me/new_demo_casino_bot" className="telegram-qr">
                <div className="telegram-qr__description">
                  <i className="icon-telegram"></i>
                  <h3>Telegram Casino</h3>
                  <p>Scan the code and play your favourite games!</p>
                  <i className="icon-arrow"></i>
                </div>
                <div className="telegram-qr__img">
                  <span style={{color: "black"}}>QR</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Profile;