import './BolsasAdicionadas.css'
import React from 'react'


const logo=require("../../src/assets/quero-Logo.jpg")

export default function BolsasAdicionadas (props){
    return(
        <div className='bolsas_adicionadas'>
            <div className="logoUniversidade">
                <img src={logo} alt="DL1000"/>
            </div>
            <div className="iesCurso">
                <p>AAAAAAA</p>
                <p>AAAAAAAAAAAA AAAA AAAA</p>
                <p>3.8</p>
            </div>
            <div className="modalidadeInicio">
                <p>PRESENCIAL • NOITE</p>
                <p>Início das aulas em: 05/07/2019</p>
            </div>
            <div className="mensalidade">
                <p>Mensalidade com o Quero Bolsa:</p>
                <p>R$ 1.487,31</p>
                <p>R$ 453,63 /mês</p>
            </div>
            <div className='botoes'>
               <button className='botaoExcluir'>Excluir</button> 
               <button className='botaoOferta'>Ver oferta</button>
               <button className='botaoInvisel'>Indisponível</button>
            </div>     
        </div>
    )

}






