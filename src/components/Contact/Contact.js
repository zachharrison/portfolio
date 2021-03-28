import React from 'react';
import './Contact.css';

const Form = () => {
  return (
    <div id='contact' className='form-container'>
      <form autoComplete='off'>
        <h2>Want to work together?</h2>
        <input
          className='form-group'
          autoComplete='off'
          type='text'
          name='name'
          placeholder='Your name'
        />
        <input
          className='form-group'
          autoComplete='off'
          type='email'
          name='email'
          placeholder='Your email'
        />
        <textarea
          className='form-group'
          placeholder='Enter your message here...'
          autoComplete='off'
          name='message'
          id='message'
          cols='30'
          rows='10'
        />
        <button className='form-btn'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
