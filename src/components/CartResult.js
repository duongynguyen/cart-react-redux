import React, { Component } from "react";

class CartResult extends Component {
  render() {
    let { cart } = this.props;
    return (
      <tr>
        <td colSpan="3" />
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.showSumTotal(cart)}$</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Complete purchase
            <i className="fa fa-angle-right right" />
          </button>
        </td>
      </tr>
    );
  }

  showSumTotal = arr => {
    let result = 0;
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        result += arr[i].product.price * arr[i].quantity;
      }
    }
    return result;
  };
}

export default CartResult;
