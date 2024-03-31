import React, { useState, useEffect } from 'react';

const Product = ({ name, price }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Fetch products from API or use mock data
    const fetchData = async () => {
      // Replace this with your actual API call or mock data
      const response = await fetch('https://fakestoreapi.com/products?limit=20');
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Sort products based on price
    const sorted = [...products].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedProducts(sorted);
  }, [products, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className='text-white m-1 mx-10'>
      <button onClick={toggleSortOrder}>
        {sortOrder === 'asc' ? 'Sort by Price (Low to High)' : 'Sort by Price (High to Low)'}
      </button>
      <div className="product-list">
        {sortedProducts.map((product, index) => (
          <Product key={index} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
