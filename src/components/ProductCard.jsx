import { useContext } from "react";
import { ShoppingCartContext } from "../store/shopping-cart-context";
import logoAddToCart from '../assets/images/icon-add-to-cart.svg';
import iconDecrementQuantity from '../assets/images/icon-decrement-quantity.svg';
import iconIncrementQuantity from '../assets/images/icon-increment-quantity.svg';

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
      <img src={product.image.thumbnail} alt={product.name} />  
      
      <div className="product-card-body">
        { !cartProduct && <button className="product-card-add-to-cart-button" onClick={addToCart}><img src={logoAddToCart}/><span>Add to Cart</span></button>}
        { cartProduct && 
          <div className="product-card-update-cart-button">
            <img src={iconDecrementQuantity} onClick={() => cartContext.updateProductQuantity(cartProduct, cartProduct.quantity - 1)} />
            <span>{cartProduct.quantity}</span>
            <img src={iconIncrementQuantity} onClick={() => cartContext.updateProductQuantity(cartProduct, cartProduct.quantity + 1)}/> 
          </div>
        }
        <p className="product-card-category">{product.category}</p>
        <p className="product-card-title">{product.name}</p>
        <p className="product-card-price">${product.price}</p>
      </div>
      
    </div>
  );
}

export default ProductCard;