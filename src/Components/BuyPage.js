import React, { useState, useEffect } from "react";

// faker
import { commerce } from "faker";

// Axios
import Axios from "axios";

// uuid
import { v4 } from "uuid";

// reactstrap
import { Container, Row, Col } from "reactstrap";
import CartItem from "./CartItem";

const localurl =
  "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localurl, {});

    const { photos } = data;

    const allProducts = photos.map((photo) => ({
      tinyImage: photo.src.tiny,
      smallImage: photo.src.medium,
      productName: commerce.productName(),
      productPrice: commerce.price(),
      productColor: commerce.color(),
      id: v4(),
    }));

    setProduct(allProducts);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <Container fluid>
      <h1 className="text-center text-info"> BUY PAGE</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
