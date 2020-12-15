import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  // forming link beween class and context objeect
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? "name" : "Naam";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input></input>
      </div>
    );
  }
}

export default Field;
