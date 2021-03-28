import React from 'react';
import './Contact.css';

const Form = () => {
  return (
    <div id='contact' className='form-container'>
      <form autoComplete='off'>
        <h2>Want to work together?</h2>
        <input
          autoComplete='off'
          type='text'
          name='name'
          placeholder='Your name'
        />
        <input
          autoComplete='off'
          type='email'
          name='email'
          placeholder='Your email'
        />
        <textarea
          placeholder='Enter your message here...'
          autoComplete='off'
          name='message'
          id='message'
          cols='30'
          rows='10'
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
