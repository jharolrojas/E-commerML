import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GetProductDetailThunk } from "../store/slices/productDetail.slice";
import "../styles/ProductDetail.css";
import star from "../assets/star.png";
import ProductsRelated from "../components/ProductsRelated";
import calification from "../assets/calificacion.png";
import { PostProductCarThunk } from "../store/slices/carShopping.slice";
import { useForm } from "react-hook-form";

const ProductDetail = () => {
  const [addProducts, setAddProducts] = useState(false);
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  useEffect(() => {
    dispatch(GetProductDetailThunk(id));
  }, [id]);
  const product = useSelector((state) => state.productDetal);
  const image = (img) => {
    setImageSlider(img);
  };
  const [imageSlider, setImageSlider] = useState();

  const add = (data) => {
    const body = { id: product.id, quantity: data.quantity };
    dispatch(PostProductCarThunk(body));
  };
  const addProduct = () => {
    if (localStorage.getItem("token")) setAddProducts(true);
    else navigator("/Login");
  };
  const alerts = () => {
    Swal.fire({
      title: "product added successfully",
      background: "#FFF",
      color: "black",
      icon: "success",
      confirmButtonColor:"#81DF03"
    });

    setAddProducts(!addProducts);
  };
  return (
    <>
      {addProducts && alerts()}
      <div className="container d-flex flex-wrap">
        <aside>
          {product.productImgs?.map((img) => (
            <div
              key={img}
              onMouseOver={() => image(img)}
              className="previewImage"
            >
              <img src={img} alt="image" />
            </div>
          ))}
        </aside>
        <section>
          <div>
            <div className="imageProduct">
              <img
                src={imageSlider ? imageSlider : product.productImgs?.[0]}
                alt="image"
              />
            </div>
          </div>
          <div className="mt-3">
            <p className="text-center fs-3">Description</p>
            {product.description}
          </div>
          <div className="calification">
            {" "}
            <img className="mt-5 " src={calification} alt="calification" />
          </div>
        </section>
        <div className="d-flex flex-column cProductInfo">
          <article className="productInfo  p-3 ">
            <div className="d-flex  justify-content-between titleDetail ">
              <h5>{product?.title}</h5>
              <div className="fs-5">❤️</div>​
            </div>
            <div className="star">
              <img src={star} alt="" />
            </div>
            <div>
              <del className="pricePreiousDetail ms-2">
                {Number(product.price) * 0.1 + Number(product.price)}
              </del>
            </div>
            <p className="price">
              $/ {product.price} <span className="Off">10% OFF</span>
            </p>
            <p>
              in{" "}
              <span className="Off">
                {" "}
                12 x $/ {Math.floor(Number(product.price) / 12)} without
                interest
              </span>
            </p>
            <p className="offer">OFFER OF THE DAY</p>
            <p>
              <p className="shipping m-0">
                <i class="fas fa-truck"></i> <span>arrive free tomorrow</span>
              </p>
              <span className="hourShipping">
                Buying within the next 7 h 52 min
              </span>
            </p>
            <p>
              <p className="shipping m-0">
                <i class="fas fa-reply"></i> <span>free return</span>
              </p>
              <span className="hourShipping">
                You have 30 days from when you receive it.
              </span>
            </p>
            <span>Quantity</span>{" "}
            <form onSubmit={handleSubmit(add)}>
              <select
                className="select"
                type="quantity"
                {...register("quantity")}
              >
                <option value="1">1 unit</option>
                <option value="2">2 unit</option>
                <option value="3">3 unit</option>
                <option value="4">4 unit</option>
              </select>
              <span className="pricePreiousDetail quantity">
                {" "}
                (156 Available)
              </span>
              <div className="d-flex justify-content-center">
                <button
                  onClick={addProduct}
                  type="submit"
                  class="btn btn-primary m-3 buy"
                >
                  Add to cart
                </button>
              </div>
            </form>
            <p className="protected">
              <i class="fas fa-shield-alt"></i> Protected Purchase, receive the
              product you expected or your money back.
            </p>
            <p className="protected">
              <i class="fas fa-medal"></i> 1 month factory warranty.
            </p>
          </article>

          <div className="cProductInfo">
            <ProductsRelated product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
