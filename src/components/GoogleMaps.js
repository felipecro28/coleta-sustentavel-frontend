import React from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import axios from "axios";
import '../css/googlemaps.css'

const libraries = ["places"]
const mapContainerStyle = {
  width: '100%',
  height: '60vh',
  margin: '10px auto',
}

const center = {
  lat: -22.925220,
  lng: -43.232578
}

const options={
  disableDefaultUI: true,
  zoomControl: true
}


function GoogleMaps (){
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyBkcSwoV2GxS8CzGh1VK8nao4pSWRraflw",
    libraries
});

const [markers, setMarkers ] = React.useState([])

if(loadError) return "Problema na importação do Mapa"
if(!isLoaded) return "Importando mapas..."

return <div style={{height: '60vh'}}>
  <GoogleMap 
  mapContainerStyle={mapContainerStyle}
  zoom={13}
  center={center}
  options={options}
  onClick={(event => {
      setMarkers((current) => [...current, {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date()
      }])
  })}
   >
       {markers.map(marker => <Marker
       key={marker.time.toISOString()}
       position={{lat: marker.lat, lng: marker.lng}}
       />)}


   </GoogleMap>
</div>


}

export default GoogleMaps