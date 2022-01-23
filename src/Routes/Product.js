import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Timers from '../Components/Timers';
import { Context, ContextTimer } from '../Hooks/Context';

const Product = function () {
  const {
    numbers, setNumbers, todos, setTodos,
  } = useContext(ContextTimer);
  const { setTitle } = useContext(Context);
  const { state } = useLocation();
  const { data } = state;
  setTitle('About Product');
  Timers(numbers, setNumbers, todos, setTodos);
  return (
    <div className="Product">
      <div className="Item">
        <div className="Image">
          <img src={data.image} alt="Product" />
        </div>
        <div className="Detail">
          <h1>{data.title}</h1>
          <div className="SubDetail">
            <div className="data">
              <p>{`Category: ${data.category}`}</p>
              <p>{`rate: ${data.rating.rate}`}</p>
            </div>
            <div className="description">
              <p>
                {data.description}
                <br />
                <br />
                {`count: ${data.rating.count}`}
              </p>
            </div>
            <p className="price">{`${data.price} $`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
