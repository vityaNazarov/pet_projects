import css from './App.module.css';
import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const setCountPlus = () => {
    setCount(count + 1);
  };

  const setCountMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className={css.app}>
      <div>
        <h2>Counter</h2>
        <h1>{count} </h1>
        <button onClick={setCountMinus} className={css.minus}>
          Minus
        </button>
        <button onClick={setCountPlus} className={css.plus}>
          Plus
        </button>
      </div>
    </div>
  );
};
