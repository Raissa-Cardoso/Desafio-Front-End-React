import React, { useState } from 'react';
import {Container} from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import {data} from '../../utils/data';
import { Modal } from '../../components/Modal';

export function Home(){
    const [modalOpen, setModalOpen] = useState(false);
    const [offers, setOffers]=useState([])
    const[offersFiltered, setOffersFiltered]=useState([])

    const clickModal=(open)=>{
        setModalOpen(open)                
    }
    const handleCloseModal = () => {
        setModalOpen(false)
    }

    const handlePageClick = () => {
        /*if (modalOpen) {
          handleCloseModal();
        }*/
    };

    const onSetOffers = (offers) => {
        setOffers(offers);
        let filteredOffers = [];
        offers.forEach(offer => {
            let filtered = data.filter(offerFilter => {
                return offerFilter.university.name === offer.universityName &&
                       offerFilter.course.name === offer.courseName &&
                       offerFilter.price_with_discount === parseFloat(offer.pricePerMonth);
            });
            filteredOffers = [...filteredOffers, ...filtered];
        });
        setOffersFiltered(filteredOffers);
    };  

    return(
        <Container onClick={handlePageClick}>
            <Header/>
            <main>
                <p>Home / Minha conta / <span>Bolsas favoritas</span></p>
                <h1>Bolsas Favoritas</h1>
                <h2>Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.</h2>
                <div className="semester">
                    <button className='actived'>Todos os semestres</button>
                    <button>2º semestre de 2019</button>
                    <button>1º semestre de 2020</button>
                </div>
                <div className="cards">
                    <Card initial clickModal={clickModal}/>
                    {offersFiltered.map((offer,index)=>(
                        <Card 
                            key={index}                             
                            logo={offer.university.logo_url} 
                            university={offer.university.name} 
                            course={offer.course.name}
                            score={offer.university.score}
                            kind={offer.course.kind} 
                            shift={offer.course.shift}
                            start_date={offer.start_date}
                            full_price={offer.full_price} 
                            price_with_discount={offer.price_with_discount}
                            enabled={offer.enabled}
                        />
                    ))}                   
                </div>
            </main>
            <Footer/>
            <Modal isOpen={modalOpen} onClose={handleCloseModal} onSetOffers={onSetOffers}/>
        </Container>
    )
}