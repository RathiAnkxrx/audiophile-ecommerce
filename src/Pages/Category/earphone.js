import Banner from "../../Components/Banner";
import Header from "../../Components/Header/Header";
import CategoryHeader from "../../Components/Main/CategoryHeader";
import CategoryMain from "../../Components/Main/CategoryMain";
import ProductNav from "../../Components/ProductNav";
import { EARPHONES } from "../../data/CategoryData";

const EarPhone = () => {
  return (
    <>
      <CategoryHeader title={"Earphone"} />
      <CategoryMain data={EARPHONES} />
      <ProductNav />
      <Banner />
    </>
  );
};
export default EarPhone;
