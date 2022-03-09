import AddCart from "./AddCart";
import {
  ProductFeature,
  ProductImgWrapper,
  ProductWrapper,
  ProductInfo,
  ProductDes,
  ProductPrice,
  ProductH2,
  ProductImg,
} from "./ProductMainElement";

const Product = ({ data }) => {
  return (
    <ProductWrapper>
      <ProductImgWrapper>
        <ProductImg src={require(`../../../assets/${data.productIMG}`)} />
      </ProductImgWrapper>
      <ProductDes>
        <ProductFeature>{data.feature}</ProductFeature>
        <ProductH2>{data.product}</ProductH2>
        <ProductInfo>{data.info}</ProductInfo>
        <ProductPrice>$ {data.price}</ProductPrice>
        <AddCart data={data} />
      </ProductDes>
    </ProductWrapper>
  );
};

export default Product;
