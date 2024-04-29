import { useState } from 'react';

import './App.css';
import FriendsList, { Friend } from './components/FriendsList';

const initialFriends = [
  {
    id: crypto.randomUUID(),
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: crypto.randomUUID(),
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    // balance pozitifse friend bize borclu degilse biz borcluyuz
    balance: 20,
  },
  {
    id: crypto.randomUUID(),
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function App() {
  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendsList>
            <Friend friend={initialFriends} />
          </FriendsList>
        </div>
      </div>
    </>
  );
}

export default App;
