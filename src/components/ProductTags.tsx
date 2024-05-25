import { Badge } from "evergreen-ui";

export interface ProductTagsProps {
    tags: string[];
}

export const ProductTags = (props: ProductTagsProps) => {
    console.log(props.tags)
    return <>
        {props.tags?.map((tag, index) => {
            return <Badge key={index}>{tag}</Badge>
        })}
    </>
}