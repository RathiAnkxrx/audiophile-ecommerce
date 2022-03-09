import styled from "styled-components";
import { COLORS, WIDTH } from "../../constant";
import { Link as LinkR } from "react-router-dom";

export const CartModelContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99999;
  background-color: hsla(0, 0%, 0%, 0.5);
  display: ${(props) => (props["data-display"] ? "flex" : "none")};
  padding: 12rem 2.4rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CartModelWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  height: min-content;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;

export const Modal = styled.div`
  max-width: 37rem;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 3.2rem 3.4rem;
  border-radius: 0.8rem;
  background: ${COLORS.white};
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 1.8rem;
  font-weight: 700;
`;

export const Amount = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const RemoveAllBtn = styled.button`
  border: none;
  background: transparent;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    colorr: ${COLORS.brownDark};
  }
`;

export const ItemsWrapper = styled.div`
  margin: 2.4rem 0;
`;

export const Items = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
`;

export const Item = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ItemImg = styled.img`
  width: 6.8rem;
  height: 6.8rem;
  border-radius: 0.4rem;
  margin-right: 1rem;
`;

export const ItemInfo = styled.div`
  padding: 0.4rem 0;
  font-size: 1.8rem;
  font-weight: 700;
  height: 6.8rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ItemPrice = styled.p`
  opacity: 0.6;
  font-size: 1.4rem;
`;

export const ItemAmount = styled.div`
  max-width: 10rem;
  width: 100%;
  height: 4.2rem;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  background: ${COLORS.grayDark};
  margin-left: auto;
  font-size: 1.4rem;
  font-weight: 700;
`;
export const ItemAmountButtons = styled.button`
  background: transparent;
  border: none;
  &:hover {
    color: ${COLORS.brownDark};
  }
`;

export const TotalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TotalHeading = styled.p`
  opcaity: 0.6;
  text-transform: uppercase;
`;
export const TotalAmount = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const NoItemButton = styled.button`
  widthL100%;
  height:16rem;
  height:4.8rem;
  color:${COLORS.white};
  background:${COLORS.black};
  text-transform:uppercase;
  font-size:1.4rem;
  border:none;
`;

export const CheckOutButton = styled(LinkR)`
  width: 100%;
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
