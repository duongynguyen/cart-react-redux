import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Messages from "../constants/Messages";

class CartContainer extends Component {
  showCartItem = cart => {
    let result = Messages.MSG_CART_EMPTY;
    if (cart.length > 0) {
      result = cart.map((item, index) => (
        <CartItem key={item.product.id} item={item} index={index} />
      ));
    }
    return result;
  };

  showTotalAmount = cart => {
    let result = 0;
    if (cart.length > 0) {
      for (const item of cart) {
        result += item.product.price * item.quantity;
      }
    }

    return <CartResult total={result}/>;
  };

  render() {
    const { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  null
)(CartContainer);
