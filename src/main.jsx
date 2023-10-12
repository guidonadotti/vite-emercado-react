import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/raleway";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./contexts/LoginContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <App />
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);

