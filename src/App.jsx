import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/headers/header";
import Intro from "./components/intro/intro";
import Web from "./components/web/web";
import Calisma from "./components/calisma/calisma";
import Hizmet from "./components/hizmet/hizmet";
import Sizinicin from "./components/sizinicin/sizinicin";

function App() {
  return (
    <>
      <Header />
      <Intro /> 
      <Web />
      <Calisma/>
      <Hizmet/>
      <Sizinicin/>
    </>
  );
}

export default App;
