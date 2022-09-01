import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DeleteProductCarThunk, GetProductsCarThunk } from "../store/slices/carShopping.slice";
import { saveCoundSubtract } from "../store/slices/countShopping.slice";
import ImageProduct from "./ImageProduct";

const CardShopping = ({ product }) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(GetProductsCarThunk());
  },[])
  const deleteProduct = () => {
    dispatch(DeleteProductCarThunk(product.id));
    dispatch(saveCoundSubtract());
  };
  return (
    <div class="card m-2" style={{ width: "18rem" }}>
      <div class="card-body">
        <div className="d-flex">
          <ImageProduct product={product} />
          <div className="m-3">
            <h5 class="card-title">{product.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              {product.productsInCart.quantity}
            </h6>
            <p class="card-text">{product.price}</p>
            <i onClick={deleteProduct} class="fas fa-trash card-link"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShopping;
