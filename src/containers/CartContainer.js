import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Messages from "../constants/Messages";
import { actRemoveProductInCart, actChangeMessage } from "../actions/index";

class CartContainer extends Component {
  showCartItem = cart => {
    const { onDeleteProductInCart, onChangeMessage } = this.props;
    let result = (
      <tr>
        <td>{Messages.MSG_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => (
        <CartItem
          key={item.product.id}
          item={item}
          index={index}
          onDeleteProductInCart={onDeleteProductInCart}
          onChangeMessage={onChangeMessage}
        />
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

    return <CartResult total={result} />;
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: productId => {
      dispatch(actRemoveProductInCart(productId));
    },
    onChangeMessage: message => {
      dispatch(actChangeMessage(message));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
