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
  const [filteredData, setFilteredData] = useState(data)

  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    const filteredArray = data.filter(item => (item[1] == state.day && item[2] == state.hour))
    setFilteredData(filteredArray)
  }, [state])






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
        bootstrapURLKeys={{ key: GOOGLE_API_KEY, libraries: ['visualization'] }}
        defaultCenter={defaultCenter}
        defaultZoom={1}
        onBoundsChange={handleChange}
        heatmap={{
          positions: filteredData.map(item => ({
            lat: item[3],
            lng: item[4],
          })),
          options: {
            radius: 100,
            opacity: 100,
          }
        }}
      >
        {/* {filteredData.map(getMarkerFromData)} */}
      </GoogleMapReact>
    </div>
  );
}