import React, { useContext, useEffect, useRef, useState } from "react";
import GoogleMapReact from 'google-map-react';
import { GOOGLE_API_KEY } from "../../consts/consts";
import Marker from "./Marker";
import useData from "../../Hooks/useData";
import Context from "../../Context";
import FadeInOut from "./FadeInOut";

export default function SimpleMap() {
  const [state, setState] = useContext(Context)

  const data = useData()

  console.log(data.filter(item => item.FILE == 10).map(item => ({
    lat: Number(item.LAT).toFixed(4),
    lng: Number(item.LON).toFixed(4),
    weight: Number(Number(item.ELEC_DEN).toFixed(2)),
  })))

  const [zoom, setZoom] = useState(1)


  function getMarkerFromData(item, index) {
    const [lat, lng] = [item[3], item[4]]
    return <Marker key={index} lat={lat} lng={lng} r={zoom * 120} />

  }

  const defaultCenter = {
    lat: -2.176517,
    lng: -79.900805
  }



  function handleChange(center, zoomChange, bounds, marginBounds) {

    if (zoom != zoomChange) setZoom(zoomChange)
  }

  return (
    // Important! Always set the container height explicitly
    <div className="h-screen w-full">

      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY, libraries: ['visualization', 'drawing'] }}
        defaultCenter={defaultCenter}
        defaultZoom={1}
        onBoundsChange={handleChange}
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
        {/* {filteredData.map(getMarkerFromData)} */}
      </GoogleMapReact>

    </div>
  );
}