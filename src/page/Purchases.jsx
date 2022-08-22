import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPurchases from "../components/CardPurchases";
import { GetPurchasesThunk } from "../store/slices/purchases.slice";
import '../styles/Purchases.css'

const Purchases = () => {
  const purchases = useSelector((state) => state.purchases);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPurchasesThunk());
  }, []);

  return (
    <>
     <h3 className="purchases">Purchases</h3>
     <p className="text">To see the product click on its name</p>

    <div className="d-flex justify-content-center flex-column align-items-center " >
     
      {purchases.map((purchase) => (
        <CardPurchases purchase={purchase} key={purchase.id} />
      ))}
    </div>
    </>
  );

};

export default Purchases;
