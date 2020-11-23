import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  // constructor is javascript - runs first before anything else
  constructor(props) {
    // refernce to the parents (react.components) constructor function
    // what are the props here used for??
    super(props);

    // becomes avaliale throughout any other functions
    this.state = { lat: null, long: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
      if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>;
      }

      if (!this.state.errorMessage && this.state.lat) {
        return <div>Latitude: {this.state.lat}</div>;
      }

      return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
