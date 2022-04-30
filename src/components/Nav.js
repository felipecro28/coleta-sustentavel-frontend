import React from 'react'
/* import { Link } from 'react-router-dom' */
import '../css/App.css'
import '../css/Nav.css'
import userLogo from '../assets/User-Circle.png'
import logoColeta from '../assets/logo-coleta.png'
import menu from '../assets/Menu.png'

function Nav (){
    return <nav>
        <div className='nav-div'>
            <img src={logoColeta} alt='' id='logo' ></img>
            <ul>
                <li> Onde descartar</li>
                <li>Resíduos</li>
                <li>Sobre nós</li>
                <li><a href='../assets'><img src={userLogo} alt='logo' id='user-logo' /></a></li>
            </ul>
            <img src={menu} alt='' id='menu' ></img>
        </div>
    </nav>
}

export default Nav