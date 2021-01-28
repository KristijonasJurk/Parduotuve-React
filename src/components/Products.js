import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';


function formatCurrency(num) {
    let number = num.toFixed(2).slice(0, -3);
    return "  " + Number(number).toLocaleString() + ".";
}

function formatCurrencySmall(num) {
    let number = num.toFixed(2).slice(-2);
    if (number.charAt(number.length - 2) == 0) {
        return Number(number).toLocaleString().slice(-2) + '0';
    }
    return Number(number).toLocaleString().slice(-2);
}


export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
    }
    openModal = (product) => {
        this.setState({ product });
    };
    closeModal = () => {
        this.setState({ product: null });
    };
    render() {
        const { product } = this.state;
        return (
            <div>
                <Fade bottom cascade={true}>
                    <ul className="products">
                        {this.props.products.map(product => (
                            <li key={product._id}>
                                <div className="product">
                                    <a href={"#" + product._id}
                                        onClick={() => this.openModal(product)}>
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
                                        <button onClick={() => {
                                            this.props.addToCart(product)
                                            this.sidebarActive(true);
                                        }}
                                            className="button primary">
                                            Add to Cart
                                    </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fade>
                {
                    product && (
                        <Modal isOpen={true}
                            onRequestClose={this.closeModal}>
                            <Zoom>
                                <button className="close-modal" onClick={this.closeModal}>
                                    X
                            </button>
                                <div className="product-details">
                                    <img src={product.image} alt={product.title}></img>
                                    <div className="product-details-description">
                                        <p>
                                            <strong>{product.title}</strong>
                                        </p>
                                        <div className="modal-price">
                                            <div>$ {product.price}</div>
                                            <button
                                                className="button-modal"
                                                onClick={() => {
                                                    this.props.addToCart(product);
                                                    this.closeModal();
                                                }}
                                            >
                                                ADD TO CART
                                         </button>
                                        </div>
                                        <h3>Product description</h3>
                                        <p>{product.description}</p>
                                        <button
                                            className="button-modal button-modal-back"
                                            onClick={() => {
                                                this.closeModal();
                                            }}
                                        >
                                            BACK
                                         </button>
                                    </div>
                                </div>
                            </Zoom>
                        </Modal>
                    )
                }
            </div >
        )
    }
}
