// import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Products from './components/Products';
import data from "./data.json";
import Filter from "./components/Filter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: ""
    }
  }
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if (item._id == product._id) {
        item.count++;
        alreadyInCart = true;
      }
    })
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 })
    }
  }
  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState(state => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
              ? a.price < b.price
                ? 1
                : -1
              : a._id < b._id
                ? 1
                : -1
        ),
    }));
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Parduotuvė</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
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
