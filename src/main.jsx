import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Rendering the App component inside the 'root' element of the HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> {/* StrictMode is used to highlight potential problems in the app during development */}
    <BrowserRouter> {/* BrowserRouter is used to enable routing in the app */}
      <App /> {/* The main App component that contains the page routes */}
    </BrowserRouter>
  </React.StrictMode>
);
