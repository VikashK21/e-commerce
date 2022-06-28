import React from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";

function Product({ ele }) {
  async function controller() {
    await axios.delete(`http://localhost:3000/api/remove/${ele.id}`);
  }
  return (
    <Card style={{ width: "23rem" }}>
      {/* <Card.Img src={ele.image} /> */}
      <Card.Img src={ele.image} alt="image" />
      <Card.Body>
        <Card.Title>
          {ele.name}
        </Card.Title>
        <Card.Text>
          {ele.description}
        </Card.Text>
        <div className="d-flex flex-row justify-content-around">
          <Button>
            <i class="fa-solid fa-heart" />
          </Button>
          <h4>
            ₹ {ele.price}
          </h4>
          <Button onClick={controller}>
            <i class="fa-solid fa-trash" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
