import React, { useState } from 'react';
import { Overlay, ModalContent } from './styles';

import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import { Button } from '../Button';
import {data} from '../../utils/data';

export function Modal({isOpen, onClose}){
    if (!isOpen) return null;

    const cities = [...new Set(data.map(offer => offer.campus.city))].sort();    
    const courses = [...new Set(data.map(offer => offer.course.name))].sort();
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [presencial, setPresencial] = useState(false);
    const [ead, setEad] = useState(false); 
    const [selectedPrice, setSelectedPrice] = useState(0);
    let [filteredData,setFilteredData]=useState(data)

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        applyFilters(e.target.value, selectedCourse, presencial, ead, SelectedPrice);
    };

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
        applyFilters(selectedCity, e.target.value, presencial, ead, SelectedPrice);
    };

    const handlePresencialChange = (e) => {
        setPresencial(e.target.checked);
        applyFilters(selectedCity, selectedCourse, e.target.checked ? 'Presencial' : '', ead, setEadelectedPrice);
    };

    const handleEadChange = (e) => {
        setEad(e.target.checked);
        applyFilters(selectedCity, selectedCourse, presencial, e.target.checked ? 'EaD' : '', selectedPrice);
    };

    const handlePriceChange = (e) => {
        setSelectedPrice(e.target.value);
        applyFilters(selectedCity, selectedCourse, presencial, ead, e.target.value);
    };    
    
    const applyFilters = (city, course, presencial, ead, price) => {
        if(presencial && ead){
            presencial=''
            ead=''
        }
        setSelectedCity(city);
        setSelectedCourse(course); 
        setPresencial(presencial);
        setEad(ead);  
        setSelectedPrice(price)        

        let filtered = data.filter(offer => {
            if (city && offer.campus.city !== city) return false;
            if (course && offer.course.name !== course) return false;
            if (presencial && offer.course.kind !== 'Presencial') return false;
            if (ead && offer.course.kind !== 'EaD') return false;
            if (price && offer.price_with_discount > price) return false;
            return true;
        });
        setFilteredData(filtered);
    };

    const handleAddBolsa = () => {
        console.log("ok")
        /*const checkedOffers = document.querySelectorAll('.checkOffer:checked');
        console.log(checkedOffers)
        checkedOffers.forEach(offer => {
            console.log(offer.parentElement.querySelector('.course p').innerText);
        });*/
    };
    

    return(
        <Overlay >        
            <ModalContent> 
                <header><MdClose onClick={onClose}/></header>                          
                <form id="myForm">
                    <fieldset>
                        <legend>Adicionar Bolsa</legend>
                        <p>Filtre e adicione as bolsas do seu interesse</p>
                    </fieldset>                   
                    <fieldset>
                        <div className='city'>
                            <label htmlFor="citySelect">Selecione sua cidade</label>
                            <select id="citySelect" value={selectedCity} 
                               onChange={handleCityChange}>
                                <option></option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>   
                        </div>
                        <div className='course'>
                            <label htmlFor="courseSelect">Selecione o curso de sua preferência</label>
                            <select id="courseSelect" value={selectedCourse} 
                                onChange={handleCourseChange}>
                                <option></option>
                                {courses.map((course, index) => (
                                    <option key={index} value={course}>{course}</option>
                                ))}
                            </select>   
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className='kind'>
                            <p>Como você quer estudar?</p>
                            <div className='kinds'>
                                <input type="checkbox" id='presencial' onChange={handlePresencialChange}/>   
                                <label htmlFor="presencial">Presencial</label>
                                <input type="checkbox" id='ead' onChange={handleEadChange}/>   
                                <label htmlFor="ead">A distância</label>
                            </div>
                        </div>
                        <div className='price'>
                            <p>Até quando pode pagar?</p>
                            <div className='prices'>                                
                                <label htmlFor="rangePrice">R$<span>{selectedPrice}</span></label>                                 
                                <input id="rangePrice" type='range' min={0} max={10000} onChange={handlePriceChange}></input>
                            </div>  
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="result">
                            <p>Resultado:</p>
                            <p>Ordenar por</p>
                            <p>Nome da faculdade <IoIosArrowDown /></p>                        
                        </div>
                        <div className="offers">
                            {filteredData.map((offer,index)=>(
                                <div className="offer" key={index}>
                                    <input type="checkbox" className='checkOffer'/>
                                    <img src={offer.university.logo_url} alt={`Logo da ${offer.university.name}`} />
                                    <div className="course">
                                        <p>{offer.course.name}</p>
                                        <p>{offer.course.level}</p>
                                    </div>
                                    <div className="price">
                                        <p>Bolsa de <span>{offer.discount_percentage}%</span></p>
                                        <p>R$ {offer.price_with_discount}/ mês</p>
                                    </div>
                                </div>  
                            ))}                  
                        </div> 
                    </fieldset>                   
                </form>
                <footer>
                    <Button form="my-form" type="delete" title="Cancelar"/>
                    <Button form="my-form" type="normal" title="Adicionar bolsa(s)" onClick={handleAddBolsa}/>
                </footer>
            </ModalContent>
        </Overlay>
    )
}