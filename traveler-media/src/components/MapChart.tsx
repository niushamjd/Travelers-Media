
import { useState } from 'react';

import "../styles.css"
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json"

const markers = [
    { markerOffset: 4, name: "Bucharest", coordinates: [26.1, 44.4] },
    { markerOffset: 4, name: "Budapest", coordinates: [19.03, 44.5] },
    { markerOffset: 4, name: "Warsaw", coordinates: [21, 52.25] },
    { markerOffset: 4, name: "Prague", coordinates: [14.25, 50.08] },
    { markerOffset: 4, name: "Athens", coordinates: [23.4, 34.98] },
    { markerOffset: 4, name: "Reykjavik", coordinates: [-21.9, 64.4] },
    { markerOffset: 4, name: "Dublin", coordinates: [-6.3, 53.34] },
    { markerOffset: 4, name: "Oslo", coordinates: [10.45, 59.95] },
    { markerOffset: 4, name: "Lisbon", coordinates: [-9.13, 38.42] },
    { markerOffset: 4, name: "Moscow", coordinates: [34.62, 55.45] },
    { markerOffset: 4, name: "Brussels", coordinates: [4.33, 50.85] },
    { markerOffset: 4, name: "Madrid", coordinates: [-3.4, 40.4] },
    { markerOffset: 4, name: "Stockholm", coordinates: [18.04, 59.33] },
    { markerOffset: 4, name: "Kiev", coordinates: [30.52, 50.43] },
    { markerOffset: 4, name: "Paris", coordinates: [2.35, 48.86] },
    { markerOffset: 4, name: "Copenhagen", coordinates: [12.54, 55.68] },
    { markerOffset: 4, name: "London", coordinates: [-0.13, 51.5] },
    { markerOffset: 4, name: "Amsterdam", coordinates: [4.9, 52.35] },
    { markerOffset: 4, name: "Rome", coordinates: [12.5, 41.9] },
    { markerOffset: 4, name: "Zagreb", coordinates: [4.98, 45.8] },
    { markerOffset: 4, name: "Tirana", coordinates: [19.82, 41.33] },
    { markerOffset: 4, name: "Vienna", coordinates: [16.34, 48.21] },
    { markerOffset: 4, name: "Ljubljana", coordinates: [14.51, 46.05] },
    { markerOffset: 4, name: "Vaduz", coordinates: [9.52, 44.14] },
    { markerOffset: 4, name: "Monaco", coordinates: [4.41, 43.43] },
    { markerOffset: 4, name: "Andorra la Vella", coordinates: [1.52, 42.5] },
    { markerOffset: 4, name: "Minsk", coordinates: [24.54, 53.9] },
    { markerOffset: 4, name: "Helsinki", coordinates: [24.94, 60.14] },
    { markerOffset: 4, name: "Sofia", coordinates: [23.32, 42.7] },
    { markerOffset: 4, name: "Bern", coordinates: [7.28, 46.95] },
    { markerOffset: 4, name: "Berlin", coordinates: [13.25, 52.5] },
    { markerOffset: 4, name: "Edinburgh", coordinates: [-3.18, 55.95] },
];
const clickedCity = (city: string) => {
  console.log(city);
};

const MapChart = () => {
  return (
    <ComposableMap
    width={800}
    height={800}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -53.0, 0],
        scale: 1200
      }}
    >
       <ZoomableGroup center={[20, 55]} zoom={0.6 }>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates as [number, number]}onClick={() => clickedCity(name)}

        >
          <circle r={1.5} fill="#F00" stroke="#fff" strokeWidth={0} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "4px" }}
          >
            {name}
          </text>
        </Marker>
      ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
