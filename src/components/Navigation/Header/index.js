import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Themetab from "../../Themetab";

import SignIn from './SignIn';

const Header = ({isUserLoggedIn}) => {
  const [isActive, setActive] = useState(false);
  const toggleLoginForm = () => {
    setActive(!isActive);
  };
  
  const [userAvatarInfoOpen, setUserAvatarInfoOpen]=useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header__layout">
          <div className="header--left">
            <span style={{display:'none'}}><Themetab /></span>
          </div>
          <div className="header--center">
            <div className="cripto-handler">
              <div className="dropdown">
                0.00000
              </div>
              <div className="wallet">
                  <div className="icon">
                    <img src={'images/navIcons/wallet.png'} alt=''/>
                  </div>
                  Wallet
              </div>
            </div>
          </div>
          <div className="header--right">
            {false//isUserLoggedIn 
              ? (
                <div className={"user-info__wrapper"}>
                  <div className="icon">
                    <img src={'images/navIcons/message.png'} alt=''/>
                  </div>
                  <div className="icon avatar">
                    <img src={'images/navIcons/default-avatar.png'} alt=''/>
                  </div>
                  <div className="icon">
                    <img src={'images/navIcons/menu.png'} alt=''/>
                  </div>
                </div>
              ) 
              : (
                <>
                  <SignIn/>
                </>
              )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
