import React, { useContext, useEffect, useRef, useState } from "react";
import GoogleMapReact from 'google-map-react';
import { GOOGLE_API_KEY } from "../../consts/consts";
import useData from "../../Hooks/useData";
import Context from "../../Context";

export default function SimpleMap() {
  const [state] = useContext(Context)

  const data = useData()

  const defaultCenter = {
    lat: -2.176517,
    lng: -79.900805
  }

  return (
    // Important! Always set the container height explicitly
    <div className="h-screen w-full">

      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY, libraries: ['visualization', 'drawing'] }}
        defaultCenter={defaultCenter}
        defaultZoom={1}
        heatmap={{
          positions: data.filter(item => item.FILE == state.file).map(item => ({
            lat: Number(item.LAT).toFixed(4),
            lng: Number(item.LON).toFixed(4),
            weight: Math.max(Number(item.ELEC_DEN), 0),
          })),
          options: {
            radius: 50,
            opacity: 100,
          }
        }}
      >
      </GoogleMapReact>

    </div>
  );
}