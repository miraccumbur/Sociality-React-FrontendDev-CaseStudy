import React, { useState } from "react";
import { Link } from "react-router-dom"

function NavigationMenuElement({ props }) {
  const [isChose, setIsChose] = useState(false);
  const [isChoseAlt, setIsChoseAlt] = useState(false);
  return (
    <div className="navigationMenuElementDiv">
      <div
        onClick={() => setIsChose(!isChose)}
        className={
          isChose
            ? "navigationMenuElementTopDiv choseElemnt"
            : "navigationMenuElementTopDiv"
        }
      >
        <div className="imageDiv">
          <img
            src={isChose ? props.image.chose : props.image.normal}
            alt="icon"
          ></img>
        </div>
        <p>{props.name}</p>
        {props.counter ? <div className="counter">{props.counter}</div> : null}
        {props.altMenu ? (
          isChose ? (
            <img className="altMenuIcon" alt="" src="/icons/seeLess.png"></img>
          ) : (
            <img className="altMenuIcon" alt="" src="/icons/seeMore.png"></img>
          )
        ) : null}
      </div>
      {props.altMenu && isChose ? (
        <div className="navigationMenuElementBottomDiv">
          {props.altMenu.map((data) => (
            <div key={data.name} onClick={()=>setIsChoseAlt(!isChoseAlt)} className="navigationMenuElementBottomElementDiv">
              <div className="circleArea">
                <div
                  className={window.location.pathname===data.link ? "circle choseCircleBackgroundColor" : "circle"}
                ></div>
              </div>
              <Link className={window.location.pathname===data.link?"choseElementTextColor":null} to={data.link}>{data.name}</Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default NavigationMenuElement;
