import { connect } from "react-redux";
import Navigation from "../components/Navigation";

const mapStateToProps = (state) => ({
     data :state.CartItem
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
