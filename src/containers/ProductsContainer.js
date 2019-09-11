import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "./../components/Products";
import ProductItem from "../components/ProductItem";
import PropTypes from "prop-types";
import { actAddToCart, actChangeMessage } from "../actions/index";

class ProductsContainer extends Component {
  showProducts = products => {
    let result = null;
    if (products.length > 0) {
      result = products.map((item, index) => {
        return (
          <ProductItem
            key={index}
            product={item}
            onAddToCart={this.props.onAddToCart}
            onChangeMessage={this.props.onChangeMessage}
          />
        );
      });
    }
    return result;
  };

  render() {
    const { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: product => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage: message => {
      dispatch(actChangeMessage(message));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
