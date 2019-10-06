import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import User from './components/User';
import { StyledWidget } from './styled';

const initialCount = { number: 0 };
const initialUserData = {
  users: [
    { id: '1', name: 'Pere' },
    { id: '2', name: 'Megan' },
    { id: '3', name: 'James' },
  ],
  favUserId: '1',
};

function Top() {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount({ number: count.number + 1 });

  const [userData, setUserData] = useState(initialUserData);
  const setFavUser = id => () => setUserData({ ...userData, favUserId: id });

  const favUser = userData.users.find(usr => usr.id === userData.favUserId);

  return (
    <StyledWidget color='grey'>
      <div>
        This is the <span className='bold'>Top</span> level component. The current count is&nbsp;
        <span className='bold'>{count.number}</span>&nbsp;
        and my favorite user is <span className='bold'>{favUser.name}</span>
      </div>

      <button onClick={increment}>increment count</button><br />
      <button onClick={setFavUser('1')}>fav Pere</button>
      <button onClick={setFavUser('2')}>fav Megan</button>
      <button onClick={setFavUser('3')}>fav James</button>

      <Counter count={count} />
      <User name={favUser.name} />
    </StyledWidget>
  );
}

ReactDOM.render(
  <Top />,
  document.querySelector('#target'),
);
