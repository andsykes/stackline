import logo from "../data/stackline_logo.svg";
import { ProductPanel } from "../components/ProductPanel";
import { Card } from "@mui/material";
import { SalesGraph } from "../components/SalesGraph";
import { SalesTable } from "../components/sales-table/SalesTable";
import React from "react";
import { ProductData } from "../api/types";

interface ProductDetailProps {
  product: ProductData;
}

export const ProductDetail = (props: ProductDetailProps) => {
  const { product } = props;
  return (
    <Card>
      <header className={"App-header"}>
        <img src={logo} style={{ margin: "10px", maxWidth: "100px" }} />
      </header>
      <div className="App">
        <div style={{ width: 250 }}>
          <ProductPanel
            image={product.image}
            title={product.title}
            subtitle={product.subtitle}
            tags={product.tags}
          />
        </div>
        <div style={{ width: "100%" }}>
          <Card>
            <SalesGraph data={product.sales} />
          </Card>
          <br />
          <Card>
            <SalesTable data={product.sales} />
          </Card>
        </div>
      </div>
    </Card>
  );
};
