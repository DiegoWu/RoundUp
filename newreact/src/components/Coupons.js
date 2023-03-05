import React, { useState } from 'react';

function CouponForm() {
  const [host, setHost] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [expTime, setExpTime] = useState('');
  const [minAmount, setMinAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to submit the form to a backend API
    console.log({
      host,
      title,
      description,
      startTime,
      expTime,
      minAmount,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="host">Host:</label>
        <input
          type="text"
          id="host"
          value={host}
          onChange={(e) => setHost(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="date"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="expTime">Expiration Time:</label>
        <input
          type="date"
          id="expTime"
          value={expTime}
          onChange={(e) => setExpTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="minAmount">Minimum Amount:</label>
        <input
          type="number"
          id="minAmount"
          value={minAmount}
          onChange={(e) => setMinAmount(e.target.value)}
        />
      </div>
      <button type="submit">Create Coupon</button>
    </form>
  );
}

export default CouponForm;
