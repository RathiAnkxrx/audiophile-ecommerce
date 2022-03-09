import {
  FeatureInfo,
  FeatureTitle,
  FeatureWrapper,
  FeatureList,
  InTheBox,
  ListItem,
  ListSpan,
  Feature,
} from "./ProductMainElement";

const Features = ({ data }) => {
  return (
    <FeatureWrapper>
      <Feature>
        <FeatureTitle>Feature</FeatureTitle>
        <FeatureInfo>{data.featureDesc1}</FeatureInfo>
        <FeatureInfo>{data.featureDesc2}</FeatureInfo>
      </Feature>
      <InTheBox>
        <FeatureTitle>In The Box</FeatureTitle>
        <FeatureList>
          {data.inTheBox.map((item, index) => {
            return (
              <InTheBox key={index}>
                <ListSpan>{item[0]}</ListSpan>
                <ListItem>{item[1]}</ListItem>
              </InTheBox>
            );
          })}
          <ListItem></ListItem>
        </FeatureList>
      </InTheBox>
    </FeatureWrapper>
  );
};

export default Features;
