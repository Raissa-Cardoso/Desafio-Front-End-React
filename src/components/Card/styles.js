import styled from 'styled-components'

export const Container = styled.div`
    height: 40rem;
    width:30rem;
    box-shadow: 0 3px 8px rgba(0, 0, 0, .24);;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.COLORS.FONT_WHITE};
    color: ${({theme}) => theme.COLORS.FONT_BLACK};

    .initial{
        display:flex;
        flex-direction: column;
        align-items: center;

        padding: 8rem 4rem;
        gap: 3rem;
        >h1{
            font-size: ${({theme}) => theme.FONTS.SMALLER};
        }
        >h2{
            font-size: ${({theme}) => theme.FONTS.SMALLEST};
            font-weight: normal;
            text-align: center;
        }
        >svg{
            color: ${({theme}) => theme.COLORS.PRIMARY_BLUE};
            font-size: 7rem;
            font-weight: bold;
            cursor: pointer;
        }
    }

    .normal{
        display:flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
        >img{
            height: 5rem;
            width: 12rem;
            object-fit: fill;
        }
        .name, .kindShift, .price{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            justify-content: center;
        }
        .name{
            >p:nth-child(1){
                font-size: ${({theme}) => theme.FONTS.SMALLEST2};
                font-weight:bold;
                text-transform: uppercase;
            }
            >p:nth-child(2){
                font-size: ${({theme}) => theme.FONTS.SMALLER};
                font-weight:bold;
                color: ${({theme}) => theme.COLORS.SECONDARY_BLUE};
            }
            >p:nth-child(3){
                font-size: ${({theme}) => theme.FONTS.SMALLEST};
                font-weight: bold;
                display:flex;
                align-items: flex-end;
                justify-content: center;
                gap:1rem;
                >span{
                    display: flex;
                    gap:0.5rem;
                    >svg{
                        font-size:2.5rem;
                        color: ${({theme}) => theme.COLORS.PRIMARY_YELLOW};
                    }
                }
            }
        }
        .kindShift{
            border-top: solid 2px ${({theme}) => theme.COLORS.LINE} ;
            border-bottom: solid 2px ${({theme}) => theme.COLORS.LINE};
            padding: 1rem;
            > p:nth-child(1){
                font-size: ${({theme}) => theme.FONTS.SMALLEST};                
                font-weight:bold;
                text-transform: uppercase;
            }
            > p:nth-child(2){
                font-size: ${({theme}) => theme.FONTS.SMALLEST};
            }
        }
        .price{
            > p:nth-child(1){                
                font-weight:bold;
                font-size: ${({theme}) => theme.FONTS.SMALLEST};
            }
            >span{
                font-size: ${({theme}) => theme.FONTS.SMALLEST2};
                text-decoration-line: line-through;
            }
            > p:nth-child(3){ 
                font-weight:bold;
                font-size: ${({theme}) => theme.FONTS.SMALLER};
                color: ${({theme}) => theme.COLORS.GREEN};
                >span{
                    color: ${({theme}) => theme.COLORS.FONT_BLACK};
                    font-weight: normal;
                    font-size: ${({theme}) => theme.FONTS.SMALLEST};
                }
            }
        }
        .buttons{
            display: flex;
            align-items: center;
            gap: 2rem;

        }
    }
    
    

`;