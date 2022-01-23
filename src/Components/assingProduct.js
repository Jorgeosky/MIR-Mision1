import React from 'react';
import { Link } from 'react-router-dom';
import { formatTime } from '../Utils/Utils';

export default function assignProduct(response, number, times) {
  const array1 = [];
  const array2 = times;
  for (let i = 0; i < response.length; i += 1) {
    const product = React.createElement(
      'div',
      {
        className: 'item',
        key: `item${i}`,
      },
      <>
        <img src={response[i].image} alt={`item${i}`} />
        <h4>{response[i].title}</h4>
        <div className="Timers">
          <p>{formatTime(number[array2[i]])}</p>
          <Link
            to={
              formatTime(number[array2[i]]) === '00:00'
                ? ''
                : `/detalle/${response[i].id}`
            }
            state={{
              data: response[i], timeres: number, position: array2, page: true,
            }}
            target={formatTime(number[array2[i]]) === '00:00' ? '' : ''}
          >
            <button type="button" className="productLink">
              {formatTime(number[array2[i]]) === '00:00'
                ? 'Not available'
                : 'Go to details'}
            </button>
          </Link>
        </div>
      </>,
    );
    array1.push(product);
  }
  return array1;
}
