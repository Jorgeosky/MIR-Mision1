import React from 'react';
import SendProducts from '../Components/ProductCard';

const Home = function () {
  const element = (
    <div className="Home">
      <div className="Title">
        <div className="Line" />
        <h3>Products</h3>
      </div>
      <div className="Products">
        <SendProducts />
      </div>
    </div>
  );
  return element;
};

export default Home;
