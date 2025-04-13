import ProductList from '../../components/ProductList';
import productsData from '../../products.json';
import { useState } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState(productsData.slice(0, 3));

  const loadMoreProducts = () => {
    setProducts((prev) => [...prev, ...productsData.slice(prev.length, prev.length + 3)]);
  };

  return (
    <div>
      <h1>Каталог товаров</h1>
      <ProductList products={products} />
      <button onClick={loadMoreProducts}>Показать больше</button>
    </div>
  );
};

export default ProductsPage;
