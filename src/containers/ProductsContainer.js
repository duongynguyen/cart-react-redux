import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';

class ProductsContainer extends Component {
  render() {
    let { products } = this.props;
    return (
      <Products>
        { this.showProducts(products) }
      </Products>
    );
  }

  showProducts(products) {
    let result = null;
    if (products.length > 0) {
      result = products.map((item, index) => {
        return <ProductItem key={index} product={item} />
      });
    }
    return result;
  }
}

const mapStateToProps = (state) => ({
  products: state.product
})

export default connect(mapStateToProps, null)(ProductsContainer);