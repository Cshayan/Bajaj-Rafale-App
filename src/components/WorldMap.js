import React from "react";
import GoogleMapReact from "google-map-react";
import Paris from "./Paris";
import Ambala from "./Ambala";
import Flight from "./Flight";

const WorldMap = (props) => {
  const { parisLocation, ambalaLocation, flightLocation } = props;
  return (
    <div style={{ height: "80vh", width: "100vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCiEb6ZbWBCfTE7c3HEwm62de7xRJSq2wg" }}
        defaultCenter={{ lat: 48.8566, lng: 2.3522 }}
        defaultZoom={0}
      >
        <Paris lat={parisLocation.lat} lng={parisLocation.long} />
        <Flight
          lat={flightLocation.flightLat}
          lng={flightLocation.flightLong}
        />
        <Ambala lat={ambalaLocation.lat} lng={ambalaLocation.long} />
      </GoogleMapReact>
    </div>
  );
};

export default WorldMap;
