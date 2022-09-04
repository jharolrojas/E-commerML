import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CardShopping from "../components/CardShopping";
import {
  GetProductsCarThunk,
  saveCarShopping,
} from "../store/slices/carShopping.slice";
import { saveReset } from "../store/slices/countShopping.slice";
import { PostPurchasesThunk } from "../store/slices/purchases.slice";
import '../styles/carShopping.css'

const CarShopping = () => {
  const [addBuy, setAddBuy] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const count = useSelector(state => state.countShopping);

  useEffect(() => {
    dispatch(GetProductsCarThunk());
  }, []);
  const productsCar = useSelector((state) => state.carShopping);

  const buy = () => {
    if (count > 0) {
      dispatch(PostPurchasesThunk(productsCar));
      dispatch(saveCarShopping([]));
      setAddBuy(true);
      dispatch(saveReset())
    }
 
  };
  return (
    <div>
      <div variant="primary" onClick={handleShow} className="me-2 cConunt">
        Shopping car  <p className={` countSC ${ count > 0 && "countBackground"}`}>{count}</p>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {addBuy && (
            <h1 className="text-center" style={{ color: "green" }}>
              Buy successfully{" "}
            </h1>
          )}

          {productsCar.map((product) => (
            <CardShopping product={product} key={product.id} />
          ))}
          <div className="d-flex justify-content-center">
            <button onClick={buy} type="submit" class="btn btn-primary m-3 buy">
              Buy now
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CarShopping;
