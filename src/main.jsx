import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
// importamos nuetro provider, va estar disponible para toda mi app
import GaleryProvider from "./context/GaleryContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GaleryProvider>
        <App />
      </GaleryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
