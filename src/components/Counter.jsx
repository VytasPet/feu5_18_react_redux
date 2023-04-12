import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './ui/card/Card';

function Counter() {
  // nuskaityt redux data
  const counterFromStore = useSelector((state) => state.counter);
  // niekada nekeitineti(pridet, atimt ar kazka..)

  // inicijuoti pokyti su useDispatch
  const dispatch = useDispatch();

  function upHandler() {
    dispatch({ type: 'UP' });
  }

  return (
    <Card>
      <h2>Push ups</h2>
      <p className="value">{counterFromStore}</p>
      <div className="control">
        <button onClick={upHandler}>Up</button>
        <button>Down</button>
      </div>
    </Card>
  );
}

export default Counter;
