import React from 'react';

const IconItem = props => {
  return (
    <li style={ props.liStyle }>
      <i className='fas fa-caret-right inline-icon' style={{ color: props.iconColor }} />
      { props.text }
    </li>
  )
}

export default IconItem;
