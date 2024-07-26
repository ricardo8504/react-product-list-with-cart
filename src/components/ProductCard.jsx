import { useContext } from "react";
import { ShoppingCartContext } from "../store/shopping-cart-context";

function ProductCard({ product }) {
  const cartContext = useContext(ShoppingCartContext);
  function addToCart() {
    cartContext.addToCart(product);
  }
    
  return (
    <div className="product-card">
      <img src={product.name==='Lemon Meringue Pie'? product.image.tablet : product.image.thumbnail} alt={product.name} />  
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;