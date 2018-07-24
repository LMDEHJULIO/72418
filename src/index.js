import ReactDOM from "react-dom";
import React from "react";
import SearchBar from "./components/search_bar";
import key from "./../config.js";
import YTSearch from "youtube-api-search";

const API_KEY = key.YT_api;

YTSearch({ key: API_KEY, term: "surfboards" }, function(data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));
