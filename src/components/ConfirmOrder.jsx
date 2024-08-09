import { useContext } from "react";
import { ShoppingCartContext } from "../store/shopping-cart-context";
import iconOrderConfirmed from '../assets/images/icon-order-confirmed.svg';

function ConfirmOrder() {
    const cartContext = useContext(ShoppingCartContext);
    const isShowConfirmOrder = cartContext.isShowConfirmOrder;

    return ( 
        <>
            {isShowConfirmOrder &&
                <>
                    <div className="confirmation-cart-block">
                        
                    </div>
                    <div className="confirmation-order-container">
                        <div className="confirmation-cart">
                            <img className="confirmation-cart-icon" src={iconOrderConfirmed}/>
                            <h2>Order Confirmed</h2>
                            <h3>we hope you enjoy your food!</h3>
                            <ul className="confirmation-cart-list">
                                {cartContext.items.map((item, index) => (
                                    <li key={index} className="confirmation-cart-item">
                                        <div className="confirmation-cart-item-detail">
                                            <img src={item.image} alt={item.name}/>
                                            <div>
                                                <p className="cart-item-name">{item.name}</p>
                                                <p className="cart-item-total">
                                                    <span className="cart-item-quantity">{item.quantity}x</span>
                                                    <span className="cart-item-price">@${item.price}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <span className="confirmation-cart-item-total">${item.price * item.quantity}</span>
                                    </li>
                                ))}
                                <li className="cart-total">
                                    <span className="cart-total-text">Order Total</span>
                                    <span className="cart-total-price">${cartContext.items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
                                </li>
                            </ul>
                            <button className="cart-confirm-order-button" onClick={cartContext.startNewOrder}>Start New Order</button>    

                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default ConfirmOrder;