import React, { useState } from "react";
import Mine from './Mine';
import HistoryCarousel from './HistoryCarousel';
import './styles.scss';
import Select from './Select';

import bomb from './Images/bomb.png';
import diamond from './Images/diamond.png';

const sampleGame = [
    [1,0,0,0,1],
    [0,0,0,0,0],
    [0,0,1,0,0],
    [1,0,0,0,0],
    [0,1,0,0,0],
]

const minesNumbers = [1,2,3,4,5];
const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' }
  ]

const Minesweeper = (props) => {

    const [mines, setMines] = useState(0);

    const handleMinesNumber = (value) => {
        setMines(value);
    }

    return (
        <div className="minigame"> 
            <section className="minigame-container">
                <div className="game-header">
                    <div>
                        Minesweeper
                    </div>
                    <div>

                    </div>
                </div>
                <div className="minigame-container-game">
                    <div className="minesweeper-dash">
                        <div className="minesweeper-game">
                            {
                                sampleGame.map((data, index)=>{
                                    return (
                                        data.map((item, i)=>{
                                            return (
                                                <Mine key={i} value={item}/>
                                            )
                                        })
                                            
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="game-info">
                        <div className="game-info-item">
                            <div className="game-info-item-img">
                                <img src={bomb} alt=''/>
                            </div>
                            <div className="item-title">
                                Mines
                            </div>
                            <div className="item-value">
                                5
                            </div>
                        </div>
                        <div className="separator"/>
                        <div className="game-info-item">
                            <div className="game-info-item-img">
                                <img src={diamond} alt=''/>
                            </div>
                            <div className="item-title">
                                Diamonds
                            </div>
                            <div className="item-value">
                                5
                            </div>
                        </div>
                    </div>
                </div>
                <div className="minigame-container-info">
                    <div className="multipliers">
                        <HistoryCarousel/>
                    </div>
                    <div className="bet">
                        <button className="bet-button">Bet</button>
                        <div className="bet-info">
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
                    </div>
                    <div className="minigame-container-conf">
                        <div className="autopick-container">
                            <button className="autopick-button">
                                autopick
                            </button>
                            <div className="autopick-text">
                                or <span>pick a slot</span>
                            </div>
                        </div>
                        <div className="mines-number-container">
                            {
                                minesNumbers.map((data,index)=>
                                    (
                                        <div 
                                            className={`mines-number ${index===mines?'mine-selected':''}`} 
                                            key={'mines-number'+index}
                                            onClick={()=>handleMinesNumber(index)}
                                        >
                                            {data}
                                        </div>
                                    )
                                )
                            }
                        </div>
                        <div className="mines-select">
                            <Select options={options} />
                        </div>
                    </div>
                </div>
                <div className="game-footer">
                    You’re playing for fun <span><button className="minigame-play-btn">Play for real</button></span>
                </div>
            </section>
        </div>
    )
}

export default Minesweeper;