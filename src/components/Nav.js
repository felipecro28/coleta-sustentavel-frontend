import '../css/App.css'
import '../css/Nav.css'
import userLogo from '../assets/User-Circle.png'
import logoColeta from '../assets/logo-coleta.png'
import menu from '../assets/Menu.png'
import { Link } from 'react-router-dom'
import ListaMobile from './ListaMobile'
import {useState} from 'react'

function Nav (){

    const [visible, setVisible] = useState(false)

    return (
        <div>
        <nav>
        <div className='nav-div'>
            <Link to='/'><img src={logoColeta} alt='' id='logo' ></img></Link>
            <ul id='lista-display'>
                <li> <Link to='/onde-descartar' style={{ textDecoration: 'none', color: 'white',fontSize:'13px'}}> Onde descartar</Link> </li>
                <li>Resíduos</li>
                <li>Sobre nós</li>
                <li><Link to='/login' style={{ textDecoration: 'none', color: 'white'}}><img src={userLogo} alt='logo' id='user-logo' /></Link></li>
            </ul>
            <img src={menu} alt='' id='menu' onClick={() => setVisible(!visible)} ></img>
            </div>
    </nav>
    {visible && <ListaMobile />}
    </div>
    )
}

export default Nav