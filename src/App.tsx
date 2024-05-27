import React from "react";
import "./App.css";
import { fetchAPIData } from "./api/DataProvider";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ProductDetail } from "./pages/ProductDetail";

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
      <ProductDetail product={product} />ø
    </ThemeProvider>
  );
};

export default App;
