import '../css/listaMobile.css'
import { Link } from 'react-router-dom'
import userLogo from '../assets/User-Circle.png'


function ListaMobile (){
    return (
    <div id='mobileList'>
        <ul id='lista-mobile'>
                <li> <Link to='/onde-descartar' style={{ textDecoration: 'none', color: 'white',fontSize:'12px'}}> Onde descartar</Link> </li>
                <li>Resíduos</li>
                <li>Sobre nós</li>
                <li><Link to='/login' style={{ textDecoration: 'none', color: 'white'}}><img src={userLogo} alt='logo' id='user-logo-mobile' /></Link></li>
            </ul>
    </div>
    )
}

export default ListaMobile