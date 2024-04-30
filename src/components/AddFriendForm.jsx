import React, { useState } from 'react';
import Button from './Button';

const AddFriendForm = ({ handleAddFriend }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  const handleSubmit = e => {
    e.preventDefault();
    const userId = crypto.randomUUID();

    if (!name || !image) return;

    const newFriend = {
      name,
      image: `${image}?u=${userId}`,
      balance: 0,
      id: userId,
    };

    handleAddFriend(newFriend);
    setName('');
    setImage('https://i.pravatar.cc/48');
  };

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label htmlFor='friend-name'>🧙🏻‍♂️Friend Name</label>
      <input value={name} onChange={e => setName(e.target.value)} id='friend-name' type='text' />

      <label htmlFor='image'>🎇Image Url</label>
      <input value={image} onChange={e => setImage(e.target.value)} id='image' type='text' />

      <Button>Add</Button>
    </form>
  );
};

export default AddFriendForm;
