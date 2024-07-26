import ProductList from './components/ProductList';
import './App.css';
import { ShoppingCartContext } from './store/shopping-cart-context';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [shoppingCart, setShoppingCart] = useState({items: [], description: ""});

  function handleAddToCart(product) {
    setShoppingCart((prevState) => {
      return {
        ...prevState,
        items: [...prevState.items, product]
      }
    });
  }

  const cart = {
    items: shoppingCart.items,
    addToCart: handleAddToCart
  };

  return (
    <ShoppingCartContext.Provider value={cart}>
      <div className="search-page">
        <ProductList></ProductList>
        <Cart/>
      </div>
    </ShoppingCartContext.Provider>
  )
}

export default App
