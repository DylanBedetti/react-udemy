import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (err) => {
        console.log(err);
      }
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
