import React, { Component } from "react";
import {
  MSG_DELETE_PRODUCT_IN_CART_SUCCESS,
  MSG_UPDATE_CART_SUCCESS
} from "../constants/Messages";

class CartItem extends Component {
  showSubTotal = (price, quantity) => price * quantity;

  onDelete = productId => {
    this.props.onDeleteProductInCart(productId);
    this.props.onChangeMessage(MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  };

  onUpdate = (productId, quantity) => {
    if (quantity > 0) {
      this.props.onUpdateProductInCart(productId, quantity);
      this.props.onChangeMessage(MSG_UPDATE_CART_SUCCESS);
    }
  };

  render() {
    const { item } = this.props;
    const { quantity } = item;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdate(item.product.id, item.quantity - 1)}
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdate(item.product.id, item.quantity + 1)}
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDelete(item.product.id)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
