import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from "leaflet";
// Data
import * as nationalParkData from "./data/national-parks.json";
// Styles
import './App.css';

function App() {
  const position = [39.8283, -98.5795]
  const [activePark, setActivePark] = useState(null);

  return (
    <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {nationalParkData.features.map(park => (
        <Marker
          className="park-marker"
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePark(park);
          }}
        />
      ))}

      {activePark && (
        <Popup
          position={[
            activePark.geometry.coordinates[1],
            activePark.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActivePark(null);
          }}
        >
          <div>
            <h2>{activePark.properties.Code}</h2>
            <p>{activePark.properties.Name}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
}

export default App;
