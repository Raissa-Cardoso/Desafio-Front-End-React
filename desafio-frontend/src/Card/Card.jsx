import './Card.css'
import React from 'react'

export default function Card(props){ 
    /*const visibilidade_botoes=props.botoes   
    if (visibilidade_botoes==true){
        console.log(props.modalidade_titulo)
        const botoes=document.querySelector('.botoes')
        //botoes.classList.remove='botoes_invisiveis'
        console.log(botoes.classList)
    }*/
    return(
        <div className='card'>   
            {props.children}    
        </div>  
    )
}

/*
<div className='logo_universidade'>
                {props.logo}
            </div>             
            <div className='curso'>
                <p>{props.nome_universidade}</p>
                <p>{props.nome_curso}</p>
                <p>{props.nota_curso}</p>
            </div>
            <div className='modalidade'>
                <p>{props.modalidade_titulo}</p>
                <p>{props.modalidade_subtitulo}</p>
            </div>
            <div className='preço'> 
                <p>{props.preço_titulo}</p>
                <p>{props.preço_anterior}</p> 
                <p>{props.preço_atual}</p>             
            </div>
            <div className='botoes'>
               <button className='botoes_inviseis'>Excluir</button> 
               <button className='botoes_inviseis'>Ver oferta</button>
            </div>                                                      
    */