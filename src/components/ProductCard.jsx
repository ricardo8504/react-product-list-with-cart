import { useContext } from "react";
import { ShoppingCartContext } from "../store/shopping-cart-context";

function ProductCard({ product }) {
  const cartContext = useContext(ShoppingCartContext);
  function addToCart() {
    var cartProduct = {
      name: product.name,
      price: product.price,
      image: product.image.thumbnail,
      quantity: 1
    }
    cartContext.addToCart(cartProduct);
  }

  //check if the product is already in the cart
  const cartProduct = cartContext.getProductFromCart(product);
    
  return (
    <div className="product-card">
      <img src={product.name==='Lemon Meringue Pie'? product.image.tablet : product.image.thumbnail} alt={product.name} />  
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      { !cartProduct && <button onClick={addToCart}>Add to Cart</button>}
      { cartProduct && 
        <p>
          <button onClick={() => cartContext.updateProductQuantity(cartProduct, cartProduct.quantity - 1)}>-</button> 
          {cartProduct.quantity}
          <button  onClick={() => cartContext.updateProductQuantity(cartProduct, cartProduct.quantity + 1)}>+</button> 
        </p>
      }
    </div>
  );
}

export default ProductCard;