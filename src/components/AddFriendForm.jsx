import React from 'react';
import Button from './Button';

const AddFriendForm = () => {
  return (
    <form className='form-add-friend'>
      <label htmlFor='friend-name'>🧙🏻‍♂️Friend Name</label>
      <input id='friend-name' type='text' />

      <label htmlFor='image'>🎇Image Url</label>
      <input id='image' type='text' />

      <Button>Add</Button>
    </form>
  );
};

export default AddFriendForm;
