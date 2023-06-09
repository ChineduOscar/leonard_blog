'use client';
import { useState } from 'react';
import React from 'react';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const url =
      'https://gmail.us21.list-manage.com/subscribe/post?u=2f93f71036b1905acf02e250a&amp;id=bf9eebe87b&amp;f_id=0046b2e1f0';

    // Add your own validation before submitting the form
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        EMAIL: email,
      }).toString(),
    })
      .then(() => {
        alert('Thanks for subscribing');
      })
      .catch(() => {
        alert('An error occurred while submitting the form.');
      });

    setEmail('');
  };

  return (
    <div>
      <div id='mc_embed_signup'>
        <form
          onSubmit={handleSubmit}
          id='mc-embedded-subscribe-form'
          name='mc-embedded-subscribe-form'
          className='validate'
          noValidate
        >
          <div id='mc_embed_signup_scroll'>
            <h2 className='subscribe-title'>Subscribe to our newletter</h2>

            <div className='align'>
              <label className='label' htmlFor='mce-EMAIL'>
                Email Address:{' '}
              </label>
              <div className='mc-field-group' id='subscribe-section'>
                <input
                  type='email'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name='EMAIL'
                  className='required email'
                  id='mce-EMAIL'
                  required
                />
                <span id='mce-EMAIL-HELPERTEXT' className='helper_text'></span>
              </div>
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden='true'
              >
                <input
                  type='text'
                  name='b_2f93f71036b1905acf02e250a_bf9eebe87b'
                  tabIndex='-1'
                  defaultValue=''
                />
              </div>
              <div id='mce-responses' className='clear foot'>
                <div
                  className='response'
                  id='mce-error-response'
                  style={{ display: 'none' }}
                ></div>
                <div
                  className='response'
                  id='mce-success-response'
                  style={{ display: 'none' }}
                ></div>
              </div>
              <span className='optionalParent'>
                <span className='clear foot'>
                  <input
                    type='submit'
                    value='Subscribe'
                    name='subscribe'
                    id='mc-embedded-subscribe'
                    className='button'
                  />
                </span>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailSubscription;
