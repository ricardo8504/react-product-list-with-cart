import ProductList from './components/ProductList';
import './App.css';
import Cart from './components/Cart';
import ShoppingCartProvider from './store/shopping-cart-context';

function App() {
  return (
    <ShoppingCartProvider>
      <div className="search-page">
        <ProductList></ProductList>
        <Cart/>
      </div>
    </ShoppingCartProvider>
  )
}

export default App
