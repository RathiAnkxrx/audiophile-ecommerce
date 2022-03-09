import { set, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GiTakeMyMoney } from "react-icons/gi";
import {
  Form,
  FormGroup,
  FormGroupTitle,
  FormInput,
  FormLabel,
  FormSpan,
  FormTitle,
  Error,
  RadioGroupWrapper,
  RadioWrapper,
  RadioLabel,
  Radio,
  RadioText,
  MoneyWrapper,
  CashWrapper,
  CashMessage,
} from "./CheckoutElement";
import { useState } from "react";
import { toggleSuccess } from "../../../Store/SuccessToggle";
import { useDispatch } from "react-redux";
// prettier-ignore
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const CheckoutDetails = () => {
  const [payment, setPayment] = useState("e-money");
  const isEMoney = payment === "e-money";
  const errorColor = { color: "#CD2C2C" };
  const errorBorder = { border: "2px solid #CD2C2C" };
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    name: yup.string().required("anonymous"),
    email: yup
      .string()
      .email("example@example.com")
      .required("Provide email address"),
    phoneNumber: yup
      .string()
      .required("provide Phone Number")
      .matches(phoneRegExp, "+45 1234-4568"),
    address: yup.string().required("provide address"),
    zipCode: yup
      .number()
      .typeError("Must be a Number")
      .required("provide zip code")
      .test("Must be 6 digit Number", (value) =>
        value ? value.toString().length === 6 : null
      ),
    city: yup.string().required("provide city"),
    country: yup.string().required("provide country"),
    emoney: yup.boolean(),
    cardNum: yup.string().when("emoney", () => {
      if (isEMoney) {
        return yup
          .number()
          .typeError("Should be Number")
          .test("Mube be 12 digit", (val) =>
            val ? val.toString().length === 12 : null
          );
      }
    }),
    cvvNum: yup.string().when("emoney", () => {
      if (isEMoney) {
        return yup
          .number()
          .typeError("Should be Number")
          .test("Mube be 3 digit", (val) =>
            val ? val.toString().length === 3 : null
          );
      }
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    dispatch(toggleSuccess());
    console.log("toggle success");
  };

  return (
    <Form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Checkout</FormTitle>

      <FormGroupTitle>Billing Details</FormGroupTitle>
      <FormGroup>
        <FormLabel>
          <FormSpan style={errors.email ? errorColor : {}}>Name</FormSpan>
          <FormInput
            {...register("name")}
            style={errors.name ? errorBorder : {}}
            placeholder="John"
          />
          <Error> {errors.name?.message}</Error>
        </FormLabel>
        <FormLabel style={errors.email ? errorColor : {}}>
          <FormSpan>Email address</FormSpan>
          <FormInput
            {...register("email")}
            style={errors.email ? errorBorder : {}}
            placeholder="example@example.com"
          />
          <Error> {errors.email?.message}</Error>
        </FormLabel>
        <FormLabel style={errors.phoneNumber ? errorColor : {}}>
          <FormSpan>Phone Number</FormSpan>
          <FormInput
            {...register("phoneNumber")}
            style={errors.name ? errorBorder : {}}
            placeholder="3124823456"
          />
          <Error> {errors.phoneNumber?.message}</Error>
        </FormLabel>
      </FormGroup>

      <FormGroupTitle>Shipping</FormGroupTitle>
      <FormGroup>
        <FormLabel style={errors.address ? errorColor : {}} data-address>
          <FormSpan>Addres</FormSpan>
          <FormInput
            {...register("address")}
            style={errors.address ? errorBorder : {}}
            placeholder="1137 Williams Avenue"
          />
          <Error>{errors.address?.message}</Error>
        </FormLabel>
        <FormLabel style={errors.zipCode ? errorColor : {}}>
          <FormSpan>Zip code</FormSpan>
          <FormInput
            {...register("zipCode")}
            style={errors.zipCode ? errorBorder : {}}
            placeholder="113787"
          />
          <Error>{errors.zipCode?.message}</Error>
        </FormLabel>
        <FormLabel style={errors.city ? errorColor : {}}>
          <FormSpan>City</FormSpan>
          <FormInput
            {...register("city")}
            style={errors.city ? errorBorder : {}}
            placeholder="delhi"
          />
          <Error>{errors.city?.message}</Error>
        </FormLabel>
        <FormLabel style={errors.country ? errorColor : {}}>
          <FormSpan>Country</FormSpan>
          <FormInput
            {...register("country")}
            style={errors.country ? errorBorder : {}}
            placeholder="India"
          />
          <Error>{errors.country?.message}</Error>
        </FormLabel>
      </FormGroup>

      <FormGroupTitle>PaymentDetails</FormGroupTitle>
      <RadioGroupWrapper>
        <FormSpan>Payment Billing</FormSpan>
        <RadioWrapper>
          <RadioLabel htmlFor="e-money" data-checked={payment === "e-money"}>
            <Radio
              type="radio"
              id="e-money"
              checked={payment === "e-money"}
              onClick={(e) => setPayment(e.target.value)}
              value={"e-money"}
              name="PAYMENT METHOD"
              {...register("payment", { required: true })}
            />
            <RadioText>e-Money</RadioText>
          </RadioLabel>
          <RadioLabel htmlFor="cash" data-checked={payment === "cash"}>
            <Radio
              type="radio"
              id="casg"
              checked={payment === "cash"}
              onClick={(e) => setPayment(e.target.value)}
              value={"cash"}
              name="PAYMENT METHOD"
              {...register("payment", { required: true })}
            />
            <RadioText>Cash</RadioText>
          </RadioLabel>
        </RadioWrapper>
      </RadioGroupWrapper>
      {isEMoney ? (
        <MoneyWrapper>
          <FormLabel style={errors.cardNum ? errorColor : {}}>
            <FormSpan>Card Number</FormSpan>
            <FormInput
              {...register("cardNum")}
              style={errors.cardNum ? errorBorder : {}}
              placeholder="1234-56789-123"
            />
            <Error>{errors.cardNum?.message}</Error>
          </FormLabel>
          <FormLabel style={errors.cvvNum ? errorColor : {}}>
            <FormSpan>CVV Number</FormSpan>
            <FormInput
              {...register("cvvNum")}
              style={errors.cvvNum ? errorBorder : {}}
              placeholder="745"
            />
            <Error>{errors.cvvNum?.message}</Error>
          </FormLabel>
        </MoneyWrapper>
      ) : (
        <CashWrapper>
          <GiTakeMyMoney
            size={48}
            style={{ minWidth: "48px" }}
            color={"#D87D4A"}
          />
          <CashMessage>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </CashMessage>
        </CashWrapper>
      )}
    </Form>
  );
};

export default CheckoutDetails;
