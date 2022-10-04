import './index.css'
import React,{useState, useEffect} from 'react'

import Modal from "./Modal/Modal"
import Card from './Card/Card'
import AdicionarCurso from './Adicionar curso/AdicionarCurso'
import BolsasAdicionadas from './Bolsas adicionadas/BolsasAdicionadas'

const logo=require("./assets/quero-Logo.jpg")

export default function App() {     
    let [abrir, setAbrir]=useState(false)
    let [modal,setModal]=useState(document.querySelector('.modal'))
    let [fundos,setFundos]=useState(document.querySelectorAll('.fundo')) 
    useEffect(() => {
        setModal((state) => abrir?document.querySelector('.modal').style.display="flex":document.querySelector('.modal').style.display="none");
        setFundos((state)=> abrir?document.querySelectorAll('.fundo').forEach(fundo=>{                       
                fundo.style.filter="brightness(0.8)"})
            :document.querySelectorAll('.fundo').forEach(fundo=>{                       
                fundo.style.filter="brightness(1)"}))
    },[abrir]);  
    function abrirModal(){ 
        setAbrir(state => !state)       
        setFundos(document.querySelectorAll('.fundo'))                      
        fundos.forEach(fundo=>{                       
            fundo.style.filter="brightness(0.8)"            
        })              
    }
    function fecharModal(){
        setAbrir(state => !state)
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
            <div className='cards'>
                <div className='adicionar_bolsa'>
                    <Card>
                        <AdicionarCurso adicionar={abrirModal}></AdicionarCurso> 
                    </Card>
                </div>
                <div className='bolsasAdicionadas'>
                    <Card>
                        <BolsasAdicionadas></BolsasAdicionadas>
                    </Card>
                    <Card>
                        <BolsasAdicionadas></BolsasAdicionadas>
                    </Card>
                    <Card>
                        <BolsasAdicionadas></BolsasAdicionadas>
                    </Card>
                    <Card>
                        <BolsasAdicionadas></BolsasAdicionadas>
                    </Card>                    
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
            <div className='rodape_contatos fundo' >
                <div className="rodape_icone_telefone fundo">
                    <i className="fa fa-whatsapp fundo" aria-hidden="true"></i>
                    <div className='rodape_telefone fundo'>
                        <p className='fundo'>0800 123 2222</p>
                        <p className='fundo'>Seg - Sex 8h-22h</p>
                    </div>                    
                </div>
                <div className="rodape_icone_chat fundo">
                    <i className="fa fa-comments fundo" aria-hidden="true"></i>
                    <div className='rodape_chat fundo'>
                        <p className='fundo'>Chat ao vivo</p>
                        <p className='fundo'>Seg - Sex 8h-22h</p>
                    </div>                    
                </div>
                <div className="rodape_icone_email fundo">
                    <i className="fa fa-envelope-o fundo" aria-hidden="true"></i>
                    <div className="rodape_email fundo">
                        <p className='fundo'>Mande um e-mail</p>
                        <p className='fundo'>Respondemos rapidinho</p>
                    </div>                    
                </div>
                <div className="rodape_icone_ajuda fundo">
                    <i className="fa fa-info-circle fundo" aria-hidden="true"></i>
                    <div className="rodape_ajuda fundo">
                        <p className='fundo'>Central de ajuda</p>
                        <p className='fundo'>Encontre todas as respostas</p>
                    </div>                    
                </div>              
            </div>
            <div className="rodape_assinatura fundo">
                <p className='fundo'>Feito com <i className="fa fa-heart-o fundo" aria-hidden="true"></i> pela Quero Educação</p>
            </div>
        </footer>
        <div className="modal">
            <Modal fechar={fecharModal}/>
        </div>
    </>
    )
}