import { useContext } from "react";
import { ShoppingCartContext } from "../store/shopping-cart-context";
function Cart() {
    const cartContext = useContext(ShoppingCartContext);
    return (
        <div>
        {cartContext.items.length === 0 && <p>Your cart is empty</p>}
        {cartContext.items.length > 0 && (
            <div>
                <h2>Your Cart</h2>
                <ul>
                    {cartContext.items.map((item) => (
                    <li key={item.name}>{item.name}</li>
                    ))}
                </ul>
            </div>)}
        </div>
    );
}

export default Cart;