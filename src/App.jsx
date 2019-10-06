import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import userContext from './contexts/userContext';

const initial = { number: 0 };

function Top() {
  const [count, setCount] = useState(initial);
  const increment = () => setCount({ number: count.number + 1 });

  return (
    <div>
      <button onClick={increment}>increment</button>

      <userContext.Provider value={count}>
        <Container />
      </userContext.Provider>
    </div>
  );
}

ReactDOM.render(
  <Top />,
  document.querySelector('#target'),
);
