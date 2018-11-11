import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';

class Products extends Component {
  render() {
    let {products} = this.props;
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          { this.showProducts(products) }
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

const mapStateToProps = (state) => ({
  products: state.product
})

export default connect(mapStateToProps, null)(Products);