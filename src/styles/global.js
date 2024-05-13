import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
    color: ${({ theme }) => theme.COLORS.FONT_BLACK};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button, textarea {
    font-family: "Open Sans", sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;    
  }

  button,a {
    cursor: pointer;    
  }

  button:hover,a:hover, svg:hover {
    filter: brightness(0.9);    
  }  
 
  &::-webkit-scrollbar {
    width: .8rem;    
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: .8rem;
  }

  &::-webkit-scrollbar-track {
    background-color: none;
  }


  &::-webkit-scrollbar-thumb:hover {
    background-color: transparent;
  }
`