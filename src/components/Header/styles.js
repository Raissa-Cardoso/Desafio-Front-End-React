import styled from 'styled-components'

export const Container = styled.header`
    grid-area:'header';   
    height: 100%; 
    >main{
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: ${({theme}) => theme.COLORS.SECONDARY_BLUE};
        
        height: 8rem;

        .info, .contact, .profile{
           display: flex;
           align-items: center;
           gap: 1rem;
           font-size: ${({theme}) => theme.FONTS.SMALLER};
           font-weight: bold;
           >svg{
                font-size: 4rem;
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
        height: 4rem;
        padding-left: 15rem;
        font-weight: bold;
        font-size: ${({theme}) => theme.FONTS.SMALLEST};

        display: flex;
        gap: 2rem;
        align-items: center;               

        >span{
            background-color:  ${({theme}) => theme.COLORS.SECONDARY_BLUE};  
            height:100%;
            align-content: center;
            padding: 2rem;
            font-weight: normal;
        }
    }   
`;
