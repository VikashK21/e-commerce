import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Product from "./Product";
import "../App.css";
import axios from "axios";

function AddProduct({ products, search, shouldRender }) {
  const [create, setCreate] = useState({});
  async function addProduct(e) {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/addpro", create);
    setCreate({
      name: "",
      description: "",
      price: "",
      image: "",
      msg: "Successfully added"
    });
    setTimeout(
      () =>
        setCreate(pre => ({
          ...pre,
          msg: ""
        })),
      3000
    );
  }
  return (
    (shouldRender &&
      <Container className="mt-5">
        <h3>
          {create.msg}
        </h3>
        <Form onSubmit={addProduct}>
          <Form.Control
            value={create.name}
            type="text"
            placeholder="Product Name..."
            required
            onChange={e => setCreate(pre => ({ ...pre, name: e.target.value }))}
          />
          <Form.Control
            as="textarea"
            value={create.description}
            placeholder="Product Description..."
            required
            onChange={e =>
              setCreate(pre => ({ ...pre, description: e.target.value }))}
          />
          <Form.Control
            type="number"
            value={create.price}
            placeholder="Prodcut price"
            required
            onChange={e =>
              setCreate(pre => ({ ...pre, price: e.target.value }))}
          />
          <Form.Control
            type="text"
            placeholder="Image Address - https://.....jpg"
            value={create.image}
            onChange={e =>
              setCreate(pre => ({ ...pre, image: e.target.value }))}
          />
          <Button type="submit" className="mt-2">
            Create
          </Button>
        </Form>
      </Container>) ||
    <Container className="d-flex flex-wrap justify-content-around">
      {products &&
        products.length > 0 &&
        products.map((ele, ind) => {
          if (
            !search ||
            ele.name.includes(search) ||
            ele.name.toLowerCase().includes(search)
          ) {
            return <Product key={ind} ele={ele} />;
          }
        })}
    </Container>
  );
}

export default AddProduct;
