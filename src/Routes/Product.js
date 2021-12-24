import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Product() {
  const { state } = useLocation();
  const { data } = state;
  const element = (
    <div className="Product">
      <navbar className="Navegation">
        <ul>
          <Link
            to="/"
            state={{ timeres: state.timeres, position: state.position }}
            className="Link"
          >
            <li>Home</li>
          </Link>
          <li>Details of Product</li>
          <Link
            to="/About"
            state={{ timeres: state.timeres, position: state.position }}
            className="Link"
          >
            <li>About</li>
          </Link>
        </ul>
      </navbar>
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

  return element;
}

export default Product;
