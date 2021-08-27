import React from "react";

const Dashboard = ({ ip, location, timezone, isp }) => {
  return (

    <div className="dashboardwrap d-flex ">
      <div className="d-flex flex-column py-2 px-3">
        <span className="DarkGray">IP ADDRESS</span>
        <span className="VeryDarkGray">{ip}</span>
      </div>
      <div className="vtline"></div>
      <div className="d-flex flex-column">
        <span className="DarkGray">LOCATION</span>
        <span className="VeryDarkGray">
          {location[0]}, {location[1]} {location[2]}
        </span>
      </div>
      <div className="vtline"></div>
      <div className="d-flex flex-column">
        <span className="DarkGray">TIMEZONE</span>
        <span className="VeryDarkGray">{timezone}</span>
      </div>
      <div className="vtline"></div>
      <div className="d-flex flex-column">
        <span className="DarkGray">ISP</span>
        <span className="VeryDarkGray ">{isp}</span>
      </div>
    </div>

 
  );
};

export default Dashboard;

