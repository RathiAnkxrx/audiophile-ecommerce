import Product from "./Product";
import Features from "./Features";
import {
  ProductMainContainer,
  ProductMainWrapper,
  GoBackButton,
} from "./ProductMainElement";
import Gallery from "./Gallery";
import Preferences from "./Preference";
import { useNavigate } from "react-router-dom";

const ProductMain = ({ data }) => {
  const navigate = useNavigate();
  const clickHandle = () => {
    navigate(-1);
  };
  return (
    <ProductMainContainer>
      <GoBackButton onClick={clickHandle}> Go Back</GoBackButton>
      <ProductMainWrapper>
        <Product data={data} />
        <Features data={data} />
        <Gallery data={data} />
        <Preferences data={data} />
      </ProductMainWrapper>
    </ProductMainContainer>
  );
};

export default ProductMain;
