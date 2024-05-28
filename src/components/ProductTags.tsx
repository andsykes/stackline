import { Badge } from "evergreen-ui";

export interface ProductTagsProps {
  tags: string[];
}

export const ProductTags = (props: ProductTagsProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignContent: "justify",
        flexWrap: "wrap",
        padding: "5px",
        gap: "5px",
      }}
    >
      {props.tags?.map((tag, index) => {
        return (
          <Badge key={index} size={"small"} textTransform={null}>
            {tag}
          </Badge>
        );
      })}
    </div>
  );
};
