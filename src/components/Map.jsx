import React, { useState } from "react";
import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet";
// import myIcon from "myIcon"

const MapDisplay = ({ center }) => {
  const [mapRef, setMapRef] = useState({ map: null });




  return (
    <div className="leaflet-container">
      <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center}>
          <Popup>
            Latitide: {center[0]} <br /> Longitude: {center[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapDisplay;
