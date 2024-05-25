import React from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchAPIData } from "./api/DataProvider";
import {ProductPanel} from "./components/ProductPanel";

const App = () => {
  const apiData = fetchAPIData();
  const product = apiData.productData[0];
  return (
    <div className="App">
      <div style={{'width': 200}}>
        <ProductPanel
            image={product.image}
            title={product.title}
            subtitle={product.subtitle}
            tags={product.tags}
        />
      </div>
    </div>
  );
}

export default App;
