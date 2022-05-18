import React, { useState, useEffect } from 'react'
import '../css/Maps.css'
import Nav from './Nav'
import GoogleMaps from './GoogleMaps'
import Rodape from './Rodape'
import NovoLocal from './NovoLocal'


function Maps (){
    const [nomeLocal, setnomeLocal] = useState('')
    const [endereco, setEndereco] = useState('')
    const [display, setDisplay] = useState('none')
    const [opacity, setOpacity] = useState(0)
    const styleNovoLocal = {
        display: display,
        opacity: opacity,
        transition: '3s'
    }

    function changeDisplay (){
        setDisplay('flex')
        setTimeout(() => {
            setOpacity(100)
        }, 50);
    }


    function removeDisplay(){
        setDisplay('none')
        setOpacity(0)
    }




    return <main>
        <Nav />
        <div class='mapDiv'>
            <h1>Coleta Sustentável</h1>
            <GoogleMaps/>
            <NovoLocal
            closeWindow = {() => removeDisplay()}
            styleLocal = {styleNovoLocal}
            name={nomeLocal}
            setName ={(e) => setnomeLocal(e.target.value)}
            endereco={endereco}
            setEndereco ={(e) => setEndereco(e.target.value)}
            removeDisplay={removeDisplay} 
            />
        </div>
        <button className='adicionar-novo-local' onClick={() => changeDisplay()}> adicionar novo local</button>
        <Rodape/>
    </main>
}

export default Maps