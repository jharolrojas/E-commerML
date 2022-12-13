import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Form, NavDropdown } from "react-bootstrap";
import { useDispatch  } from "react-redux";
import logo from "../assets/logo.png";
import {
  GetProductsByCategoryThunk,
  GetProductsFilterThunk,
  GetProductsThunk,
} from "../store/slices/productsCrud.slice";
import "../styles/NavBar.css";
import { useForm } from "react-hook-form";
import CarShopping from "../page/CarShopping";

import { useNavigate } from "react-router-dom";
import { saveLogin } from "../store/slices/login.slice";
import { saveCarShopping } from "../store/slices/carShopping.slice";
import { GetPurchasesThunk, savePurchases } from "../store/slices/purchases.slice";



const NavBar = () => {
  const dispatch = useDispatch();
  const [categories, SetCategories] = useState([]);
  const { register, handleSubmit } = useForm();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://e-commerce-api.academlo.tech/api/v1/products/categories"
      )
      .then((res) => SetCategories(res.data.data.categories));
  }, []);
  const filterCategory = (id) => {
    navigate("/");
    dispatch(GetProductsByCategoryThunk(id));
  };

  const submit = (data) => {
    navigate("/");
    dispatch(GetProductsFilterThunk(data.search));
  };
  const deleteUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(saveLogin("login up"));
    dispatch(saveCarShopping([]));
    dispatch(savePurchases([]));
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <div className="c-img ">
              <img src={logo} alt="" />
            </div>
          </Navbar.Brand>
          <span className=" hiddentitle  me-4">E-commerce</span>
          <Form className="d-flex cSearch" onSubmit={handleSubmit(submit)}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              {...register("search")}
            />
            <div className="bottomSearch"></div>
          </Form>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <span className="  hidden appMovil">
              <i class="fas fa-mobile-alt "></i> Download the app free of
              mercado libre{" "}
            </span>
            <div className="c-main mt-3">
              <Nav.Link href="#/ " className="m-2">
                <i class="fas fa-home  hiddenReverse"></i> Home
              </Nav.Link>

              <NavDropdown
                className="m-2"
                title="categories"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item onClick={() => dispatch(GetProductsThunk())}>
                  All Products
                </NavDropdown.Item>
                {categories.map((category) => (
                  <NavDropdown.Item
                    key={category.id}
                    onClick={() => filterCategory(category.id)}
                  >
                    {category.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link href="#/Purchases" className="m-2">
                <i class="fas fa-history  hiddenReverse" onClick={()=>dispatch(GetPurchasesThunk())}></i> Purchases
              </Nav.Link>
              <Nav.Link className="m-2">
                {" "}
                <CarShopping />
              </Nav.Link>

              {user ? (
                <Nav.Link onClick={deleteUser} href="#/Login" className="m-2">
                  <i class="fas fa-sign-in-alt  hiddenReverse"></i> Logout
                </Nav.Link>
              ) : (
                <Nav.Link href="#/Login" className="m-2">
                  <i class="fas fa-sign-in-alt  hiddenReverse"></i> Login
                </Nav.Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
