import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormCom from "./Components/Form/FormCom";
import Home from "./Components/Home/Home";
import WholeEvents from "./Components/Events/WholeEvents/WholeEvents";
import WholeCards from "./Components/Cards/WholeCards/WholeCards";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Register" element={<FormCom/>}/>
      <Route path="/Events" element={<WholeEvents/>}/>
      <Route path="/Events/Technical" element={<WholeCards/>}/>
      <Route path="/Events/NonTechnical" element={<WholeCards/>}/>
      <Route path="/Events/Workshop" element={<WholeCards/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
