import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import countContext from './contexts/countContext';
import { StyledWidget } from './styled';

const initialCount = { number: 0 };
const initialUserData = {
  users: [
    { id: '1', name: 'Pere' },
    { id: '2', name: 'Megan' },
    { id: '3', name: 'James' },
  ],
  favUser: '1',
};

function Top() {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount({ number: count.number + 1 });

  const [userData, setUserData] = useState(initialUserData);
  const setFavUser = id => () => setUserData({ ...userData, favUser: id });

  return (
    <StyledWidget color='grey'>
      <div>
        This is the top level component. The current count is {count.number}&nbsp;
        and my favorite user is {userData.users.find(usr => usr.id === userData.favUser).name}
      </div>

      <button onClick={increment}>increment count</button><br />
      <button onClick={setFavUser('1')}>fav Pere</button>
      <button onClick={setFavUser('2')}>fav Megan</button>
      <button onClick={setFavUser('3')}>fav James</button>

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
