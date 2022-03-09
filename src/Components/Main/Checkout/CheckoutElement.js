import styled from "styled-components";
import { COLORS, WIDTH } from "../../../constant";

export const CheckoutConatiner = styled.section`
  width: 100%;
  background: ${COLORS.grayDark};
  margin: 10rem auto 0;
  padding: 2.4rem;
`;

export const CheckoutWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  width: 100%;
  display: grid;
  grid-template-columns: 65fr 35fr;
  gap: 5vw;
  margin: 0 auto;
  padding: 6.4rem 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

////////////////////////////////////////
////  Checkout Details
//////////////////////////////////////

export const Form = styled.form`
  width: 100%;
  padding: 4.8rem;
  border-radius: 0.8rem;
  background: ${COLORS.white};
`;

export const FormTitle = styled.h3`
  margin-bottom: 4.8rem;
`;

export const FormGroupTitle = styled.p`
  margin-bottom: 2.4rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${COLORS.brownDark};
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 48%));
  justify-content: space-between;
  row-gap: 2.4rem;
  margin-bottom: 3.4rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 100%));
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const FormSpan = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const FormInput = styled.input`
  height: 4.8rem;
  width: 100%;
  margin-top: 1.4rem;
  border: 1px solid ${COLORS.grayMid};
  border-radius: 0.8rem;
  padding: 0 2.4rem;
  letter-spacing: -0.25px;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.9;
  ::placeholder {
    opacity: 0.4;
  }
  &:focus {
    outline: none;
    border: 1px solid ${COLORS.brownLight};
  }
`;
export const Error = styled.span`
  position: absolute;
  font-size: 1.2rem;
  top: 0;
  right: 0;
`;

export const RadioGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 48%));
  justify-content: space-between;
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 100%));
  }
`;

export const RadioWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  @media (max-width: 600px) {
    margin-top: 2.4rem;
  }
`;

export const RadioLabel = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  height: 5.6rem;
  padding: 0 2.4rem;
  border-radius: 0.8rem;
  box-shadow: ${(props) =>
    props["data-checked"] === "e-money"
      ? `inset 0 0 0 2px ${COLORS.brownDark}`
      : `inset 0 0 0 1px ${COLORS.grayMid}`};
`;
export const Radio = styled.input.attrs({ type: "radio" })`
  margin-right: 1.4rem;
  opacity: 0.4;
  width: 2rem;
  height: 2rem;
  position: relative;
  cursor: pointer;
  &:checked {
    opacity: 1;
  }
  &:checked:before {
    outline: none;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1.1px ${COLORS.grayMid};
    border-radius: 100%;
    background: white;
  }
  &:checked:after {
    position: absolute;
    content: "";
    width: 1.2rem;
    height: 1.2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${COLORS.brownDark};
    border-radius: 100%;
  }
`;

export const RadioText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const MoneyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 48%));
  justify-content: space-between;
  width: 100%;
  margin: 3.4rem 0;
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 100%));
    gap: 2.4rem;
  }
`;

export const CashWrapper = styled.div`
  margin: 3.4rem 0;
  display: flex;
  gap: 2vw;
  align-items: center;
`;

export const CashMessage = styled.p`
  opacity: 0.4;
`;

////////////////////////////////////////
////  Checkout Items
//////////////////////////////////////
export const ItemsWrapper = styled.div`
  width: 100%;
  padding: 3.2rem 2.4rem;
  border-radius: 0.8rem;
  background: ${COLORS.white};
  height: min-content;
`;

export const Items = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
  padding: 1.8rem;
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

export const ItemQuantity = styled.p`
  font-size: 1.6rem;
  opacity: 0.5;
  margin-left: auto;
  font-weight: 700;
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
  flex-direction: column;
  gap: 1.4rem;
  font-size: 1.6rem;
`;

export const TotalHeading = styled.p`
  opacity: 0.5;
  text-transform: uppercase;
`;

export const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  &:last-of-type {
    margin-top: 2.2rem;
    margin-bottom: 0;
  }
`;
export const TotalAmount = styled.p`
  font-weight: 700;
  color: ${(props) => (props["data-total"] ? `${COLORS.brownDark}` : "")};
`;

export const ContinueBtn = styled.button`
  margin-top: 2.4rem;
  width: 100%;
  height: 4.8rem;
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

////////////////////////////////////////
////  Sumamry
//////////////////////////////////////

export const SummaryConatiner = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 2.4rem;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.5);
  display: ${(props) => (props["data-display"] ? "flex" : "none")};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SummaryWrapper = styled.div`
  max-width: 60rem;
  width: 100%;
  height: min-content;
  margin: 2.4rem auto;
  border-radius: 0.8rem;
  background: ${COLORS.white};
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
`;
export const SummaryIcon = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  background: ${COLORS.brownLight};
  color: ${COLORS.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.4rem;
`;
export const SummaryH1 = styled.h2`
  margin-top: 2.4rem;
  text-transform: uppercase;
  opacity: 0.7;
`;

export const SummarySpan = styled.span`
  color: ${COLORS.grayMid};
  margin: 3.4rem 0;
`;

export const SummaryItems = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  border-radius: 0.8rem;
  background: ${COLORS.grayDark};
  padding-left: 0.5rem;
  overflow: hidden;
  margin-bottom: 2.4rem;
`;

export const GrandWrapper = styled.div`
  background: ${COLORS.black};
  display: flex;
  flex-direction: column;
  aligm-items: center;
  justify-content: end;
  padding: 2.4rem;
`;

export const GrandLable = styled.p`
  color: ${COLORS.grayMid};
  font-size: 1.8rem;
  font-weight: 300;
  text-transform: uppercase;
`;

export const GrandTotal = styled.p`
  font-size: 1.8rem;
  color: ${COLORS.white};
  margin: 1rem 0;
  font-weight: 700;
`;
