import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApiContextProvider } from "./context/ApiContext";
import { UrlContextProvider } from "./context/UrlContext";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  <BrowserRouter>
      <UrlContextProvider>
      <ApiContextProvider>
      <App />
      </ApiContextProvider>
      </UrlContextProvider>
    </BrowserRouter>
   
);

