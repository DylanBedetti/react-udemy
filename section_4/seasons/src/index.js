import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import Warning from "./Warning";

class App extends React.Component {
  state = { lat: null, long: null, errorMessage: "" };

  componentDidMount() {
    console.log("My component was rendered to the screen");
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

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <Warning
          error={this.state.errorMessage}
          userAction="Please enable location"
        />
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner text="Please Allow Location" />;
  }

  render() {
    return <div className="border red">{this.renderContent}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
