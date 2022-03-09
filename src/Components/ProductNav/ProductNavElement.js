import Styled from "styled-components";
import { COLORS, DEVICE, WIDTH } from "../../constant";
import { Link as LinkR } from "react-router-dom";
export const ProductNavConatiner = Styled.section`
    margin: 20rem 0 16.8rem;
    padding: 0 2.4rem;
    width: 100%;
    @media (max-width:600px){
        margin: 10rem 0; 
    }
`;

export const ProductNavWrapper = Styled.div`
    max-width:${WIDTH.desktop};
    margin: 0 auto;
    display: flex;
    justify-content:space-between;
    min-height:20.4rem;
    gap:2.4rem;
    @media (max-width:600px){
        flex-direction:column;
        gap:9.6rem;
    }
`;
export const ProductNavLinks = Styled(LinkR)`
    display: flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    background: ${COLORS.grayDark};
    width:100%;
    padding-bottom:2.4rem;
    border-radius:8px;
    position:relative;
    &:before{
        content:'';
        position:absolute;
        width: 100%;
        min-height:25rem;
        background-image:url(${(props) => props["data-product-image"]});
        background-size:64%;
        background-position:center;
        background-repeat:no-repeat;
        top:-9rem;
    }
    @media (max-width:600px){
        &:before{
            width:20rem;
            background-size:100%;
        }
        height:20rem;
    }
`;

export const ProductNavTitle = Styled.span`
    font-size:1.8rem;
    text-transform:uppercase;
    color:${COLORS.black};
    font-weight:700;
    letter-spacing:0.1rem;
    margin-bottom:0.5rem;
`;
