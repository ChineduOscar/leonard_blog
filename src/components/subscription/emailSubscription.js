'use client';
import { useState } from 'react';
import React from 'react';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url =
      'https://gmail.us21.list-manage.com/subscribe/post?u=2f93f71036b1905acf02e250a&amp;id=bf9eebe87b&amp;f_id=0046b2e1f0';

    // Validate email
    if (!email) {
      setError('Email required');
      return;
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      setError('Invalid email address');
      return;
    }

    // Send the post request
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          EMAIL: email,
        }).toString(),
      });

      // Handle the response
      if (response.status === 200) {
        setSuccess('Successfully sent');
        setError('');
        setEmail('');
      } else {
        setError('Something went wrong');
      }
    } catch (error) {
      setError('Something went wrong');
    }
  };
  return (
    <form
      className='subscribe'
      onSubmit={handleSubmit}
      id='mc-embedded-subscribe-form'
      name='mc-embedded-subscribe-form'
      noValidate
    >
      <h2 className='subscribe_title'>Let's Keep in Touch</h2>
      <div className='form'>
        <input
          type='email'
          className='form_email'
          placeholder='Enter your email address'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name='EMAIL'
          required
        />
        <input
          type='submit'
          value='Send'
          name='send'
          id='mc-embedded-subscribe'
        />
        <div className='error'>{error}</div>
        <div className='success'>{success}</div>
      </div>
    </form>
  );
};

export default EmailSubscription;
