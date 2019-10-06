import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import countContext from './contexts/countContext';
import { StyledWidget } from './styled';

const initialCount = { number: 0 };
const userData = { users: [], currentUser: null };

function Top() {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount({ number: count.number + 1 });

  return (
    <StyledWidget color='grey'>
      <button onClick={increment}>increment</button>

      <countContext.Provider value={count}>
        <Counter />
      </countContext.Provider>
    </StyledWidget>
  );
}

ReactDOM.render(
  <Top />,
  document.querySelector('#target'),
);
