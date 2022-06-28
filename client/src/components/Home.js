import React, { useContext, useEffect, useState } from "react";
import { Nav, Form, Button } from "react-bootstrap";
import AddProduct from "./AddProduct";
import { GlobalContext } from "./context/GlobalState";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState();
  const [permission, setPermission] = useState(false);
  const { Products, getProducts } = useContext(GlobalContext);

  useEffect(
    () => {
      getProducts();
      setProducts(Products);
    },
    [setProducts, Products, getProducts]
  );
  return (
    <div>
      <Nav
        variant="pills"
        defaultActiveKey="/"
        className="justify-content-center gap-5 m-3 sticky-top navbar navbar-light bg-light"
      >
        <Nav.Item>
          <Button onClick={() => setPermission(pre => !pre)}>
            {permission ? "Go Back" : "Add Product"}
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Form.Control
            type="text"
            placeholder="Search Products..."
            onChange={e => setSearch(e.target.value)}
          />
        </Nav.Item>
      </Nav>
      <h2>E-Commerce</h2>
      <AddProduct
        products={products}
        search={search}
        shouldRender={permission}
      />
    </div>
  );
}

export default Home;
