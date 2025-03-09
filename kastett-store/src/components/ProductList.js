import React, { useState } from 'react';
import productsData from '../data/products.json';
import Product from './Product';
import Pagination from './Pagination';

const ProductList = ({ filters = { sizes: [], priceRange: [] }, itemsPerRow = 3, maxRows = 3, showPagination = true, addToCart  }) => { 
  const filteredProducts = (productsData || []).filter(product => {
    const matchesSize = !filters.sizes || filters.sizes.length === 0 || filters.sizes.includes(product.size);
    const priceRange = filters.priceRange || [];
    const matchesPrice = priceRange.length === 0 || 
        (priceRange.includes('under 100') && product.price < 100) ||
        (priceRange.includes('100-300') && product.price >= 100 && product.price <= 300) ||
        (priceRange.includes('over 300') && product.price > 300);

    return matchesSize && matchesPrice;
  });

  const itemsPerPage = itemsPerRow * maxRows; // Количество элементов на странице
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  return (
    <div className="products" style={{ marginBottom: '50px' }}>
      <h2>Featured Items</h2>
      <div className="market">
      {displayedProducts.length === 0 ? (
        <p>Нет доступных товаров по заданным фильтрам.</p>
                ) : (
                    displayedProducts.map((product) => (
                        <Product 
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            size={product.size}
                            color={product.color}
                            price={product.price}
                            addToCart={addToCart}
                        />
                    ))
                )}
      </div>
      {showPagination && (
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
    </div>
  );
};

export default ProductList;
