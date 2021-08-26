// import logo from './logo.svg';
// import header from './Header';
import React, { useState, useEffect } from "react";
import rarrow from './images/icon-arrow.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sawo from "sawo";
import Map from "./components/Map";




function App() 
{

    const [isUserLoggedIn, setUserLoggedIn] = useState(false);
    const [payload, setPayload] = useState({});
    const sk = process.env.REACT_APP_SAWO;
    useEffect(() => {
    var config = {
    containerID: "sawo-container",
    identifierType: "email",
    apiKey: sk,
    onSuccess: (payload) => {
      console.log("Payload : " + JSON.stringify(payload));
      setUserLoggedIn(true);
      setPayload(payload);
    },
  };
  let sawo = new Sawo(config);
  sawo.showForm();
  }, []);

  return (
    <div className="App">

    {!isUserLoggedIn ? 
        (
          <div className="sawowrapper">
            <div className="formhead">
              LOGIN
                <div className="formContainer" id="sawo-container"></div>
            </div>
          </div>
        ) 
        : 
        (
          <div className="maincont">
        <div className="headerwrap">
          <div className="header">
            <form action="">
              IP Address Tracker
                <div className="submitrow">
                  <input className="ipinput" type="text" />
                  <button type="submit"  className="submitarrow">
                  <img src={rarrow} alt="" srcset="" />
                  </button>
                </div>
            </form>
          </div>
        </div> 

        {/* <div className="rando"> */}
        <Map
        center={ [51.505, -0.09]}
        />
        {/* </div> */}
        </div>


      
      
      
      )};
    </div>
  );
}

export default App;
