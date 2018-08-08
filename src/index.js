import ReactDOM from "react-dom";
import React, { Component } from "react";
import SearchBar from "./components/search_bar";
import key from "./../config.js";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from './components/video_detail'

const API_KEY = key.YT_api;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
