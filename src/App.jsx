import { useState } from 'react';

import './App.css';
import FriendsList, { Friend } from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';

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
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () => {
    setShowAddFriend(prev => !prev);
  };
  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendsList>
            <Friend friend={initialFriends} />
          </FriendsList>
          {showAddFriend && <AddFriendForm />}
          <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

export default App;
