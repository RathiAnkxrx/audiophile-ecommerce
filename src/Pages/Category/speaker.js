import Banner from "../../Components/Banner";
import Header from "../../Components/Header/Header";
import CategoryHeader from "../../Components/Main/CategoryHeader";
import CategoryMain from "../../Components/Main/CategoryMain";
import ProductNav from "../../Components/ProductNav";
import { SPEAKERS } from "../../data/CategoryData";
const Speaker = () => {
  return (
    <>
      <CategoryHeader title={"SPEAKER"} />
      <CategoryMain data={SPEAKERS} />
      <ProductNav />
      <Banner />
    </>
  );
};
export default Speaker;
