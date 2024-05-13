import {Container} from './styles';
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { CiMail } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

export function Footer(){
    return(
        <Container>
            <main>
                <div className="tel">
                    <FaWhatsapp/>
                    <div>
                        <span>0800 123 2222</span>
                        <span>Seg - Sex 8h-22h</span>
                    </div>
                </div>
                <div className="chat">
                    <TiMessages />
                    <div>
                        <span>Chat ao vivo</span>
                        <span>Seg - Sex 8h-22h</span>
                    </div>
                </div>
                <div className="mail">
                    <CiMail />
                    <div>
                        <span>Mande um e-mail</span>
                        <span>Respondemos rapidinho</span>
                    </div>
                </div>
                <div className="info">
                    <IoInformationCircleOutline/>
                    <div>
                        <span>Central de ajuda</span>
                        <span>Encontre todas as respostas</span>
                    </div>
                </div>
            </main>
            <footer>
                <p>Feito com <CiHeart /> pela Quero Educação</p>
            </footer>
        </Container>
    )
}