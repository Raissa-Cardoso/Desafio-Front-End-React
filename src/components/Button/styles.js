import styled from 'styled-components';

export const Container=styled.button`
    border:none;

    div.delete{
        color: ${({theme}) => theme.COLORS.SECONDARY_BLUE};
        border: solid 1px ${({theme}) => theme.COLORS.SECONDARY_BLUE};
        border-radius: 0.5rem; 
        height:4rem; 
        padding:1rem 2rem;
    }
    .normal{
        background-color: ${({theme}) => theme.COLORS.PRIMARY_YELLOW};
        border: solid 1px ${({theme}) => theme.COLORS.SECONDARY_YELLOW};
        border-radius: 0.5rem;
        height:4rem; 
        padding:1rem 2rem;
    }
    .disabled{
        background-color: ${({theme}) => theme.COLORS.DESACTIVED};
        border: solid 1px ${({theme}) => theme.COLORS.DESACTIVED};
        color: ${({theme}) => theme.COLORS.FONT_DESACTIVED};
        border-radius: 0.5rem;
        height:4rem; 
        padding:1rem 2rem;
        cursor: default;
    }
    
`;