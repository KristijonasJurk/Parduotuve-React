import React, { useState } from 'react';
import Products from './components/Products';
import data from "./data.json";
import Filter from "./components/Filter";
import Cart from './components/Cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      size: "",
      sort: "",
      sidebarActive: false,
    }
  }

  removeCompletelyFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x => x._id !== product._id),
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x => x._id !== product._id)));
  };
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
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  sortProducts = (event) => {
    const sort = event.target.value;
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
              <Products products={this.state.products}
                addToCart={this.addToCart}
              ></Products>
            </div>
            <div className={this.state.sidebarActive ? "sidebar sidebar-active" : "sidebar sidebar-deactive"}>
              <button className="sidebar-close" onClick={() => this.setState({ sidebarActive: !this.state.sidebarActive })}>
                {this.state.sidebarActive ? <i class="fas fa-times"></i> : <i class="fas fa-shopping-cart"></i>}
              </button>
              <Cart cartItems={this.state.cartItems}
                removeCompletelyFromCart={this.removeCompletelyFromCart}
                addToCart={this.addToCart} />
            </div>
          </div>
        </main>
        <footer>
          <div>Autorius: KristijonasJurk@gmail.com</div>
          <div>Github: https://github.com/KristijonasJurk</div>
        </footer>
      </div>
    );
  }
}

export default App;
