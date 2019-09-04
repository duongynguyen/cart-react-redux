import React, { Component, Suspense } from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Message from './components/Message';
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={(<div>Loading...</div>)}>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <Message />
            <CartContainer />
          </div>
        </main>
        <Footer />
        </Suspense>
      </div>
    );
  }
}

export default App;
