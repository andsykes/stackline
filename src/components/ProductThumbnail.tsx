interface ProductThumbnailProps {
  image: string;
  altText?: string;
}

export const ProductThumbnail = (props: ProductThumbnailProps) => {
  const { image, altText } = props;
  return <img style={{ width: "100%" }} src={image} alt={altText} />;
};
