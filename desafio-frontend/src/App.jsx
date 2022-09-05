import './index.css'
import React from 'react'

import Modal from "./Modal/Modal"

const logo=require("./assets/quero-Logo.jpg")

export default function App() {
    const modal=document.querySelector('#modal')
    let fundo=document.querySelector('.fundo')       
    
    function abrirModal(){  
        modal.classList.add('Visivel') 
        fundo.classList.add("Opacidade")                                        
    }    
    return (
        <>
        <main className="main fundo">
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
                <i className="fa fa-plus-circle" aria-hidden="true" onClick={abrirModal}></i>                               
                <p>Adicionar bolsa</p>
                <p>Clique para adicionar bolsas de cursos do seu interesse</p>
            </div>  
        </main>
        <header className="cabecalho fundo"> 
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
        <nav className="menu fundo">
            <ul>
                <li>Minha conta</li>
                <li>Pré-matrículas</li>
                <li>Bolsas favoritas</li>
            </ul>
        </nav>
        <footer className="rodape fundo">
            <div className='rodape_contatos'>
                <div className="rodape_icone_telefone">
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    <div className='rodape_telefone'>
                        <p>0800 123 2222</p>
                        <p>Seg - Sex 8h-22h</p>
                    </div>                    
                </div>
                <div className="rodape_icone_chat">
                    <i className="fa fa-comments" aria-hidden="true"></i>
                    <div className='rodape_chat'>
                        <p>Chat ao vivo</p>
                        <p>Seg - Sex 8h-22h</p>
                    </div>                    
                </div>
                <div className="rodape_icone_email">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <div className="rodape_email">
                        <p>Mande um e-mail</p>
                        <p>Respondemos rapidinho</p>
                    </div>                    
                </div>
                <div className="rodape_icone_ajuda">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div className="rodape_ajuda">
                        <p>Central de ajuda</p>
                        <p>Encontre todas as respostas</p>
                    </div>                    
                </div>              
            </div>
            <div className="rodape_assinatura">
                <p>Feito com <i className="fa fa-heart-o" aria-hidden="true"></i> pela Quero Educação</p>
            </div>
        </footer>
        <div id="modal" class="Modal">
            <Modal></Modal>
        </div>
    </>
    )
}