import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(
    <>
        <main className="main">
            <div className="historico">
                <p>Home / Minha conta / </p>
                <p>Bolsas favoritas</p>
            </div>        
        </main>
        <header className="cabecalho">        
            <div className="info">
                <img src="./assets/info.jpg" alt="Logo de informações" height="20px" width="20px"/>
                <p>Como Funciona</p>
            </div>
            <div className="contato">
                <img src="./assets/whatsapp.jpg" alt="Logo do whatsapp"/>
                <div className="telefone">
                    <p>0800 123 2222</p>
                    <p>Envie mensagem ou ligue</p>
                </div>            
            </div>
            <div className="quero-logo">
                <img src="./assets/quero-Logo.jpg" alt="Logo da Quero"/>
            </div>
            <div className="login">
                <p>Nome Sobrenome</p>
                <img src="./assets/login.jpg" alt="Icone de Login"/>
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