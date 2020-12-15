import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

class Button extends React.Component {
  // contextType is a very special name
  // static adds a property to the class
  // Button.contextType = languageContext
  // required to get this.context
  // static contextType = LanguageContext;

  render() {
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <ColourContext.Consumer>
        {(colour) => (
          <button className={`ui button ${colour}`}>
            <LanguageContext.Consumer>
              {/* // can use this get data out of multiple different context objects */}
              {(value) => (value === "english" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColourContext.Consumer>
    );
  }
}

export default Button;
