import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
const darkTheme = {
  textColor: "whitesmoke",
  bgColor: "#111",
};
const ligthTheme = {
  textColor: "#111",
  bgColor: "whitesmoke",
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
