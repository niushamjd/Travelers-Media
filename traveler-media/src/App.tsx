import React from "react";
import ReactDOM from "react-dom";
import Auth from "./Auth";
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
        <Route index element={<Auth />} />
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
