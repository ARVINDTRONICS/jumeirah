import React from "react";
import { Menu } from "../../components/Menu";
import Loader from "../../assets/img/loader.gif";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orders,
      restaurant: null
    };
  }
  async componentDidMount() {
    let response = await this.props.getRestaurantsAction();

    this.setState({ restaurant: response });
  }

  addToOrders = () => {
    console.log("order triggered");
    this.setState({ orders: this.state.orders + 1 }, () => {
      this.props.updateRestaurantByKey({ orders: this.state.orders });
    });
  };
  render() {
    if (this.state.restaurant) {
      let { restaurant } = this.state;

      return (
        <>
          <div className="home">
            <div className="home-image-wrap">
              <div class="radial-gradient-container"></div>
              <div className="linear-gradient"></div>
              <img
                src={restaurant.info ? restaurant.info.image_url : ""}
                alt="icon"
              />
            </div>
            <div className="top-bar d-flex-row flex-center flex-space-evenly ">
              <h2>English</h2>
              <h2>رَبٍّ زِدْنٍي عِلمً</h2>
              <h2>PyccKNN</h2>
            </div>
            <div className="title">
              <div className="logo"></div>
              <div>
                <button type="button" className="btn btn-lg">
                  MY ORDERS
                  <span class="badge ">{this.state.orders}</span>{" "}
                </button>
              </div>
            </div>
            <div className="restaurant-header">
              <h3>
                {restaurant.info.restaurant_name +
                  ", " +
                  restaurant.info.restaurant_location}
              </h3>
              <h4>
                {restaurant.info.in_room_dining
                  ? "In Room Dining"
                  : restaurant.info.open_for_guest_order
                  ? "Open for Guest Order"
                  : ""}
              </h4>
            </div>
            <div>
              <Menu
                menuItems={this.state.restaurant.menu}
                addToOrders={this.addToOrders}
              />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className="loader">
          <img src={Loader}></img>
        </div>
      );
    }
  }
}
export default Home;
