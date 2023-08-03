import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShoppingBag } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";

export default function ProductCard(props) {
   const cardData = props.cardInfo;
  function submitResponse()
  {
    props.addToCart({ price: 1300, name: "smart watch" });
  
  }
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={cardData.productImage}
        title="smart watch"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardData.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price : &#x20B9; {cardData.productPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          endIcon={<ShoppingBag />}
        >
          Buy Now
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          endIcon={<ShoppingCart />}
           onClick={() => {
           submitResponse()
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>

  );
}
