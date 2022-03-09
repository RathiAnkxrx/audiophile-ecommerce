import Banner from "../../Components/Banner";
import Header from "../../Components/Header/Header";
import CategoryHeader from "../../Components/Main/CategoryHeader";
import CategoryMain from "../../Components/Main/CategoryMain";
import ProductNav from "../../Components/ProductNav";
import { HEADPHONES } from "../../data/CategoryData";
const HeadPhone = () => {
  return (
    <>
      <CategoryHeader title={"headphones"} />
      <CategoryMain data={HEADPHONES} />
      <ProductNav />
      <Banner />
    </>
  );
};
export default HeadPhone;
