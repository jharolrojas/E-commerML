import React from "react";
import "../styles/CardPurchases.css";
import { useNavigate } from "react-router-dom";
import ImageProduct from "./ImageProduct";

const CardPurchases = ({ purchase }) => {
  const navigate = useNavigate();
  const see = (id) => {
    navigate(`/Product/${id}`);
  };
  return (
    <div className="container" style={{ backgroundColor: "#EDEDED" }}>
      <div className="  date"> {purchase.createdAt.slice(0, 10)}</div>

      <article className="container article">
        <p className="delivered">Delivered</p>
        {purchase?.cart.products.map((product) => (
          <div key={product.id}>
            <div className="d-flex m-3">
              <div onClick={() => see(product.id)}>
                <ImageProduct product={product} />
              </div>
              <div className="ms-3">
                <p onClick={() => see(product.id)} className="title">
                  {product.title}
                </p>

                <p className="title">
                  {product.productsInCart.quantity} u. | Color : Negro
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => see(product.id)}
              class="btn btn-primary buttomSee"
            >
              See primary Product
            </button>
          </div>
        ))}
      </article>
    </div>
  );
};

export default CardPurchases;
