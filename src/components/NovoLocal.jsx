import '../css/novoLocal.css'
import Sucesso from './Sucesso'
import axios from 'axios'
import { useState } from 'react'


export default function NovoLocal (props){

    const [data, setData] = useState([])
    const [displayConfirmar, setDisplayConfirmar] = useState('none')
    const [displaySucesso, setDisplaySucesso] = useState('none')
    const [mensagemSucesso, setMensagemSucesso] = useState('Adicionando local...')

    async function getCordenate (){
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${props.endereco}&key=AIzaSyBkcSwoV2GxS8CzGh1VK8nao4pSWRraflw`)
        setData(response.data);
        setDisplayConfirmar('flex') 
        callProps()
    }

    function callProps(){
        return props.removeDisplay()
    }

    function postLocal (){
        axios.post('https://provi-hack.herokuapp.com/api/create/pontos', {
            name: props.name,
            adress: props.endereco,
            postcode: null,
            lat: data.results[0].geometry.location.lat, 
            lgtd: data.results[0].geometry.location.lng
        })
        setDisplaySucesso('flex')
        setData([])
        setTimeout(() => {
            setMensagemSucesso('Local Adicionado!')
            setDisplaySucesso('fle')
            setDisplayConfirmar('none')
        }, 1500);
    }

    return (
        <>
            <div className="novoLocal" style={props.styleLocal}>
                <h1> Adicionar novo local </h1>
                <p onClick={props.closeWindow} className='exitButton1'>&#10062;</p>
                <form className='formulario-novoLocal'>
                    <label> Nome do Lugar: </label>
                    <input type='text' value={props.name} onChange={props.setName}/>
                    <label> Endereço: </label>
                    <input type='text' value={props.endereco} onChange={props.setEndereco}/>
                    <button type='button' onClick={() => getCordenate()}>Adicionar</button>
                </form>
            </div>
                <div className='continuar' style={{display: displayConfirmar}}>
                    <p style={{fontSize: '22px'}}> Adicionar local ? </p>
                    <p onClick={() => setDisplayConfirmar('none')} className='exitButton'>&#10062;</p>
                    <Sucesso
                    fontSize= '14x'
                    altura='20px'
                    mensagem={mensagemSucesso}
                    display = {displaySucesso}
                    />
                    <button onClick={() => postLocal()}> Confirmar </button>
                    </div>
            </>
    )
}