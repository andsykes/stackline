import React from "react";
import "./App.css";
import { fetchAPIData } from "./api/DataProvider";
import { ProductPanel } from "./components/ProductPanel";
import { SalesTable } from "./components/sales-table/SalesTable";

import { createTheme } from "@mui/material/styles";
import { Card, ThemeProvider } from "@mui/material";
import { SalesGraph } from "./components/SalesGraph";
import { grey } from "@mui/material/colors";
import logo from "./data/stackline_logo.svg";

const theme = createTheme({
  palette: {
    primary: {
      main: grey["A100"],
    },
    secondary: {
      main: "#0F2747",
    },
  },
});

const App = () => {
  const apiData = fetchAPIData();
  const product = apiData.productData[0];
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
