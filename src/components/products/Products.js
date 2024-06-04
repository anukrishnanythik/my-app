import React, { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";

import { phoneData } from "./Productdata";

const Products = () => {
  const [items, setItems] = useState(phoneData);

  const changeCountp = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(newItem);
  };
  const changeCountn = (id) => {
    const newItem = items.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(newItem);
  };
  return (
    <>
      <Container>
        <div>
          <h1 className="bg-info text-light">products</h1>
        </div>
        {items.map((item) => (
          <div className="d-inline-flex" key={item.id}>
            <Card
              className="shadow-lg p-3 m-3 mb-5 bg-white rounded col-"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "20rem" }}
                src={require(`./assets/${item.image}.png`)}
              />
              <Card.Body>
                <Card.Title> {item.model}</Card.Title>
                <Card.Text> {item.desc}</Card.Text>
                <h5>Price:₹ {item.price}</h5>
                <p>
                  Qty:
                  <Button
                    onClick={() => changeCountn(item.id)}
                    variant="primary"
                    className="ms-2 me-2"
                  >
                    -
                  </Button>
                  {item.qty}
                  <Button
                    onClick={() => changeCountp(item.id)}
                    variant="primary"
                    className="ms-2"
                  >
                    +
                  </Button>
                </p>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
        ;
      </Container>
    </>
  );
};

export default Products;
