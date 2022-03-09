import {
  CartModelContainer,
  CartModelWrapper,
  ItemAmount,
  ItemAmountButtons,
  ItemImg,
  ItemInfo,
  ItemPrice,
  ItemsWrapper,
  ModalHeader,
  RemoveAllBtn,
  TotalAmount,
  TotalHeading,
  TotalWrapper,
  Modal,
  Items,
  Item,
  NoItemButton,
  CheckOutButton,
} from "./CartModelElement";
import { useSelector, useDispatch } from "react-redux";
import { onAdd, onRemove } from "../../Store/productAdd";
import { useEffect } from "react";
import { toggle } from "../../Store/modalToggle";

const CartModel = () => {
  const { isVisible } = useSelector((state) => state.modalToggle);
  const { totalAmount } = useSelector((state) => state.product);
  const { items } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isOverlay = e.target.getAttribute("data-container") === "true";
      if (isOverlay) {
        dispatch(toggle());
      }
    });
  }, [dispatch]);

  const productDisplay = (data, index) => {
    const counter = 1;
    return (
      <Item key={index}>
        <ItemImg src={require(`../../assets/${data.cartImg}`)} />
        <ItemInfo>
          {data.id}
          <ItemPrice>$ {data.price}</ItemPrice>
        </ItemInfo>
        <ItemAmount>
          <ItemAmountButtons
            onClick={() => dispatch(onRemove({ data, counter }))}
          >
            -
          </ItemAmountButtons>
          {data.totalQuantity}
          <ItemAmountButtons onClick={() => dispatch(onAdd({ data, counter }))}>
            +
          </ItemAmountButtons>
        </ItemAmount>
      </Item>
    );
  };

  return (
    <CartModelContainer data-display={isVisible} data-container>
      <CartModelWrapper data-container>
        <Modal>
          <ModalHeader>
            cart({items.length})<RemoveAllBtn>Remove All</RemoveAllBtn>
          </ModalHeader>
          <ItemsWrapper>
            <Items>
              {items.length < 1 ? (
                <Item style={{ justifyContent: "center" }}>
                  <iframe
                    title="random gif"
                    src="https://giphy.com/embed/nKERd2uhn8hhe"
                    width="180"
                    height="180"
                    style={{ pointerEvents: "none", border: "0" }}
                  ></iframe>
                </Item>
              ) : (
                items.map(productDisplay)
              )}
            </Items>
            <TotalWrapper>
              <TotalHeading>total</TotalHeading>
              <TotalAmount>$ {totalAmount}</TotalAmount>
            </TotalWrapper>
          </ItemsWrapper>

          {items.length < 1 ? (
            <NoItemButton>No items in the list</NoItemButton>
          ) : (
            <CheckOutButton to="/checkout">Place Order</CheckOutButton>
          )}
        </Modal>
      </CartModelWrapper>
    </CartModelContainer>
  );
};

export default CartModel;
