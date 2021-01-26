import { render } from '@testing-library/react';
import React from 'react';
import data from "./data.json";

class App extend React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }

  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">Parduotuvė</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              products
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
