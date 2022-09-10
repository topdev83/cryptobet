import React from "react";
import styled from "styled-components";
import "./../components/Registration/registration.scss";
import "./../pages.scss";
const Login = () => {
  return (
    <>
      <main className="main">
        <div className={"page page-user-form"}>
          <div className={"container"}>
            <div className={"page-user-form__wrapper"}>
              <div className={"page__header page__header--center"}>
                <h2 className={"page__title"}>Sign In</h2>
              </div>
              <div className={"banner__wrapper banner__wrapper--telegram"}>
                <div className={"banner"}>
                  <div className={"banner__description"}>
                    <h3>Telegram Casino</h3>
                    <p>Play your favourite games anywhere anytime</p>
                  </div>
                  <a className={"banner__link"} href={"/sportsBook"}>
                    OPEN IN TELEGRAM
                  </a>
                </div>
              </div>
              <div className={"form__wrapper"}>
                <form className={"form form--registration"}>
                  <div className={"form__section form__section--links"}>
                    <p className={"form__description"}>Sign up with social networks</p>
                    <ul className={"socials"}>
                      <li className={"socials__item"}>
                        <a
                          className={"socials__link facebook"}
                          href={"/facebook"}
                        >
                          <i>f</i>
                        </a>
                      </li>
                      <li className={"socials__item"}>
                        <a className={"socials__link google"} href={"/facebook"}>
                          <i>G</i>
                        </a>
                      </li>
                      <li className={"socials__item"}>
                        <a
                          className={"socials__link telegram"}
                          href={"/facebook"}
                        >
                          <i>T</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <fieldset className={"form__section"}>
                    <div className="form__input form__input--text input">
                      <label className="label-input">Your login, email or phone</label>
                      <div className="input__wrapper">
                        <input className="input " data-trim="" placeholder="Your login, email or phone" type="text"/>
                        <div className="form__notification form__notification--error form__error-message" data-test="error-username" data-error="">
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset
                    className={"form__section form__section--registration"}
                  >
                    <div className={"form__input form__input--password input"}>
                      <label className={"label-input"}>Password</label>
                      <input className={"input"} placeholder={"Password"} type={"password"}/>
                    </div>
                    <div className={"form__input form__input--password input"}>
                      <label className={"label-input"}>Reenter password</label>
                      <input className={"input"} placeholder={"Reenter password"} type={"password"}/>
                    </div>
                    <div className="form__divider"></div>
                    <div className="form__input--controls">
                      <div className="form__input form__input--checkbox checkbox">
                        <div className="input__wrapper">
                          <input id="ytUserLogin_rememberMe" type="hidden" value="0"/>
                          <input placeholder="Remember me" value="1" type="checkbox"/>
                          <label htmlFor="UserLogin_rememberMe">Remember me</label>
                          <div className="form__notification form__notification--error form__error-message" data-test="error-rememberMe" data-error="">
                          </div>
                        </div>
                      </div>
                      <a href="/user/recovery" className="forgot-link" data-test="nav-remember">
                        Forgot password? </a>
                    </div>
                    <div className="form__divider"></div>

                  </fieldset>
                  <fieldset className={"form__section form__section--submit"}>
                    <button
                      className={"button button--s4 button--t1"}
                      type={"submit"}
                    >
                      <span>Sign in</span>
                    </button>
                  </fieldset>
                  <div className={"form__addition"}>
                    No account? <a href={"/registration"} style={{display: "inline-block"}}>Create account</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;

