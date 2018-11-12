import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component {
  render() {
    let { products } = this.props;
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {this.showProducts(products)}
        </div>
      </section>
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

export default (Products);