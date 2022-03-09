import { GLobalBtnBrown } from "../../../globalBtn";
import {
  CategoryMainConatiner,
  CategoryMainWrapper,
  ProductDetail,
  ProductFeature,
  ProductImg,
  ProductImgWrapper,
  ProductInfo,
  ProductTitle,
  ProductWrapper,
} from "./CategoryMainElement";

const CategoryMain = ({ data }) => {
  return (
    <CategoryMainConatiner>
      <CategoryMainWrapper>
        {data.map((item, index) => {
          let isEven = index % 2 === 0 ? true : false;

          return (
            <ProductWrapper data-reversed={isEven} key={index}>
              <ProductImgWrapper>
                <ProductImg
                  data-aos="fade"
                  data-aos-duration="500"
                  src={require(`../../../assets/${item.src}`)}
                  alt={item.alt}
                />
              </ProductImgWrapper>
              <ProductInfo>
                <ProductFeature>{item.feature}</ProductFeature>
                <ProductTitle>{item.product}</ProductTitle>
                <ProductDetail>{item.detail}</ProductDetail>
                <GLobalBtnBrown to={item.link}>See product</GLobalBtnBrown>
              </ProductInfo>
            </ProductWrapper>
          );
        })}
      </CategoryMainWrapper>
    </CategoryMainConatiner>
  );
};

export default CategoryMain;
