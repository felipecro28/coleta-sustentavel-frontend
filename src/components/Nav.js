import '../css/App.css'
import '../css/Nav.css'
import userLogo from '../assets/User-Circle.png'
import logoColeta from '../assets/logo-coleta.png'
import menu from '../assets/Menu.png'
import { Link } from 'react-router-dom'

function Nav (){
    return (
        <nav>
        <div className='nav-div'>
            <img src={logoColeta} alt='' id='logo' ></img>
            <ul>
                <li> <Link to='/onde-descartar' style={{ textDecoration: 'none', color: 'white'}}> Onde descartar</Link> </li>
                <li>Resíduos</li>
                <li>Sobre nós</li>
                <li><Link to='/login' style={{ textDecoration: 'none', color: 'white'}}><img src={userLogo} alt='logo' id='user-logo' /></Link></li>
            </ul>
            <img src={menu} alt='' id='menu' ></img>
        </div>
    </nav>
    )
}

export default Nav