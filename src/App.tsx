import React from "react";
import "./App.css";

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
  // Normally, we'd set up routes here, where
  // we could navigate from something like a "ListProducts" view
  // (which would initially call the API to fetch our data), and
  // click into a "ProductDetail", where the use of RTK will allow
  // us to have our pre-fetched data ready to render.

  // For the sake of this demo, just making the one page.
  return (
    <ThemeProvider theme={theme}>
      <ProductDetail />
    </ThemeProvider>
  );
};

export default App;
