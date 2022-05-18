import '../css/App.css'
import '../css/Nav.css'
import logoColeta from '../assets/logo-coleta.png'
import { Link } from 'react-router-dom'

function Rodape (){
    return <footer>
        <div class='rodape'>
            <div>
            <Link to='/'><img src={logoColeta} alt='' id='logo-rodape' ></img></Link>
            </div>

            <div>
            <ul id='listaFooter'>
                <li> <Link to='/onde-descartar' style={{ textDecoration: 'none', color: 'white', fontSize: '10px'}}> Onde descartar</Link> </li>
                <li>Resíduos</li>
                <li>Sobre nós</li>
            </ul>
            </div>
        </div>
    </footer>

}

export default Rodape