import React from "react";
import "./../components/Registration/registration.scss";
import "./../pages.scss";

const Registration = () => {
  return (
    <main className="main">
      <div className={"page page-user-form"}>
        <div className={"container"}>
          <div className={"page-user-form__wrapper"}>
            <div className={"page__header page__header--center"}>
              <h2 className={"page__title"}>Sign up</h2>
            </div>
            <div className={"banner__wrapper banner__wrapper--sportbook"}>
              <div className={"banner"}>
                <div className={"banner__description"}>
                  <h3>Sports betting</h3>
                  <p>Try your luck and win generous prizes</p>
                </div>
                <a className={"banner__link"} href={"/sportsBook"}>
                  PLAY
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
                  <div className={"registration__tabs tabs__parent"}>
                    <div className={"tabs__wrapper"}>
                      <p className={"tabs__description"}>Or fill in the form</p>
                      <div
                        className={
                          "form__input form__input--select select select select--v2 select--tabs"
                        }
                      >
                        <label className={"label-input"}></label>
                        <div className={"selectric-wrapper"}>
                          <div className={"selectric-hide-select"}>
                            <select tabIndex={-1}>
                              <option value={0}>Email</option>
                              <option value={1}>Phone</option>
                            </select>
                          </div>
                          <div className={"selectric"}>
                            <span className={"label"}>Email</span>
                            <b
                              className={"selectric__button icon-arrow-down"}
                            ></b>
                          </div>
                          <div className={"selectric-items"} tabIndex={-1}>
                            <div className={"selectric-scroll"}>
                              <ul>
                                
                              <li className={"selected"} data-index={0}>
                                Email
                              </li>
                              <li className={"last"} data-index={1}>
                                Phone
                              </li>
                              </ul>
                            </div>
                          </div>
                          <input className={"selectric-input"} tabIndex={0} />
                        </div>
                      </div>
                    </div>
                    <div className={"tabs__content active"}>
                      <div className={"form__input form__input--email"}>
                        <label className={"label-input"}>Email</label>
                        <div className={"input__wrapper"}>
                          <input className={"input"} placeholder={"Email"} type={"email"}/>
                        </div>
                      </div>
                    </div>
                    <div className={"tabs__content"}>
                      <div className={"form__input form__input--phone"}>
                        <label className={"label-input"}></label>
                        <div className={"input__wrapper"}>error</div>
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
                  <div className={"form__input form__input--select select"}>
                    <label className={"label-input"}>Currency</label>
                    <input className={"input"} placeholder={"Currency"} type={"text"} defaultValue={"€"}/>
                  </div>
                  <div className={"form__input form__input--checkbox checkbox"}>
                    <div className={"input__wrapper"} style={{width: "100%"}}>
                      <input type="hidden" value="0" name="core__protected_modules_user_yiiForm_RegistrationForm[terms_and_conditions]"/>
                      <input placeholder="I unconditionally agree with <a target=_blank href=/info/terms_and_conditions>Terms &amp; Conditions</a>, <a target=_blank href=/info/privacy-policy>Data Policy</a>, <a target=_blank href=/info/privacy-policy>Cookie Policy</a> and that I am older than 21 years old" data-test="input-terms_and_conditions" name="core__protected_modules_user_yiiForm_RegistrationForm[terms_and_conditions]" id="core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions" value="1" type="checkbox"/>
                      <label style={{marginLeft: 30, fontSize: 12}}>
                        I unconditionally agree with Terms & Conditions Data Policity, Cookie Policy and that I am older than 21 years old.
                      </label>
                      <div
                           className="form__notification form__notification--error form__error-message"
                           data-test="error-terms_and_conditions" data-error="">
                      </div>
                    </div>
                  </div>
                  <div
                    className={"form__input form__input--captcha captcha--v1"}
                  >
                    
                  </div>
                  <div className={"form__input form__input--select select"}>
                    <label className={"label-input"}>Secret Question</label>
                    <div className={"input__wrapper"}>
                      <div className={"selectric-wrapper"}>
                        <div className={"selectric-hide-select"}>
                          <select placeholder={"Secret Question"} tabIndex={-1}>
                            <option value={""}>Secret question</option>
                            <option value={0}>
                              Your favourite musician's surname
                            </option>
                            <option value={1}>
                              The street your grew up on
                            </option>
                            <option value={2}>
                              Your favorite actor or actress
                            </option>
                            <option value={3}>
                              Your grandmother's date of birth
                            </option>
                            <option value={4}>Your parents' post code</option>
                            <option value={5}>
                              The brand of your first car
                            </option>
                            <option value={6}>
                              Your favorite teacher's surname
                            </option>
                            <option value={7}>
                              Your favorite childhood book
                            </option>
                            <option value={8}>
                              Your favorite computer game
                            </option>
                            <option value={9}>
                              Set your own security word or phrase
                            </option>
                          </select>
                        </div>
                        <div className={"selectric selectric--placeholder"}>
                          <span className={"label"}>Secret question</span>
                          <b
                            className={"selectric__button icon-arrow-down"}
                          ></b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"form__input form__input--text input"}>
                    <label className={"label-input"}>Login</label>
                    <input className={"input"} placeholder={"Login"} type={"text"}/>
                  </div>
                  <div
                    className={"special-radio__list"}
                    id={"bonus-list-container"}
                  >
                    <h3 className={"form__section--title"}>Redeem Bonus</h3>
                    <div>
                      <div className={"special-radio special-radio__active"}>
                        <input
                          id={"bonus-35"}
                          className={"special-radio__hidden-input"}
                        />
                        <label
                          className={"special-radio__label"}
                          htmlFor={"bonus-35"}
                        >
                          <span className={"label__bg"}>
                            Registration Bonus
                          </span>
                        </label>
                        <div className={"special-radio__content"}>
                          <div
                            className={"special-radio__row accruals-container"}
                          >
                            Amount:
                            <span className={"bold-text"}>1000 USD</span>
                          </div>
                          <div
                            className={"special-radio__row wagering-container"}
                          >
                            Wager:
                            <span className={"bolder-text"}>1000 USD</span>
                          </div>
                          <div
                            className={
                              "special-radio__row special-radio__row--small"
                            }
                          >
                            <span>Registration Bonus</span>
                            <div>Make registration and get bonus</div>
                            <div>Play and Enjoy our games</div>
                            <div>New Design and New Style</div>
                          </div>
                        </div>
                      </div>
                      <div className={"special-radio"}>
                        <label
                          className={"special-radio__label"}
                          htmlFor="promo_code"
                        >
                          <span>Use a promo code</span>
                        </label>
                      </div>
                      <div className={"special-radio"}>
                        <label
                          className={"special-radio__label"}
                          htmlFor="promo_code"
                        >
                          <span>No bonus</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className={"form__section form__section--submit"}>
                  <button
                    className={"button button--s4 button--t1"}
                    type={"submit"}
                  >
                    <span>Create account</span>
                  </button>
                </fieldset>
                <div className={"form__addition"}>
                  Already have an account?
                  <a href={"/user/login"} style={{display: "inline-block"}}>Sign in</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Registration;
