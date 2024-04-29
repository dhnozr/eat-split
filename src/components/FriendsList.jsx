import React from 'react';

const FriendsList = ({ children }) => {
  return <ul>{children}</ul>;
};

export default FriendsList;

// tek friend renderlemak icin
export const Friend = ({ friend }) => {
  return (
    <>
      {friend.map(friend => (
        <li key={friend.id}>
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name}</h3>

          {friend.balance < 0 ? (
            <p className='red'>
              You owe {friend.name} ${Math.abs(friend.balance)}
            </p>
          ) : friend.balance > 0 ? (
            <p className='green'>
              {friend.name} owe you ${friend.balance}
            </p>
          ) : (
            <p>You and {friend.name} are even</p>
          )}
          <button className='button'>Select</button>
        </li>
      ))}
    </>
  );
};
