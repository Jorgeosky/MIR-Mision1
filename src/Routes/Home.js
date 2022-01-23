import React, { useContext } from 'react';
import SendProducts from '../Components/ProductCard';
import { Context } from '../Hooks/Context';

const Home = function () {
  const { setTitle } = useContext(Context);
  setTitle('Products');
  return (
    <div className="Home">
      <div className="Title">
        <h3>Products</h3>
      </div>
      <div className="Products">
        <SendProducts />
      </div>
    </div>
  );
};

export default Home;
