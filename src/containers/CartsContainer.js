import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import * as Message from "../constants/Messages";
import CartResult from "../components/CartResult";

class CartsContainer extends Component {
  render() {
    let { carts } = this.props;
    return (
      <Cart>
        {this.showCartItem(carts)}
        {this.showSumTotal(carts)}
      </Cart>
    );
  }

  showSumTotal = arr => {
    var result = null;
    if (arr.length > 0) {
      return <CartResult cart={arr} />;
    }
    return result;
  };

  showCartItem = arr => {
    var result = Message.MSG_CART_EMPTY;
    if (arr.length > 0) {
      result = arr.map((item, index) => {
        return <CartItem key={index} index={index} item={item} />;
      });
    }
    return result;
  };
}

CartsContainer.propTypes = {
  carts: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => ({
  carts: state.cart
});

export default connect(
  mapStateToProps,
  null
)(CartsContainer);
