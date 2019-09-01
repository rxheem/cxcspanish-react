import React from 'react';

const DoubleIconItem = props => {
  return (
    <li style={ props.liStyle }>
      <i className='fas fa-angle-double-right inline-icon' style={{ color: props.iconColor }} />
      { props.text }
    </li>
  )
}

export default DoubleIconItem;
