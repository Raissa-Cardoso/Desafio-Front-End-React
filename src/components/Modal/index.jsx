import React, { useState, useEffect } from 'react';
import { Overlay, ModalContent } from './styles';
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '../Button';
import { data } from '../../utils/data';

export function Modal({ isOpen, onClose, onSetOffers, onClick }) {
    if (!isOpen) return null;

    const cities = [...new Set(data.map(offer => offer.campus.city))].sort();
    const courses = [...new Set(data.map(offer => offer.course.name))].sort();
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [presencial, setPresencial] = useState(false);
    const [ead, setEad] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [filteredData, setFilteredData] = useState(data);
    const [matchedOffers, setMatchedOffers] = useState([]);
    const [checkedOffers, setCheckedOffers] = useState({});

    useEffect(() => {
        compareOffers();
    }, [filteredData]);

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        applyFilters(e.target.value, selectedCourse, presencial, ead, selectedPrice);
    };

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
        applyFilters(selectedCity, e.target.value, presencial, ead, selectedPrice);
    };

    const handlePresencialChange = (e) => {
        setPresencial(e.target.checked);
        applyFilters(selectedCity, selectedCourse, e.target.checked ? 'Presencial' : '', ead, selectedPrice);
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
        if (presencial && ead) {
            presencial = '';
            ead = '';
        }
        setSelectedCity(city);
        setSelectedCourse(course);
        setPresencial(presencial);
        setEad(ead);
        setSelectedPrice(price);

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

    const compareOffers = () => {
        const storedOffers = JSON.parse(localStorage.getItem('offerDataUpdated')) || [];
        const matched = data.filter(offer => {
            return storedOffers.some(storedOffer => 
                offer.university.name === storedOffer.universityName &&
                offer.course.name === storedOffer.courseName &&
                offer.price_with_discount === parseFloat(storedOffer.pricePerMonth)
            );
        });

        setMatchedOffers(matched);

        const checkedState = {};
        matched.forEach((offer) => {
            checkedState[`${offer.university.name}-${offer.course.name}-${offer.price_with_discount}`] = true;
        });
        setCheckedOffers(checkedState);
    };

    const handleCheckboxChange = (offerKey) => {
        setCheckedOffers(prevState => ({
            ...prevState,
            [offerKey]: !prevState[offerKey]
        }));
    };

    const handleAddBolsa = () => {
        const checkedOffersList = Object.keys(checkedOffers).filter(key => checkedOffers[key]);
        let offerDataUpdated = checkedOffersList.map(key => {
            const [universityName, courseName, pricePerMonth] = key.split('-');
            return { universityName, courseName, pricePerMonth };
        });
       
        localStorage.setItem('offerDataUpdated', JSON.stringify(offerDataUpdated));
        
        onSetOffers(offerDataUpdated);
        onClose();
    };
    
    const handleCancel = () => {
        setSelectedCity('');
        setSelectedCourse('');
        setPresencial(false);
        setEad(false);
        setSelectedPrice(0);
        setFilteredData(data);
        setCheckedOffers({});
        localStorage.removeItem('offerDataUpdated');
    };
    
    const isAnyOfferChecked = Object.values(checkedOffers).some(checked => checked);

    return (
        <Overlay onClick={onClose}>
            <ModalContent onClick={onClick}>
                <header><MdClose onClick={onClose} /></header>
                <form id="myForm">
                    <fieldset>
                        <legend>Adicionar Bolsa</legend>
                        <p>Filtre e adicione as bolsas do seu interesse</p>
                    </fieldset>
                    <fieldset>
                        <div className='city'>
                            <label htmlFor="citySelect">Selecione sua cidade</label>
                            <select id="citySelect" value={selectedCity} onChange={handleCityChange}>
                                <option></option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        <div className='course'>
                            <label htmlFor="courseSelect">Selecione o curso de sua preferência</label>
                            <select id="courseSelect" value={selectedCourse} onChange={handleCourseChange}>
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
                                <input type="checkbox" id='presencial' onChange={handlePresencialChange} />
                                <label htmlFor="presencial">Presencial</label>
                                <input type="checkbox" id='ead' onChange={handleEadChange} />
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
                            {filteredData.map((offer, index) => {
                                const offerKey = `${offer.university.name}-${offer.course.name}-${offer.price_with_discount}`;
                                return (
                                    <div className="offer" key={index}>
                                        <input type="checkbox" className='checkOffer' id={`checkbox-${index}`}
                                            checked={checkedOffers[offerKey] || false}
                                            onChange={() => handleCheckboxChange(offerKey)}
                                        />
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
                                );
                            })}
                        </div>
                    </fieldset>
                </form>
                <footer>
                    <Button form='myForm' type="delete" title="Cancelar" onClick={handleCancel}/>
                    <Button form='myForm' type={isAnyOfferChecked ? "normal" : "disabled"} title="Adicionar bolsa(s)" onClick={handleAddBolsa} />
                </footer>
            </ModalContent>
        </Overlay>
    );
}
