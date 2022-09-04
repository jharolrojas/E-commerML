import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/CardProductHome.css";

const CardProductHome = ({ product }) => {
  const navigate = useNavigate();
  const goingToProductDetail = () => navigate(`/Product/${product.id}`);
  return (
    <div className="cCard" onClick={goingToProductDetail} translate="no">
      <article className="card cardH">
        <div className="cImgCard">
          <img src={product.productImgs[0]} alt="product image" />
        </div>
        <div>
          <del className="pricePrevious ms-2">
            {Number(product.price) * 0.1 + Number(product.price)}
          </del>
        </div>
        <p className="ms-2 mt-1 mb-0">
          $/ {product.price} <span className="Off">10% OFF</span>
        </p>
        <span className="shipping ms-2">Free shipping</span>
        <h1 className="titleProduct ms-2 mt-2">{product.title}</h1>
      </article>
    </div>
  );
};

export default CardProductHome;
