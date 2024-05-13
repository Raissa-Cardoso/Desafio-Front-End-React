import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    background: rgba(0, 0, 0, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background: ${({theme}) => theme.COLORS.FONT_WHITE};
    padding: 4rem 2rem;   
    color:  ${({theme}) => theme.COLORS.FONT_BLACK};
    height: 90%;
    width:50%;
    
    display: flex;
    flex-direction: column; 
    position: relative;    
      
    >header{        
        position: absolute;
        top: -3rem;
        right: 0;
        z-index: 2; 
        
        >svg{
            font-size: 3rem;
            color:${({theme}) => theme.COLORS.FONT_WHITE};            
        }
    }
    >form{
        display: flex;
        flex-direction: column;       
        >fieldset{
            border: none;
            padding: 1rem 2rem;
            legend{
                font-size: ${({theme}) => theme.FONTS.SMALLER};
                font-weight: bold;
            }
            legend + p{
                font-size: ${({theme}) => theme.FONTS.SMALLEST};                
            }
        }

        fieldset:nth-child(2){
            display: flex;
            align-items: center;
            justify-content: space-between;            
            .city, .course{
                display: flex;
                flex-direction: column;
                gap:1rem;
                >label{
                text-transform: uppercase;
                font-weight: bold;
                font-size: ${({theme}) => theme.FONTS.SMALLEST};
                }
                >select{
                    display: block;
                    height: 3rem;
                    width: 40rem;                    
                    border-radius: 0.5rem;
                    font-size: ${({theme}) => theme.FONTS.SMALLEST};
                }

            }
        }
        fieldset:nth-child(3){
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            .kind, .price{
                display: flex;
                flex-direction: column;
                gap:1rem;
                width: 40rem;  
                >p{
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: ${({theme}) => theme.FONTS.SMALLEST};
                }
                .kinds{
                   display:flex;
                   gap:1rem;
                   >label{
                    font-size: ${({theme}) => theme.FONTS.SMALLEST};
                   }
                }
                .prices{
                    display:flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
            }
        }
        fieldset:nth-child(4){
           
            .result{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: ${({theme}) => theme.FONTS.SMALLEST};
                font-weight: bold;
                padding-bottom: 1rem;
                border-bottom: solid 2px ${({theme}) => theme.COLORS.LINE};

                p:nth-child(2){
                    margin-left:40rem;
                    margin-right: 10rem;

                } 
                p:nth-child(3){  
                    color: ${({theme}) => theme.COLORS.SECONDARY_BLUE};
                    cursor: pointer;
                }
            }
            .offers{                
                overflow: auto;                
                display: flex;
                flex-direction: column;
                height: 45rem;                
                .offer{
                    padding: 2rem;
                    border-bottom: solid 2px ${({theme}) => theme.COLORS.LINE};
                    display: flex;
                    align-items: center;
                    gap:10rem;
                    
                    >img{
                        height: 4rem;
                        width: 12rem;
                        object-fit: contain;                        
                    }
                    .course{                        
                        width:28rem;
                        font-size: ${({theme}) => theme.FONTS.SMALLEST};
                        display: flex;
                        flex-direction: column;
                        gap: 2rem;
                        >p:nth-child(1){
                            color: ${({theme}) => theme.COLORS.SECONDARY_BLUE};
                            font-weight: bold;
                        }
                    }
                    .price{
                        display: flex;
                        flex-direction: column;
                        gap: 2rem;
                        >p:nth-child(1){                            
                            >span{
                                font-weight: bold;                                
                                color: ${({theme}) => theme.COLORS.GREEN};
                            }
                        }
                        >p:nth-child(2){                            
                            font-weight: bold;
                            color: ${({theme}) => theme.COLORS.GREEN};
                        }
                    }
                }
            }
        }
    }
    > footer{
        display: flex;
        gap:5rem;
        position: absolute;
        bottom:0;
        right: 0;
        margin-right: 4rem;
        margin-bottom: 2rem;
        button{
            font-size: ${({theme}) => theme.FONTS.SMALLEST};
            font-weight: bold;
        }
    }
   
`;