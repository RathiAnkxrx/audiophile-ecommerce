import {
  MainConatiner,
  MainEarphoneimg,
  MainEarphoneWrapper,
  MainSpeakerAbout,
  MainSpeakerDesc,
  MainSpeakerH1,
  MainH3,
  MainSpeakerImg,
  MainSpeakerSecDesc,
  MainSpekaerSecWrapper,
  MainSpekaerWrapper,
  MainWrapper,
  MainEarphoneDec,
} from "./HomemainElement";
import speakerZX9Img from "../../../assets/home/desktop/image-speaker-zx9.png";
import speakerZX7Img from "../../../assets/home/desktop/image-speaker-zx7.jpg";
import earphoneYX1Img from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import { GLobalBtnBlack, GLobalBtnWhite } from "../../../globalBtn";
const HomeMain = () => {
  return (
    <MainConatiner>
      <MainWrapper>
        <MainSpekaerWrapper>
          <MainSpeakerImg
            data-aos="fade-up"
            data-aos-duration="2000"
            imgsrc={speakerZX9Img}
          />
          <MainSpeakerDesc>
            <MainSpeakerH1>
              zx9 <br /> speaker
            </MainSpeakerH1>
            <MainSpeakerAbout>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </MainSpeakerAbout>
            <GLobalBtnBlack to="/product_detail/xx99-mark-ii">
              See product
            </GLobalBtnBlack>
          </MainSpeakerDesc>
        </MainSpekaerWrapper>

        <MainSpekaerSecWrapper
          data-aos="zoom-in-out"
          data-aos-duration="700"
          imgsrc={speakerZX7Img}
        >
          <MainSpeakerSecDesc>
            <MainH3>zx7 speaker</MainH3>
            <GLobalBtnWhite to="/product_detail/zx7">
              See product
            </GLobalBtnWhite>
          </MainSpeakerSecDesc>
        </MainSpekaerSecWrapper>

        <MainEarphoneWrapper>
          <MainEarphoneimg
            data-aos="flip-left"
            data-aos-duration="800"
            data-aos-delay="100"
            src={earphoneYX1Img}
          ></MainEarphoneimg>
          <MainEarphoneDec>
            <MainH3>yz1 earphone</MainH3>
            <GLobalBtnWhite to="/product_detail/yz1">
              See product
            </GLobalBtnWhite>
          </MainEarphoneDec>
        </MainEarphoneWrapper>
      </MainWrapper>
    </MainConatiner>
  );
};

export default HomeMain;
