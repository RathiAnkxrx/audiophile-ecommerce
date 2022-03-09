import { useSelector } from "react-redux";
import {
  ItemsWrapper,
  Items,
  Item,
  TotalWrapper,
  TotalHeading,
  TotalAmount,
  ItemImg,
  ItemInfo,
  ItemPrice,
  ItemQuantity,
  TotalItem,
  ContinueBtn,
} from "./CheckoutElement";

import { BtnBlack } from "../../../globalBtn";

const CheckoutItems = ({ updateTotal }) => {
  const { items } = useSelector((state) => state.product);
  const { totalAmount } = useSelector((state) => state.product);
  const shipping = totalAmount > 4000 ? 0 : 50;

  const productDisplay = (data, index) => {
    return (
      <Item key={index}>
        <ItemImg src={require(`../../../assets/${data.cartImg}`)} />
        <ItemInfo>
          {data.id}
          <ItemPrice>$ {data.price}</ItemPrice>
        </ItemInfo>
        <ItemQuantity>X{data.totalQuantity}</ItemQuantity>
      </Item>
    );
  };

  if (items.length < 1) {
    return (
      <ItemsWrapper>
        <Item style={{ justifyContent: "center" }}>
          <iframe
            title="random gif"
            src="https://giphy.com/embed/nKERd2uhn8hhe"
            width="180"
            height="180"
            style={{ pointerEvents: "none", border: "0" }}
          ></iframe>
        </Item>
        <BtnBlack to="/home">Back to Purchase</BtnBlack>
      </ItemsWrapper>
    );
  }
  return (
    <ItemsWrapper>
      <Items>{items.map(productDisplay)}</Items>
      {items.length > 0 && (
        <TotalWrapper>
          <TotalItem>
            <TotalHeading>total</TotalHeading>
            <TotalAmount>$ {totalAmount}</TotalAmount>
          </TotalItem>
          <TotalItem>
            <TotalHeading>Shipping</TotalHeading>
            <TotalAmount>$ {shipping}</TotalAmount>
          </TotalItem>
          <TotalItem>
            <TotalHeading>Vat Included</TotalHeading>
            <TotalAmount>$ 20</TotalAmount>
          </TotalItem>
          <TotalItem>
            <TotalHeading>grand-total</TotalHeading>
            <TotalAmount data-total>
              $ {totalAmount + shipping + 20}
            </TotalAmount>
          </TotalItem>
        </TotalWrapper>
      )}
      <ContinueBtn
        type="Submit"
        value="Submit"
        form="checkout-form"
        onClick={() => updateTotal(totalAmount + shipping + 20)}
      >
        Checkout
      </ContinueBtn>
    </ItemsWrapper>
  );
};

export default CheckoutItems;
