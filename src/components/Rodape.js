import '../css/App.css'
import '../css/Nav.css'
import logoColeta from '../assets/logo-coleta.png'
import { Link } from 'react-router-dom'

function Rodape (){
    return <footer>
        <div class='rodape'>
            <div>
            <img src={logoColeta} alt='' id='logo-rodape' ></img>
            </div>

            <div>
            <ul>
                <li> <Link to='/onde-descartar' style={{ textDecoration: 'none', color: 'white'}}> Onde descartar</Link> </li>
                <li>Resíduos</li>
                <li>Sobre nós</li>
            </ul>
            </div>
        </div>
    </footer>

}

export default Rodape