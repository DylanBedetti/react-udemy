import React from "react";
import { Input } from "antd";

const { Search } = Input;

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    // console.log(event.target.value);
  };

  onSearchChange = (event) => {
    console.log(event);
    this.props.onTermSubmit(this.state.term);
    // TODO: make sure we call callback from parent component
  };

  render() {
    return (
      <Search
        placeholder="Search..."
        onSearch={this.onSearchChange}
        onChange={this.onInputChange}
        style={{
          width: "80%",
          padding: "30px",
        }}
        value={this.state.term}
        autoFocus
      />
    );
  }
}

export default SearchBar;
