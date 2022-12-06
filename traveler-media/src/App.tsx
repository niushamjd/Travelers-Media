import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"


import MapChart from "./MapChart";


 function App() {
  return (
    <div className="mainScreen">
      <div className="log">    
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </div>
      <MapChart />
    </div>
  );
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
