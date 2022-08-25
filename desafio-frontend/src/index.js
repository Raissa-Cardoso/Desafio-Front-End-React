import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(
    <div>
        <main class="main">
            <div class="historico">
                <p>Home / Minha conta / </p>
                <p>Bolsas favoritas</p>
            </div>        
        </main>
        <header class="cabecalho">        
            <div class="info">
                <img src="./assets/info.jpg" alt="Logo de informações" height="20px" width="20px"/>
                <p>Como Funciona</p>
            </div>
            <div class="contato">
                <img src="./assets/whatsapp.jpg" alt="Logo do whatsapp"/>
                <div class="telefone">
                    <p>0800 123 2222</p>
                    <p>Envie mensagem ou ligue</p>
                </div>            
            </div>
            <div class="quero-logo">
                <img src="./assets/quero-Logo.jpg" alt="Logo da Quero"/>
            </div>
            <div class="login">
                <p>Nome Sobrenome</p>
                <img src="./assets/login.jpg" alt="Icone de Login"/>
            </div>       
        </header>
        <nav class="menu">
            <ul>
                <li>Minha conta</li>
                <li>Pré-matrículas</li>
                <li>Bolsas favoritas</li>
            </ul>
        </nav>
        <footer class="rodape">RODAPÉ</footer>
    </div>,
    document.getElementById('root')
)