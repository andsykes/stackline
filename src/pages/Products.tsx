import { ProductData } from "../api/types";
import DataTable, { TableColumn } from "react-data-table-component";

interface ProductsProps {
  products: ProductData[];
}

const PRODUCT_TABLE_COLUMNS: TableColumn<ProductData>[] = [
  { name: "Product Name", selector: (d) => d.title },
  // TODO make this a link.
  {
    name: "Details",
    selector: (d) => `go to product details for ${d.id}`,
  },
];

export const Products = (props: ProductsProps) => {
  const { products } = props;
  const data = products;
  return <DataTable columns={PRODUCT_TABLE_COLUMNS} data={products} />;
};
