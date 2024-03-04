import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SoapProvider from "./context/context.jsx";
import App from "./App.jsx";
import "./index.css";
import "./views/Home/home.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SoapProvider>
        <App />
      </SoapProvider>
    </BrowserRouter>
  </React.StrictMode>
);
