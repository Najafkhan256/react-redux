import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart, removeToCart } from "../services/actions/actions";
// what is container?

// connect redux with react
// import react-redux, action and component
// use mapDispatchToProps
// use mapStateToProps

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  addProduct: (data) => dispatch(addToCart(data)),
  removeProduct: (data) => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
