import DataTable from 'react-data-table-component'
import { ProductData } from "../api/types";
interface ProductsProps {
    products: ProductData[];
}

const PRODUCT_TABLE_COLUMNS = [
    {name: 'Product Name', selector: (d: any) => d.title},
    // TODO make this a link.
    {name: 'Details', selector: (d: any) => `go to product details for ${d.id}`},
];

export const Products = (props: ProductsProps) => {
    const { products } = props;
    const data = products
    return (
        <DataTable columns={PRODUCT_TABLE_COLUMNS} data={products}/>
    );
}

