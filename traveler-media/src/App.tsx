import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route } from "react-router-dom"
import axios from "axios";


import MapChart from "./components/MapChart";


 function App() {
 
  return (
    <div className="mainScreen">
      <div className="log">    
      <BrowserRouter>
        <Route exact path="*" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
    </BrowserRouter>
    </div>
      <MapChart />
    </div>
  );
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
