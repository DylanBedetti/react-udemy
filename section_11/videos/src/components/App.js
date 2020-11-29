import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (query) => {
    const response = await youtube.get("/search", {
      params: { q: query },
    });

    this.setState({ videos: response.data.items });

    // response.data.items.map((vid) => console.log(vid.snippet.title));
    // console.log(response.data.items);
  };

  render() {
    return (
      <div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <SearchBar onTermSubmit={this.onTermSubmit} />
        </div>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
