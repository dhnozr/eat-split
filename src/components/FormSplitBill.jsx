import React from 'react';

const FormSplitBill = () => {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with X</h2>

      <label htmlFor='bill-value'>💰Bill value</label>
      <input id='bill-value' type='text' />

      <label htmlFor='your-expense'>🧑🏻Your expense</label>
      <input id='your-expense' type='text' />

      <label htmlFor='friend-expense'>🧑🏻‍🦰X's expense</label>
      <input id='friend-expense' type='text' disabled />

      <label htmlFor='who-pays'>👻Who is paying the bill?</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>X</option>
      </select>
    </form>
  );
};

export default FormSplitBill;
