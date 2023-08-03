import Navigation from "../components/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShoppingBag } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";
import NavigationContainer from "../containers/NavigationContainer";

export default function Products(props) {
  // console.log(props)

  console.info("Product Page ", props.data);

  const [status, setStatus] = useState(false);
  function reloadPage(res) {
    props.addToCartHandler({price : 1244, name : "Boat Smart Watch"})
    setStatus(res);
  }

  return (
    <>
        <NavigationContainer/>
      <Container>
        <Row className="my-4">
          <Col md={3}>
            <ProductCard cardInfo={{
                productName : "Boat Watch",
                productPrice : 1300,
                productImage : "/Images/BoatWatch.png"
               }       
            } addToCart={props.addToCartHandler}  />    
          </Col>  

        </Row>
      </Container>
    </>
  );
}
