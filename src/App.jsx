import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import countContext from './contexts/countContext';

const initialCount = { number: 0 };
const userData = { users: [], currentUser: null };

function Top() {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount({ number: count.number + 1 });

  return (
    <div>
      <button onClick={increment}>increment</button>

      <countContext.Provider value={count}>
        <Counter />
      </countContext.Provider>
    </div>
  );
}

ReactDOM.render(
  <Top />,
  document.querySelector('#target'),
);
