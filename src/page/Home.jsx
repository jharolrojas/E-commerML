import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import one from "../assets/1.webp";
import two from "../assets/2.webp";
import three from "../assets/3.webp";
import CardProductHome from "../components/CardProductHome";
import { GetProductsThunk } from "../store/slices/productsCrud.slice";
import "../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsCrud);

  useEffect(() => {
    dispatch(GetProductsThunk());
  }, []);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={one} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={two} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={three} alt="First slide" />
        </Carousel.Item>
      </Carousel>
      <div
        className="container d-flex flex-wrap justify-content-center"
        style={{ backgroundColor: " #EDEDED" }}
      >
        {products.map((product) => (
          <CardProductHome product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
