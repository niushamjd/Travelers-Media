import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route } from "react-router-dom"


import MapChart from "./components/MapChart";
import CityData from "./components/CityData";
import StartPage from "./components/StartPage";
import ShowProfiles from "./components/ShowProfiles";
import ChatScreen from "./components/ChatScreen";


 function App() {
 
  return (
    <div className="mainScreen">
      <div className="log">    
      <BrowserRouter>
        <Route exact path="/" component={StartPage} />
        <Route path="/SignIn" component={SignIn} />
        <Route  path="/SignUp" component={SignUp} />
        <Route  path="/CityData" component={CityData} />
        <Route  path="/ShowProfile" component={ShowProfiles} />
        <Route path="/ChatScreen" component={ChatScreen} />
    </BrowserRouter>
    </div>
      <MapChart />
    </div>
  );
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
