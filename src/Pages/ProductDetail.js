import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import ProductMain from "../Components/Main/ProductMain";
import ProductNav from "../Components/ProductNav";

import IsLoading from "../isLoading";
const ProductDetail = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const path = location.pathname.replace("/product_detail/", "");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/b/60f2122c0cd33f7437ca192d/5"
        );
        if (!response.ok) {
          throw new Error("Unable to fetch data");
        }

        const DATA = await response.json();

        const filterData = DATA.filter((item) => item.id === path);
        setData(filterData[0]);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [path]);

  return (
    <main>
      {isLoading && IsLoading}
      {!isLoading && <ProductMain data={data} />}
      <ProductNav />
      <Banner />
      <Footer />
    </main>
  );
};

export default ProductDetail;
