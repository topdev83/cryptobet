import React, { useState } from "react";
import './styles.scss';
import diamond from './Images/diamond.png';
import Switch from "react-switch";

const Crash = (props) => {

    const handleChange = () => {

    }

    return (
        <div className="crash-minigame"> 
            <section className="minigame-crash">
                <div className="minigame-crash-header">
                    <div className="rounded-container battle-info">
                        <span className="question-mark">?</span> <span>Battle: 10k Daily</span>
                    </div>
                    <div className="help-section">
                        <div className="help-icon">
                            ?
                        </div>
                        <div className="help-icon">
                            ?
                        </div>
                        <div className="help-icon">
                            ?
                        </div>
                    </div>
                </div>
                <div className="minigame-crash-container">
                    game container
                </div>
                <div className="minigame-crash-footer">
                    <div className="rounded bet-info">
                        <div className="range">
                            <div>Min</div>
                            <div className="separator"></div>
                            <div>Max</div>
                        </div>
                        <div className="values">
                            <div className="main-value">
                                <span className="diamond-value-icon"><img src={diamond} alt=''/></span>0000.00000000
                            </div>
                            <div className="secondary-value">0000.000000000</div>
                        </div>
                        <div className="range">
                            <div>1/2</div>
                            <div className="separator"></div>
                            <div>x2</div>
                        </div>
                    </div>
                    <div className="rounded bet-info multiplier-info">
                        <div className="counter">
                            <div className="values">
                                2
                            </div>
                            <div className="range">
                                <div>+</div>
                                <div className="separator"></div>
                                <div>-</div>
                            </div>
                        </div>
                        <div>
                            CASHOUT AT
                        </div>
                    </div>
                    <button className="bet-button">
                        Apuesta
                    </button>
                </div>
                <div>
                    switch
                </div>
            </section>
            <section className="game-info">
                <div>
                    Tabs
                </div>
                <div className="user-list">
                    <ul>
                        {
                            [0,0,0,0].map((data,index)=>(
                                <li className="user-item rounded-container" key={index}>
                                    <div className="user">
                                        <div className="avatar-container">
                                            <img src={null} alt=''/>
                                        </div>
                                        <div className="user-data">
                                            <span>Name</span>
                                            <span>Info</span>
                                        </div>
                                    </div>
                                    <div className="value">
                                        0.000000000<span className="cripto-icon">P</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Crash;