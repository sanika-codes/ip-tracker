import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';
import { Loader } from "@googlemaps/js-api-loader";

function MapContainer() {

  const locationState = useSelector((state) => state.location);
  
  


    useEffect(() => {
       
      const loader = new Loader({
        apiKey: "AIzaSyDdlP7oP3cT9OghwRINpHwm3VFr2UITh_A",
        version: "weekly",
       
      });
          loader.load().then(async () => {
            console.log("map loaded");
            const { Map } = await window.google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");
          
            let map = new Map(document.getElementById("map"), {
              center: { lat: locationState.lat, lng: locationState.lng },
              zoom: 8,
              mapId: "DEMO_MAP_ID",
            });

            let marker = new AdvancedMarkerElement({
                map: map,
                position: { lat: locationState.lat, lng: locationState.lng },
                
              });
          });
    },[locationState])
  return (
    <div id="map" style={{'height':'100%'}}></div>
  )
}

export default MapContainer