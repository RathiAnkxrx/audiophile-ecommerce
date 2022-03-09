import styled from "styled-components";
import { COLORS, WIDTH } from "../../../constant";

export const CategoryHeaderContainer = styled.div`
  width: 100%;
  background: ${COLORS.black};
  margin: 10rem 0;
`;

export const CategoryHeaderWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  width: 100%;
  min-height: 15rem;
  padding: 8.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const CategoryHeaderH2 = styled.h2`
  color: ${COLORS.white};
`;
