import './index.css'
import React from 'react'

import Modal from "./Modal/Modal"
import Card from './Card/Card'

const logo=require("./assets/quero-Logo.jpg")

export default function App() {
    /*const modal=document.querySelector('.modal')
    //let fundos=document.querySelectorAll('.fundo')       
    
    function abrirModal(){  
        console.log(modal)
        modal.classList.add('visivel')
        /*fundos.forEach(fundo=>{
            fundo.classList.add("opacidade")  
        })                                              
    }    */
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
            <div className='cards'>
                <div className='adicionar_bolsa'>
                    <Card 
                        nome_curso={<i className="fa fa-plus-circle" aria-hidden="true"></i>}
                        modalidade_titulo='Adicionar bolsa'
                        modalidade_subtitulo='Clique para adicionar bolsas de cursos do seu interesse'
                        botoes={false} 
                    />
                </div>
                <div className='bolsas_adicionadas'>
                    <Card
                        logo={<img src={logo} alt="DL1000"/>}
                        nome_universidade='AAAAA'
                        nome_curso='AAAAAAAAAAAAAAA AAAAAAA AAAA'
                        nota_curso='3.8'
                        modalidade_titulo='PRESENCIAL • NOITE'
                        modalidade_subtitulo='Início das aulas em: 05/07/2019'
                        preço_titulo='Mensalidade com o Quero Bolsa:'
                        preço_anterior='R$ 1.487,31'
                        preço_atual='R$ 453,63 /mês'
                        botoes={true}                        
                    />
                    <Card
                        logo={<img src={logo} alt="DL1000"/>}
                        nome_universidade='AAAAA'
                        nome_curso='AAAAAAAAAAAAAAA AAAAAAA AAAA'
                        nota_curso='3.8'
                        modalidade_titulo='PRESENCIAL • NOITE'
                        modalidade_subtitulo='Início das aulas em: 05/07/2019'
                        preço_titulo='Mensalidade com o Quero Bolsa:'
                        preço_anterior='R$ 1.487,31'
                        preço_atual='R$ 453,63 /mês'
                        botoes={true}                        
                    />
                    <Card
                        logo={<img src={logo} alt="DL1000"/>}
                        nome_universidade='AAAAA'
                        nome_curso='AAAAAAAAAAAAAAA AAAAAAA AAAA'
                        nota_curso='3.8'
                        modalidade_titulo='PRESENCIAL • NOITE'
                        modalidade_subtitulo='Início das aulas em: 05/07/2019'
                        preço_titulo='Mensalidade com o Quero Bolsa:'
                        preço_anterior='R$ 1.487,31'
                        preço_atual='R$ 453,63 /mês'
                        botoes={true}                        
                    />
                    <Card
                        logo={<img src={logo} alt="DL1000"/>}
                        nome_universidade='AAAAA'
                        nome_curso='AAAAAAAAAAAAAAA AAAAAAA AAAA'
                        nota_curso='3.8'
                        modalidade_titulo='PRESENCIAL • NOITE'
                        modalidade_subtitulo='Início das aulas em: 05/07/2019'
                        preço_titulo='Mensalidade com o Quero Bolsa:'
                        preço_anterior='R$ 1.487,31'
                        preço_atual='R$ 453,63 /mês'
                        botoes={true}                        
                    />                      
                
                </div>                

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
        <div className="modal">
            <Modal></Modal>
        </div>
    </>
    )
}