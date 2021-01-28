import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';


function formatCurrency(num) {
    return "$ " + Number(num.toFixed(2)).toLocaleString();
}

export default class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div className="cart-div">
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">Cart is empty</div>
                ) : (
                        <div className="cart cart-header">
                            You have {cartItems.length} in the cart{" "}
                        </div>
                    )}
                <div className="cart-main">
                    <div className='cart'>
                        <Fade right cascade >
                            <ul className='cart-items'>
                                {cartItems.map(item => (
                                    <li key={item._id}>
                                        <div className='cart-element'>
                                            <div className="cart-element-title">{item.title}
                                                <div>Quantity: {item.count}</div>
                                            </div>
                                            <div className="right">
                                                {formatCurrency(item.price)}
                                                <div className='buttons'>
                                                    <button className="button" onClick={() => this.props.removeCompletelyFromCart(item)}>
                                                        -
                                            </button>
                                                    <button className="button" onClick={() => this.props.addToCart(item)}>
                                                        +
                                            </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Fade>
                    </div>
                    {
                        cartItems.length !== 0 && (
                            <div className='cart-footer'>
                                <div className="total">
                                    <div className="cart-subtotal">
                                        <div>
                                            SUBTOTAL:
                                        </div>
                                        <div>
                                            {formatCurrency(
                                                cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                            )}
                                        </div>
                                    </div>
                                    <button className="button button-checkout">CHECKOUT</button>
                                </div>
                            </div>
                        )
                    }
                </div >
            </div >
        )
    }
}