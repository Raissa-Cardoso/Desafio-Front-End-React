import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
    grid-area: 'footer';
    height: 100%; 
    width: 100vw;
       
    color: ${({theme}) => theme.COLORS.FONT_WHITE};
    font-size: ${({theme}) => theme.FONTS.SMALLEST};
    font-weight: bold;

    >main{
        background-color: ${({theme}) => theme.COLORS.SECONDARY_BLUE};
        height:55%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .tel, .chat, .mail, .info{
            display: flex;
            flex-direction: row;
            gap: 1rem;
            align-items: center;

            >div{
                display: flex;
                flex-direction: column;
            }
            >svg{
                font-size: 3rem;
            }

            @media (max-width: ${DEVICE_BREAKPOINTS.LG}){ 
                span{
                    display: none;
                }
            }
        }
    }

    >footer{
        background-color: ${({theme}) => theme.COLORS.PRIMARY_BLUE};
        height: 45%;
        display: flex;
        align-items: center;
        justify-content: center;        
        >p {
            display: flex;
            gap: 0.5rem;
            font-weight: normal;            
            svg{
                font-size: 2rem;            
                align-self: center;
                justify-self: center;
            }
        }
        
    }
`;