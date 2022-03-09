import { GlobalBtnArrow, GLobalBtnBrown } from "../../../globalBtn";
import {
  PreferenceH3,
  PreferenceImg,
  PreferenceImgWrapper,
  PreferenceItem,
  PreferenceItems,
  PreferenceTitle,
  PreferenceWrapper,
} from "./ProductMainElement";

const Preferences = ({ data }) => {
  return (
    <PreferenceWrapper>
      <PreferenceTitle>You may also Like</PreferenceTitle>
      <PreferenceItems>
        {data.preference.map((item, index) => {
          return (
            <PreferenceItem key={index}>
              <PreferenceImgWrapper>
                <PreferenceImg
                  src={require(`../../../assets/${item.url}`)}
                  alt={item.alt}
                />
              </PreferenceImgWrapper>
              <PreferenceH3>{item.product}</PreferenceH3>
              <GLobalBtnBrown to={item.link}>See product</GLobalBtnBrown>
            </PreferenceItem>
          );
        })}
      </PreferenceItems>
    </PreferenceWrapper>
  );
};

export default Preferences;
