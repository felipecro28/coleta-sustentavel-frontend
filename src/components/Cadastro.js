import '../css/cadastro.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Rodape from './Rodape'

function Cadastro (){
    return <main>
        <Nav />
        <div class='div-cadastro'>
            <div>
                <h2>Para dar continuidade ao seu cadastro, gostaríamos de te conhecer.</h2>
            </div>
            <form>
            <label>
                Nome completo <br></br>
                <input type="text" name="email" />
            </label>
            <label>
                E-mail <br></br>
                <input type="text" name="senha" />
            </label>
            <label>
                Senha <br></br>
                <input type="text" name="email" />
            </label>
            <label>
                Telefone <br></br>
                <input type="text" name="senha" />
            </label>            
            <label>
                CEP <br></br>
                <input type="text" name="email" />
            </label>
            <label>
                Rua <br></br>
                <input type="text" name="senha" />
            </label>
            <div class='bairro-div'>
            <label>
                Bairro <br></br>
                <input type="text" name="senha" />
            </label>            
            <label>
                Numero <br></br>
                <input type="text" name="email" />
            </label>
            <label>
                UF <br></br>
                <input type="text" name="senha" />
            </label>
            </div>
            <button>Salvar</button>
            </form>
            
        </div>
        <Rodape />
    </main>


}

export default Cadastro