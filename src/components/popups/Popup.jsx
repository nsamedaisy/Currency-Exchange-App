import React, { useState } from "react";
import "./Popup.css";
import { AiOutlineClose } from "react-icons/ai";

export const PopUp = (props) => {
  // const [trigger, SetTrigger]= useState(false)

  return (
    props.trigger && (
      <div className="popup">
        <div className="popopContainer">
          <button className="closeBtn" onClick={() => props.setTrigger(false)}>
            <AiOutlineClose />
          </button>
          {props.children}
        </div>
      </div>
    )
  );
};
