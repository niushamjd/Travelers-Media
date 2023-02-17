import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route } from "react-router-dom"
import { useState } from "react";

import MapChart from "./components/MapChart";
import CountryData from "./components/CountryData";
import StartPage from "./components/StartPage";

import ShowProfiles from "./components/ShowProfiles";
import ChatScreen from "./components/ChatScreen";


 function App() {
  const [data, setData] = useState({
    name: '',
    capital: '',
    Image: '',
    population: 0,
    currencies: '',
    languages: '',
    clickedCity: ''
  })
  const sendData = (data:any) => {
    setData(data)
  }
  return (
    <div className="mainScreen">
      <div className="log">    
      <BrowserRouter>
        <Route exact path="/" component={StartPage} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/CountryData" component={() => <CountryData props={data} />} />
        <Route path="/ShowProfile" component={() => <ShowProfiles props={data} />} />
        <Route path="/ChatScreen" component={ChatScreen} />
      </BrowserRouter>
      </div>
      <MapChart sendData={sendData} />
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);