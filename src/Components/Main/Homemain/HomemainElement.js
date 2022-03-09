import Styled from "styled-components";
import { COLORS, WIDTH, FONT } from "../../../constant";
import speakerBg from "../../../assets/home/desktop/pattern-circles.svg";
import speakerBgSM from "../../../assets/home/mobile/pattern-circles.svg";
import speakerZX7ImgMD from "../../../assets/home/tablet/image-speaker-zx7.jpg";
import speakerZX7ImgSM from "../../../assets/home/mobile/image-speaker-zx7.jpg";
import styled from "styled-components";
export const MainConatiner = Styled.section`
    padding: 0 2.4rem;
`;

export const MainWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    gap:5vw;
`;

export const MainSpekaerWrapper = Styled.div`
    width:100%;
    min-height:56rem;
    display:flex;
    padding: 9.5rem;
    background:${COLORS.brownDark};
    background-image:url(${speakerBg});
    background-repeat:no-repeat;
    background-size:84%;
    background-position: -100% 10%;
    border-radius:.8rem;
    position:relative;
    overflow:hidden;
    justify-content:flex-end;
    align-items:center;
    z-index:1;
    @media (max-width:1100px){
        padding: 9.5rem 3.2rem;
        gap:2.4rem;
       
    }
    @media (max-width:600px){
        width:100%;
        flex-direction:column;
        padding: 6.2rem 3.2rem;
        gap:4.8rem;
        background-image:url(${speakerBgSM});
        background-position:center -50% ;
    }
`;

export const MainSpeakerImg = Styled.span`
   max-width:38rem;
   width:100%;
   height:100%;
   content:'';
   position:absolute;
   left:9.5rem;
   bottom:-11rem;
   background-image:url(${($props) => $props.imgsrc});
   background-size:100%;
   background-repeat:no-repeat;
   z-index:2;
   @media (max-width:1100px){
       background-size:90%;
       left:3.2rem;
   }
   @media (max-width:900px){
       background-size:80%;
   }
   @media(max-width:600px){
       position:relative;
        width:20rem;
        height:25rem;
        background-size:100%;
        background-position:center;
        left:0;
        right:0;
        top:0;
   }
    `;

export const MainSpeakerDesc = Styled.div`
    max-width:34.8rem;
    justify-self:flex-end;   
    display:flex;
    flex-direction:column;
    justify-content:center; 
    @media (max-width:900px){
        max-width:27rem;
    }
    @media (max-width:600px){
        max-width:50%;
        text-align:center;
        align-items:center;
    }
`;

export const MainSpeakerH1 = Styled.h1`
    color:${COLORS.white};
    ${FONT.mainProductTitle};    
    margin-bottom:3.2rem;
    
`;

export const MainSpeakerAbout = Styled.p`
    opacity:.8;
    font-weight:200;
    font-size:1.5rem;
    color:${COLORS.white};
    margin-bottom:6.5rem;
    @media (max-width:600px){
        margin-bottom:3.2rem;
    }
`;

export const MainSpekaerSecWrapper = styled.div`
  padding: 9.5rem;
  background-image: url(${(props) => props.imgsrc});
  max-width: 100%;
  min-height: 32rem;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.8rem;
  margin-top: 4.8rem;
  @media (max-width: 1100px) {
    background-image: url(${speakerZX7ImgMD});
    background-position: center;
  }
  @media (max-width: 600px) {
    background-image: url(${speakerZX7ImgSM});
    background-position: center;
    margin: 0 auto;
    width: 100%;
  }
`;

export const MainH3 = styled.h3`
  margin-bottom: 3.4rem;
`;
export const MainSpeakerSecDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainEarphoneWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  min-height: 32rem;
  gap: 3vw;
  margin-top: 10rem;
  @media (max-width: 900px) {
    grid-template-columns: 1.25fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const MainEarphoneimg = Styled.img`
    width:100%;
    height:100%;
    border-radius:0.8rem;
    content:'';
  @media (max-width:600px){
      height:35rem;
  }
`;

export const MainEarphoneDec = Styled.div`
    border-radius:0.8rem;
    height:100%;
    padding:8.5rem;
    background:${COLORS.grayDark};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    @media (max-width:900px){
        padding: 6.2rem 3.2rem;
    }
`;
