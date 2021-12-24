import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function formatTime(num) {
  let min = Math.floor(num / 60);
  let seg = num - min * 60;
  min = `0${min}`;
  seg = seg < 10 ? `0${seg}` : seg;
  return `${min}:${seg}`;
}

function assignProduct(response, number, times) {
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
            state={{ data: response[i], timeres: number, position: array2 }}
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

function SendProducts() {
  const { state } = useLocation();
  const [num1, setNum1] = useState(state ? state.timeres[0] : 60);
  const [num2, setNum2] = useState(state ? state.timeres[1] : 120);
  const [num3, setNum3] = useState(state ? state.timeres[2] : 180);
  const [pause, setPause] = useState(false);

  const [todos, setTodos] = useState({
    responses: [],
    section: React.createElement(
      'div',
      {
        className: 'container',
      },
      [],
    ),
    times: [],
  });

  const intervalRef = useRef();

  const decreaseNum = () => {
    if (num1 > 0) {
      setNum1((prev) => prev - 1);
    }
    if (num2 > 0) {
      setNum2((prev) => prev - 1);
    }
    if (num3 > 0) {
      setNum3((prev) => prev - 1);
    } else {
      setPause(true);
      clearInterval(intervalRef.current);
    }
  };
  useEffect(() => {
    if (!pause) {
      intervalRef.current = setInterval(decreaseNum, 1000);
      const values = assignProduct(
        todos.responses,
        [num1, num2, num3],
        todos.times,
      );
      setTodos({
        responses: todos.responses,
        section: React.createElement(
          'div',
          {
            className: 'container',
          },
          values,
        ),
        times: todos.times,
      });
    }
    return () => clearInterval(intervalRef.current);
  }, [num3]);

  const fetchApi = async () => {
    // eslint-disable-next-line no-undef
    const response = await fetch('https://fakestoreapi.com/products');
    const responseJSON = await response.json();
    let array = [];
    const numbers = [num1, num2, num3];
    if (state) {
      console.log(state);
      array = state.position;
    } else {
      for (let i = 0; i < responseJSON.length; i += 1) {
        const time = Math.floor(Math.random() * numbers.length);
        array.push(time);
      }
    }
    const values = assignProduct(responseJSON, numbers, array);
    setTodos({
      responses: responseJSON,
      section: React.createElement(
        'div',
        {
          className: 'container',
        },
        values,
      ),
      times: array,
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return todos.section;
}

export default SendProducts;
