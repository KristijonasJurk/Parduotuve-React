import React, { Component } from 'react';

function formatCurrency(num) {
    return "  " + Number(num.toFixed(0)).toLocaleString() + ".";
}
function formatCurrencySmall(num) {
    return Number(num.toFixed(2)).toLocaleString().slice(3, 5);
}


export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>
                                    <img src={product.image} alt={product.title} />
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                                <div className="product-price">
                                    <div className="price-tag">
                                        <div className="smaller">
                                            $
                                        </div>
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <div className="smaller">
                                            {formatCurrencySmall(product.price)}
                                        </div>
                                    </div>
                                    <button className="button primary">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
