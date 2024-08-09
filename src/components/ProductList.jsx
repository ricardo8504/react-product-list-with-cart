import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://product-list-api-luismimultimedias-projects.vercel.app/api/product-list')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div  className="product-list-container">
       <h1>Desserts</h1>
       <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
    </div>
   
  );
}

export default ProductList;