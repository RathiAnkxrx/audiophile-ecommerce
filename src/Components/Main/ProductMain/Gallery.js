import {
  GalleryImg1,
  GalleryImg2,
  GalleryImg3,
  GalleryWrapper,
} from "./ProductMainElement";

const Gallery = ({ data }) => {
  return (
    <GalleryWrapper>
      <GalleryImg1
        src={require(`../../../assets/${data.gallery[0][0]}`)}
        alt={data.gallery[0][1]}
      />
      <GalleryImg2
        src={require(`../../../assets/${data.gallery[1][0]}`)}
        alt={data.gallery[0][1]}
      />
      <GalleryImg3
        src={require(`../../../assets/${data.gallery[2][0]}`)}
        alt={data.gallery[0][1]}
      />
    </GalleryWrapper>
  );
};

export default Gallery;
