import React from "react";
import { Helmet } from "react-helmet-async";

function Home() {

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home</h1>
      <p>Detta är Home</p>
    </div>
  );
}

export default Home;
