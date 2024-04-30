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
  const [friends, setFriends] = useState(initialFriends);

  // selecting friend to send billsplit form
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend(prev => !prev);
  };

  const handleAddFriend = newFriend => {
    setFriends(prev => [...prev, newFriend]);
    setShowAddFriend(false);
  };

  const handleSelectedFriend = friend => {
    setSelectedFriend(selected => (selected?.id === friend.id ? null : friend));
    // close the form when user click the select button
    setShowAddFriend(false);
  };

  const handleSplitBill = value => {
    setFriends(prev => prev.map(friend => (friend.id === selectedFriend.id ? { ...friend, balance: value } : friend)));
    setSelectedFriend(null);
  };

  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendsList>
            {friends.map(item => (
              <Friend
                friend={item}
                key={item.id}
                handleSelectedFriend={handleSelectedFriend}
                selectedFriend={selectedFriend}
              />
            ))}
          </FriendsList>
          {showAddFriend && <AddFriendForm handleAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
        </div>
        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} handleSplitBill={handleSplitBill} />}
      </div>
    </>
  );
}

export default App;
