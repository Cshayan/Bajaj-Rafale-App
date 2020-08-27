import React, { useState, useEffect, useRef } from "react";
// import './App.css';
import WorldMap from "./components/WorldMap";

function App() {
  const parisLocation = {
    lat: 48.8566,
    long: 2.3522,
  };

  const ambalaLocation = {
    lat: 30.3752,
    long: 76.7821,
  };

  const [flightLat, setFlightLat] = useState(48.8566);
  const [flightLong, setFlightLong] = useState(2.3522);
  const [isOngoing, setIsongoing] = useState(false);
  const mounted = useRef(null);

  useEffect(() => {
    if (isOngoing) {
      mounted.current = true;
      for (let i = parisLocation.lat; i >= ambalaLocation.lat; i--) {
        setTimeout(() => {
          setFlightLat(flightLat - 2);
        }, 2000);

        console.log("Lat", flightLat);
        if (flightLat <= ambalaLocation.lat) {
          setIsongoing(false);
          setFlightLat(parisLocation.lat);
          setFlightLong(parisLocation.long);
        }
      }
    } else {
      setFlightLat(parisLocation.lat);
      setFlightLong(parisLocation.long);
    }
  }, [isOngoing, flightLat]);

  useEffect(() => {
    if (isOngoing) {
      mounted.current = true;
      for (let j = parisLocation.long; j <= ambalaLocation.long; j++) {
        setTimeout(() => {
          setFlightLong(flightLong + 1);
        }, 300);

        if (flightLong >= ambalaLocation.long) {
          setIsongoing(false);
          setFlightLat(parisLocation.lat);
          setFlightLong(parisLocation.long);
        }
      }
    } else {
      setFlightLat(parisLocation.lat);
      setFlightLong(parisLocation.long);
    }
  }, [isOngoing, flightLong]);

  const onRafaleClick = () => {
    setIsongoing(true);
  };

  return (
    <>
      <WorldMap
        parisLocation={parisLocation}
        ambalaLocation={ambalaLocation}
        flightLocation={{ flightLat, flightLong }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          outline: "none",
          marginTop: "0.5rem",
          flexDirection: "column",
        }}
      >
        <button
          onClick={() => onRafaleClick()}
          style={{ padding: "10px", color: "#fff", background: "#5DAAE0" }}
        >
          Launch Rafale
        </button>

        {isOngoing === false && mounted.current === true && (
          <h2>Rafale launced</h2>
        )}
      </div>
    </>
  );
}

export default App;
