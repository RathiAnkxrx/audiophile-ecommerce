import styled from "styled-components";
import { COLORS, FONT, WIDTH } from "../../../constant";

export const ProductMainContainer = styled.div`
  width: 100%;
  margin: 10rem 0;
  padding: 2.4rem;
`;

export const ProductMainWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction:column;
  gap: 10vw;
  }
`;
////////////////////////////////////////////////
//GoBack Button
////////////////////////////////////////////////
export const GoBackButton = styled.button`
  border: none;
  width: 8rem;
  background: transparent;
  margin: 4.8rem 0;
  text-align: left;
  font-size: 1.8rem;
  cursor: pointer;
  color: hsla(0, 0%, 0%, 0.7);
  :hover {
    color: ${COLORS.brownDark};
  }
`;
////////////////////////////////////////////////
//Product component
////////////////////////////////////////////////

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 7vw;
  min-height: 56rem;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImgWrapper = styled.div`
    width:100%
    height:100%;
    background-color:${COLORS.grayDark};
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:0.8rem;
    overflow:hidden;
    @media (max-width: 900px) {
      height: 40rem;
    }
   
`;
export const ProductImg = styled.img`
  width: 100%;
  background-size: cover;
  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const ProductDes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
export const ProductFeature = styled.p`
  color: ${COLORS.brownDark};
  ${FONT.overline};
`;

export const ProductH2 = styled.h2`
  margin: 3.4rem 0;
`;

export const ProductInfo = styled.p`
  font-weight: 400;
  opacity: 0.6;
  line-height: 2rem;
  margin-bottom: 2.4rem;
  @media (max-width: 1100px) {
    width: 90%;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 4.8rem;
`;

////////////////////////////////////////////////
//Add to cart component
////////////////////////////////////////////////
export const AddCartWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const AddCartAmount = styled.span`
  display: flex;
  width: 12rem;
  min-height: 4.8rem;
  justify-content: space-between;
  padding: 1.6rem;
  background: ${COLORS.grayDark};
  margin-right: 2.4rem;
  font-weight: 700;
`;

export const AddCartButton = styled.button`
  font-size: 1.8rem;
  border: none;
  background: transparent;
  cursor: pointer;
  &:hover {
    color: ${COLORS.brownDark};
  }
`;

export const AddToCart = styled.button`
  width: 16rem;
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
  &:active {
    transform: translateY(4px);
  }
`;

////////////////////////////////////////////////
//Feature component
////////////////////////////////////////////////

export const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 10vw;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Feature = styled.div``;

export const FeatureInfo = styled.p`
  opacity: 0.8;
  line-height: 2.5rem;
  font-size: 1.5rem;
  :not(:last-child) {
    margin-bottom: 3.4rem;
  }
`;

export const FeatureTitle = styled.h3`
  margin-bottom: 3.4rem;
`;

export const InTheBox = styled.div``;

export const FeatureList = styled.ul`
  display: grid;
  gap: 1.2rem;
`;

export const ListItem = styled.li`
  display: inline;
`;

export const ListSpan = styled.span`
  display: inline;
  color: ${COLORS.brownDark};
  margin-right: 2rem;
  font-weight: 700;
`;

////////////////////////////////////////////////
//Feature component
////////////////////////////////////////////////

export const GalleryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 3.4rem;
  min-height: 56rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: 100%;
  }
`;

export const GalleryImg1 = styled.img`
  background-size: cover;
  border-radius: 0.8rem;
  grid-column: 1/-1;
  grid-row: 1/2;
  @media (max-width: 900px) {
    width: 100%;
    height: 35rem;
    object-fit: cover;
  }
`;
export const GalleryImg2 = styled.img`
  background-size: cover;
  border-radius: 0.8rem;
  grid-column: 1/2;
  grid-row: 2/-1;
  @media (max-width: 900px) {
    grid-row: 2/3;
    width: 100%;
    height: 35rem;
    object-fit: cover;
  }
`;
export const GalleryImg3 = styled.img`
  background-size: cover;
  border-radius: 0.8rem;
  grid-column: 2/-1;
  grid-row: 1/-1;
  @media (max-width: 900px) {
    grid-column: 1/-1;
    grid-row: 3/-1;
    width: 100%;
    height: 45rem;
    object-fit: cover;
  }
`;

////////////////////////////////////////////////
//Preferences component
////////////////////////////////////////////////

export const PreferenceWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const PreferenceTitle = styled.h2`
  margin-bottom: 5.2rem;
`;

export const PreferenceItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const PreferenceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 650px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const PreferenceImgWrapper = styled.div`
  background: ${COLORS.grayDark};
  width: 100%;
  min-height: 20rem;
  border-radius: 0.8rem;
`;

export const PreferenceImg = styled.img`
  width: 100%;
  background-size: cover;
  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const PreferenceH3 = styled.h3`
  margin: 3.4rem 0;
`;
