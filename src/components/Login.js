import '../css/App.css'
import '../css/Login.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Rodape from './Rodape'
import { login } from '../functions/login'
import { useState } from 'react'
import axios from 'axios'
import Sucesso from './Sucesso'



function Login (){

    const [users, setUsers] = useState([])
    const [usuario, setUsuario] = useState('')
    const [loginMessage, setLoginMessage] = useState('Login realizado com sucesso!')
    const [display, setDisplay] = useState('none')



    async function getUsers(){
        const response = await axios.get('https://provi-hack.herokuapp.com/api/users/')
        setUsers(response.data)
    }

    function comparaUsuario (user, usuario){
        if (user.email === usuario){
            return true
        } else{
            return false
        }
    }

    function filtrarUsuario() {
       const filtrado = users.filter(user => comparaUsuario(user, usuario))
       if (filtrado.length == 0){
        setLoginMessage('e-mail não cadastrado')
        setDisplay('flex')
        setTimeout(() => {
            setDisplay('none')
        }, 2000)
    } else {
        setLoginMessage('login realizado com sucesso')
        setDisplay('flex')
        setTimeout(() => {
            setDisplay('none')
        }, 2000)
    }
    }

    return <main onLoad={getUsers}>
        <Nav />
        <div class='div-login'>
            <div class='div-login-secundaria'>
                <h2>Insira o seu e-mail para continuar: </h2>
            </div>
            <form>
                <input type="text" name="email" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
            <h3 style={{margin: '20px'}}> Não possui e-mail cadastrado?</h3>
            <div class='crie-cadastro'>
            <Link to='/cadastro' style={{textDecoration:'none', color:'black'}}><p>Crie seu cadastro</p></Link>
            </div>

            <button type='button' onClick={filtrarUsuario}>Entrar</button>
            </form>
            <Sucesso
            mensagem = {loginMessage}
            display = {display} />
        </div>
        <Rodape />
    </main>


}

export default Login