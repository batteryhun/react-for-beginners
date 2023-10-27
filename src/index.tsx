import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { ligthTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={ligthTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
