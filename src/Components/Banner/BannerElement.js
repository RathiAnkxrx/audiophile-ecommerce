import styled from "styled-components";
import { COLORS, WIDTH } from "../../constant";

export const BannerContainer = styled.section`
  margin: 20rem 0;
  padding: 0 2.4rem;
`;

export const BannerWrapper = styled.div`
  min-height: 56rem;
  max-width: ${WIDTH.desktop};
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5vw;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const BannerDesc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BannerH1 = styled.h2`
  margin-bottom: 3.2rem;
`;

export const BannerAbout = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin-right: 3.2rem;
  line-height: 1.6;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  content: "";
  @media (max-width: 900px) {
    grid-row: 1/2;
    height: 40rem;
    object-fit: cover;
  }
`;

export const BannerSpan = styled.span`
  color: ${COLORS.brownDark};
`;
