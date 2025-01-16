import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import RoutesWithAnimation from "./components/RoutesWithAnimation";

import "./css/index.css";
import "./css/normalize.css";


import { DarkModeProvider } from "./context/DarkModeContext";

document.querySelector('body').classList.add('bg-lightMode-bg', 'dark:bg-darkMode-bg');

const root = document.getElementById("root");


ReactDOM.createRoot(root).render(

  <BrowserRouter>
    <DarkModeProvider>
      <RoutesWithAnimation />
    </DarkModeProvider>
  </BrowserRouter>

);
