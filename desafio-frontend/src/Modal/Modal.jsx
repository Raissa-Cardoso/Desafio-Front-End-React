import './modal.css'
import React,{useState,useEffect} from 'react'
import dados from'../data/db.json'

const logo=require("../assets/quero-Logo.jpg")
 

export default function Modal(props){  
    let ofertas=dados.filter(oferta=>oferta.campus.city=="São José dos Campos")      
    let [progressoClick, setProgressoClick]=useState(true)
    let [progressoBotao,setProgressoBotao]=useState(document.querySelector('.progressoBotao'))       
    function fecharModal(){
       props.fechar()           
    }
    useEffect(() => {
        setProgressoBotao((state) => progressoClick?document.querySelector('.progressoBotao').style.marginLeft='calc(+5px)' : document.querySelector('.progressoBotao').style.marginLeft);
    },[progressoClick]);
    
    function clicarProgressoBotao(){
        setProgressoClick(state => !state)
        //setprogressoBotao(document.querySelector('.progressoBotao'))
        //progressoBotao.style.marginLeft='calc(+5px)'        
        //progressoBotao.style.transition='progresso-animacao 5s infinite'
        
    }
    return(
        <>
            <button className="fecharModal" type="submit" onClick={fecharModal}>X</button>
            <h1>Adicionar Bolsa</h1>
            <h2>Filtre e adicione as bolsas do seu interesse.</h2>
            <div className='cidadeCurso'>
                <div className="cidade">
                    <label htmlFor="cidade">SELECIONE SUA CIDADE</label>
                    <select id="cidade">
                        <option value="sjc">São José dos Campos</option>
                        <option value=""></option>    
                    </select>
                </div>
                <div className="curso">
                    <label htmlFor="curso">SELECIONE O CURSO DE SUA PREFERÊNCIA</label>
                    <select id="curso">
                        <option value=""></option>
                        <option value=""></option>    
                    </select>
                </div>                
            </div>
            <div className='modalidadePreço'>                
                <div className="modalidadeModal">
                    <p>COMO VOCÊ QUER ESTUDAR?</p>  
                    <div className="modalidadeModalOpcoes">
                        <input type="checkbox" id="presencial" name="modalidadeCheck" value="presencial"/>
                        <label htmlFor='presencial' >Presencial                             
                        </label> 
                        <input type="checkbox" id="adistancia" name="modalidadeCheck"/>                   
                        <label htmlFor='adistancia' value="adistancia">A distância                             
                        </label>
                    </div>         
                </div>                
                <div className='preçoModal'>
                    <p>ATÉ QUANTO PODE PAGAR?</p>
                    <p>R$10.000</p>
                    <div className="linhaProgresso">
                        <button onClick={clicarProgressoBotao} className="progressoBotao"></button>
                    </div>
                </div>               
            </div>
            <div className="resultados">
                <div className='resultado'>
                    <p>Resultado:</p>
                </div>                
                <div className='ordenar'>
                    <p>Ordenar por </p>
                    <a href=''>Nome da Faculdade</a>
                </div>    
            </div>
            <div className="divisao"/>
            <div className='faculdadeModal'>
                <input type="checkbox" name="" id="" />
                    <img src={ofertas[0].university.logo_url} alt="" />
                    <div className='cursoModal'>
                        <p>{ofertas[0].course.name}</p>
                        <p>{ofertas[0].course.level}</p>
                    </div>
                    <div className='bolsaModal'>
                        <div className='bolsaModalPorcentagem'>
                            <p>Bolsa de </p>
                            <p>{ofertas[0].discount_percentage} %</p>
                        </div>
                        <p>R$ {ofertas[0].price_with_discount} / mês</p>
                    </div>              
            </div>
            <div className="divisao"/>
        </>
    )
}