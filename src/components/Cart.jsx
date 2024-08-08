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
                    <li key={item.name}>{item.name + " - " + item.quantity + " - $" + item.price}<button onClick={() => cartContext.removeProductFromCart(item)}>X</button></li>
                    ))}
                    <li>Total: ${cartContext.items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</li>
                </ul>
            </div>)}
        </div>
    );
}

export default Cart;