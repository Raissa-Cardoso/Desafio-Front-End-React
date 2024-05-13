import styled from 'styled-components'

export const Container = styled.footer`
    grid-area: 'footer';
    height: 100%;    
    
    color: ${({theme}) => theme.COLORS.FONT_WHITE};
    font-size: ${({theme}) => theme.FONTS.SMALLEST};
    font-weight: bold;

    >main{
        background-color: ${({theme}) => theme.COLORS.SECONDARY_BLUE};
        height:60%;
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
                font-size: 4rem;
            }
        }
    }

    >footer{
        background-color: ${({theme}) => theme.COLORS.PRIMARY_BLUE};
        height: 40%;
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