import { useRef, useEffect, useState } from 'react';

function timersProduct(second) {
  const formatTime = (num) => {
    let min = Math.floor(num / 60);
    let seg = num - min * 60;
    min = `0${min}`;
    seg = seg < 10 ? `0${seg}` : seg;
    return `${min}:${seg}`;
  };
  const [num, setNum] = useState(second);
  const [pause, setPause] = useState(false);

  const intervalRef = useRef();

  const decreaseNum = () => {
    if (num > 0) {
      setNum((prev) => prev - 1);
    } else {
      setPause(true);
      clearInterval(intervalRef.current);
    }
  };
  useEffect(() => {
    if (!pause) {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [num]);

  return formatTime(num);
}

export default timersProduct;
