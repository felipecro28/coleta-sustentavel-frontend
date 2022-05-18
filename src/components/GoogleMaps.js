import React from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import axios from "axios";
import '../css/googlemaps.css'
import { useState } from 'react';


const libraries = ["places"]
const mapContainerStyle = {
  width: '90%',
  height: '50vh',
  margin: '10px auto',
  zIndex: '9'
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

const [markers, setMarkers ] = useState([])
const [info, setInfo] = useState(null)

async function getLocals(){
  const response = await axios.get('https://provi-hack.herokuapp.com/api/pontos/')
  let b = response.data
  setMarkers([...b])
}

if(loadError) return "Erro na importação do Mapa"
if(!isLoaded) return "Importando mapas..."

return <div>
  <GoogleMap
  onLoad={getLocals} 
  mapContainerStyle={mapContainerStyle}
  zoom={13}
  center={center}
  options={options}>

       {markers.map(marker => <Marker
       key={marker.time}
       position={{lat: + marker.lat,  lng: + marker.lgtd}}
       icon={{
         url: 'https://cdn.pixabay.com/photo/2018/09/27/19/19/tree-3707699__340.png',
         scaledSize: new window.google.maps.Size(50,50)
       }}
       onClick={() => setInfo(marker)}
       />
       )}
          {info ? (
          <InfoWindow position={{lat: +info.lat, lng: +info.lgtd}} onCloseClick={() => setInfo(null)} >
            <div style={{fontSize: '12px', textAlign: 'center', color: '#89BF11', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
              <h2 style={{margin: '0', padding: '0', fontSize: '12px'}}> Ponto de Coleta </h2>
              <p style={{fontSize: '12px',}}> {info.name} </p>
              <p style={{fontSize: '12px',}}>Endereço:</p>
              <p style={{fontSize: '12px',}}> {info.adress}</p>
            </div>
          </InfoWindow>
        )
        :
        null
      }
   </GoogleMap>
</div>


}

export default GoogleMaps