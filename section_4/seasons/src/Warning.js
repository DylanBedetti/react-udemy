import "./Warning.css";
import React from "react";

const Warning = (props) => {
  return (
    <div className="notification">
      <div className="ui warning message">
        <i className="close icon"></i>
        <div className="header">{props.error}</div>
        {props.userAction}
      </div>
    </div>
  );
};

export default Warning;
