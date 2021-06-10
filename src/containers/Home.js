import { connect } from "react-redux";
import Home from "../layouts/Home";
import { bindActionCreators } from "redux";
import {
  getRestaurantsAction,
  updateRestaurantByKey
} from "../actions/restaurant";

const mapStateToProps = (state) => ({
  orders: state.restaurants.orders
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getRestaurantsAction, updateRestaurantByKey },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
