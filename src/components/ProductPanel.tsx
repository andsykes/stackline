import {ProductThumbnail} from "./ProductThumbnail";
import {ProductTags} from "./ProductTags";

interface ProductPanelProps {
    image: string;
    altText?: string;
    title: string;
    subtitle: string;
    tags: string[];
}

export const ProductPanel = (props: ProductPanelProps) => {
    const {image, altText, title, subtitle, tags} = props
    return (
        <>
            <div>
                <ProductThumbnail image={image} altText={altText}/>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>

            <div>
                <ProductTags tags={tags} />
            </div>
        </>

    )
}

export {}