import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

const logo=require("./assets/quero-Logo.jpg")

ReactDOM.render(
    <>
        <main className="main">
            <div className="historico">
                <p>Home / Minha conta / </p>
                <p>Bolsas favoritas</p>
            </div> 
            <div className='titulos'>
                <h1>Bolsas favoritas</h1>
                <p>Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.</p>
            </div>             
            <div className='semestres'>
                <ul>
                    <li>Todos os semestres</li>
                    <li>2º semestre de 2019</li>
                    <li>1º semestre de 2020</li>
                </ul>
            </div>  
            <div className='adicionarBolsa'>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                <p>Adicionar bolsa</p>
                <p>Clique para adicionar bolsas de cursos do seu interesse</p>
            </div>  
        </main>
        <header className="cabecalho"> 
            <div className='info-contato'>
            <div className="info">
                <i className="fa fa-info-circle" aria-hidden="true"></i>
                <p>Como Funciona</p>
            </div>
            <div className="contato">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                <div className="telefone">
                    <p>0800 123 2222</p>
                    <p>Envie mensagem ou ligue</p>
                </div>            
            </div>
            </div>     
            <div className="quero-logo">
                <img src={logo} alt="DL1000"/>  
            </div>
            <div className="login">
                <p>Nome Sobrenome</p>
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>       
        </header>
        <nav className="menu">
            <ul>
                <li>Minha conta</li>
                <li>Pré-matrículas</li>
                <li>Bolsas favoritas</li>
            </ul>
        </nav>
        <footer className="rodape">RODAPÉ</footer>
    </>,
    document.getElementById('root')
)