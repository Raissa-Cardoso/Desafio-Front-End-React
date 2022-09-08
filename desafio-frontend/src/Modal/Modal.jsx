import './modal.css'
import React,{useState} from 'react'

export default function Modal(props){
    let [progressoBotao,setprogressoBotao]=useState(document.querySelector('.progressoBotao'))       
    function fecharModal(){
       props.fechar()           
    }
    function clicarProgressoBotao(){
        setprogressoBotao(document.querySelector('.progressoBotao'))
        progressoBotao.style.marginLeft='calc(+5px)'        
        
    }
    return(
        <>
            <button className="fecharModal" type="submit" onClick={fecharModal}>X</button>
            <h1>Adicionar Bolsa</h1>
            <h2>faculdades do seu interesse e receba atualizações</h2>
            <div className='cidadeCurso'>
                <div className="cidade">
                    <label for="cidade">SELECIONE SUA CIDADE</label>
                    <select id="cidade">
                        <option value="sjc">São José dos Campos</option>
                        <option value=""></option>    
                    </select>
                </div>
                <div className="curso">
                    <label for="curso">SELECIONE O CURSO DE SUA PREFERÊNCIA</label>
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
                        <label htmlFor='presencial' >Presencial
                            <input type="checkbox" name="modalidadeCheck" value="presencial"/> 
                        </label>                    
                        <label htmlFor='adistancia' value="adistancia">A distância
                            <input type="checkbox" name="modalidadeCheck"/> 
                        </label>
                    </div>         
                    
                </div>                
                <div className='preçoModal'>
                    <p>ATÉ QUANTO PODE PAGAR?</p>
                    <p>R$10.000</p>
                    <div class="linhaProgresso">
                        <button onClick={clicarProgressoBotao} className="progressoBotao"></button>
                    </div>
                </div>

            </div>
            
        </>
    )
}