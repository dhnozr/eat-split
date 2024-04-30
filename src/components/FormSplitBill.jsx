import React, { useState } from 'react';
import Button from './Button';

const FormSplitBill = ({ selectedFriend, handleSplitBill }) => {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const handleSubmit = e => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    handleSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  };

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor='bill-value'>💰Bill value</label>
      <input id='bill-value' type='text' value={bill} onChange={e => setBill(Number(e.target.value))} />

      <label htmlFor='your-expense'>🧑🏻Your expense</label>
      <input
        id='your-expense'
        type='text'
        value={paidByUser}
        onChange={e => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}
      />

      <label htmlFor='friend-expense'>🧑🏻‍🦰{selectedFriend.name}'s expense</label>
      <input id='friend-expense' type='text' value={paidByFriend} disabled />

      <label htmlFor='who-pays'>👻Who is paying the bill?</label>
      <select value={whoIsPaying} onChange={e => setWhoIsPaying(e.target.value)}>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
