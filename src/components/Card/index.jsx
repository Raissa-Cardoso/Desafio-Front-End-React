import React from 'react';
import { Container } from './styles';
import { CiCirclePlus } from "react-icons/ci";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import { Button } from '../Button';

export function Card({ initial, index, logo, university, course, score, kind, shift, start_date, full_price, price_with_discount, enabled, clickModal, onDelete }) {
    const fullStars = Math.floor(score); 
    const halfStars = Math.ceil(score - fullStars); 
    const emptyStars = 5 - fullStars - halfStars; 
   
    const stars = [];  
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }
      
    for (let i = 0; i < halfStars; i++) {
      stars.push(<FaStarHalfAlt key={`half-${i}`} />);
    }
  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} />);
    }

    const clickCard = () => {
        clickModal(true);
    };

    const handleDeleteClick = () => {      
        onDelete(university, course, price_with_discount);
    };

    return(
        <Container>
            {initial ? (
                <div className='initial'>
                    <CiCirclePlus onClick={clickCard}/>
                    <h1>Adicionar bolsa</h1>
                    <h2>Clique para adicionar bolsas de cursos do seu interesse</h2>
                </div>
            ) : (
                <div className='normal'>
                    <img src={logo} alt={`Logo da ${university}`}/>
                    <div className='name'>
                        <p>{university}</p>
                        <p>{course}</p>
                        <p>{score}{stars.map((star,index)=>(<span key={index}>{star}</span>))}</p>
                    </div>                   
                    <div className='kindShift'>
                        <p>{kind} * <span>{shift}</span></p>
                        <p>Início das aulas em: {start_date}</p>
                    </div>
                    <div className="price">
                        <p>Mensalidade com Quero Bolsa:</p>
                        <span>R${full_price}</span>
                        <p>R${price_with_discount} <span>/mês</span></p>
                    </div>
                    <div className="buttons">
                        <Button type='delete' title='Excluir' onClick={handleDeleteClick}/>
                        {enabled ? (
                            <Button type='normal' title='Ver oferta'/>
                        ) : (
                            <Button type='disabled' title='Indisponível'/>
                        )}
                    </div>                                      
                </div>
            )}
        </Container>
    );
}
