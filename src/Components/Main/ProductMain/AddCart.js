import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../../../Store/counter";
import {
  AddCartAmount,
  AddCartButton,
  AddCartWrapper,
  AddToCart,
} from "./ProductMainElement";
import { onAdd } from "../../../Store/productAdd";

const AddCart = ({ data }) => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <AddCartWrapper>
      <AddCartAmount>
        <AddCartButton onClick={() => dispatch(decrease())}>-</AddCartButton>
        {counter}
        <AddCartButton onClick={() => dispatch(increase())}>+</AddCartButton>
      </AddCartAmount>
      <AddToCart onClick={() => dispatch(onAdd({ data, counter }))}>
        Add to cart
      </AddToCart>
    </AddCartWrapper>
  );
};

export default AddCart;
