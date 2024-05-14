import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
    grid-area:'header';   
    height: 100%; 
    width: 100vw;   

    >main{
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: ${({theme}) => theme.COLORS.SECONDARY_BLUE};
        
        height: 70%;
        
        .info, .contact, .profile{
           display: flex;
           align-items: center;
           gap: 1rem;
           font-size: ${({theme}) => theme.FONTS.SMALLER};
           font-weight: bold;
           >svg{
                font-size: 4rem;
           }
           >span:nth-child(3){
                display:none;
           }          
        }
        @media (max-width: ${DEVICE_BREAKPOINTS.LG}){ 
            .info, .profile{
                flex-direction: column;
                gap: 0rem;
                span:nth-child(2){
                    display:none;
                }
                & span:nth-child(3){
                    display:block;
                }
                span:nth-child(1){
                    display: none;
                }
            
            }
        }
        .contact{
            >div{
                display:flex;
                flex-direction: column;
            }
            >svg{
                color: ${({theme}) => theme.COLORS.GREEN};
            }
            @media (max-width: ${DEVICE_BREAKPOINTS.LG}){                
                display:none;
            }
        }

        >img{
            width:10rem;
            height:4rem;            
        }
    }
    >footer{
        height: 30%;
        background-color:  ${({theme}) => theme.COLORS.PRIMARY_BLUE};
        color: ${({theme}) => theme.COLORS.FONT_WHITE};
        padding-left: 15rem;
        font-weight: bold;
        font-size: ${({theme}) => theme.FONTS.SMALLEST};

        display: flex;
        gap: 2rem;
        align-items: center; 
        
        @media (max-width: ${DEVICE_BREAKPOINTS.LG}){   
            padding-left: 2rem;
            
        }

        >span{
            background-color:  ${({theme}) => theme.COLORS.SECONDARY_BLUE};  
            height:100%;
            align-content: center;
            padding: 1rem;
            font-weight: normal;
        }
    }   
`;
