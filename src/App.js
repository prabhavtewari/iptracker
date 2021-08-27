import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sawo from "sawo";
import Map from "./components/Map";
import Dashboard from "./components/Dashboard";
import rarrow from './images/icon-arrow.svg'







function App() 
{

    const [isUserLoggedIn, setUserLoggedIn] = useState(false);
    const [payload, setPayload] = useState({});
    const sk = process.env.REACT_APP_SAWO;


    const [data, setData] = useState({
      ip: "192.212.174.101",
      city: "Brooklyn",
      country: "US",
      lat: 34.04915,
      lng: -118.09462,
      postalCode: "10001",
      timezone: "UTC -05:00",
      isp: "SpaceX Starlink",
    });
    
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
            <form className="White" >
              IP Address Tracker
                <div className="submitrow">
                  <input className="ipinput DarkGray" type="text"/>
                  <button type="submit"  className="submitarrow">
                  <img src={rarrow} alt="" srcset="" />
                  </button>
                </div>
            </form>
          </div>
        </div> 


        <Map
        center={ [34.04915, -118.09462]}
        />

<Dashboard
        ip={data.ip}
        location={[data.city, data.country, data.postalCode]}
        timezone={data.timezone}
        isp={data.isp}
          />

        </div>


      
      
      
       )}; 
    </div>
  );
}

export default App;
