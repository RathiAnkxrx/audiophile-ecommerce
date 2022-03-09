import {
  CategoryHeaderContainer,
  CategoryHeaderH2,
  CategoryHeaderWrapper,
} from "./CategoryHeaderElement";

const CategoryHeader = ({ title }) => {
  return (
    <CategoryHeaderContainer
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <CategoryHeaderWrapper>
        <CategoryHeaderH2
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {title}
        </CategoryHeaderH2>
      </CategoryHeaderWrapper>
    </CategoryHeaderContainer>
  );
};

export default CategoryHeader;
