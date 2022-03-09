import {
  BannerAbout,
  BannerContainer,
  BannerDesc,
  BannerH1,
  BannerImg,
  BannerSpan,
  BannerWrapper,
} from "./BannerElement";

import ManImgLG from "../../assets/shared/desktop/image-best-gear.jpg";
import ManImgMD from "../../assets/shared/tablet/image-best-gear.jpg";
import ManImgSM from "../../assets/shared/mobile/image-best-gear.jpg";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerWrapper>
        <BannerDesc>
          <BannerH1 data-aos="fade-right" data-aos-duration="1000">
            BRINGING YOU THE{" "}
            <BannerSpan>
              <br /> BEST
            </BannerSpan>{" "}
            AUDIO GEAR
          </BannerH1>
          <BannerAbout
            data-aos="zoom-in-out"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </BannerAbout>
        </BannerDesc>
        <BannerImg
          data-aos="fade-left"
          data-aos-duration="1000"
          srcSet={`${ManImgSM} 375w, ${ManImgMD} 768w, ${ManImgLG} 1100w`}
        />
      </BannerWrapper>
    </BannerContainer>
  );
};

export default Banner;
