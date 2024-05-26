import { ProductThumbnail } from "./ProductThumbnail";
import { ProductTags } from "./ProductTags";
import { Card } from "@mui/material";

interface ProductPanelProps {
  image: string;
  altText?: string;
  title: string;
  subtitle: string;
  tags: string[];
}

export const ProductPanel = (props: ProductPanelProps) => {
  const { image, altText, title, subtitle, tags } = props;

  return (
    <>
      <Card style={{ padding: "2px" }}>
        <ProductThumbnail image={image} altText={altText} />
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </Card>
      <br />
      <Card>
        <ProductTags tags={tags} />
      </Card>
    </>
  );
};

export {};
