import Styled from "styled-components";
import { COLORS, DEVICE, WIDTH } from "../../../constant";
import HeroDsk from "../../../assets/home/desktop/image-hero.jpg";
import HeroTab from "../../../assets/home/tablet/image-header.jpg";
import { ANIMATIONS } from "../../../animations";
export const HeroContainer = Styled.section`
    justify-content:center;
    background:${COLORS.blackStupid};
    margin-top:3.9rem;
    padding:0 2.4rem;
    height: 72.8rem;
    display:flex;
    justify-content:center;
    width:100%;
`;

export const HeroWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    width: 100%;
    display:flex;
    z-index:2;
    position:relative;
    margin:0 auto;
    `;

export const HeroDesc = Styled.div`
    display:flex;
    max-width:100%;
    flex-direction:column;
    justify-content:center;
    color:${COLORS.white};
    max-width: 42rem;
    z-index:2;
    position:relative;
    @media (max-width:900px){
        max-width:min(50rem,80%);
        margin: 0 auto;
        align-items:center;
        justify-content:center;
        text-align:center;
    }
`;

export const HeroTitle = Styled.p`
    text-transform:uppercase;   
    color:rgba(255,255,255,0.5);
    `;
export const HeroProduct = Styled.h1`
    margin:2.4rem 0;
    
`;
export const HeroAbout = Styled.p`
    color:rgba(255,255,255,0.5);
    margin-bottom:3.4rem;

`;

export const HeroImg = Styled.div`
    width: 100%;
    min-height:63rem;
    z-index:1;
    background-image:url(${HeroDsk});
    background-size:120%;
    background-position:48%;
    background-repeat: no-repeat;
    position: absolute;
    overflow: hidden;
    animation:${ANIMATIONS.flashy} 4.2s ease-in-out;
    animation-delay:1.2s;
    @media  screen  and ${DEVICE.md}{
        background-image:url(${HeroTab});
        background-size:90%;
        background-position:center center;
    }
    @media (max-width:600px){
        background-size:110%;
    }
`;
