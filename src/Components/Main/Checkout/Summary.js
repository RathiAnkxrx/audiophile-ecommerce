import {
  SummaryConatiner,
  SummaryWrapper,
  SummaryIcon,
  SummaryH1,
  SummarySpan,
  Items,
  Item,
  ItemImg,
  ItemInfo,
  ItemQuantity,
  ItemPrice,
  SummaryItems,
  GrandTotal,
  GrandWrapper,
  GrandLable,
} from "./CheckoutElement";
import { useDispatch, useSelector } from "react-redux";
import { GLobalBtnBrown } from "../../../globalBtn";
import { onClear } from "../../../Store/productAdd";

const Summary = ({ total }) => {
  const { items } = useSelector((state) => state.product);
  const { formValid } = useSelector((state) => state.successToggle);
  console.log(formValid);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(onClear());
  };

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

  return (
    <SummaryConatiner data-display={formValid}>
      <SummaryWrapper>
        <SummaryIcon>&#10003;</SummaryIcon>
        <SummaryH1>
          Thank you <br /> for your order
        </SummaryH1>
        <SummarySpan>You will receive conformation mail shortly</SummarySpan>
        <SummaryItems>
          <Items>{items.map(productDisplay)}</Items>
          <GrandWrapper>
            <GrandLable>Grand Total</GrandLable>
            <GrandTotal>$ {total}</GrandTotal>
          </GrandWrapper>
        </SummaryItems>
        <GLobalBtnBrown to="/home" width="100" onClick={handleClick}>
          {" "}
          Back to Home
        </GLobalBtnBrown>
      </SummaryWrapper>
    </SummaryConatiner>
  );
};

export default Summary;
