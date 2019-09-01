import React, { Component } from "react";
import { withTranslation } from 'react-i18next';


class Products extends Component {
  
  render() {
    const { t } = this.props;
    return (
      <section className="section">
        <h1 className="section-heading">{t('products.title')}</h1>
        <div className="row">{this.props.children}</div>
      </section>
    );
  }
}

export default withTranslation()(Products);
