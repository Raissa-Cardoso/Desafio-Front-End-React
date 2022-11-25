import './modal.css'
import React,{useState,useEffect} from 'react'
import dados from'../data/db.json'

const logo=require("../assets/quero-Logo.jpg")
 

export default function Modal(props){  
    let cidadeDif=[]
    let cidades=dados.map(cidade=>cidade.campus.city)
    cidades.map(cidade=>{
        if(cidadeDif.indexOf(cidade)===-1){
            cidadeDif.push(cidade)
        }
    })
    let [cidadesOp,setCidadesOp]=useState(cidadeDif.sort()[0])    
    let cursosDif=[]
    let cursos=dados.map(curso=>curso.course.name)
    cursos.map(curso=>{
        if(cursosDif.indexOf(curso)===-1){
            cursosDif.push(curso)
        }
    })
    let [cursosOp,setCursosOp]=useState(" ")      
    let [modalidade,setModalidade]=useState({Presencial:false,EaD:false})
    function selecionarModalidade(){  
        if(document.querySelector('#modPresencial').checked){
            setModalidade(previousState => {
                return { ...previousState, Presencial:true }
            })
        }else{
            setModalidade(previousState => {
                return { ...previousState, Presencial:false }
            }) 
        }
        if(document.querySelector('#modEad').checked){                        
            setModalidade(previousState => {
                return { ...previousState, EaD:true }
            })           
        }else{
            setModalidade(previousState => {
                return { ...previousState, EaD:false }
            }) 
        }
    }
    function buscarOfertas(cidade, curso, presencial, ead, universidade){
        return{
            cidade:cidade,
            curso:curso,
            presencial:presencial,
            ead:ead            
        }
    }
    let buscaOfertas=buscarOfertas(cidadesOp,cursosOp,modalidade.Presencial,modalidade.EaD)
    let ofertas=dados.filter(oferta=>oferta.campus.city===cidadesOp)
    if(Object.values(buscaOfertas)[0]!==" ") ofertas=ofertas.filter(oferta=>oferta.campus.city===cidadesOp)
    if(Object.values(buscaOfertas)[1]!==" ") Object.values(buscaOfertas)[0]===" "?ofertas=dados.filter(oferta=>oferta.course.name===cursosOp):ofertas=ofertas.filter(oferta=>oferta.course.name===cursosOp) 
    if(Object.values(buscaOfertas)[2]!==false&&Object.values(buscaOfertas)[3]!==true) ofertas.length===0?ofertas=dados.filter(oferta=>oferta.course.kind==="EaD"):ofertas=ofertas.filter(oferta=>oferta.course.kind==="EaD") 
    if(Object.values(buscaOfertas)[3]!==false&&Object.values(buscaOfertas)[2]!==true) ofertas.length===0?ofertas=dados.filter(oferta=>oferta.course.kind==="Presencial"):ofertas=ofertas.filter(oferta=>oferta.course.kind==="Presencial")
    if(Object.values(buscaOfertas)[2]===true&&Object.values(buscaOfertas)[3]===true) ofertas.length===0?ofertas=dados.filter(oferta=>oferta.course.kind==="Presencial"||oferta.course.kind==="EaD"):ofertas=ofertas.filter(oferta=>oferta.course.kind==="Presencial"||oferta.course.kind==="EaD")
    if(Object.values(buscaOfertas)[0]===" "&&Object.values(buscaOfertas)[1]===" "&&Object.values(buscaOfertas)[2]===false&&Object.values(buscaOfertas)[3]===false)ofertas=dados.map(oferta=>oferta)
    

    let ofertasOrdenadas=ofertas.sort(function (a, b) {
        if (a.course.name > b.course.name) {
          return 1;
        }
        if (a.course.name < b.course.name) {
          return -1;
        }        
        return 0;
      })
    let universidadeDif=[]
    let universidades=ofertasOrdenadas.map(oferta=>oferta.university.name)
    universidades.map(universidade=>{
        if(universidadeDif.indexOf(universidade)===-1){
            universidadeDif.push(universidade)
        }
    })
    let [universidadeOp,setUniversidadeOp]=useState(universidadeDif.sort()[0])         
    //let [progressoClick, setProgressoClick]=useState(true)
    let [progressoBotao,setProgressoBotao]=useState(document.querySelector('.progressoBotao'))       
    function fecharModal(){
       props.fechar()           
    }
    useEffect(() => {
        //setProgressoBotao((state) => progressoClick?document.querySelector('.progressoBotao').style.marginLeft : document.querySelector('.progressoBotao').style.marginLeft='calc(+5px)');
        //setProgressoBotao((state) => progressoClick?document.querySelector('.progressoBotao').style.transform='translateX(5px)' : document.querySelector('.progressoBotao').style.transform='translateX(5px)');
        
    },[progressoBotao]);
    let[contador,setContador]=useState(0)
    function clicarProgressoBotao(){        
        //setProgressoClick(state => !state)
        /*document.addEventListener('mouseEvent.clientX', function(ev){     
            console.log("ok")
        },false);*/
        if(contador<20)
        {
            setContador(contador+1)
            setProgressoBotao(document.querySelector('.progressoBotao').style.transform += 'translateX('+(13)+'px)')
            document.addEventListener('click', function(ev){     
                progressoBotao.style.transform += 'translateX('+(13)+'px)'; 
            },false); 
        }
        /*if(contador>=20) {            
            setProgressoBotao(document.querySelector('.progressoBotao').style.transform += 'translateX('+(-10)+'px)')
            document.addEventListener('click', function(ev){     
                progressoBotao.style.transform += 'translateX('+(-10)+'px)'; 
            },false); 
            
        }*/
          
    }
    function alterarCidade(){        
        setCidadesOp(document.querySelector('#cidade').value)            
    }
    function alterarCurso(){              
        setCursosOp(document.querySelector('#curso').value)            
    }
    function alterarUniversidade(){
        setUniversidadeOp(document.querySelector('#universidadeOp').value)        
        ofertas=ofertas.filter(oferta=>oferta.university.name===universidadeOp)       
    }

    return(
        <>
            <button className="fecharModal" type="submit" onClick={fecharModal}>X</button>
            <h1>Adicionar Bolsa</h1>
            <h2>Filtre e adicione as bolsas do seu interesse.</h2>
            <div className='cidadeCurso'>
                <div className="cidade">
                    <label htmlFor="cidade">SELECIONE SUA CIDADE</label>
                    <select id="cidade" onChange={alterarCidade}>                        
                        { 
                            cidadeDif.sort().map((cidade,index)=>
                                <option key={index} value={cidade}>{cidade}</option>
                            )
                        }
                        <option value=" "></option>
                    </select>
                </div>
                <div className="curso">
                    <label htmlFor="curso">SELECIONE O CURSO DE SUA PREFERÊNCIA</label>
                    <select id="curso" onChange={alterarCurso}>  
                        <option value=" "></option>                                                   
                        { 
                            cursosDif.sort().map((curso,index)=>
                                <option key={index} value={curso}>{curso}</option>
                            )
                        }                                            
                    </select>
                </div>                
            </div>
            <div className='modalidadePreço'>                
                <div className="modalidadeModal">
                    <p>COMO VOCÊ QUER ESTUDAR?</p>  
                    <div className="modalidadeModalOpcoes">
                        <input type="checkbox" className='modalidadeCheck' name="modalidadeCheck" value="presencial" id="modPresencial" onClick={()=>selecionarModalidade()}/>
                        <label htmlFor='presencial' value="presencial">Presencial                             
                        </label> 
                        <input type="checkbox" className='modalidadeCheck' name="modalidadeCheck" value="adistancia" id="modEad" onClick={()=>selecionarModalidade()}/>                   
                        <label htmlFor='adistancia' value="adistancia">A distância                             
                        </label>
                    </div>         
                </div>                
                <div className='preçoModal'>
                    <p>ATÉ QUANTO PODE PAGAR?</p>
                    <p>R${contador*500}</p>
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
                    <select name="universidadeOp" id="universidadeOp"  onChange={alterarUniversidade}>   
                        <option value="Nome da faculdade">Nome da faculdade</option>                     
                        {                          
                            universidadeDif.sort().map((universidade,index)=>
                                <option key={index} value={universidade}>{universidade}</option>
                            )
                        }      
                    </select>                    
                </div>    
            </div>
            <div className="divisao"/> 
            <div className="faculdadesModal">
                     
                {ofertasOrdenadas.map((oferta,index)=>{
                    return(
                        <>
                        <div className='faculdadeModal' key={index}>
                            <input type="checkbox" name="" id="" />
                            <img src={oferta.university.logo_url} alt="" />
                            <div className='cursoModal'>
                                <p>{oferta.course.name}</p>
                                <p>{oferta.course.level}</p>
                            </div>
                            <div className='bolsaModal'>
                                <div className='bolsaModalPorcentagem'>
                                    <p>Bolsa de </p>
                                    <p>{oferta.discount_percentage} %</p>
                                </div>
                                <p>R$ {oferta.price_with_discount} / mês</p>
                            </div>                        
                        </div>
                        <div className="divisao"/>
                    </>
                    )
                   
                    })
                }
            </div>    
    </>
    )
}