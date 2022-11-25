import "./AdicionarCurso.css"
import React from "react"

export default function AdicionarCurso(props){
    function adicionar(){
        props.adicionar()
    }
    return(
        <div className="adicionarCurso">
            <i className="fa fa-plus-circle" aria-hidden="true" onClick={adicionar}></i>
            <p>Adicionar bolsa</p>
            <p>Clique para adicionar bolsas de cursos do seu interesse</p>           
        </div>
    )
}