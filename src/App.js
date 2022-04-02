import React, { Fragment } from "react";

import Header from "./Components/Header/Heaer";
import MainHeading from "./Components/MainHeading/MainHeading";
import MusicHome from "./Components/Music/MusicHome";

function App() {
  return (
    <Fragment>
      <Header />
      <MainHeading />
      <MusicHome />
    </Fragment>
  );
}

export default App;
