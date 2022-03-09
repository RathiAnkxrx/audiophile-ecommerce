import { GLobalBtnBrown } from "../../../globalBtn";
import {
  HeroAbout,
  HeroContainer,
  HeroProduct,
  HeroTitle,
  HeroWrapper,
  HeroDesc,
  HeroImg,
} from "./HomeHeroElement";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroDesc>
          <HeroTitle data-aos="fade-down" data-aos-duration="500">
            New product
          </HeroTitle>
          <HeroProduct
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="500"
          >
            xx99 mark II <br /> Headphones
          </HeroProduct>
          <HeroAbout
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="600"
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </HeroAbout>
          <GLobalBtnBrown
            to="/product_detail/xx99-mark-ii"
            data-aos="fade"
            data-aos-duration="700"
          >
            See product
          </GLobalBtnBrown>
        </HeroDesc>
        <HeroImg role="image" />
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
