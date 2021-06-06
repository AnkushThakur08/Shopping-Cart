import React, { useState } from "react";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Toastify
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";

// Reactstrap
import { Container, Row, Col } from "reactstrap";

// Custom css
import "./App.css";

// Components
import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      return toast("Item is Already Added in the Cart", {
        type: "warning",
      });
    }
    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Successfully Purchased", {
      type: "success",
    });
  };

  const removeItem = (item) => {
    setCartItem(
      cartItem.filter((individualItem) => individualItem.id !== item.id)
    );
  };
  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
