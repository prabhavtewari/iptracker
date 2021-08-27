import React, { useState } from "react";
import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet";
import L from 'leaflet';


const MapDisplay = ({ center }) => {
  const [mapRef, setMapRef] = useState({ map: null });

    var myIcon = L.divIcon({
      className: 'my-div-icon',
      iconSize:     [35, 40]});




  return (
    <div className="leaflet-container">
      <MapContainer center={center} zoom={13} scrollWheelZoom={true} zoomControl= {false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center} icon={myIcon}>
          <Popup>
            Latitide: {center[0]} <br /> Longitude: {center[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapDisplay;
