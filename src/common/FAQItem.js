import React, { Component } from 'react';


const FAQItem = props => {
  return (
    <div style={{ paddingBottom: '5px' }}>
      <input checked={ props.checked } type='checkbox' id={props.id} name='q' className='questions' />

      <div className='plus'>
        <i className='fas fa-angle-double-right' style={{ color: props.iconColor }} />
      </div>
      <label for={props.id} className='question'>
        {props.question}
      </label>
      <div className='answers'>
        <span>{props.answer}</span>
      </div>
    </div>
  )
}

export default FAQItem;
