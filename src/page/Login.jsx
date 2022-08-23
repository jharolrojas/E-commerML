import React, { useState } from "react";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../store/slices/token.slice";
import { useDispatch } from "react-redux/es/exports";
import { GetPurchasesThunk } from "../store/slices/purchases.slice";
import { GetProductsCarThunk } from "../store/slices/carShopping.slice";
import { useEffect } from "react";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [invalid, setInvaid] = useState(false);

  const submit = (data) => {
    axios
      .post(
        `https://ecommerce-api-react.herokuapp.com/api/v1/users/login`,
        data
      )
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        navigate("/");
        dispatch(saveToken(res.data.data.token));
        dispatch(GetPurchasesThunk());
       dispatch(GetProductsCarThunk());
        localStorage.setItem("token", res.data.data.token);
      })
      .catch(
        setTimeout(function () {
          setInvaid(true);
        }, 1000)
      );
  };

  return (
    <div className="containerLogin d-flex justify-content-center ">
      <div className="backgroundYellew"></div>
      <div className="login">
        <div className="dataLogin d-flex flex-column justify-content-center mt-4">
          <h5 className="text-center">
            ¡Hello! To continue, enter your email or username
          </h5>
        </div>
        <form
          className="d-flex flex-column justify-content-center  align-items-center"
          onSubmit={handleSubmit(submit)}
        >
          <div className="form-group m-2">
            <label htmlFor="exampleInputEmail1" className="label">
              Email: <i className="fas fa-envelope"></i> GratisUser@gmail.com{" "}
            </label>
            <input
              type="email"
              className="form-control input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("email")}
            />
          </div>
          <div className="form-group m-1 mb-0">
            <label htmlFor="exampleInputPassword1" className="label">
              Password: <i className="fas fa-lock"></i> 123456
            </label>
            <input
              type="password"
              className="form-control input"
              id="exampleInputPassword1"
              {...register("password")}
            />
          </div>
          {invalid && <span>Invalid User</span>}

          <button
            type="submit"
            className="btn btn-primary  mt-4 mb-3 p-2"
            style={{ width: "70%" }}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
