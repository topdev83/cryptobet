import "./betslip.scss"
import { useState } from "react";

export const BetSlipComponent = () => {
  const [isBetSlipOpen, setBetSlipOpen] = useState(true);
  return (
    <div className={"spt-bet-slip"}>
      <div>
        <div>
          <div className={`bet-slip-box ${isBetSlipOpen ? "active" : ""}`} data-editor-id="betslipHeader">
              <div className={`bet-slip-title`} onClick={() => setBetSlipOpen(!isBetSlipOpen)}>
                <span className="bt999">Betslip</span>
              <div className="bt1018" data-editor-id="quickBetSwitcherLabel">Quick Bet</div>
              </div>
            <div className={"bet-slip-body"}>
              <div className={"bet-slip-body__nav"}>
                <div className={"active"}>Single</div>
                <div>Combo</div>
                <div>System</div>
              </div>
              <div className={"bet-slip-body_wrapper"}>
                
            {/* return a map of current user bets bet box concept */}
              <div className={"bet-slip-body__bet"}>
                <div>X</div>
                <div >
                  <div>
                    <div><i>i</i><div>Slovakia</div></div>
                    <div>Kazakhstan vs Slovakia</div>
                    <div>1x2</div>
                    <div>1.7</div>
                  </div>
                  <div><input type={"number"}/></div>
                </div>
              </div>
            {/*  */}
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}