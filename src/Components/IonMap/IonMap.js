import React from "react";
import GoogleMapReact from 'google-map-react';
import { GOOGLE_API_KEY } from "../../consts/consts";
import Marker from "./Marker";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={-1.796008} lng={-80.759040}/>
      </GoogleMapReact>
    </div>
  );
}