import { Link as LinkR, NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS, WIDTH } from "../../constant";

export const FooterContainer = styled.section`
  width: 100%;
  background: ${COLORS.blackStupid};
  min-height: 38rem;
`;

export const FooterWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  width: 100%;
  padding: 8rem 2.4rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const FooterAbout = styled.p`
  max-width: 50%;
  width: 100%;
  color: ${COLORS.white};
  opacity: 0.4;
  margin-bottom: 3.2rem;
  @media (max-width: 600px) {
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const FooterDesc = styled.p``;

export const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }
`;

export const FooternavLinks = styled.nav`
  display: flex;
  gap: 3.4rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
`;

export const FooterLink = styled(NavLink)`
  color: ${COLORS.white};
  text-transform: uppercase;
  &.${(props) => props["data-active"]} {
    color: ${COLORS.brownDark};
  }
  &:hover {
    color: ${COLORS.brownDark};
  }
`;
export const FooterLogo = styled(LinkR)`
  width: 14.3rem;
  height: 2.5rem;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const FooterEnd = styled.div`
  position: relative;
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const FooterSign = styled.div`
  color: ${COLORS.white};
  @media (max-width: 600px) {
    margin-bottom: 1.8rem;
  }
`;

export const FooterIcons = styled.div`
  position: absolute;
  top: -3.4rem;
  right: 0;
  display: flex;
  gap: 1.8rem;
  @media (max-width: 600px) {
    position: relative;
    top: 0;
    justify-content: center;
  }
`;

export const FooterIcon = styled(LinkR)`
  color: ${COLORS.white};
  width: 2.7rem;
  &:hover {
    color: ${COLORS.brownDark};
  }
`;
