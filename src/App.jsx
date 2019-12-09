import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import User from './components/User';
import { StyledWidget as Div } from './styled';
import countContext from './contexts/countContext';

// STEP 1 - CREATE A CONTEXT FILE countContext (contexts folder)
// STEP 2 - BRING THE CONTEXT INTO THE PARENT COMPONENT
// STEP 3 - USE THE countContext to WRAP THE DESCENDANTS

const initialCount = { number: 0 }; // object, not integer!
const initialUserData = {
  users: [
    { id: '1', name: 'Emma' },
    { id: '2', name: 'Andre' },
    { id: '3', name: 'Evans' },
  ],
  favUserId: '1',
};

function Top() {
  // slice of state 1
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count => ({ number: count.number + 1 }));
  // slice of state 2
  const [userData, setUserData] = useState(initialUserData);
  const setFavUser = id => () => setUserData(userData => ({ ...userData, favUserId: id }));
  // info derived from state
  const favUser = userData.users.find(usr => usr.id === userData.favUserId);

  return (
    <Div color='grey'>
      <div>
        This is the <span className='bold'>Top</span>&nbsp;
        level component. The current count is&nbsp;
        <span className='bold'>{count.number}</span>&nbsp;
        and my favorite user is <span className='bold'>{favUser.name}</span>
      </div>

      <button onClick={increment}>increment count</button><br />

      {
        userData.users.map(user => (
          <button key={user.id} onClick={setFavUser(user.id)}>fav {user.name}</button>
        ))
      }

      <countContext.Provider value={{ ...count, lady: 'gaga', increment }}>
        {/* the 'value' prop is whatever we want context to be */}
        {/* anything inside the provider can be aware of the context */}
        <Counter />
      </countContext.Provider>
      <User user={favUser} />
    </Div>
  );
}

ReactDOM.render(<Top />, document.querySelector('#target'));
