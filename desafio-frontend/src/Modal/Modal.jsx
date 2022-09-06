import './modal.css'
import React from 'react'

export default function Modal(){
    const modal=document.querySelector('.modal')
    let fundo=document.querySelector('.fundo')    
    function fecharModal(){
        modal.classList.remove('visivel')  
        fundo.classList.remove("opacidade")            
    }
    return(
        <>
            <h1> Aqui é o Modal</h1>
            <button id="fecharModal" type="submit" onClick={fecharModal}>X</button>
        </>
    )
}