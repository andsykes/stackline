import React from "react";
import "./App.css";
import { fetchAPIData } from "./api/DataProvider";
import { ProductPanel } from "./components/ProductPanel";
import { SalesTable } from "./components/sales-table/SalesTable";
import { Header } from "./components/header/Header";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider, Toolbar } from "@mui/material";
import { SalesGraph } from "./components/SalesGraph";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F2747",
    },
  },
});

const App = () => {
  const apiData = fetchAPIData();
  const product = apiData.productData[0];
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Toolbar />
        <div style={{ width: 200 }}>
          <ProductPanel
            image={product.image}
            title={product.title}
            subtitle={product.subtitle}
            tags={product.tags}
          />
        </div>
        <div>
          <SalesGraph data={product.sales} />
          <SalesTable data={product.sales} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
