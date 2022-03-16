import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LanguageProvider } from "./providers/Language";
import { ColorModeProvider } from "./providers/ColorMode";

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
