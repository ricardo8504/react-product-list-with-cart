import { useContext } from "react";
import { ShoppingCartContext } from "../store/shopping-cart-context";
import iconRemoveItem from '../assets/images/icon-remove-item.svg';
import iconCarbonNeutral from '../assets/images/icon-carbon-neutral.svg';

function Cart() {
    const cartContext = useContext(ShoppingCartContext);
    return (
        <div className="cart-container">
            <div className="cart">
                <h2>Your Cart({cartContext.items.length})</h2>
                <ul>
                    {cartContext.items.map((item, index) => (
                        <li key={index} className="cart-item">
                            <div>
                                <p className="cart-item-name">{item.name}</p>
                                <p className="cart-item-total">
                                    <span className="cart-item-quantity">{item.quantity}x</span>
                                    <span className="cart-item-price">@${item.price} ${item.price * item.quantity}</span>
                                </p>
                            </div>
                            <img src={iconRemoveItem} onClick={() => cartContext.removeProductFromCart(item)}/>
                        </li>
                    ))}
                    <li className="cart-total">
                        <span className="cart-total-text">Order Total</span>
                        <span className="cart-total-price">${cartContext.items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
                    </li>
                </ul>
                <div className="cart-carbon-neutral">
                    <img src={iconCarbonNeutral}/>
                    <span>this is a <strong>carbon-neutral</strong> delivery</span>
                </div>
                <button className="cart-confirm-order-button" onClick={cartContext.showConfirmOrder}>Confirm Order</button>    

            </div>
        </div>
        
    );
}

export default Cart;