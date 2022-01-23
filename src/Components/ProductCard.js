import React, {
  useEffect, useContext,
} from 'react';
import assignProduct from './assingProduct';
import { ContextTimer } from '../Hooks/Context';
import Timers from './Timers';
import { fetchApi } from '../Utils/Utils';

const SendProducts = function () {
  const {
    numbers, setNumbers, position, setPosition, todos, setTodos,
  } = useContext(ContextTimer);

  Timers(numbers, setNumbers, todos, setTodos);

  const fetchApis = async () => {
    const responseJSON = await fetchApi();
    let array = [];
    console.log(position);
    if (position) {
      console.log('xd');
      array = position;
    } else {
      for (let i = 0; i < responseJSON.length; i += 1) {
        const time = Math.floor(Math.random() * numbers.length);
        array.push(time);
      }
      setPosition(array);
    }
    const values = assignProduct(responseJSON, numbers, array);
    setTodos({
      responses: responseJSON,
      section: values,
      times: array,
    });
  };

  useEffect(() => {
    fetchApis();
  }, []);
  return (
    <div className="container">
      {todos.section}
    </div>
  );
};

export default SendProducts;
