import React from 'react'
import '../css/App.css'
import linha from '../assets/Line 2.png'
import goGreen from '../assets/Go Green Recycling 1.png'
import notebook from '../assets/MacBook Pro 16.png'
import iphone from '../assets/iPhone 12 Pro.png'
import Nav from './Nav'


function Home (){
    return <main>
      <Nav />
  <div class="text-one">
    <div class='texto-um'>
      <p id='coleta'> Coleta Sustentável </p>
      <p>Nosso objetivo é que você 
      encontre um ponto de 
      coleta <br></br>de algum material 
       específico pertinho de você,
      e ainda <br></br> ajude outras 
      pessoas caso você encontre 
      um ponto de <br></br>coleta diferente.</p>
    </div>
    <div class='imagem-notebook'>
      <img src={notebook} alt='' id='notebook-image' ></img>
  </div>
  </div>




  <div class="text-two">
    <h2> Não existe planeta b, vamos nos unir?</h2>
    <button class="start-button">Começar</button>
  </div>

  <div class="text-three">

    <div class='imagem-tres-div'>
      <p><img src={goGreen} alt='logo go Green' id='image-goGreen' /></p>
    </div>

    <div class='texto-tres'>
      <h3>Você sabia?</h3>
      <p id='p-texto-tres'>O Brasil é o 4º país que mais produz lixo no mundo</p>
      <img src={linha} alt='imagem de linha' id='imagem-linha' width={430} />
      <p id='p-texto-tres'>São Paulo é o estado que mais produz lixo no país.</p>
      <img src={linha} alt='imagem de linha' id='imagem-linha' width={430} />
      <p id='p-texto-tres'>A população brasileira gera, por ano, 1.5 milhões <br></br> de tonelada de lixo eletrônico</p>
      <img src={linha} alt='imagem de linha' id='imagem-linha' width={430} />
      <p id='p-texto-tres'>Uma pesquisa aponta que mais de 80% dos
      municípios <br></br> brasileiros não tratam de forma
      adequada <br></br> o entulho gerado pela 
      construção civil.</p>
  </div>

  </div>

  <div class="text-four">

  <div class='texto-tres'>
      <p id='p-texto-tres'>1 litro de óleo pode contaminar até 25 mil litros de água</p>
      <img src={linha} alt='imagem de linha' id='imagem-linha' width={430} />
      <p id='p-texto-tres'>Cada quilograma de medicamento descartado incorretamente <br></br> pode acabar contaminando até 450 mil litros de água, causando <br></br>
      um grave problema ambiental <br></br>
      e de saúde pública.</p>
      <img src={linha} alt='imagem de linha' id='imagem-linha' width={430} />
  </div>

    <div class='imagem-four-div'>
    <img src={iphone} alt='' id='iphone' ></img>
    </div>
  </div>
</main>
}

export default Home