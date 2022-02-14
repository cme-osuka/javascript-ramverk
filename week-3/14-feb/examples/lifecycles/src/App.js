import React, { useEffect, useState } from "react";
import "./App.css";
import DynamicElements from "./components/DynamicElements";
import FetchApiData from "./components/FetchApiData";
import Filtering from "./components/Filtering";
import Focus from "./components/Focus";
import OnceOnMount from "./components/OnceOnMount";
import UpdateOnPropsChange from "./components/UpdateOnPropsChange";

function App() {
  const [subreddit, setSubreddit] = useState("reactjs");

  return (
    <div className="App">
      <header className="App-header">
        {/*<input type="text" value={subreddit} onChange={event => setSubreddit(event.target.value)} />
        <UpdateOnPropsChange subreddit={subreddit} />*/}

        <DynamicElements />
      </header>
    </div>
  );
}

export default App;
