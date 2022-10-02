import React from "react";
import GoogleMapReact from 'google-map-react';
import { GOOGLE_API_KEY } from "../../consts/consts";
import Marker from "./Marker";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: -2.176517,
      lng: -79.900805
    },
    zoom: 5
  };

  return (
    // Important! Always set the container height explicitly
    <div className="h-screen w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={-1.796008} lng={-80.759040} />
      </GoogleMapReact>
    </div>
  );
}