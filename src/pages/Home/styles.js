import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width:100%;
    height: 100vh;

    display:grid;
    grid-template-rows: 14% calc(100%-30%) 16%;
    grid-template-areas: 
    'header'
    'main'
    'footer';
    
    @media (max-width: ${DEVICE_BREAKPOINTS.XL}){ 
        grid-template-rows: 14% 1fr 15%;
    }

    color: ${({theme}) => theme.COLORS.FONT_BLACK};

    >main{
        grid-area: 'main';        
        padding: 2rem 15rem;

        display: flex;
        flex-direction: column;
        gap: 3rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}){ 
            padding: 2rem;                 
        }
        

        >p{
            font-size: ${({theme}) => theme.FONTS.SMALLEST};
            font-weight: bold;
            color: ${({theme}) => theme.COLORS.SECONDARY_BLUE};
            word-spacing: 0.5rem;
            >span{
                font-weight: normal;
                color: ${({theme}) => theme.COLORS.FONT_BLACK};
            }
        }

        >h1{
            font-size: ${({theme}) => theme.FONTS.MEDIUM};            
        }

        >h2{
            font-size: ${({theme}) => theme.FONTS.SMALLER};
            font-weight: normal;
            @media (max-width: ${DEVICE_BREAKPOINTS.MD}){                  
                text-align: justify;
                width:90vw;
                padding-right: 2rem;
            }
        }

        .semester{
            border-radius: 0.8rem;
            border: solid 1px ${({theme}) => theme.COLORS.SECONDARY_BLUE};
            display:flex;
            align-self: flex-end;
            @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
                flex-direction: column;
                align-self: flex-start;                
            }
                       
            >button{
                padding: 0.5rem 5rem;
                font-weight: bold;
                font-size: ${({theme}) => theme.FONTS.SMALLEST};
                color: ${({theme}) => theme.COLORS.SECONDARY_BLUE}; 
                border:none;  
                &:nth-child(2){
                    border-left:solid 1px ${({theme}) => theme.COLORS.SECONDARY_BLUE};
                    border-right:solid 1px ${({theme}) => theme.COLORS.SECONDARY_BLUE};
                }  
                &:nth-child(3){     
                    border-right:solid 1px ${({theme}) => theme.COLORS.SECONDARY_BLUE};
                    border-top-right-radius: 0.8rem;
                    border-bottom-right-radius: 0.8rem;
                }
                @media (max-width: ${DEVICE_BREAKPOINTS.MD}){                 
                    width:85vw;                    
                }          
            }

            .actived{
                color: ${({theme}) => theme.COLORS.FONT_WHITE};
                background-color:${({theme}) => theme.COLORS.SECONDARY_BLUE};
                border-top-left-radius: 0.8rem;
                border-bottom-left-radius: 0.8rem;
            }
        }
        .cards{
            display:flex;
            gap:2rem;
            flex-wrap: wrap;
            align-items: center;  
            //justify-content:center;

            @media (max-width: ${DEVICE_BREAKPOINTS.SMD}){
                flex-direction: column;                
            }
        }
    }
`;