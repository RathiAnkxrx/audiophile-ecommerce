import styled from "styled-components";
import { COLORS, FONT } from "./constant";
import arrow from "./assets/shared/desktop/icon-arrow-right.svg";
import { Link as LinkR } from "react-router-dom";
export const GLobalBtnBrown = styled(LinkR)`
  width: ${(props) => (props.width ? "100%" : "16rem")};
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  border: none;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  color: ${COLORS.white};
  padding: 1.6rem;
  background-image: linear-gradient(
    to bottom,
    ${COLORS.brownLight}0%,
    ${COLORS.brownLight}50%,
    ${COLORS.brownDark}50%
  );
  background-size: 100% 200%;
  background-position: 100% 100%;
  transition: all 0.3s ease-in;
  &:hover {
    background-position: 100% 0%;
  }
`;

export const GlobalBtnArrow = styled.span`
  color: ${COLORS.black};
  opacity: 0.4;
  ${FONT.subtitle};
  position: relative;
  &:after {
    content: url(${arrow});
    position: absolute;
    top: 0.1rem;
    right: -1rem;
    opacity: 1;
    color: ${COLORS.brownDark};
  }
  &:hover {
    color: ${COLORS.brownDark};
    opacity: 1;
  }
`;

export const GLobalBtnBlack = styled(LinkR)`
  width: 16rem;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  color: ${COLORS.white};
  padding: 1.6rem;
  background-image: linear-gradient(
    to bottom,
    ${COLORS.blackStupid2}0%,
    ${COLORS.blackStupid2}50%,
    ${COLORS.black}50%
  );
  background-size: 100% 200%;
  background-position: 100% 100%;
  transition: all 0.3s ease-in;
  &:hover {
    background-position: 100% 0%;
  }
`;

export const GLobalBtnWhite = styled(LinkR)`
  width: 16rem;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  border: 1px solid ${COLORS.black};
  cursor: pointer;
  text-transform: uppercase;
  color: ${COLORS.black};
  padding: 1.6rem;
  background-image: linear-gradient(
    to bottom,
    ${COLORS.black} 0%,
    ${COLORS.black} 50%,
    transparent 50%
  );
  background-size: 100% 200%;
  background-position: 100% 100%;
  transition: all 0.3s ease-in;
  &:hover {
    background-position: 100% 0%;
    color: ${COLORS.white};
  }
`;

export const BtnBlack = styled(LinkR)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.8rem;
  background: ${COLORS.black};
  border: none;
  cursor: pointer;
  color: ${COLORS.white};
  text-transform: uppercase;
  font-size: 1.6rem;
`;
