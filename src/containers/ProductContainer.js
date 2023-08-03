import { connect } from "react-redux";
import Products from "../Pages/Products";
import { AddToCart } from "../services/actions/action";

const mapStateToProps = (state) => ({
     data :state.CartItem
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(AddToCart(data)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
