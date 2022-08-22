import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/CardProductRelated.css";

const CardProductRelated = ({ product }) => {
  const navigate = useNavigate();
  const goingToProductDetail = () => navigate(`/Product/${product.id}`)
  return (
    <div className="cCardR" >
      <article className="cardR d-flex" onClick={goingToProductDetail}>
        
        <div className="cImgCardR">
          <img src={product.productImgs[0]} alt="product image" />
        </div>

        <div>
        <div>
          <del className="pricePreviousR ms-2">
            {Number(product.price) * 0.1 + Number(product.price)}
          </del>
        </div>
        <p className="ms-2 mt-1 mb-0">
          $/ {product.price} <span className="OffR">10% OFF</span>
        </p>
        <span className="shippingR ms-2">Free shipping</span>
        <h1 className="titleProductR ms-2 mt-2">{product.title}</h1>
        </div>
      </article>
    </div>
  );
};

export default CardProductRelated;
