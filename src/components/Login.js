import '../css/App.css'
import '../css/Login.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Rodape from './Rodape'

function Login (){
    return <main>
        <Nav />
        <div class='div-login'>
            <div>
                <h2>Se você já tem cadastro conosco, faça o login.</h2>
            </div>
            <form>
            <label>
                Email <br></br>
                <input type="text" name="email" />
            </label>
            <label>
                Senha <br></br>
                <input type="text" name="senha" />
            </label>
            <div class='crie-cadastro'>
            <p>Crie seu cadastro</p>
            <p>Esqueci a senha</p>
            </div>

            <button>Entrar</button>
            </form>
            
        </div>
        <Rodape />
    </main>


}

export default Login