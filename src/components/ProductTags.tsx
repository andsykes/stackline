import { Badge } from "evergreen-ui";

export interface ProductTagsProps {
  tags: string[];
}

export const ProductTags = (props: ProductTagsProps) => {
  return (
    <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      {props.tags?.map((tag, index) => {
        return <Badge key={index}>{tag}</Badge>;
      })}
    </div>
  );
};
