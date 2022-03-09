import { COLORS, SPACE, HEIGHT, WIDTH, TRANSITION } from "../../constant";
import Styled from "styled-components";
import { Link as LinkR, NavLink } from "react-router-dom";
import styled from "styled-components";

const headerBottomBorder = `
    &:after{
        position:absolute;
        content:'';
        display:block;
        left:0;bottom:-3.6rem;
        width:100%;
        height:1px;
        background:${COLORS.white};
        opacity:.2;
    }
`;

export const HeaderContainer = Styled.header`
    width:100%;
    position:fixed;
    top: 0;
    padding:${SPACE.navDeskContainerPadding};
    height:${(props) =>
      props["data-scrolled"] ? HEIGHT.navScrooledHeIght : HEIGHT.navHeight};
    display:flex;
    justify-content:center;
    background-color:${(props) =>
      props.bgColor ? "rgba(25, 25, 25,1.0)" : COLORS.black};  
    Z-index:9999
`;

export const HeaderWrapper = Styled.div`
   max-width:${WIDTH.desktop};
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    ${(props) => (props.borderBot ? headerBottomBorder : null)};
    @media (max-width:600px){
      justify-content: start;
    }
`;

export const HeaderLogo = Styled(LinkR)`
    min-width:14.2rem;
`;

export const LogoImg = Styled.img`
    width:100%;
    pointer-events:none;
    min-width:14.3rem;
    height:2.5rem
`;

export const Hamburger = styled.img`
  display: none;
  @media (max-width: 600px) {
    display: inline-block;
    margin-right: 4.8rem;
  }
`;
export const HeaderNav = Styled.nav`
    display:flex;
    justify-content:space-between;
    gap:3.2rem;
    @media (max-width:600px){
      display:none;
    }
`;

export const HeaderNavLink = Styled(NavLink)`
    text-transform:UpperCase;
    font-size:1.4rem;
    font-weight:700;
    color:${COLORS.white};
    cursor:pointer;
    background-image:linear-gradient(to right,${COLORS.brownDark}0%, ${
  COLORS.brownDark
}50%, ${COLORS.white}50% );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size:200% 100%;
    background-position:100%;
    transition: all ${TRANSITION.ease};
    :hover{
        transition: all ${TRANSITION.ease};
        background-position:0;
    }
    :focus-visible{
        transition: all ${TRANSITION.ease};
        background-position:0;
    }
    &.${(props) => props["data-active"]}{
        background-position: 0%;
    }
`;

export const CartWrapper = styled.button`
  position: relative;
  background: transparent;
  cursor: pointer;
  border: none;
  &:before {
    content: attr(data-amount);
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: -1.4rem;
    right: -1rem;
    border: none;
    border-radius: 100%;
    background-color: ${COLORS.brownDark};
    display: flex;
    opacity: ${(props) => (props["data-amount"] > 0 ? "flex" : 0)};
    align-items: center;
    justify-content: center;
    color: ${COLORS.white};
    font-size: 1.3rem;
    transition: opacity 0.3s ease;
  }
  @media (max-width: 600px) {
    margin-left: auto;
  }
`;

export const CartIcon = styled.img`
  width: 2.3rem;
  height: 2rem;
`;

export const MobileNavWrapper = styled.div`
  position: fixed;
  display: ${(props) => (props["data-open"] ? "block" : "flex")};
  top: ${(props) => (props["data-scrolled"] ? "6rem" : "10rem")};
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${COLORS.white};
  transform: ${(props) =>
    props["data-open"] ? "translateY(0%)" : "translateY(-150%)"};
  transition: all ${TRANSITION.ease};
  overflow-y: auto;
`;
