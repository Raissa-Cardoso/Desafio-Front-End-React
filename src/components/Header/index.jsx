import {Container} from './styles';
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import logo from '../../assets/logo.jpg';

export function Header(){
    return(
        <Container>
            <main>
                <div className="info">
                    <IoInformationCircleOutline/>
                    <span>Como funciona</span>
                </div>
                <div className="contact">
                    <FaWhatsapp/>
                    <div>
                        <span>0800 123 2222</span>
                        <span>Envie mensagem ou ligue</span>
                    </div>
                </div>
                <img src={logo} alt='Logotigo Quero Bolsa'/>
                <div className="profile">
                    <span>Nome Sobrenome</span>
                    <CgProfile/>
                </div>
            </main>
            <footer>
                <p>Minha conta</p>
                <span>Bolsas favoritas</span>
            </footer>
        </Container>
    )
}