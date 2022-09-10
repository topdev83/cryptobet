import React, { useState } from "react";
import './styles.scss';
import ReactCardFlip from 'react-card-flip';
import diamond from '../Images/diamond.png';
import bomb from '../Images/bomb.png';
import Boracay from "./Boracay";

const tinyExplodeProps = {
    force: 0.4,
    duration: 2000,
    particleCount: 30,
    floorHeight: 500,
    floorWidth: 300
}

const Mine = (props) => {
    const [state, setState] = useState({
        isFlipped: false,
    })

    const [isExploding, setIsExploding] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if(!state.isFlipped){
            setState({ isFlipped: !state.isFlipped });
            setIsExploding(true);
        }
    }

    return (
        <div className="mine-container">
            <ReactCardFlip isFlipped={state.isFlipped} flipDirection="horizontal">
                <div className="mine" onClick={handleClick}>
                    <div className="mine-content">
                        ?
                    </div>
                </div>
                {
                    props.value===1?
                        <div className="mine-fliped" onClick={handleClick}>
                            <img src={bomb} alt='bomb'/>
                        </div>
                    :
                        <div className="mine-fliped" onClick={handleClick}>
                            <img src={diamond} alt='diamond'/>
                            {/* {isExploding && <Boracay />} */}
                        </div>
                }
            </ReactCardFlip>
      </div>
    )
}

export default Mine;