import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from "leaflet";
// Styles
import './App.css';

function App() {
  const position = [39.8283, -98.5795]

  return (
    <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
