import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top width="100%" height="250" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">
          Price : $ {product.productPrice}
        </CardText>
        <CardText className="secondary">{product.productColor}</CardText>
        <Button color="info" onClick={() => addInCart(product)}>
          BUY NOW
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
