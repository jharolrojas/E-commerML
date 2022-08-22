import React from "react";
import { useSelector } from "react-redux";
import "../styles/ImageProduct.css";

const ImageProduct = ({ product }) => {
  const products = useSelector((state) => state.productsCrud);

  const urlImage = products.find((element) => element.id == product.id);

  return (
    <div className="imgPurchases">
      <img src={urlImage?.productImgs[0]} alt="" />
    </div>
  );
};

export default ImageProduct;
