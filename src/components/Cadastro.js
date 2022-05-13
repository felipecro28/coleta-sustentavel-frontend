import '../css/cadastro.css'
import Nav from './Nav'
import { Link } from 'react-router-dom';
import Rodape from './Rodape'
import { postUser } from '../functions/postUser';
import { useState } from 'react';
import Sucesso from './Sucesso';

function Cadastro (props){

    let [nome, setNome] = useState('Felipe')
    let [email, setEmail] = useState('oliveira.felipe28@gmail.com')
    let [display, setDisplay] = useState('none')

    function salvaUsuario(){
        postUser(nome, email)
        setDisplay('flex')
        return setTimeout(() => {
            setDisplay('none')
        }, 2000);
    }

    return <main>
        <Nav />
        <div class='div-cadastro'>
                <h2>Para começar, insira o seu nome e o seu e-mail</h2>
            <form>
            <label>
                Nome  <br></br>
                <input type="text" name="name" id='name'
                value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
            <label>
                E-mail <br></br>
                <input type="text" name="email" id='email' 
                value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            
            <button type='button' onClick={() => salvaUsuario()}>Cadastrar!</button>
            </form>
            <Sucesso mensagem = 'Usuário adicionado com sucesso' display = {display}/>
        </div>

        <Rodape />
    </main>


}

export default Cadastro