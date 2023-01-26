import React from "react";
import Product from "../components/Product/Product.component";
import ShoeData from "../data/ShoeData/ShoeData";

function HomePage(): JSX.Element {
  return (
    <section>
      <Product imageData={ShoeData.image} productData={ShoeData} />
    </section>
  );
}

export default HomePage;
