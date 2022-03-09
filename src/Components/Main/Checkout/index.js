import { CheckoutConatiner, CheckoutWrapper } from "./CheckoutElement";
import CheckoutDetails from "./CheckoutDetails";
import CheckoutItems from "./CheckoutItems";
import { useState } from "react";
import Summary from "./Summary";
const Checkout = () => {
  const [total, setTotal] = useState("");
  return (
    <CheckoutConatiner>
      <Summary total={total} />
      <CheckoutWrapper>
        <CheckoutDetails />
        <CheckoutItems updateTotal={setTotal} />
      </CheckoutWrapper>
    </CheckoutConatiner>
  );
};

export default Checkout;
