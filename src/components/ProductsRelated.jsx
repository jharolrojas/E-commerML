import React from "react";
import { useSelector } from "react-redux/es/exports";
import CardProductRelated from "./CardProductRelated";

const ProductsRelated = ({ product }) => {
  const products = useSelector((state) => state.productsCrud);
  const related = [];
  const filter = products.map((element) => {
    if (element.category.name == product.category) {
      related.push(element);
    }
  });



  return (
    <div className="productInfoR mt-2">
      {related.map((element) => (
        <CardProductRelated product={element} key={element.id} onClick={scroll(0, 0)} />
      ))}
    </div>
  );
};

export default ProductsRelated;
