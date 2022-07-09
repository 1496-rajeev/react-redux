import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, decreaseCount } from '../redux/actions/countAction';

export default function Home() {
  const currentCount = useSelector((state) => state.countReducer.count);
  const [count, setCount] = useState(currentCount);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    setCount(count + 1);
    dispatch(increaseCount(count));
  };

  const handleDecrease = () => {
    setCount(count - 1);
    dispatch(decreaseCount(count));
  };

  return (
    <div>
      <h1>Redux</h1>
      <p>{count}</p>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}
