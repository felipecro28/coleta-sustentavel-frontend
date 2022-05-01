import React, { useState, useEffect } from 'react'
import '../css/Maps.css'
import Nav from './Nav'
import GoogleMaps from './GoogleMaps'
import Rodape from './Rodape'

function Maps (){
    return <main>
        <Nav />
        <h1>Coleta Sustentável</h1>
        <GoogleMaps />
        <Rodape />
    </main>
}

export default Maps