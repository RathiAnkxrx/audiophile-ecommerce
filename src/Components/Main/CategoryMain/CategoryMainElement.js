import styled from "styled-components";
import { COLORS, FONT, WIDTH } from "../../../constant";

export const CategoryMainConatiner = styled.section`
  margin: 12rem 0;
  padding: 2.4rem;
`;

export const CategoryMainWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  width: 100%;
  margin: 0 auto;
  display: flex;
  display: flex;
  flex-direction: column;
  gap: 5vw;
`;

export const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 48rem;
  gap: 5vw;
  flex-direction: ${(props) => (props["data-reversed"] ? "" : "row-reverse")};
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ProductImgWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.grayDark};
  overflow: hidden;
  border-radius: 0.8rem;
  @media (max-width: 600px) {
    max-height: 40rem;
  }
`;

export const ProductImg = styled.img`
  max-width: 120%;
  background-size: cover;
  @media (max-width: 600px) {
    max-width: 65%;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
`;

export const ProductTitle = styled.h2`
  margin: 3.4rem 0;
`;

export const ProductFeature = styled.p`
  text-transform-uppercase;
  color:${COLORS.brownLight};
  ${FONT.overline}
`;

export const ProductDetail = styled.p`
  font-weight: 200;
  margin-bottom: 6.5rem;
  opacity: 0.8;
  @media (max-width: 600px) {
    max-width: 80%;
    margin: 0 auto;
    margin-bottom: 6.5rem;
  }
`;
