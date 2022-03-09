import { createGlobalStyle } from "styled-components";
import { DEVICE } from "./constant";

export const GlobalStyle = createGlobalStyle`
*,
::before,
::after{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
    scroll-behavior:smooth;
    overflow-x:hidden;
    @media ${DEVICE.md}{
        font-size:56.25%;
    }
    @media ${DEVICE.sd}{
        font-size:50%;
    }
}
body{
    font-size: 1.6rem;
    overflow-x:hidden;
    position:relative;
    font-family:'MANROPE','arial';
    
}

a{
    text-decoration:none;
}
h1{
    font-size:5.6rem;
    line-height:5.8rem;
    letter-spacing:.2rem;
    text-transform: uppercase;
}
h2{
    font-size:4rem;
    line-height:4.4rem;
    letter-spacing:.15rem;
    text-transform: uppercase;
}
h3{
    font-size:2.8rem;
    line-height:3.8rem;
    letter-spacing:.2rem;
    text-transform: uppercase;
}

ul,li{
    list-style:none;
}

`;
