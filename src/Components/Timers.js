import {
  useState, useEffect, useRef,
} from 'react';
import assignProduct from './assingProduct';

export default function Timers(numbers, setNumbers, todos, setTodos) {
  const [pause, setPause] = useState(false);
  const intervalRef = useRef();
  function decreaseNumber() {
    const newNumbers = numbers.map((i) => {
      if (i > 0) {
        return i - 1;
      }
      return i;
    });
    if (newNumbers !== numbers) {
      setNumbers(newNumbers);
    } else {
      setPause(true);
      clearInterval(intervalRef.current);
    }
  }
  useEffect(() => {
    if (!pause) {
      intervalRef.current = setInterval(decreaseNumber, 1000);
      const values = assignProduct(
        todos.responses,
        numbers,
        todos.times,
      );
      setTodos({
        responses: todos.responses,
        section: values,
        times: todos.times,
      });
    }
    return () => clearInterval(intervalRef.current);
  }, [numbers[2]]);
}
