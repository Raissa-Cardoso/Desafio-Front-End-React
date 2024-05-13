import styled from 'styled-components'

export const Container = styled.div`
    width:100vw;
    height: 100vh;

    display:grid;
    grid-template-rows: 12rem 1fr 12rem;
    grid-template-areas: 
    'header'
    'main'
    'footer';

    color: ${({theme}) => theme.COLORS.FONT_BLACK};

    >main{
        grid-area: 'main';        
        padding: 2rem 15rem;

        display: flex;
        flex-direction: column;
        gap: 3rem;

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
        }

        .semester{
            border-radius: 0.8rem;
            border: solid 1px ${({theme}) => theme.COLORS.SECONDARY_BLUE};
            display:flex;
            align-self: flex-end;                       
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
        }
    }
`;