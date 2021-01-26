// import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Parduotuvė</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}></Filter>
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">
              cart items
            </div>
          </div>
        </main>
        <footer>
          all rights reserved
      </footer>
      </div>
    );
  }
}

export default App;
