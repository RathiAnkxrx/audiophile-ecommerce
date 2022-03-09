import {
  ProductNavConatiner,
  ProductNavLinks,
  ProductNavTitle,
  ProductNavWrapper,
} from "./ProductNavElement";

import headphone from "../../assets/shared/desktop/image-headphones.png";
import earphone from "../../assets/shared/desktop/image-earphones.png";
import speaker from "../../assets/shared/desktop/image-speakers.png";
import { GlobalBtnArrow } from "../../globalBtn";
const ProductNav = () => {
  return (
    <ProductNavConatiner>
      <ProductNavWrapper>
        <ProductNavLinks
          to="/headphone"
          data-product-image={headphone}
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <ProductNavTitle> HeadPhones</ProductNavTitle>
          <GlobalBtnArrow>shop</GlobalBtnArrow>
        </ProductNavLinks>
        <ProductNavLinks
          to="/speaker"
          data-product-image={speaker}
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <ProductNavTitle>Speakers</ProductNavTitle>
          <GlobalBtnArrow>shop</GlobalBtnArrow>
        </ProductNavLinks>
        <ProductNavLinks
          to="/earphone"
          data-product-image={earphone}
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <ProductNavTitle>Earphone</ProductNavTitle>
          <GlobalBtnArrow>shop</GlobalBtnArrow>
        </ProductNavLinks>
      </ProductNavWrapper>
    </ProductNavConatiner>
  );
};

export default ProductNav;
