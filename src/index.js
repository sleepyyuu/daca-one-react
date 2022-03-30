import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
ReactDOMClient.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
